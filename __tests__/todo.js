
/* eslint-disable no-const-assign */
/* eslint-disable no-undef */
const todoList = require("../todo");

const { all, markAsComplete, add, overdue, dueToday, dueLater } = todoList();

describe("TodoList test suite", () => {
  beforeAll(() => {
    add({
      title: "Test todo 1",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
  });

  test("should add new todo", () => {
    const todoItemCount = all.length;
    add({
      title: "Test todo 1",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
    expect(all.length).toBe(todoItemCount + 1);
  });

  test("should mark a todo as complete", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });

  test("should retrieve OverDue items", () => {
    const records = overdue().length;
    add({
      title: "Test todo 2",
      completed: false,
      dueDate: new Date(new Date().setDate(new Date().getDate() - 1))
        .toISOString()
        .split("T")[0],
    });
    expect(overdue().length).toBe(records + 1);
  });

  test("should retrieve due today items", () => {
    const records = dueToday().length;
    add({
      title: "Test todo 2",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
    expect(dueToday().length).toBe(records + 1);
  });

  test("should retrieve due later items", () => {
    const records = dueLater().length;
    add({
      title: "Test todo 2",
      completed: false,
      dueDate: new Date(new Date().setDate(new Date().getDate() + 1))
        .toISOString()
        .split("T")[0],
    });
    expect(dueLater().length).toBe(records + 1);
  });
});
