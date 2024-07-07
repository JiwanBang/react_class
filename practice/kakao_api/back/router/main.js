import { Apitest } from "../models/index.js";

export default async (req, res) => {
  try {
    const main = await Apitest.findAll({
      where: { deletedAt: null },
      attributes: ["id", "user_id", "password", "location", "created_at"],
    });
    res.json([main]);
  } catch (err) {
    console.error(err);
  }
};
