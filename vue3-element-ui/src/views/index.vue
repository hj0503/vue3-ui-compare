<template>
  <el-container>
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-main><router-view /></el-main>
    </el-container>
  </el-container>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Root',
})
</script>

<style lang='scss' scoped>
.el-container {
  height: 100vh;
}
.el-header {
  background-image: linear-gradient(-234deg, #35416a 0%, #6576a3 100%);
  line-height: 60px;
}
.el-aside {
  background-color: #d3dce6;
  color: #333;
}
</style>
