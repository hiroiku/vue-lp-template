<script lang="ts">
import Responsive from '@/components/atoms/Responsive.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    Responsive,
    PC: () => import('@/components/views/PC.vue'),
    SP: () => import('@/components/views/SP.vue'),
  },
})
export default class extends Vue {}
</script>

<template>
  <Responsive id="app" v-slot="screen">
    <SP v-if="screen.width <= 480" />
    <PC v-else />
  </Responsive>
</template>

<style src="normalize.css"></style>
<style lang="scss">
html,
body,
#app {
  width: 100%;
  height: 100%;
}

body {
  background-color: #f8f8f8;
  color: #435b71;
}
</style>
