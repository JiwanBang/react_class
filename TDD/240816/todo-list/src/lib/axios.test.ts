import MockAdapter from "axios-mock-adapter";
import instance from "./axios";

const mock = new MockAdapter(instance);

describe("test axios", () => {
  test("get /api", async () => {
    const data = "NOW TESTING";
    mock.onGet("/").reply(200, data);

    const response = (await instance.get("/")).data;
    expect(response).toBe(data);
  });
});
