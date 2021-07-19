<template>
  <div class="home">
    <div class="row">
      <div class="small-12 text-center">
        <h4>Vue 3 + TypeScript Todo Application</h4>
      </div>
    </div>
    <div class="row align-center">
      <div class="small-12 medium-7 columns">
        <table class="main-table">
          <thead>
            <tr>
              <th>To-do List</th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <transition-group name="fade" mode="out-in" tag="tbody">
            <tr v-for="task in tasks" :key="task.name">
              <td
                width="75%"
                v-text="task.name"
                class="line"
                :class="{ 'text-line-through': task.completed }"
              ></td>
              <td width="10%" class="text-right">
                <i
                  class="fa fa-check"
                  aria-hidden="true"
                  @click="setTaskComplete(task)"
                ></i>
              </td>
              <td width="10%" class="text-right">
                <i
                  class="fa fa-times"
                  aria-hidden="true"
                  @click.prevent="deleteTask(task)"
                ></i>
              </td>
              <td width="10%"></td>
            </tr>
          </transition-group>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Task from "@/models/Task";
import { useStore } from "@/store";
import { MutationType } from "@/store/mutations";
export default defineComponent({
  name: "Home",
  setup() {
    const tasks = ref([]);
    const store = useStore();
    tasks.value = store.state.tasks;
    const setTaskComplete = (task: Task): void => {
      store.commit(MutationType.CompleteTask, task);
    };
    const deleteTask = (task: Task) => {
      store.commit(MutationType.DeleteTask, task);
    };

    return {
      tasks,
      setTaskComplete,
      deleteTask
    };
  }
});
</script>

<style lang="scss" src="./Home.scss" scoped></style>
