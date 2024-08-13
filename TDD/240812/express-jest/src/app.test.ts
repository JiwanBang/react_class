import request from "supertest";
import { config } from "dotenv";
import app from "./app";

config();

describe("Test Express App", () => {
  test("Get / return AWS's Menbers", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.text).toBe("NOW TESTING");
  });
});
