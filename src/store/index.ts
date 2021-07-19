// import { createStore } from "vuex";
import Task from "@/models/Task";
import { createStore, Store as VuexStore, CommitOptions } from "vuex";
import { Mutations, mutations } from "./mutations";

export const store = createStore({
  state: {
    tasks: [
      {
        name: "Demo for VueJS and TS",
        createdAt: new Date(),
        updatedAt: new Date(),
        completed: false,
      },
      {
        name: "UI design",
        createdAt: new Date(),
        updatedAt: new Date(),
        completed: false,
      },
    ] as Task[],
  },
  mutations,
  actions: {},
  modules: {},
});
export function useStore() {
  return store as Store;
}
export type Store = Omit<VuexStore<any>, "commit"> & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>;
};
