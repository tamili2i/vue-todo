import { State } from "./state";
import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

export const todo = {
  state: new State(),
  actions,
  mutations,
  getters
};
