import { Todo } from "../models/index.js";

export default async (req, res) => {
  try {
    console.log(req.body);
    const add = await Todo.create({ ...req.body, content, limit, priority });
    res.json({ uploaded: true });
  } catch (err) {
    console.log(err);
    res.send("error");
  }
};
