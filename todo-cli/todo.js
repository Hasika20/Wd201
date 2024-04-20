const todoList = () => {
    const all = [];
  
    const add = (todoItem) => {
      all.push(todoItem);
    };
  
    const markAsComplete = (index) => {
      all[index].completed = true;
    };
  
    const overdue = () => {
      const today = new Date().toISOString().split("T")[0];
      return all.filter((item) => item.dueDate < today);
    };
  
    const dueToday = () => {
      const today = new Date().toISOString().split("T")[0];
      return all.filter((item) => item.dueDate === today);
    };
  
    const dueLater = () => {
      const today = new Date().toISOString().split("T")[0];
      return all.filter((item) => item.dueDate > today);
    };
  
    const toDisplayableList = (list) => list.map((item) => {
        const today = new Date().getDate()
        const date = new Date(item.dueDate);
        const formattedDate = date.toISOString().split("T")[0];
        const completion = item.completed ? "[x]" : "[ ]";
        return `${completion} ${item.title}${date.getDate() === today ? "" : ` ${formattedDate}`}`;
      }).join("\n");
  
    return {
      all,
      add,
      markAsComplete,
      overdue,
      dueToday,
      dueLater,
      toDisplayableList,
    };
  };
module.exports = todoList;