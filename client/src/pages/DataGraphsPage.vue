<template>
  <div>hello there!</div>
  <q-btn label="Click Me!" @click="loadData" />
</template>

<script lang="ts">
import { api } from 'src/boot/axios';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DataGraphsPage',
  methods: {
    loadData() {
      api
        .get('/test/')
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});
</script>
