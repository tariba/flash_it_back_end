import supertest from "supertest";
import { test, expect } from "@jest/globals";
import App from "../App.js";

const request = supertest(App);

test("GET Questions", async function () {
  const response = await request.get("/questions");
  expect(response.status).toEqual(200);
  expect(response.body).toStrictEqual({
    success: true,
    payload: expect.any(Array),
  });
});
