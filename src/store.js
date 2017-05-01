import mobx, { extendObservable, computed } from 'mobx';

class ObservableTodoStore {
  constructor() {
    mobx.autorun(() => console.log(this.report));
    extendObservable(this, {
      todo: '',
      todos: [
        {
          key: Math.floor(Math.random() * 100000),
          task: '学习react',
          completed: false,
        },
        {
          key: Math.floor(Math.random() * 100000),
          task: '学习mobx',
          completed: false,
        },
      ],
      filter: 'all',
      completedTodosCount: computed(
        () => this.todos.filter(todo => todo.completed).length
      ),
    });
  }

  changeTodo(e) {
    this.todo = e.target.value;
  }

  addTodo(task) {
    this.todos.push({
      key: Math.floor(Math.random() * 100000),
      task: this.todo,
      completed: false,
    });
    this.todo = '';
  }

  deleteTodo(key) {
    this.todos = this.todos.filter(x => x.key !== key);
  }

  clearCompleted() {
    this.todos = this.todos.filter(x => !x.completed);
  }
}

const observableTodoStore = new ObservableTodoStore();
export default observableTodoStore;
