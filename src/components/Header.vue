<template>
    <div class="header">
        <div class="header-user">
            <div class="header-user-img">
                <img src="img/no_user.png" class=" ava ava-large"/>
            </div>
            <div class="header-user-info">
                <span class="user-info-name">moust петрович</span>
                <span class="user-info-login">mylogin</span>
            </div>
        </div>
        <div class="header-panel">
            <div class="header-panel-icon"><img src="img/logout.svg"/></div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
@import './../assets/scss/config';

.header {
    @include Flex(space-between, center);
    width: 100%;
    margin-bottom: 3%;
    padding-bottom: 20px;
    border-bottom: 2px solid #a5a5a5;

    &-user {
        @include Flex(flex-start, center);

        &-img {
            margin-right: 10px;
        }

        &-info {
            .user-info {
                &-name, &-login {
                    display: block;
                }

                &-name {
                    font-size: 28px;
                    line-height: 1.5;
                }
            }
        }
    }

    &-panel {
        &-icon {
            cursor: pointer;

            img {
                width: 48px;
            }
        }
    }
}
</style>