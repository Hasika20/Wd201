const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("./connectDB");

class Todo extends Model {
  static async addTask(params) {
    return await Todo.create(params);
  }

  displayableString() {
    return `${this.completed ? "[x]" : "[ ]"} ${this.id}. ${this.title} - ${this.dueDate}`;
  }
}

Todo.init(
  {
    //attributes defined
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dueDate: {
      type: DataTypes.DATEONLY,
    },
    completed: DataTypes.BOOLEAN,
  },
  {
    sequelize,
  },
);

module.exports = Todo;

Todo.sync(); //create the table
