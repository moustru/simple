<template>
    <div class="projects">
        <header-component></header-component>
        <h2 class="projects-title text-bold">Проект 1</h2>
        <div class="projects-field">
            <div class="projects-col">
                <div class="projects-col-title">Icebox <span class="projects-col-count">12</span></div>
                <div class="projects-col-field">
                    <div class="task" id="task-1">
                        <div class="task-content">
                            <span class="task-content-abbr text-bold">UT-0001</span>
                            <span class="task-content-title">Задача 1</span>
                        </div>
                        <div class="task-exec">
                            <img src="~/static/img/ava.png" class="ava-small"/>
                            <span class="task-exec-user text-bold">Евгений Могирко</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="projects-col">
                <div class="projects-col-title">Ready for dev <span class="projects-col-count">12</span></div>
                <div class="projects-col-field"></div>
            </div>
            <div class="projects-col">
                <div class="projects-col-title">In dev <span class="projects-col-count">12</span></div>
                <div class="projects-col-field"></div>
            </div>
            <div class="projects-col">
                <div class="projects-col-title">In test <span class="projects-col-count">12</span></div>
                <div class="projects-col-field"></div>
            </div>
            <div class="projects-col">
                <div class="projects-col-title">In release <span class="projects-col-count">12</span></div>
                <div class="projects-col-field"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from '@/components/Header.vue';
    if(process.client) require('@/assets/js/drag');

    export default {
        name: 'project',
        components: {
            'header-component': Header
        }
    }
</script>

<style lang="scss">
    @import '@/assets/scss/config.scss';
    @import '@/assets/scss/main.scss';

    .projects {
        height: 100%;
        padding: 9% 3% 0;
        background-color: #f5f5f5;

        &-title {
            width: 100%;
            padding-bottom: 30px;
            font-size: 36px;
            text-align: center;
        }

        &-field {
            @include Flex;
        }

        &-col {
            width: 20%;
            min-height: 600px;
            border-right: 2px dashed #000;

            &:last-child {
                border: none;
            }

            &-title {
                padding: 20px;
                font-size: 22px;
                text-align: center;
                border-bottom: 2px dashed #000;
                @extend .text-bold;
            }

            &-field {
                min-height: 500px;
                padding: 20px;
            }
        }
    }

    .task {
        position: relative;
        width: 100%;
        min-width: 320px;
        max-width: 320px;
        height: 200px;
        padding: 15px;
        background-color: #a5a5a5;
        box-shadow: .2px .5px .13px #a5a5a5;
        cursor: pointer;

        &-content {
            @include Flex(flex-start, flex-start, column);
            height: 60%;
            overflow: hidden;

            &-abbr {
                padding-bottom: 5px;
                font-size: 16px;
            }

            &-title {
                width: 100%;
                font-size: 20px;
                line-height: 24px;
            }
        }

        &-exec {
            position: absolute;
            @include Flex(flex-start, center);
            bottom: 0;
            left: 0;
            width: 100%;
            height: 35%;
            padding-left: 10px;
            background-color: #fff;

            &-user {
                padding-left: 10px;
            }
        }
    }

    .enter-task {
        width: 100%;
        min-width: 320px;
        max-width: 320px;
        height: 200px;
        border: 4px dashed $blue;        
    }
</style>