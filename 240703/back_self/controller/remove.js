import { Todo } from "../models/index.js";

export default async (req, res) => {
  try {
    const remove = await Todo.update(
      { deletedAt: Todo.now() },
      { where: { id: req.body.id } }
    );
    res.json();
  } catch (err) {
    console.log(err);
    res.send("error");
  }
};
