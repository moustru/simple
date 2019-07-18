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
                code: this.$route.params['code'],
                message: this.$route.params['message']
            }
        },

        methods: {
            back() {
                if(window.history.length >= 1) {
                    if(this.code == 403) {
                        window.history.go(-2);
                    } else {
                        window.history.back();
                    }
                } else {
                    this.$router.push('/');
                }
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