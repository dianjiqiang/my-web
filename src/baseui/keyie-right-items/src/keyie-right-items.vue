<template>
  <div class="keyie-right-items">
    <i
      class="iconfont showIcon animate__animated"
      :class="{ animate__fadeInRight: !isUnfold }"
      style="color: white"
      v-show="!isUnfold"
      @click="changeUnfold"
      >&#xe60c;</i
    >
    <el-row>
      <el-col
        :style="{ width: onceOwn ? '0' : '220px' }"
        :class="{
          animate__animated: true,
          animate__fadeInRight: isUnfold,
          animate__fadeOutRight: !isUnfold
        }"
      >
        <i @click="changeUnfold" class="iconfont unfold animate__animated" v-html="unfoldIcon"></i>
        <el-menu
          default-active="0"
          active-text-color="#ffd04b"
          background-color="#545c64"
          class="el-menu-vertical-demo"
          text-color="#fff"
        >
          <template v-for="love of loveItems" :key="love.name">
            <el-menu-item :index="love.index + ''" @click="handleOpen">
              <div>
                <i class="iconfont" v-html="love.icon"></i>
                <span>{{ love.name }}</span>
              </div>
            </el-menu-item>
          </template>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { nextTick, ref, watch } from 'vue'

const props = defineProps(['loveItems', 'firstChange'])
const emit = defineEmits(['changeItems'])

let onceFlag = true
const handleOpen = (key) => {
  const index = key.index
  emit('changeItems', index)
}
nextTick(() => {
  onceFlag = false
})
watch(
  () => props.firstChange,
  () => {
    changeUnfold()
  }
)
// 收缩展开效果
const onceOwn = ref(true)
const isUnfold = ref(false)
const isUnfoldIconShow = ref(true)
const unfoldIcon = ref('&#xe60c;')
const changeUnfold = () => {
  onceOwn.value = false
  isUnfold.value = !isUnfold.value
  if (isUnfold.value) {
    unfoldIcon.value = '&#xe668;'
  } else {
    unfoldIcon.value = '&#xe60c;'
  }
}
</script>

<style lang="less" scoped>
.showIcon {
  font-size: 30px;
  position: fixed;
  right: 0;
  top: 45%;
  // transform: translateY(-50%);
}
.el-col {
  position: fixed;
  z-index: 9;
  right: 0;
  // width: 0;
  // overflow: hidden;
  height: 100%;
  .unfold {
    position: absolute;
    top: 45%;
    // transform: translateY(-50%);
    font-size: 30px;
    left: -20px;
    color: white;
    z-index: 2;
  }
  .el-menu {
    border: none;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .el-menu-item {
    flex: 1;
    border-left: 40px solid transparent;
  }
}
</style>
