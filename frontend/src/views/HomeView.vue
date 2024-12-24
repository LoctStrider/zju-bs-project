<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <el-row justify="center" align="middle" style="height: 50%">
    <div>
      <h1>
        商品比价查询系统
      </h1>
      <p>
        开发者：李克成
      </p>
      <p>
        学号：3220103579
      </p>
    </div>
  </el-row>
  <el-row justify="center" align="middle">
    <el-text size="large">
      <p>
        如果你尚未注册，请
        <RouterLink to="/register">
          <el-text type="primary" size="large">
            注册账号
          </el-text>
        </RouterLink>
        。
      </p>
      <p>
        如果你已经注册，请
        <RouterLink to="/login">
          <el-text type="primary" size="large">
            登录
          </el-text>
        </RouterLink>
        。
      </p>
    </el-text>
  </el-row>
</template>

<style scoped>
.el-row {
  text-align: center;
}
</style>