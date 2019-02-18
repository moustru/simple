<template>
  <div class="index">
    <div class="index-left">
      <div class="logo">
          <h1 class="logo-title text-bold">Simple</h1>
          <h3 class="logo-subtitle">Современный, легкий и быстрый баг-трекер для ваших задач</h3>
      </div>
    </div>
    <div class="index-right">
        <h2 class="index-right-title">Вход</h2>
        <form method="POST" action="#" class="form-entry">
            <input type="text" name="login" class="input input-black" placeholder="Ваш логин" autocomplete="off">
            <input type="password" name="password" class="input input-black" placeholder="Ваш пароль"/>
            <button type="submit" class="btn btn-yes">Войти</button>
            <a href="/account" class="link">Зарегистрироваться</a>
        </form>
    </div>
    <div class="popup">
        <div class="popup-content">
            <h1 class="popup-title text-bold">Регистрация</h1>
            <form method="POST" action="#" class="form-reg">
                <div class="form-reg-content">
                    <div class="form-reg-inputs">
                        <input type="email" name="email" class="input input-white" placeholder="Ваш e-mail"/>
                        <input type="text" name="login" class="input input-white" placeholder="Ваш логин"/>
                        <input type="text" name="realName" class="input input-white" placeholder="Ваше имя и фамилия"/>
                        <input type="password" name="password" class="input input-white" placeholder="Ваш пароль"/>
                        <input type="password" name="password" class="input input-white" placeholder="Повторите пароль"/>
                    </div>
                    <div class="form-reg-photo">
                        <input type="file" name="avatar" id="file1" class="input-photo"/>
                        <label for="file1" class="photo-field">
                            <span class="text-bold">Загрузите фотографию (до 2 МБ)</span>
                        </label>
                    </div>
                </div>
                <div class="form-reg-footer">
                    <div class="checkbox-block">
                        <input type="checkbox" id="checkbox1" class="input-checkbox"/>
                        <label for="checkbox1" class="checkbox-label checkbox-white">Я согласен на обработку персональных данных</label>
                    </div>
                    <div class="form-reg-buttons">
                        <button type="submit" class="btn btn-yes">Зарегистрироваться</button>
                        <button class="btn btn-no">Отмена</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style lang="scss">
@import '@/assets/scss/config.scss';
@import '@/assets/scss/main.scss';

.index {
    @include Flex(space-between);
    margin: 0 5%;
    padding-top: 10%;

    &-left {
        .logo {
            user-select: none;

            &-title {
                margin-bottom: 20px;
                font-size: 200px;
            }

            &-subtitle {
                font-size: 20px;
            }
        }
    }

    &-right {
        @include Flex(center, center, column);
        width: 30%;
        margin-top: 3%;

        &-title {
            margin-bottom: 30px;
            font-size: 36px;
        }

        .form-entry {
            @include Flex(center, center, column);
            width: 100%;

            .input {
                width: 100%;
                text-align: center;
            }

            .btn {
                width: 50%;
                margin-top: 20px;
            }

            .link {
                margin-top: 20px;
            }
        }
    }
}
</style>

