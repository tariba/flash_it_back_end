import express, { application } from "express";
import dns from 'dns';
import { createTableSubjects, createTableQuestions } from "./db/functions.js";
import router from "./routes/routes.js";
import cors from "cors";

dns.setDefaultResultOrder('ipv4first')
const App = express();

// Cors middleware
App.use(cors());

const PORT = process.env.PORT || 10000;
console.log(PORT);

// App.use(json.parse());
App.use("/questions", router);

const DATABASE_URL = process.env.URL_POSTGRES;

App.listen(PORT, () => {
  console.log("I'm Listening");
});

export default App;
