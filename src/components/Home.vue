<script setup lang="ts">
import { reactive, ref } from "vue";
interface FormState {
  name: string;
  newName: string;
}
const formState = reactive<FormState>({
  name: "",
  newName: "",
});
const userName = ref("");
const onFinish = (values: any) => {
  if (values.name) {
    userName.value = formState.name;
  } else {
    userName.value = formState.newName;
  }
};
</script>
<template>
  <a-form
    :style="{ margin: '20px', padding: '24px' }"
    :model="formState"
    name="basic"
    autocomplete="off"
    @finish="onFinish"
  >
    <h1 style="font-weight: bold" v-if="userName">Hello {{ userName }}</h1>
    <a-layout-content class="get-name-layout-content">
      <div v-if="!userName">
        <h1>Please enter your name</h1>
        <a-row type="flex" justify="center">
          <a-col :span="9" style="margin: 0px 20px" :xs="24" :md="18" :lg="12">
            <a-form-item
              name="name"
              :rules="[{ required: true, message: 'Please enter your name!' }]"
            >
              <a-input
                placeholder="What needs to be done?"
                v-model:value="formState.name"
              />
            </a-form-item>
            <a-row>
              <a-col
                :span="3"
                style="margin: 0px 20px"
                :xs="24"
                :md="18"
                :lg="12"
              >
                <a-button type="primary" html-type="submit">Submit</a-button>
              </a-col>
            </a-row>
          </a-col>
        </a-row>
      </div>
      <div v-else>
        <h1>You can edit your name</h1>
        <a-row type="flex" justify="center">
          <a-col :span="9" style="margin: 0px 20px" :xs="24" :md="18" :lg="12">
            <a-form-item
              name="newName"
              label="New name"
              :rules="[{ required: true, message: 'Please enter your name!' }]"
            >
              <a-input
                placeholder="What needs to be done?"
                v-model:value="formState.newName"
              />
            </a-form-item>
            <a-row>
              <a-col
                :span="3"
                style="margin: 0px 20px"
                :xs="24"
                :md="18"
                :lg="12"
              >
                <a-button type="primary" html-type="submit">Submit</a-button>
              </a-col>
            </a-row>
          </a-col>
        </a-row>
      </div>
    </a-layout-content>
  </a-form>
</template>
<style scoped>
.get-name-layout-content {
  background-color: rgba(46, 73, 163, 0.1);
  margin: 20px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 300px;
}
</style>
