import express, { application } from "express";
import { createTableSubjects, createTableQuestions } from "./db/functions.js";
import router from "./routes/routes.js";


const App = express();

const PORT = process.env.PORT;
console.log(PORT);

// App.use(json.parse());
App.use("/questions", router);

const DATABASE_URL = process.env.URL;
console.log(DATABASE_URL);

App.listen(PORT, () => {
  console.log("I'm Listening");
});

export default App;
