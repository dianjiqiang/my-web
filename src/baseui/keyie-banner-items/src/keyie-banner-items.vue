<template>
  <div class="keyie-banner-items">
    <el-carousel trigger="click" :height="bannerHeight">
      <el-carousel-item v-for="item of bannerList" :key="item.url">
        <a class="image" href="javascript:;">
          <el-image :src="item.url" />
          <span>{{ item.title }}</span>
        </a>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup>
import { nextTick } from 'vue'

const props = defineProps({
  bannerList: Object,
  bannerHeight: {
    type: String,
    default: '400px'
  }
})
</script>

<style lang="less" scoped>
.el-carousel {
  width: 70%;
  margin: 0 auto 30px;
}
.el-image {
  width: 100%;
  height: 100%;
}
.image {
  position: relative;
  color: #ffffff;
  font-size: 25px;
  span {
    position: absolute;
    left: 60px;
    top: -60px;

    padding: 10px;

    background-color: rgba(0, 0, 0, 0.6);
  }
}
</style>
