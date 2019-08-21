<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class extends Vue {
  private width = window.innerWidth;

  private created() {
    window.addEventListener('resize', () => {
      this.width = window.innerWidth;
    });
  }
}
</script>

<template>
  <div>
    <slot :width="width" />
  </div>
</template>
