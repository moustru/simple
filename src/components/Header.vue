<template>
    <div class="header">
        <div class="header-user" @click="$router.push(`/${$route.params.id}/account`)">
            <div class="header-user-img">
                <img src="img/no_user.png" class=" ava ava-large"/>
            </div>
            <div class="header-user-info">
                <span class="user-info-name">{{ name }}</span>
                <span class="user-info-login">{{ login }}</span>
            </div>
        </div>
        <div class="header-panel">
            <div class="header-panel-icon"><img src="img/logout.svg"/></div>
        </div>

        <div class="modal" v-if="false">
            <div class="modal-header">
                <h2 class="modal-title title">Вы действительно хотите выйти?</h2>
            </div>
            <div class="modal-footer">
                <button class="btns btn-yes">Да</button>
                <button class="btns btn-no">Нет</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: [ 'name', 'login' ]
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
        cursor: pointer;

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