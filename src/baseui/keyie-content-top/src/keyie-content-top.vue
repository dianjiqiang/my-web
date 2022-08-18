<template>
  <div class="keyie-content-top">
    <div class="avatar-item">
      <i class="avatar">
        <img :src="avatar.src" alt="" />
      </i>
      <span class="name">{{ avatar.title }}</span>
    </div>
    <div class="more">
      <a href=""><span>更多</span></a>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  avatar: {
    type: Object,
    default() {
      return {
        src: 'https://raw.githubusercontent.com/dianjiqiang/picGoEnt/main/_Y2)0)B%25%5D0FN39Q_959LFRH.png',
        title: '初音未来'
      }
    }
  }
})
</script>

<style lang="less" scoped>
.keyie-content-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 0 20px;
  background-color: rgba(0, 0, 0, 0.4);
  .avatar-item {
    display: flex;
    .avatar {
      display: inline-block;
      margin-right: 10px;
      img {
        width: 50px;
        height: 50px;
        border: 1px solid #000;
        border-radius: 30px;
      }
    }
    .name {
      color: aliceblue;
      font-size: 20px;
      line-height: 50px;
    }
  }
  .more {
    a {
      color: aliceblue;
      span::after {
        content: '>';
      }
    }
  }
}
</style>
