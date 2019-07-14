<template>
    <div class="confirm">
        <div class="confirm-block">
            <h2 class="confirm-block-title title">{{ projectName }}</h2>
            <button class="btns btn-yes">Войти в проект</button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                projectName: 'Simple'
            }
        }
    }
</script>

<style lang="scss" scoped>
@import './../assets/scss/config';

.confirm {
    @include Flex(center, center);
    height: 100%;

    &-block {
        @include Flex(center, center, column);

        &-title {
            margin-bottom: 20px;
            font-size: 96px;
        }
    }
}
</style>