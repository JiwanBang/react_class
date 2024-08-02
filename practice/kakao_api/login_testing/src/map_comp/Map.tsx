import { useEffect, useState } from "react";

export {};

declare global {
  interface Window {
    kakao: any;
  }
}

export default function Map() {
  const [map, setMap] = useState<any>();
  const [marker, setMarker] = useState<any>();

  useEffect(() => {
    window.kakao.maps.load(() => {
      const container = document.getElementById("map");
      const option = {
        center: new window.kakao.maps.LatLng(33.450701, 126.570067),
        level: 3,
      };

      setMap(new window.kakao.maps.Map(container, option));
      setMarker(new window.kakao.maps.Marker());
    });
  }, []);

  const getCurrentPosBtn = () => {
    navigator.geolocation.getCurrentPosition(
      getPosSuccess,
      () => alert("위치 정보를 가져오는데 실패했습니다."),
      {
        enableHighAccuracy: true,
        maximumAge: 30000,
        timeout: 27000,
      }
    );
  };

  // 3) 정상적으로 현재위치 가져올 경우 실행
  const getPosSuccess = (pos: GeolocationPosition) => {
    // 현재 위치(위도, 경도) 가져온다.
    var currentPos = new window.kakao.maps.LatLng(
      pos.coords.latitude, // 위도
      pos.coords.longitude // 경도
    );
    // 지도를 이동 시킨다.
    map.panTo(currentPos);

    // 기존 마커를 제거하고 새로운 마커를 넣는다.
    marker.setMap(null);
    marker.setPosition(currentPos);
    marker.setMap(map);
  };

  return (
    <div>
      <button onClick={getCurrentPosBtn}>현재 위치</button>
      <div id="map" style={{ width: "400px", height: "400px" }}></div>
    </div>
  );
}