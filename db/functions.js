import { pool } from "./index.js";
import { questions, subject } from "./data.js";


// console.log(pool.query)
/*
 * a fn that creates question table
 */
export async function createTableQuestions() {
  await pool.query(
    "CREATE TABLE questions (id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY, question text NOT NULL, answer text NOT NULL)"
  );
}

/*
 * a fn that creates subject table
 */
export async function createTableSubjects() {
  await pool.query(
    "CREATE TABLE subjects ( id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY, question_id INT REFERENCES questions(id), subject TEXT NOT NULL)"
  );
}

/*
 * a fn that puts data in Question table from data.js file
 */
async function seedDataQuestions() {
  return await pool.query(
    "INSERT INTO questions (question, answer) (SELECT question, answer FROM json_populate_recordset(NULL::questions, $1::JSON));",
    [JSON.stringify(questions)]
  );
}

/*
 * a fn that puts data in Subject table from data.js file
 */
async function seedDataSubjects() {
  return await pool.query(
    "INSERT INTO subjects (question_id, subject) (SELECT  question_id, subject FROM json_populate_recordset(NULL::subjects, $1::JSON));",
    [JSON.stringify(subject)]
  );
}


/*
 * a fn that deletes the table
 */

export async function dropTable() {
    await pool.query("DROP TABLE questions, subjects")
    try {
        console.log(dropTable())
    } catch (err) {
        console.log(err)
    } finally {
        await pool.end();
    }
}
// await dropTable();
// createTableQuestions()
// createTableSubjects()

// seedDataQuestions()
// seedDataSubjects()