
const todoList = require("../todo");
let thisday = new Date().toLocaleDateString("en-CA");

const { all, markAsComplete, add, overdue, dueToday, dueLater } = todoList();

describe("Todolist Testing", () => {
  beforeAll(() => {
    add({
      title: "Schedule a meeting",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
  });

  test("Add a new todo in list", () => {
    

    let length = all.length;

    add({
      title: "web development 201",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });

    expect(all.length).toBe(length + 1);
  });

  test("Mark todo as a completed", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });

  test("retrieve all todos that are overdue", () => {
    let listOfTodos = overdue();

    expect(
      listOfTodos.every((todo) => {
        return todo.dueDate < thisday;
      })
    ).toBe(true);
  });

  test("retrieve all todos that are dueToday", () => {
    let listOfTodos = dueToday();

    expect(
      listOfTodos.every((todo) => {
        return todo.dueDate === thisday;
      })
    ).toBe(true);
  });

  test("retrieve all todos that are dueLater", () => {
    let listOfTodos = dueLater();

    expect(
      listOfTodos.every((todo) => {
        return todo.dueDate > thisday;
      })
    ).toBe(true);
  });
});
