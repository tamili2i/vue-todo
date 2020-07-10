const createOrUpdate = ({ commit }: any, { todo, callback }: any) => {
  if (!todo.id) {
    commit("createTodo", todo);
  } else {
    commit("updateTodo", todo);
  }
  if (callback) {
    callback();
  }
};
const resetTodo = ({ commit }: any) => {
  commit("resetTodo");
};
const getTodo = ({ commit }: any, id: number) => {
  commit("getTodo", id);
};

export default {
  createOrUpdate,
  resetTodo,
  getTodo
};
