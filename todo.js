const todoList = () => {
    all = [];
    const add = (todoItem) => {
      all.push(todoItem);
    };
    const markAsComplete = (index) => {
      all[index].completed = true;
    };
    let thisday = new Date().toISOString().split("T")[0];

  const overdue = () => {
    return all.filter((todo) => {
      return todo.dueDate < thisday;
    });
  };

  const dueToday = () => {
    return all.filter((todo) => {
      return todo.dueDate === thisday;
    });
  };

  const dueLater = () => {
    return all.filter((todo) => {
      return todo.dueDate > thisday;
    });
  };

  const toDisplayableList = (list) => {
    return list
      .map((todo) => {
        display_stat = todo.completed ? "[x]" : "[ ]";
        display_date = todo.dueDate == thisday ? "" : todo.dueDate;

        return `${display_stat} ${todo.title} ${display_date}`;
      })
      .join("\n");
  };

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