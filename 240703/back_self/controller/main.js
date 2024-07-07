import { Todo } from "../models/index.js";

export default async (req, res) => {
  try {
    const main = await Todo.findAll({
      where: { deletedAt: null },
      attributes: [
        "id",
        "content",
        "priority",
        "limit",
        "is_complete",
        "created_at",
      ],
    });
    res.json([main]);
  } catch (err) {
    console.log(err);
    res.send("error");
  }
};
