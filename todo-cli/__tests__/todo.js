const todoList = require('../todo'); 

const {all, markAsComplete, add} = todoList();

describe("Todolist test Suite", () => {
    beforeAll(() => {
        add({
            title: "Test todo",
            completed: false, 
            duedate: new Date().toISOString().slice(0, 10)
        });
    })
    test("Should add new todo", () => {
        const todoItemsCount = all.length;
        add({
            title: "Test todo",
            completed: false, 
            duedate: new Date().toISOString().slice(0, 10)
        });
        expect(all.length).toEqual(todoItemsCount + 1);
    });

    test("mark as complete", () => {
        expect(all[0].completed).toBe(false);
        all[0].completed = true;
        expect(all[0].completed).toBe(true);
    })
})

