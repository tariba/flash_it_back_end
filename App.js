import express from "express";

const App = express();
App.listen(3000, () => {
  console.log("I'm Listening");
});
