<script lang="ts" setup>
import { ref } from 'vue';
const search = ref('');
</script>

<template>
    <el-row justify="center" style="margin-top: 20px; margin-bottom: 20px;">
        <el-input v-model="search" placeholder="请输入商品名称" style="width: 300px;" />
    </el-row>
    <el-row :gutter="20">
        <el-col :span="8">
            <el-card>
                <template #header>
                    <h1>淘宝</h1>
                </template>
            </el-card>
        </el-col>
        <el-col :span="8">
            <el-card>
                <template #header>
                    <h1>京东</h1>
                </template>
            </el-card>
        </el-col>
        <el-col :span="8">
            <el-card>
                <template #header>
                    <h1>拼多多</h1>
                </template>
            </el-card>
        </el-col>
    </el-row>
</template>