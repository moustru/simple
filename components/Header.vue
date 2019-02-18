<template>
    <div class="header">
        <div class="header-user">
            <a href="/account"><img src="~/static/img/ava.png" class="ava-medium"/></a>
            <div class="header-info">
                <span class="header-info-name text-bold">Евгений Могирко</span>
                <span class="header-info-login">moustru</span>
            </div>
        </div>
        <div class="header-panel">
            <span class="header-panel-item">
                <img src="~static/img/icons/settings.svg"/>
            </span>
            <span class="header-panel-item">
                <img src="~static/img/icons/log-out.svg"/>
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss">
    @import '@/assets/scss/config.scss';
    @import '@/assets/scss/main.scss';

    .header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        @include Flex(space-between, center);
        padding: 1% 3%;
        background-color: #fff;
        box-shadow: 0 0 .13px #a5a5a5;

        &-user {
            @include Flex(flex-start, center);
            width: 50%;
        }

        &-info {
            @include Flex(flex-start, flex-start, column);
            padding-left: 15px;

            &-name {
                font-size: 32px;
            }

            &-login {
                font-size: 20px;
            }
        }

        &-panel {
            @include Flex(flex-end);
            width: 50%;

            &-item {
                @include Flex(center, center);
                margin: 0 20px;
                cursor: pointer;

                img {
                    width: 60px;
                    height: 60px;
                    transition: $transition;

                    &:hover {
                        transform: scale(1.1);
                    }
                }
            }
        }
    }
</style>