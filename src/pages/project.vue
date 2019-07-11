<template>
    <div class="main-field">
        <header-component :name="account.name" :login="account.login"/>
        <h3 class="project-title title">{{ projectData.title }}</h3>
        <div class="project-field">
            <column class="project-field-col" v-for="(col, i) in cols" :key="i" :title="col">
                <template slot="tasks">
                    <task v-for="(task, j) in projectData.tasks" :key="j" :task="task" :col="col" class="task"/>
                </template>
            </column>
        </div>
        <div class="add-task" @click="openModalAddTask">+</div>

        <div class="modal" v-if="modals.addTask">
            <div class="modal-header">
                <h2 class="modal-title title">Новая задача</h2>
            </div>
            <div class="modal-body">
                <input v-model="newTask.title" class="input-modal" type="text" placeholder="Заголовок задачи"/>
                <select class="input-modal" v-model="newTask.priority">
                    <option selected disabled :value="null">Выберите приоритет</option>
                    <option :value="'EXTRA'">Очень важная</option>
                    <option :value="'IMPORTANT'">Важная</option>
                    <option :value="'NOT_IMPORTANT'">Не важная</option>
                </select>
                <textarea v-model="newTask.desc" class="input-modal" rows="10" placeholder="Описание задачи"></textarea>
                <select class="input-modal" v-model="newTask.assignTo">
                    <option selected disabled>Исполнитель</option>
                    <option>Евгений Могирко</option>
                    <option>Станислав Дементьев</option>
                    <option>Филипп Хорольский</option>
                </select>
            </div>
            <div class="modal-footer">
                <button class="btns btn-yes" @click="addTask">Создать</button>
                <button class="btns btn-no" @click="closeModalAddTask">Отмена</button>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import HeaderComponent from './../components/Header.vue';
    import Column from './../components/Project/Col.vue';
    import Task from './../components/Project/Task.vue';
    import Drag from './../assets/js/drag.js';

    export default {
        data() {
            return {
                id: this.$route.params.id,
                projectId: this.$route.params.projectId,
                cols: [ 'Icebox', 'Ready for dev', 'In dev', 'In test', 'Complete' ],
                account: {},
                projectData: {},
                newTask: {
                    title: null,
                    priority: null,
                    desc: null,
                    assignTo: null
                },
                modals: {
                    addTask: false
                }
            }
        },

        components: { HeaderComponent, Column, Task },

        computed: {
            setColor() {
                switch(this.newTask.priority) {
                    case 'EXTRA':
                        return '#f1b6b6';
                        break;
                    case 'IMPORTANT':
                        return '#f1eab6';
                        break;
                    case 'NOT_IMPORTANT':
                        return '#cff1b6';
                        break;
                }                
            }
        },

        methods: {
            async getData() {
                await axios.get(`${this.id}/project/${this.projectId}`).then(res => {
                    this.projectData = res.data;
                })

                await Drag.init();
            },

            getUserInfo() {
                axios.get(`/${this.id}/account`).then(res => {
                    this.account = res.data;
                })
            },

            addTask() {
                let data = {
                    title: this.newTask.title,
                    desc: this.newTask.desc,
                    assignTo: this.newTask.assignTo,
                    priority: this.newTask.priority,
                    color: this.setColor
                }

                axios.post(`/${this.id}/project/${this.projectId}/add-task`, data).then(() => {
                    this.closeModalAddTask();
                    this.getData();
                })
            },

            openModalAddTask() {
                this.modals.addTask = true;
            },

            closeModalAddTask() {
                this.modals.addTask = false;
            }
        },

        mounted() {
            this.getData();
            this.getUserInfo();
        },

        // beforeUpdate() {
        //     Drag.init()
        // }
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