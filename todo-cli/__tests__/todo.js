const todoList = require("../todo");

const { all, markAsComplete, add, overdue, dueToday, dueLater } = todoList();

describe("Todolist test Suite", () => {
  beforeAll(() => {
    add({
      title: "Test todo",
      completed: false,
      duedate: new Date().toISOString().slice(0, 10),
    });
  });
  test("Should add new todo", () => {
    const todoItemsCount = all.length;
    add({
      title: "Test todo",
      completed: false,
      duedate: new Date().toISOString().slice(0, 10),
    });
    expect(all.length).toBe(todoItemsCount + 1);
  });

  test("mark as complete", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });

  test("retireve overdue items", () => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    add({
      title: "overdue",
      completed: false,
      dueDate: yesterday.toISOString().slice(0, 10),
    });
    expect(overdue().length).toBe(1);
  });

  test("retireve duetoday items", () => {
    const today = new Date();
    add({
      title: "duetoday",
      completed: false,
      dueDate: today.toISOString().slice(0, 10),
    });
    expect(dueToday().length).toBe(1);
  });

  test("retireve duelater items", () => {
    const tmrw = new Date();
    tmrw.setDate(tmrw.getDate() + 1);
    add({
      title: "duelater",
      completed: false,
      dueDate: tmrw.toISOString().slice(0, 10),
    });
    expect(dueLater().length).toBe(1);
  });
});
