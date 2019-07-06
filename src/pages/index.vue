<template>
    <div class="main-field">
        <div class="main-forms">
            <div class="form">
                <h3 class="form-title title">Вход</h3>
                <input class="input" type="text" placeholder="Логин"/>
                <input class="input" type="password" placeholder="Пароль"/>
                <div class="form-buttons">
                    <button class="btns btn-yes">Вход</button>
                    <button class="btns btn-action-1">Регистрация</button>
                </div>
            </div>
            <div class="form" v-if="false">
                <h3 class="form-title title">Регистрация</h3>
                <input class="input" type="text" placeholder="ФИО"/>
                <input class="input" type="text" placeholder="Логин"/>
                <input class="input" type="email" placeholder="E-mail"/>
                <input class="input" type="password" placeholder="Пароль"/>
                <input class="input" type="password" placeholder="Повторите пароль"/>
                <div class="form-buttons">
                    <button class="btns btn-yes">Регистрация</button>
                    <button class="btns btn-no">Отмена</button>
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
    export default {
        
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

    &-buttons {
        @include Flex(space-between);
        width: 100%;
        margin-top: 10px;

        .btns {
            width: 45%;
        }
    }
}
</style>