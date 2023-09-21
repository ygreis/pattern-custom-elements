class TodoList {

  static getStorage() {
    const todoList = JSON.parse(localStorage.getItem('todo-list'));
    return todoList || [];
  }

  static #setStorage(todoList) {
    
    localStorage.setItem('todo-list', JSON.stringify(todoList));

    setState('tableItems', todoList);

    return todoList;
  }

  static #setData(item) {
    let todoList = TodoList.getStorage();
    todoList.push({
      ...item,
      id: todoList.length + 1
    });

    return TodoList.#setStorage(todoList);
  }
  
  static updateItem(id, item) {

    let todoList = TodoList.getStorage();

    let newTodoList = todoList.map((listItem) => {
      if(listItem.id == id){
        return {
          ...listItem,
          ...item
        };
      }
      return listItem;
    });

    TodoList.#setStorage(newTodoList);

  }

  static add(value) {

    TodoList.#setData({ value });

  }

  static edit(id, value) {

    TodoList.#setData(id, { value });

  }

  static delete(id) {
    
    let todoList = TodoList.getStorage();

    const newtodoList = todoList.filter(todoItem => todoItem.id != id);

    TodoList.#setStorage(newtodoList);

  }

  static check(id) {
    
    TodoList.updateItem(id, {
      check: true,
    });

  }

  static uncheck(id) {
    
    TodoList.updateItem(id, {
      check: false,
    });

  }

}