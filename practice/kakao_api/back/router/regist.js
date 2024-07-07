import { Apitest } from "../models/index.js";

export default async (req, res) => {
  try {
    console.log(req.body);
    const regist = await Apitest.create({
      user_id: req.body.user_id,
      password: req.body.password,
      location: req.body.location,
    });
    res.json();
  } catch (err) {
    console.error(err);
  }
};
