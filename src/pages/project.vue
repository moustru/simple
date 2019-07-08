<template>
    <div class="main-field">
        <header-component/>
        <h3 class="project-title title">Проект 1</h3>
        <div class="project-field">
            <column class="project-field-col" v-for="(col, i) in cols" :key="i" :title="col">
                <template slot="tasks">
                    <task/>
                </template>
            </column>
        </div>
        <div class="add-task">+</div>

        <div class="modal" v-if="false">
            <div class="modal-header">
                <h2 class="modal-title title">Новая задача</h2>
            </div>
            <div class="modal-body">
                <input class="input-modal" type="text" placeholder="Заголовок задачи"/>
                <select class="input-modal">
                    <option selected disabled>Выберите приоритет</option>
                    <option>Очень важная</option>
                    <option>Важная</option>
                    <option>Не важная</option>
                </select>
                <textarea class="input-modal" rows="10" placeholder="Описание задачи"></textarea>
                <select class="input-modal">
                    <option selected disabled>Исполнитель</option>
                    <option>Евгений Могирко</option>
                    <option>Станислав Дементьев</option>
                    <option>Филипп Хорольский</option>
                </select>
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
    import Column from './../components/Project/Col.vue';
    import Task from './../components/Project/Task.vue';
    import Drag from './../assets/js/drag.js';

    export default {
        data() {
            return {
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

    &-field {
        @include Flex;
        margin-top: 30px;
        height: 65vh;
    }
}

.add-task {
    position: fixed;
    bottom: 5%;
    right: 5%;
    @include Flex(center, center);
    width: 80px;
    height: 80px;
    background-color: #a5a5a5;
    font-size: 64px;
    border-radius: 50%;
    cursor: pointer;
    transition: $transition;

    &:hover {
        transform: scale(1.1);
    }
}
</style>