import { MutationTree } from "vuex";
import { findIndex } from "lodash";
export enum MutationType {
  SetTask = "SET_TASKS",
  CompleteTask = "COMPLETE_TASK",
  DeleteTask = "REMOVE_TASK",
}
export type Mutations = {
  [MutationType.SetTask](state: any, task: any): void;
  [MutationType.CompleteTask](state: any, task: any): void;
  [MutationType.DeleteTask](state: any, task: any): void;
};
export const mutations: MutationTree<any> & Mutations = {
  [MutationType.SetTask](state, task) {
    state.tasks.push(task);
  },
  [MutationType.DeleteTask](state, task) {
    const taskIndex = findIndex(state.tasks, task);
    state.tasks.splice(taskIndex, 1);
  },
  [MutationType.CompleteTask](state: any, task: any) {
    const taskIndex = findIndex(state.tasks, task);
    state.tasks[taskIndex].completed = true;
  },
};
