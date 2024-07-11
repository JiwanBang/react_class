import axios from "axios";
import { useEffect } from "react";

const KakaoCallback = () => {
  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get("code");
    // const params = new URL(document.location.toString()).searchParams;
    // const code = params.get("code");
    const grant_type = "authorization_code";
    const client_id = `${process.env.REACT_APP_KAKAO_API}`;
    const REDIRECT_URI = "http://localhost:3000/login";

    axios
      .post(
        `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${client_id}&redirect_uri=${REDIRECT_URI}&code=${code}`,
        {},

        {
          headers: {
            "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
          },
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return <></>;
};

export default KakaoCallback;
