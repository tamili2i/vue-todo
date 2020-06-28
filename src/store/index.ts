import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todoList: [
      {
        title: "Title One",
        description: "Description One",
        status: 0,
        id: 1,
      },
      {
        title: "Title Two",
        description: "Description Two",
        status: 1,
        id: 2,
      },
    ],
    title: "",
    description: "",
    id: 0,
    status: 0,
  },
  mutations: {
    updateTitle(state, title) {
      state.title = title;
    },
    updateDescription(state, description) {
      state.description = description;
    },
    updateStatus(state, status) {
      state.status = status;
    },
    createTodo(state, todo) {
      todo.id = state.todoList.length + 1;
      todo.status = 0;
      state.todoList.push(todo);
    },
    updateTodo(state, todo) {
      console.log(todo);
      const elementsIndex = state.todoList.findIndex(
        (element) => element.id == todo.id
      );
      const newArray = [...state.todoList];
      newArray[elementsIndex] = todo;
      state.todoList = newArray;
    },
    resetTodo(state) {
      state.title = "";
      state.description = "";
      state.id = 0;
      state.status = 0;
    },
    getTodo(state, id) {
      const todo: any = state.todoList.filter((todo) => todo.id == id);
      state.title = todo[0].title;
      state.description = todo[0].description;
      state.status = todo[0].status;
      state.id = todo[0].id;
    },
  },
  actions: {
    createOrUpdate({ commit }: any, { todo, callback }: any) {
      if (!todo.id) {
        commit("createTodo", todo);
      } else {
        commit("updateTodo", todo);
      }
      if (callback) {
        callback();
      }
    },
    resetTodo({ commit }: any) {
      commit("resetTodo");
    },
    getTodo({ commit }: any, id: number) {
      commit("getTodo", id);
    },
  },
  getters: {
    todos(state: any) {
      return state.todoList;
    },
    title(state: any) {
      return state.title;
    },
    description(state: any) {
      return state.description;
    },
    id(state: any) {
      return state.id;
    },
    status(state: any) {
      return state.status;
    },
  },
});
