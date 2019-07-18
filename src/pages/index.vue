<template>
    <div class="main-field">
        <div class="main-forms">
            <div class="form" v-if="formLogin">
                <h3 class="form-title title">Вход</h3>
                <input class="input" v-model="user.login" type="text" placeholder="Логин"/>
                <input class="input" v-model="user.password" type="password" placeholder="Пароль"/>
                <span class="invalid" v-if="error.visible">{{ error.message }}</span>
                <div class="form-buttons">
                    <button class="btns btn-yes" @click="login()">Вход</button>
                    <button class="btns btn-action-1" @click="formLogin = !formLogin">Регистрация</button>
                </div>
            </div>
            <div class="form" v-else>
                <h3 class="form-title title">Регистрация</h3>
                <input class="input" v-model="user.name" type="text" placeholder="ФИО"/>
                <input class="input" v-model="user.login" type="text" placeholder="Логин"/>
                <input class="input" v-model="user.email" type="email" placeholder="E-mail"/>
                <input class="input" v-model="user.password" type="password" placeholder="Пароль"/>
                <input class="input" type="password" placeholder="Повторите пароль"/>
                <div class="form-load">
                    <label for="avatar">{{ fileName ? fileName : 'Выберите файл' }}</label>
                    <input type="file" name="filedata" id="avatar" @change="fileLoad"/>
                </div>
                <div class="form-buttons">
                    <button class="btns btn-yes" @click="reg()">Регистрация</button>
                    <button class="btns btn-no" @click="formLogin = !formLogin">Отмена</button>
                </div>
            </div>
        </div>
        <div class="main-logo">
            <h1 class="main-logo-title">Simple</h1>
            <h2 class="main-logo-subtitle">Таск-трекер</h2>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import API from './../config.js';

    export default {
        data() {
            return {
                formLogin: true,
                fileName: null,
                user: {
                    name: null,
                    login: null,
                    email: null,
                    password: null,
                    avatar: null
                },
                error: {
                    visible: false,
                    message: null
                }
            }
        },

        methods: {
            login() {
                axios.post(`/auth`, this.user).then(res => {
                    this.setToken({
                        token: res.data.token,
                        userId: res.data.login
                    })

                    this.$router.push(`${res.data.login}/account`)
                }).catch(err => {
                    this.error.visible = true;
                    this.error.message = 'Пользователь не найден';
                    
                    setTimeout(() => {
                        this.error.visible = false;
                        this.error.message = null;
                    }, 2000)
                })
            },

            reg() {
                axios.post(`/reg`, this.user).then(res => {
                    this.setToken({
                        token: res.data.token,
                        userId: res.data.login
                    })
                    
                    this.$router.push(`${res.data.login}/account`)
                })
            },

            setToken(payload) {
                try {
                    let token = payload.token
                    let userId = payload.userId
                    localStorage.setItem('user-token', token)
                    localStorage.setItem('user-id', userId)
                } catch(err) {
                    localStorage.removeItem('user-token')
                    localStorage.removeItem('user-id')
                    console.log(err);
                }
            },

            fileLoad() {
                let input = document.getElementById('avatar');
                let fileObj = input.files[0];
                let reader = new FileReader();
                let correctName = input.value.replace('C:\\fakepath\\', '');
                this.fileName = correctName;
                reader.readAsDataURL(fileObj);

                reader.onload = e => {
                    this.user.avatar = e.target.result
                    console.log(this.user.avatar)
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
@import './../assets/scss/config';

.main {
    &-field {
        @include Flex(space-between, center);
    }

    &-forms {
        width: 25%;
    }

    &-logo {
        text-align: right;
        user-select: none;

        &-title {
            font-size: 144px;
            font-family: 'Montserrat Bold', sans-serif;
        }

        &-subtitle {
            font-size: 32px;
        }
    }
}

.form {
    @include Flex(flex-start, flex-start, column);

    .input {
        width: 100%;
        margin-bottom: 10px;
    }

    &-title {
        margin-bottom: 20px;
        font-size: 32px;
    }

    &-load {
        width: 100%;
        margin: 10px 0;
        text-align: center;
        color: #a5a5a5;
        border: 2px dashed #a5a5a5;

        label {
            display: block;
            width: 100%;
            padding: 15px 0;
            cursor: pointer;
        }
    }

    &-buttons {
        @include Flex(space-between);
        width: 100%;
        margin-top: 10px;

        .btns {
            width: 45%;
        }
    }

    #avatar {
        display: none;
    }
}
</style>