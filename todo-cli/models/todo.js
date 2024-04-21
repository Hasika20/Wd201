// models/todo.js
"use strict";
const { Model, Sequelize } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static async addTask(params) {
      return await Todo.create(params);
    }
    static async showList() {
      console.log("My Todo list \n");

      console.log("Overdue");
      // FILL IN HERE
      const over_task = await Todo.overdue();
      over_task.map((item) => console.log(item.displayableString()));
      console.log("\n");

      console.log("Due Today");
      // FILL IN HERE
      const today_task = await Todo.dueToday();
      today_task.map((item) => console.log(item.displayableString()));
      console.log("\n");

      console.log("Due Later");
      // FILL IN HERE
      const later_task = await Todo.dueLater();
      later_task.map((item) => console.log(item.displayableString()));
    }

    static async overdue() {
      // FILL IN HERE TO RETURN OVERDUE ITEMS
      return await Todo.findAll({
        where: {
          dueDate: {
            [Sequelize.Op.lt]: new Date(),
          },
        },
      });
    }

    static async dueToday() {
      // FILL IN HERE TO RETURN ITEMS DUE tODAY
      return await Todo.findAll({
        where: {
          dueDate: {
            [Sequelize.Op.sq]: new Date(),
          },
          completed: false,
        },
      });
    }

    static async dueLater() {
      // FILL IN HERE TO RETURN ITEMS DUE LATER
      return await Todo.findAll({
        where: {
          dueDate: {
            [Sequelize.Op.gt]: new Date(),
          },
          completed: false,
        },
      });
    }

    static async markAsComplete(id) {
      // FILL IN HERE TO MARK AN ITEM AS COMPLETE
      const todo = await Todo.findByPk(id);
      if (todo) {
        (todo.completed = true), await todo.save();
      }
    }

    displayableString() {
      let checkbox = this.completed ? "[x]" : "[ ]";
      if (!(this.dueDate === new Date().toISOString().slice(0, 10))) {
        return `${this.id}. ${checkbox} ${this.title} ${this.dueDate}`;
      }
      return `${this.id}. ${checkbox} ${this.title}`;
    }
  }
  Todo.init(
    {
      title: DataTypes.STRING,
      dueDate: DataTypes.DATEONLY,
      completed: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Todo",
    },
  );
  return Todo;
};
