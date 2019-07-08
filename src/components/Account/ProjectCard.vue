<template>
    <div class="project">
        <span class="project-delete">
            <img src="img/delete.svg"/>
        </span>
        <div class="project-header">
            <span class="project-title">Проект 1</span>
            <span class="project-parts">Участников: 5</span>
        </div>
        <div class="project-footer">
            <span class="project-footer-title">Перейти к доске</span>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
@import './../../assets/scss/config';

.project {
    position: relative;
    width: 24%;
    height: 170px;
    margin-right: 1%;
    padding: 10px;
    background-color: #a5a5a5;

    &-delete {
        position: absolute;
        top: 3%;
        right: 3%;
        font-size: 32px;
        cursor: pointer;
    }

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
        cursor: pointer;
    }
}
</style>