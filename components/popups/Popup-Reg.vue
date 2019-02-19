<template>
    <div class="popup popup-reg">
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
</template>

<script>
    export default {
        methods: {
            hidePopup: function(s) {
                Anim.fadeOut(s);
            }
        }
    }
</script>

<style scoped lang="scss">

</style>