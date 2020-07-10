import { GetterTree } from "vuex";
import { State } from "./state";

export default {
  todos(state: State) {
    return state.todoList;
  },
  title(state: State) {
    return state.title;
  },
  description(state: State) {
    return state.description;
  },
  id(state: State) {
    return state.id;
  },
  status(state: State) {
    return state.status;
  }
} as GetterTree<State, any>;
