import express from "express";
import {createTableSubjects, createTableQuestions} from "./db/functions.js"
const PORT = process.env.PORT;
console.log(PORT)

const DATABASE_URL=process.env.URL;
console.log(DATABASE_URL);

const App = express();
App.listen(PORT, () => {
  console.log("I'm Listening");
});
