<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="app">
    <el-container>
      <el-aside width="200px">
        <el-menu router :default-active="$route.path">
          <el-menu-item index="/">
            <el-icon>
              <House />
            </el-icon>
            <span>主页</span>
          </el-menu-item>

          <el-sub-menu>
            <template #title>
              <el-icon>
                <User />
              </el-icon>
              <span>用户管理</span>
            </template>
            <el-menu-item index="/login">登录</el-menu-item>
            <el-menu-item index="/register">注册</el-menu-item>
          </el-sub-menu>

          <el-menu-item index="/management">
            <el-icon>
              <Bell />
            </el-icon>
            <span>订阅商品管理</span>
          </el-menu-item>

          <el-menu-item index="/search">
            <el-icon>
              <Search />
            </el-icon>
            <span>搜索比价</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <RouterView />
      </el-main>
    </el-container>
  </div>
</template>

<style scoped>
.app {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
}

.el-container {
  height: 100%;
}
</style>
