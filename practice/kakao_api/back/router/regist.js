import { Apitest } from "../models/index.js";

export default async (req, res) => {
  try {
    console.log("왜안됌!!!!!");

    console.log(req.body);
    const regist = await Apitest.create({
      user_id: req.body.user_id,
      password: req.body.password,
      //   location: req.body.location,
    });
    res.json({ pop: "회원가입 완료" });
    // location.href = "http://localhost:8080/";
  } catch (err) {
    console.error(err);
  }
};
