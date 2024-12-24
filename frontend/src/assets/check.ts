export const checkUsername = (username: string, error: Function): boolean => {
    if (username === '') {
        error('用户名不能为空')
        return false
    }
    if (username.length < 6) {
        error('用户名长度不能小于6位')
        return false
    }
    if (username.length > 20) {
        error('用户名长度不能大于20位')
        return false
    }
    if (!/^[a-zA-Z0-9_]+$/.test(username)) {
        error('用户名只能包含字母、数字和下划线')
        return false
    }
    return true
}

export const checkPassword = (password: string, error: Function): boolean => {
    if (password === '') {
        error('密码不能为空')
        return false
    }
    if (password.length < 6) {
        error('密码长度不能小于6位')
        return false
    }
    if (password.length > 20) {
        error('密码长度不能大于20位')
        return false
    }
    if (!/^[a-zA-Z0-9_]+$/.test(password)) {
        error('密码只能包含字母、数字和下划线')
        return false
    }
    return true
}

export const checkEmail = (email: string, error: Function): boolean => {
    if (!/^[a-zA-Z0-9_]+@[a-zA-Z0-9_]+\.[a-zA-Z0-9_]+$/.test(email)) {
        error('邮箱格式不正确')
        return false
    }
    return true
}