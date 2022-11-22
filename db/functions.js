import {pool} from "./index.js";
import { questions, subject } from "./data.js";

export async function createTableQuestions () {
    await pool.query("CREATE TABLE questions (id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY, question text NOT NULL, answer text NOT NULL)")
    
}

// try {
    
// } catch (err) {
//     console.log(err)
// } finally {
//     await pool.end();
// }

export async function createTableSubjects () {
    await pool.query("CREATE TABLE subjects ( id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY, question_id INT REFERENCES questions(id), subject TEXT NOT NULL)")
    
} 

async function seedDataQuestions() {
    return await pool.query("INSERT INTO questions (question, answer) (SELECT question, answer FROM json_populate_recordset(NULL::questions, $1::JSON));", [JSON.stringify(questions)])
}

async function seedDataSubjects() {
    return await pool.query("INSERT INTO subjects (question_id, subject) (SELECT  question_id, subject FROM json_populate_recordset(NULL::subjects, $1::JSON));", [JSON.stringify(subject)])
}


try {
    //console.log (createTableQuestions())
    //console.log (createTableSubjects())
    //console.log(await seedDataQuestions())
    console.log(await seedDataSubjects())
    
} catch (err) {
    console.log(err)
} finally {
    await pool.end();
}

// export async function dropTable() {
//     await pool.query("DROP TABLE questions")
//     try {
//         console.log(dropTable())
//     } catch (err) {
//         console.log(err)
//     } finally {
//         await pool.end();
//     }
// }
// await dropTable();