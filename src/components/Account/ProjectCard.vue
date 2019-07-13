<template>
    <div class="project" :style="{ 'background-color': project.color }">
        <span class="project-panel">
            <img src="img/delete.svg" @click="deleteProject"/>
            <img src="img/share.svg" @click="shareProject"/>
        </span>
        <div class="project-header">
            <span class="project-title">{{ project.title }}</span>
            <span class="project-parts">Участников: {{ project.team.length }}</span>
        </div>
        <div class="project-footer" @click="$router.push(`/project/${project._id}`)">
            <span class="project-footer-title">Перейти к доске</span>
        </div>
    </div>
</template>

<script>
    export default {
        props: [ 'project' ],

        methods: {
            deleteProject() {
                this.$emit('delete');
            },

            shareProject() {
                this.$emit('share');
            }
        }
    }
</script>

<style lang="scss" scoped>
@import './../../assets/scss/config';

.project {
    position: relative;
    width: 24%;
    height: 170px;
    margin-right: 1%;
    margin-bottom: 1%;
    padding: 10px;
    background-color: #a5a5a5;

    &-panel {
        position: absolute;
        top: 3%;
        right: 3%;
        @include Flex(center, center, column);
        font-size: 32px;

        img {
            width: 32px;
            height: 32px;
            margin-bottom: 5px;
            cursor: pointer;
        }
    }

    &-header {
        @include Flex(flex-start, flex-start, column);
        width: 90%;
    }

    &-title {
        padding-bottom: 5px;
        font-size: 22px;
    }

    &-parts {
        font-size: 15px;
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