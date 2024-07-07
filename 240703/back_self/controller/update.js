import { Todo } from "../models/index.js";

export default async (req, res) => {
  try {
    const remove = await Todo.update(
      { where: { id: req.body.id } },
      {
        content: req.body.content,
        priority: req.body.priority,
        limit: req.body.limit,
        updatedAt: Date.now(),
      }
    );
    res.json();
  } catch (err) {
    console.log(err);
    res.send("error");
  }
};
