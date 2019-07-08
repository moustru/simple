<template>
    <div class="main-field">
        <header-component :name="account.name" :login="account.login"/>
        <div class="content">
            <div class="content-admin">
                <h2 class="content-title title">Ваши доски</h2>
                <div class="content-projects">
                    <project-card/>
                    <div class="project-add">+</div>
                </div>
            </div>
            <div class="content-parts">
                <h2 class="content-title title">Участник</h2>
                <div class="content-projects">
                    <project-card/>
                </div>
            </div>
        </div>

        <div class="modal" v-if="false">
            <div class="modal-header">
                <h2 class="modal-title title">Новый проект</h2>
            </div>
            <div class="modal-body">
                <input class="input-modal" type="text" placeholder="Название проекта"/>
            </div>
            <div class="modal-footer">
                <button class="btns btn-yes">Создать</button>
                <button class="btns btn-no">Отмена</button>
            </div>
        </div>

        <div class="modal" v-if="false">
            <div class="modal-header">
                <h2 class="modal-title title">Вы действительно хотите удалить проект?</h2>
                <span class="modal-subtitle">Восстановить проект будет невозможно!</span>
            </div>
            <div class="modal-footer">
                <button class="btns btn-yes">Да</button>
                <button class="btns btn-no">Нет</button>
            </div>
        </div>
    </div>
</template>

<script>
    import HeaderComponent from './../components/Header.vue';
    import ProjectCard from './../components/Account/ProjectCard.vue';
    import axios from 'axios';

    export default {
        data() {
            return {
                id: this.$route.params.id,
                account: {}
            }
        },

        components: { HeaderComponent, ProjectCard },

        mounted() {
            axios.get(`http://127.0.0.1:8002/${this.id}/account`).then(res => {
                this.account = res.data;
            })
        }
    }
</script>

<style lang="scss" scoped>
@import './../assets/scss/config';

.content {
    &-title {
        margin: 20px 0;
        font-size: 28px;
    }

    &-projects {
        @include Flex(flex-start, flex-start, row, wrap);
    }
}

.project-add {
    position: relative;
    @include Flex(center, center);
    width: 24%;
    height: 170px;
    border: 3px dashed #000;
    font-size: 72px;
    cursor: pointer;
    transition: $transition;

    &:hover {
        font-size: 96px;
    }
}
</style>