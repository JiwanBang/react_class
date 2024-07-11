import { Apitest } from "../models/index.js";

export default async (req, res) => {
  try {
    console.log("왜안됌!!!!!");

    console.log(req.body);
    const userpw = req.body.password;
    const login = await Apitest.findone({
      where: { user_id: req.body.user_id },
    });
    if (!login) {
      res.json({ error: "유저를 찾을수 없습니다." });
    } else if (req.body.password == login.password) {
      console.log("로그인 성공><");
      req.session.user = login.id;
    } else {
      res.json({ pwerror: "비밀번호가 일치하지 않습니다" });
    }
  } catch (err) {
    console.error(err);
  }
};
