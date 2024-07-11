import axios from "axios";

const GetToken = async () => {
  try {
    const Token = axios.post(`https://kauth.kakao.com/oauth/token`);
  } catch (err) {
    console.error(err);
  }
};

const LoginRouter = () => {
  return <div></div>;
};

export default LoginRouter;
