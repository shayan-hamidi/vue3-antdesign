<script setup lang="ts">
import { MehOutlined, CloseOutlined } from "@ant-design/icons-vue";
import { message } from "ant-design-vue";
import { reactive, ref } from "vue";
interface FormState {
  todo: string;
}
const renderInitialList = () => {
  if (localStorage.getItem("list")) {
    return JSON.parse(localStorage.getItem("list") || "[]");
  } else {
    return [];
  }
};
let list = ref<any>(renderInitialList());
const formState = reactive<FormState>({
  todo: "",
});
const onFinish = (values: any) => {
  list.value.push(values);
  localStorage.setItem("list", JSON.stringify(list.value));
  formState.todo = "";
};
const removeHandler = (removeButtonIndex: any) => {
  list.value = list.value.filter((_item: object, index: number) => {
    return index !== removeButtonIndex;
  });
  localStorage.setItem("list", JSON.stringify(list.value));
  message.success("task successfully deleted");
};
</script>
<template>
  <a-form :model="formState" name="basic" autocomplete="off" @finish="onFinish">
    <a-layout-content class="todo-app-layout-content">
      <a-row type="flex" justify="center">
        <a-col :span="9" style="margin: 0px 20px" :xs="24" :md="18" :lg="12">
          <a-form-item
            name="todo"
            :rules="[{ required: true, message: 'Please enter a task!' }]"
          >
            <a-input
              id="input"
              placeholder="What needs to be done?"
              v-model:value="formState.todo"
            />
          </a-form-item>
        </a-col>
        <a-col
          :xs="24"
          :md="18"
          :lg="12"
          :span="1"
          :style="{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }"
        >
          <a-button type="primary" html-type="submit">Add</a-button>
          <span v-if="list.length">you have {{ list.length }} task</span>
        </a-col>
      </a-row>
      <a-row type="flex" justify="center" class="list-container">
        <a-col
          v-if="list.length === 0"
          :span="10"
          :xs="24"
          :md="20"
          :lg="12"
          class="no-data-container"
          ><div><meh-outlined style="font-size: x-large" /></div>
          <span style="margin-top: 10px">Enter a task</span>
        </a-col>
        <a-col
          v-else
          :span="10"
          class="with-data-container"
          :xs="24"
          :md="20"
          :lg="12"
        >
          <a-row v-for="(item, index) in list" class="single-list-row">
            <a-col :span="24" class="single-list-item"
              ><span>{{ item.todo }}</span>
              <a-popconfirm
                title="Are you sure delete this task?"
                ok-text="Yes"
                cancel-text="No"
                @confirm="() => removeHandler(index)"
              >
                <a-button class="remove-button"><close-outlined /></a-button>
              </a-popconfirm>
            </a-col>
          </a-row>
        </a-col>
      </a-row>
    </a-layout-content>
  </a-form>
</template>
<style scoped>
.remove-button {
  background-color: rgb(231, 201, 201);
  border-radius: 10%;
  border: 1px solid grey;
  color: red;
  font-size: 16px;
}
.with-data-container {
  background-color: rgba(46, 73, 163, 0.1);
  overflow: auto !important;
  border-radius: 0.5rem;
  max-height: 450px;
  padding: 1rem;
}
.single-list-item {
  min-height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: -6px 0.5px 10px 0.5px rgba(62, 78, 62, 0.3);
  padding: 15px;
}
.single-list-row {
  background-color: rgb(101, 75, 245);
  color: #fff;
  font-size: 16px;
  margin: 10px 0px;
  border-radius: 0.5rem;
  min-width: 150px;
}
.no-data-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 20px;
  background-color: rgba(46, 73, 163, 0.1);
}
.todo-app-layout-content {
  background: #fff;
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 24px;
}
.list-container {
  margin-top: 10px;
  min-height: 300px;
  max-height: 400px;
}
</style>
