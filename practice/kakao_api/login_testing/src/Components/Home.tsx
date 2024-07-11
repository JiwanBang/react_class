const Login = () => {
  const client_id = `${process.env.REACT_APP_KAKAO_API}`;
  console.log(client_id);
  return (
    <button
      onClick={() =>
        // eslint-disable-next-line no-restricted-globals
        (location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${client_id}&redirect_uri=http://localhost:3000/login&response_type=code`)
      }
    >
      카카오톡 로그인as
    </button>
  );
};

export default Login;
