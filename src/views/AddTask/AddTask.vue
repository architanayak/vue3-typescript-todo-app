<template>
  <div class="create_task">
    <div class="row">
      <div class="small-12 text-center">
        <h4>Add Tasks</h4>
      </div>
    </div>
    <div class="row align-center">
      <div class="small-12 medium-7 columns">
        <div class="card">
          <div class="card-section">
            <div class="row expanded">
              <div class="small-12 columns">
                <Legend for="todoName"><b>Add your next task-</b></Legend>
                <input
                  id="todoName"
                  type="text"
                  v-model="taskName"
                  placeholder="Add your next task here"
                  @keyup.enter="addTask()"
                />
              </div>
            </div>
            <div class="row expanded">
              <div class="small-12 columns text-right">
                <button
                  @click="addTask"
                  type="button"
                  class="button success btn-lg btn-block"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Task from "@/models/Task";
import { useStore } from "@/store";
import { MutationType } from "@/store/mutations";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "AddTask",
  setup() {
    const taskName = ref("");
    const router = useRouter();
    const store = useStore();
    const addTask = (): void => {
      const newTask = new Task(taskName.value);
      store.commit(MutationType.SetTask, newTask);
      taskName.value = "";
      router.push({ path: "/" });
    };
    return { taskName, addTask };
  }
});
</script>

<style lang="scss" src="./AddTask.scss" scoped></style>
