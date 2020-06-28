<template>
  <header>
    <div class="logo">Logo</div>
    <div class="search"></div>
    <div class="reward"></div>
    <div class="profile">T</div>
  </header>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Header extends Vue {}
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
$orange-9: #e67e2c;
header {
  display: flex;
  padding: 10px 30px;
  background-color: $primary-green;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.65);
  .logo {
    flex: 1;
  }
  .profile {
    border-radius: 50%;
    background-color: $orange-9;
    width: 35px;
    height: 35px;
    padding: 7px 0px;
    text-align: center;
    color: $gray;
    font-weight: 700;
  }
}
</style>
