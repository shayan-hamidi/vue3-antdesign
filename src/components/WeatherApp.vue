<script setup lang="ts">
import { reactive, ref, watch } from "vue";
import { MehOutlined } from "@ant-design/icons-vue";
import axios from "axios";
import { cityData } from "../cityDB/cityDb";
interface FormState {
  location: string;
}
interface Option {
  value: string;
  name: string;
}
const cityInfo = ref<any>();
const options = ref<any[]>(cityData);
const formState = reactive<FormState>({
  location: "",
});
watch([cityInfo], () => console.log(cityInfo.value.name));
const onFinish = ({ location }: any) => {
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=2ad622963b956f73c2e0395cb01fad6b`
    )
    .then((response) => {
      cityInfo.value = response.data;
    });
};
const filterOption = (input: string, option: Option) => {
  return option.value.toUpperCase().indexOf(input.toUpperCase()) >= 0;
};
</script>
<template>
  <a-form :model="formState" name="basic" autocomplete="off" @finish="onFinish">
    <a-layout-content class="weather-app-layout-content">
      <a-row type="flex" justify="center">
        <a-col :span="9" style="margin: 0px 20px" :xs="24" :md="18" :lg="12">
          <a-form-item
            name="location"
            :rules="[{ required: true, message: 'Please select a location!' }]"
          >
            <a-auto-complete
              v-model:value="formState.location"
              :options="options"
              placeholder="Select a location"
              :filter-option="filterOption"
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
          <a-button type="primary" html-type="submit">Fetch weather</a-button>
        </a-col>
      </a-row>
      <a-row
        v-if="cityInfo?.name"
        type="flex"
        justify="center"
        class="list-container"
      >
        <a-col
          :span="10"
          :xs="24"
          :md="20"
          :lg="12"
          :class="{
            hot: cityInfo.main.temp > 75,
            cold: cityInfo.main.temp < 75,
          }"
        >
          <h1
            :style="{
              marginTop: '10px',
              fontWeight: 'bold',
              fontSize: '30px',
              color: 'white',
              padding: '0px 15px',
            }"
          >
            {{ cityInfo.name }}
          </h1>
          <h2
            :style="{
              fontWeight: 'bold',
              fontSize: '28px',
              color: 'white',
              padding: '0px 25px',
            }"
          >
            {{ cityInfo.main.temp }}
          </h2>
        </a-col>
      </a-row>
      <a-row v-else type="flex" justify="center" class="list-container">
        <a-col :span="10" :xs="24" :md="20" :lg="12" class="no-data-container"
          ><div><meh-outlined style="font-size: x-large" /></div>
          <span style="margin-top: 10px">No data to show</span>
        </a-col>
      </a-row>
    </a-layout-content>
  </a-form>
</template>
<style scoped>
.cold {
  background-image: url("../assets/cold.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.hot {
  background-image: url("../assets/hot.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.with-data-container {
  background-color: rgba(46, 73, 163, 0.1);
  overflow: auto !important;
  border-radius: 0.5rem;
  max-height: 450px;
  padding: 1rem;
}
.weather-app-layout-content {
  background: #fff;
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 24px;
}
.no-data-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 20px;
  background-color: rgba(46, 73, 163, 0.1);
}
.list-container {
  margin-top: 10px;
  min-height: 300px;
  max-height: 400px;
}
</style>
