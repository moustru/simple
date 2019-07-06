<template>
    <div class="main-field">
        <header-component/>
        <div class="content">
            <div class="content-admin">
                <h2 class="content-title title">Ваши доски</h2>
                <div class="content-projects">
                    <div class="project">
                        <div class="project-header">
                            <span class="project-title">Проект 1</span>
                            <span class="project-parts">Участников: 5</span>
                        </div>
                        <div class="project-footer">
                            <span class="project-footer-title">Перейти к доске</span>
                        </div>
                    </div>
                    <div class="project-add">+</div>
                </div>
            </div>
            <div class="content-parts">
                <h2 class="content-title title">Участник</h2>
                <div class="content-projects">
                    <div class="project">
                        <div class="project-header">
                            <span class="project-title">Проект 1</span>
                            <span class="project-parts">Участников: 5</span>
                        </div>
                        <div class="project-footer">
                            <span class="project-footer-title">Перейти к доске</span>
                        </div>
                    </div>
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
    </div>
</template>

<script>
    import HeaderComponent from './../components/Header.vue';

    export default {
        components: { HeaderComponent }
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

.project {
    position: relative;
    width: 24%;
    height: 170px;
    margin-right: 1%;
    padding: 10px;
    background-color: #a5a5a5;
    cursor: pointer;

    &-header {
        @include Flex(flex-start, flex-start, column);
    }

    &-title {
        padding-bottom: 5px;
        font-size: 22px;
    }

    &-footer {
        position: absolute;
        bottom: 0;
        left: 0;
        @include Flex(center, center);
        width: 100%;
        height: 30%;
        background-color: #f5f5f5;
        font-weight: 800;
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