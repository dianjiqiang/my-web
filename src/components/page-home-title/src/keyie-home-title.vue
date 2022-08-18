<template>
  <div class="keyie-home-title">
    <slot name="title"></slot>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'keyie-home-title',
  props: {},
  setup(props) {}
})
</script>

<style lang="less" scoped>
.ai {
  position: fixed;
  left: 0;
  top: 0;
  color: red;
  font-size: 22px;
}
</style>
