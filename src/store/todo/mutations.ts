import { MutationTree } from "vuex";
import { State } from "./state";

export default {
  updateTitle(state: State, title: string) {
    state.title = title;
  },
  updateDescription(state: State, description: string) {
    state.description = description;
  },
  updateStatus(state: State, status: boolean) {
    state.status = status;
  },
  createTodo(state: State, todo: any) {
    todo.id = state.todoList.length + 1;
    todo.status = 0;
    state.todoList.push(todo);
  },
  updateTodo(state: State, todo: any) {
    console.log(todo);
    const elementsIndex = state.todoList.findIndex(
      (element: any) => element.id == todo.id
    );
    const newArray = [...state.todoList];
    newArray[elementsIndex] = todo;
    state.todoList = newArray;
  },
  resetTodo(state: State) {
    state.title = "";
    state.description = "";
    state.id = 0;
    state.status = false;
  },
  getTodo(state: State, id: number) {
    const todo: any = state.todoList.filter((todo: any) => todo.id == id);
    state.title = todo[0].title;
    state.description = todo[0].description;
    state.status = todo[0].status;
    state.id = todo[0].id;
  }
} as MutationTree<State>;
