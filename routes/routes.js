import express from "express";
import { getAllQuestions, getQuestionsById } from "../functions/functions.js";
const router = express.Router();

router.get("/", async function (req, res) {
  const data = await getAllQuestions();
  res.status(200).json({
    success: true,
    payload: data.rows,
  });
});

router.get("/:id", async function (req, res) {
  const data = await getQuestionsById(req.params.id);
  res.status(200).json({
    success: true,
    payload: data.rows,
  });
});

export default router;
