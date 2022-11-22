import express from "express";
import { pool } from "../db/index.js";

export async function getAllQuestions() {
  return await pool.query(
    "Select * FROM questions INNER JOIN subjects ON questions.id = subjects.question_id;"
  );
}

export async function getQuestionsById(id) {
    return await pool.query(
        `SELECT * FROM questions INNER JOIN subjects on questions.id = subjects.question_id WHERE questions.id = ${id};`
    )
    
}
