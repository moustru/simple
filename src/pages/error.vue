<template>
    <div class="error">
        <div class="error-block">
            <span class="error-block-code title">{{ code }}</span>
            <span class="error-block-message">{{ message }}</span>
            <button class="btns btn-yes" @click="back">{{ btnTitle() }}</button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                code: 404,
                message: 'Запрашиваемая вами страница не найдена'
            }
        },

        methods: {
            back() {
                window.history.length >= 1 ? window.history.back() : this.$router.push('/');
            },

            btnTitle() {
                return window.history.length >= 1 ? 'Вернуться' : 'На главную'
            }
        }
    }
</script>

<style lang="scss" scoped>
@import './../assets/scss/config';

.error {
    @include Flex(center, center);
    height: 100%;

    &-block {
        @include Flex(center, center, column);

        &-code {
            font-size: 128px;
        }

        &-message {
            margin: 20px 0;
            font-size: 28px;
        }
    }
}
</style>