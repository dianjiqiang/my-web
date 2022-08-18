<template>
  <div class="keyie-home-item">
    <keyie-banner-items :bannerList="bannerList" :bannerHeight="bannerHeight" />
    <div class="content">
      <keyie-content-top :avatar="avatar" />
      <div class="content-left"></div>
      <div class="content-right"></div>
    </div>
  </div>
</template>

<script setup>
import { watch, ref } from 'vue'

import KeyieBannerItems from '../../../baseui/keyie-banner-items'
import keyieContentTop from '../../../baseui/keyie-content-top'

const props = defineProps({
  itemData: {
    type: Object,
    required: true
  }
})
watch(
  () => props.itemData.value,
  () => {
    bannerList.value = props.itemData.value.bannerList
    bannerHeight.value = props.itemData.value.bannerHeight
    avatar.value = props.itemData.value.avatar
  }
)
const bannerList = ref(props.itemData.value.bannerList)
const bannerHeight = ref(props.itemData.value.bannerHeight)
const avatar = ref(props.itemData.value.avatar)
</script>

<style lang="less" scoped>
.keyie-home-item {
  padding: 40px;
}
</style>
