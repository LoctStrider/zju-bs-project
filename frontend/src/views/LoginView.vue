<script lang="ts" setup>
import { ElMessage } from 'element-plus';
import { ref } from 'vue'
import { RouterLink } from 'vue-router';
import { checkUsername, checkPassword } from '@/assets/check';
const username = ref('')
const password = ref('')

const submit = () => {
    if (!checkUsername(username.value, ElMessage.error)) {
        return
    }
    if (!checkPassword(password.value, ElMessage.error)) {
        return
    }
    // TODO
}
</script>

<template>
    <el-row justify="center" align="middle" style="height: 100%;">
        <el-col :span="18">
            <el-card>
                <template #header>
                    <div class="header">
                        <h1>
                            登录
                        </h1>
                    </div>
                </template>
                <el-row justify="center">
                    <el-form label-width="auto" style="width: 80%; max-width: 500px;">
                        <el-form-item label="用户名">
                            <el-input v-model="username" placeholder="请输入用户名" />
                        </el-form-item>
                        <el-form-item label="密码">
                            <el-input v-model="password" placeholder="请输入密码" show-password />
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" style="margin: 0 auto;" @click="submit">登录</el-button>
                        </el-form-item>
                    </el-form>
                </el-row>
                <template #footer>
                    <div class="footer">
                        <el-text type="info">
                            尚未注册？
                            <RouterLink to="/register">
                                <el-text type="primary">
                                    注册
                                </el-text>
                            </RouterLink>
                        </el-text>
                    </div>
                </template>
            </el-card>
        </el-col>
    </el-row>
</template>

<style scoped>
.header {
    display: flex;
    justify-content: center;
}

.footer {
    display: flex;
    justify-content: center;
}
</style>