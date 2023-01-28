import express, { application } from "express";
import { createTableSubjects, createTableQuestions } from "./db/functions.js";
import router from "./routes/routes.js";
import cors from "cors";

const App = express();

// Cors middleware
App.use(cors("*"));

const PORT = process.env.PORT;
console.log(PORT);

// App.use(json.parse());
App.use("/questions", router);

const DATABASE_URL = process.env.URL_POSTGRES;

App.listen(PORT, () => {
  console.log("I'm Listening");
});

export default App;
