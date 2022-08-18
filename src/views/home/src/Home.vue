<template>
  <div class="home">
    <div
      ref="thisBgiRef"
      v-if="isBgiShow"
      class="animate__animated bgi"
      :class="{ 'home-bgi-wall': isBgiShow, animate__fadeIn: isBgiShow }"
    ></div>
    <keyie-right-items
      :loveItems="loves"
      :firstChange="firstChange"
      @changeItems="changeItems"
    ></keyie-right-items>
    <keyie-home-title class="animate__animated" ref="homeTitleRef" v-show="pageIndex === '0'">
      <template #title>
        <div class="title">
          <div ref="firstMessageRef" class="title-message first-message">你所热爱的，</div>
          <div ref="lastMessageRef" class="title-message last-message">就是你的生活！</div>
        </div>
      </template>
    </keyie-home-title>
    <keyie-home-item :itemData="itemData" v-if="pageIndex !== '0'"></keyie-home-item>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import { useStore } from 'vuex'

import KeyieHomeTitle from '../../../components/page-home-title'
import KeyieHomeItem from '../../../components/page-home-item'
import KeyieRightItems from '../../../baseui/keyie-right-items'

import { loves } from '../config/love.config'
import { truncate } from 'lodash'

const store = useStore()

const pageIndex = ref('0')
const firstChange = ref(true) //检测页面是否第一次加载
const firstTitleChange = ref(true) //不同的标题切换动画
const firstMessageRef = ref(null) //获取页面title信息
const lastMessageRef = ref(null) //获取页面title信息第二段
const isBgiShow = ref(false) //是否显示当前背景元素
let thisWidth = 0
onMounted(() => {
  firstReset()
})
//第一次加载页面动画
const firstReset = () => {
  setTimeout(() => {
    const timer = setInterval(() => {
      firstMessageRef.value.style.width = thisWidth + 'px'
      thisWidth += 20
      if (thisWidth >= 140 * 6) {
        firstMessageRef.value.style.width = 'auto'
        thisWidth = 0
        clearInterval(timer)
        setTimeout(() => {
          const timer2 = setInterval(() => {
            lastMessageRef.value.style.width = thisWidth + 'px'
            thisWidth += 20
            if (thisWidth >= 140 * 7) {
              lastMessageRef.value.style.width = 'auto'
              thisWidth = 0
              clearInterval(timer2)
              setTimeout(() => {
                isBgiShow.value = true
                setTimeout(() => {
                  firstChange.value = false
                }, 1000)
              }, 500)
            }
          }, 10)
        }, 500)
      }
    }, 10)
  }, 500)
}
//子组件数据
let itemData = ref('')
//切换
const homeTitleRef = ref(null)

const changeItems = (index) => {
  firstTitleChange.value = false
  // 在这里执行动画
  if (index === '0') {
    pageIndex.value = index
    homeTitleRef.value.$el.classList.remove('animate__fadeIn')
    homeTitleRef.value.$el.classList.add('animate__fadeIn')
    return
  }
  const loveName = loves[parseInt(index)].name.toLowerCase()
  itemData.value = computed(() => store.state.home[loveName])
  pageIndex.value = index
}
</script>

<style lang="less" scoped>
.home {
  position: relative;
  height: auto;
  .bgi {
    position: fixed;
    z-index: -1;
    height: 100%;
    width: 100%;
    background-size: 2400px;
    background-position: 0 -40px;
  }
  .home-bgi-wall {
    background-image: url(../../../assets/img/home-background.png);
  }
  .right-distance {
    position: fixed;
    right: 0;
    width: 40px;
    height: 100%;
    z-index: 0;
  }
  .title {
    margin: 0 auto;
    font-size: 140px;
    color: white;
    font-family: 'qiantuxianmo';
    width: 1200px;
    height: 500px;
    margin-top: 200px;
    .title-message {
      overflow: hidden;
      white-space: nowrap;
      width: 0;
    }
    .last-message {
      margin-top: 30px;
    }
  }
}
</style>
