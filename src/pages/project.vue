<template>
    <div class="main-field">
        <header-component/>
        <h3 class="project-title title">Проект 1</h3>
        <a href="#" class="project-link">Вернуться</a>
        <div class="project-field">
            <column class="project-field-col" v-for="(col, i) in cols" :key="i" :title="col">
                <template slot="tasks">
                    <task/>
                </template>
            </column>
        </div>
    </div>
</template>

<script>
    import HeaderComponent from './../components/Header.vue';
    import Column from './../components/Project/Col.vue';
    import Task from './../components/Project/Task.vue';
    import Drag from './../assets/js/drag.js';

    export default {
        data() {
            return {
                dropped: false,
                enterTask: false,
                cols: [ 'Icebox', 'Ready for dev', 'In dev', 'In test', 'Complete' ]
            }
        },

        components: { HeaderComponent, Column, Task },

        methods: {

        },

        mounted() {
            Drag.init();
        }
    }
</script>

<style lang="scss" scoped>
@import './../assets/scss/config';

.project {
    &-title, &-link {
        display: block;
        text-align: center;
    }

    &-title {
        margin-bottom: 10px;
        font-size: 32px;
    }

    &-link {
        color: $skyblue-hover;
        font-weight: 800;
    }

    &-field {
        @include Flex;
        margin-top: 30px;
        height: 65vh;
    }
}
</style>