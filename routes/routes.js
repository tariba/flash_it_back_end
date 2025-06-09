import express from "express";
import { getAllQuestions, getQuestionsById } from "../functions/functions.js";
const router = express.Router();

/*
 * a fn that fetch all data
 */
router.get("/", async function (req, res) {
  try {
  const data = await getAllQuestions();
  res.status(200).json({
    success: true,
    payload: data.rows,
  });
} catch (error) {
  console.error('Error fetching all questions', error);
  res.status(500).json ({
    success: false,
    message: 'Failed to fetch questions',
    error: error.message
  })
}
});

/*
 * a fn that fetch data based on ID (didn't used it)
 */
router.get("/:id", async function (req, res) {
  try {
  const data = await getQuestionsById(req.params.id);
  res.status(200).json({
    success: true,
    payload: data.rows,
  });
} catch (error) {
  console.error(`Error fetching questions with ID ${req.params.id}:`, error );
  res.status(500).json({
    success: false,
    message: 'Failed to fetch question by ID',
    error: error.message,
  })
};
});

export default router;
