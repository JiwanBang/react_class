import request from "supertest";
import express, { Express } from "express";
import router from "./todo";
import { Sequelize } from "sequelize-typescript";
import { config } from "dotenv";
import { deleteTodo, getList, updateTodo } from "../services/todo";
import Todo from "../models/Todo";

config();

// jest.mock("../models/Todo")
jest.mock("sequelize-typescript", () => {
  const actual = jest.requireActual("sequelize-typescript");
  return {
    ...actual,

    // actual => 모킹 할 라이브러리나 모듈 그 자체
    Sequelize: jest.fn(() => ({
      sync: jest.fn(),
    })),
    // 콜백: Sequelize라는 method를 인스턴스 객체 안에다 새로 넣어줌
    // 이후 Model class 안에 내가 사용할 요소만 mocking함
    Model: class MockModel extends actual.Model {
      static create = jest.fn();
      static findByPk = jest.fn();
      static findAll = jest.fn();

      // constructor(...args: any[]) {
      //   super(args);
      //   this.save = jest.fn();
      //   this.destroy = jest.fn();
      // }
    },
  };
});
// jest.mock("../services/todo", () => ({
//   add: jest.fn().mockReturnValue(1),
//   //mockReturnValue => 해당하는 value를 배출하는 모조 함수
//   getList: jest.fn().mockResolvedValue(1).mockRejectedValue(2),
//   // 성공/실패 결과 함수
//   updateTodo: jest.fn((num: number) => {
//     if (num === 1) return "one";
//     if (num === 2) return "two";
//     if (num > 2) return "much";
//   }),
//   deleteTod: jest.fn().mockReturnValue([]),
// }));

describe("Test Todo", () => {
  let app: Express;
  let todoInstance: Todo;
  beforeEach(() => {
    app = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use("/todo", router);

    todoInstance = {
      id: 1,
      title: "test todo list",
      isCompleted: false,
      save: jest.fn(),
      destroy: jest.fn(),
    } as unknown as Todo;
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  // 각 테스트가 끝날 때 마다 mock 초기화

  test("Test Mock", async () => {
    const mockFunc = jest.fn().mockReturnValue("hi?");
    expect(mockFunc()).toBe("hi?");
    const sequelize = new Sequelize({
      dialect: "mysql",
      host: process.env.MYSQL_HOST,
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      port: 3334,
    });
    await sequelize.sync();
  });

  test("Test Add Todo Item", async () => {
    (Todo.create as jest.Mock).mockResolvedValue(todoInstance);
    const response = await request(app)
      // request 는 app을 받음
      .post("/todo")
      .send({ title: "test todo list" });
    expect(response.status).toBe(201);
    expect(response.body).toEqual({
      id: 1,
      title: "test todo list",
      isCompleted: false,
    });
  });

  // test("Test Failed Add Todo Item", async () => {
  //   const response = await request(app).post("/todo").send({});
  //   expect(response.status).toBe(400);
  //   expect(response.body).toEqual({ errorMsg: "plz input title" });
  // });

  test("Test Get Todo Item", async () => {
    (Todo.findAll as jest.Mock).mockResolvedValue([todoInstance]);

    const response = await request(app).get("/todo");
    expect(response.status).toBe(200);
    expect(response.body).toEqual([
      {
        id: 1,
        title: "test todo list",
        isCompleted: false,
      },
    ]);
  });

  test("Test Update Todo Item", async () => {
    (Todo.findByPk as jest.Mock).mockResolvedValue(todoInstance);

    const response = await request(app)
      .patch("/todo")
      .send({ id: 1, isCompleted: true });
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      id: 1,
      title: "test todo list",
      isCompleted: true,
    });
  });

  test("Test Delete Todo Item", async () => {
    (Todo.findByPk as jest.Mock).mockResolvedValue(todoInstance);
    (Todo.findAll as jest.Mock).mockResolvedValue([]);

    const response = await request(app).delete("/todo/1");
    expect(response.status).toBe(200);
    expect(response.body).toEqual([]);
  });

  test("Test Add Todo Items", async () => {
    (Todo.findAll as jest.Mock).mockResolvedValue([
      {
        id: 2,
        title: "test todo list",
        isCompleted: false,
      },
      {
        id: 3,
        title: "test todo list",
        isCompleted: false,
      },
    ]);

    await request(app).post("/todo").send({ title: "test todo list" });
    await request(app).post("/todo").send({ title: "test todo list" });

    const response = await request(app).get("/todo");
    console.log(response.body);
    expect(response.status).toBe(200);
    expect(response.body).toEqual([
      {
        id: 2,
        title: "test todo list",
        isCompleted: false,
      },
      {
        id: 3,
        title: "test todo list",
        isCompleted: false,
      },
    ]);
  });
});
