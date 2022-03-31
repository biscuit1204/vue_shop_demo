<template>
  <div class="login_container">
    <div class="login_box">
      <div class="login_avatar">
        <img src="../assets/logo.png" alt="" />
      </div>
      <el-form
        ref="loginFormRef"
        label-width="0px"
        class="login_form"
        :model="form"
        :rules="rules"
      >
        <el-form-item prop="username">
          <el-input
            prefix-icon="el-icon-user"
            placeholder="账号"
            v-model="form.username"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            prefix-icon="el-icon-lock"
            placeholder="密码"
            v-model="form.password"
            type="password"
          ></el-input>
        </el-form-item>
        <el-form-item class="login_but">
          <el-button type="primary" @click="loginFormBut">登录</el-button>
          <el-button type="info" @click="resetFormBut">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: 'admin',
        password: '123456'
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 4, max: 8, message: '长度在4-8个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          {
            min: 1,
            max: 8,
            message: '长度在 1 到 8 个字符',
            trigger: 'blur',
          },
          {
            min: 1,
            max: 8,
            message: '长度在 1 到 8 个字符',
            trigger: 'change',
          }
        ]
      }
    }
  },
  methods: {
    resetFormBut() {
      this.$refs.loginFormRef.resetFields()
    },
    loginFormBut() {
      this.$refs.loginFormRef.validate(async (value) => {
        if (!value) return
        const { data: result } = await this.$http.post('login', this.form)
        if (result.meta.status != 200) return this.$message.error('登录失败')
        this.$message({
          message: '登陆成功',
          type: 'success',
        })
        window.sessionStorage.setItem('token', result.data.token)
        this.$router.push('/home')
      })
    },
  },
}
</script>

<style lang="less" scoped>
.login_container {
  background-color: #2b4b6b;
  height: 100%;
  position: relative;
}
.login_box {
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 5px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.login_avatar {
  width: 130px;
  height: 130px;
  border: 1px solid #eee;
  border-radius: 50%;
  padding: 10px;
  background-color: #eee;
  position: absolute;
  left: 50%;
  top: -25%;
  transform: translate(-50%, 0);
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
}
.login_form {
  position: absolute;
  width: 100%;
  bottom: 0;
  padding: 0 20px;
  box-sizing: border-box;
}
.login_but {
  display: flex;
  justify-content: right;
}
</style>
