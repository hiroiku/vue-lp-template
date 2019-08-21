<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class extends Vue {}
</script>

<template>
  <div class="container">
    <img alt="Vue logo" src="@/assets/images/logo.png" />
    <h3>Welcome to Your Vue.js + TypeScript App</h3>
    <p>
      For a guide and recipes on how to configure / customize this project,
      <br />check out the
      <a href="https://cli.vuejs.org" rel="noopener" target="_blank">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
          rel="noopener"
          target="_blank"
        >babel</a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript"
          rel="noopener"
          target="_blank"
        >typescript</a>
      </li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li>
        <a href="https://vuejs.org" rel="noopener" target="_blank">Core Docs</a>
      </li>
      <li>
        <a href="https://forum.vuejs.org" rel="noopener" target="_blank">Forum</a>
      </li>
      <li>
        <a href="https://chat.vuejs.org" rel="noopener" target="_blank">Community Chat</a>
      </li>
      <li>
        <a href="https://twitter.com/vuejs" rel="noopener" target="_blank">Twitter</a>
      </li>
      <li>
        <a href="https://news.vuejs.org" rel="noopener" target="_blank">News</a>
      </li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li>
        <a href="https://router.vuejs.org" rel="noopener" target="_blank">vue-router</a>
      </li>
      <li>
        <a href="https://vuex.vuejs.org" rel="noopener" target="_blank">vuex</a>
      </li>
      <li>
        <a href="https://github.com/vuejs/vue-devtools#vue-devtools" rel="noopener" target="_blank">vue-devtools</a>
      </li>
      <li>
        <a href="https://vue-loader.vuejs.org" rel="noopener" target="_blank">vue-loader</a>
      </li>
      <li>
        <a href="https://github.com/vuejs/awesome-vue" rel="noopener" target="_blank">awesome-vue</a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.container {
  box-sizing: border-box;
  margin: 0 auto;
  padding: 32px;
  width: calc(100% - 64px);
  max-width: 960px;
  height: 100%;
  background-color: #fff;
  text-align: center;

  ul {
    padding: 0;
    list-style: none;
  }

  li {
    display: inline-block;
    margin: 0 8px;
  }

  a {
    color: #42b983;
  }
}
</style>
