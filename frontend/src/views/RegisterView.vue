<script lang="ts" setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { checkUsername, checkPassword, checkEmail } from '@/assets/check';
import { ElMessage } from 'element-plus';
const username = ref('')
const password = ref('')
const email = ref('')

const submit = () => {
    if (!checkUsername(username.value, ElMessage.error)) {
        return
    }
    if (!checkPassword(password.value, ElMessage.error)) {
        return
    }
    if (!checkEmail(email.value, ElMessage.error)) {
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
                            注册
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
                        <el-form-item label="邮箱">
                            <el-input v-model="email" placeholder="请输入邮箱" />
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" style="margin: 0 auto;" @click="submit">注册</el-button>
                        </el-form-item>
                    </el-form>
                </el-row>
                <template #footer>
                    <div class="footer">
                        <el-text type="info">
                            已有账号？
                            <RouterLink to="/login">
                                <el-text type="primary">
                                    登录
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