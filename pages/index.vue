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
            <a href="#" @click="showPopup('.popup-reg')" class="link">Зарегистрироваться</a>
        </form>
    </div>
    <popup-reg></popup-reg>
  </div>
</template>

<script>
import PopupReg from '@/components/popups/Popup-Reg.vue';

export default {
  name: 'index',

  components: {
      'popup-reg': PopupReg
  },

  methods: {
      showPopup: function(s) {
          Anim.fadeIn(s);
      }
  }
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

