<template>
    <div class="main-field">
        <header-component :name="account.name" :login="account.login"/>
        <h3 class="project-title title">{{ projectData.title }}</h3>
        <div class="project-field">
            <column class="project-field-col" v-for="(col, i) in cols" :key="i" :title="col" @drop-task="dropTask($event)">
                <template slot="tasks">
                    <task v-if="task.status === col"
                        v-for="(task, j) in projectData.tasks" :key="j"
                        :task="task" 
                        :col="col" 
                        @open="openFullTask"
                        @move="moveTask($event)"/>
                </template>
            </column>
        </div>
        <div class="add-task" @click="openModalAddTask">+</div>
        <div class="add-task-smoke" v-if="projectData.tasks && projectData.tasks.length == 0 && modals.noTasks"></div>

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
                    <option selected disabled :value="null">Исполнитель</option>
                    <option :value="'moustru'">Евгений Могирко</option>
                    <option :value="'stasonio'">Станислав Дементьев</option>
                    <option :value="'filipp'">Филипп Хорольский</option>
                </select>
            </div>
            <div class="modal-footer">
                <button class="btns btn-yes" @click="addTask">Создать</button>
                <button class="btns btn-no" @click="closeModalAddTask">Отмена</button>
            </div>
        </div>

        <div class="modal modal-fulltask" v-if="modals.fullTask">
            <div class="fulltask-container">
                <h2 class="fulltask-container-title title">Задача такая: ты за ноги, я за руки, лопату захватить не забудь, охуеть мороженого покушали</h2>
                <div class="fulltask-container-subtitle">
                    <span class="fulltask-date">Создана: 13.07.2019, 06:54</span>
                    <span class="fulltask-priority">Приоритет: Важная</span>
                </div>
                <div class="fulltask-container-assign">
                    Исполнитель:
                    <div class="fulltask-assign-img">
                        <img src="img/no_user.png" class="ava ava-small"/>
                    </div>
                    <span class="fulltask-assign-user">Евгений Могирко</span>
                </div>
                <div class="fulltask-container-desc">
                    Описание задачи:
                    <div class="fulltask-desc">
                        Лорем ипсум хуипсум
                    </div>
                </div>
            </div>
            <div class="fulltask-buttons">
                <button class="btns btn-no" @click="openDelTask">Удалить задачу</button>
                <button class="btns btn-action-1" @click="closeFullTask">Закрыть</button>                
            </div>
        </div>

        <div class="modal" v-if="modals.delTask">
            <div class="modal-header">
                <h2 class="modal-title title">Вы действительно хотите удалить задачу?</h2>
            </div>
            <div class="modal-footer">
                <button class="btns btn-yes" @click="deleteProject">Да</button>
                <button class="btns btn-no" @click="closeModalDelete">Нет</button>
            </div>            
        </div>

        <div class="modal modal-notasks" v-if="projectData.tasks && projectData.tasks.length == 0 && modals.noTasks">
            <div class="modal-header">
                <h2 class="modal-title title">Задач в проекте пока нет. Создайте первую!</h2>
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
                id: localStorage.getItem('user-id'),
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
                
                fullTask: {
                    title: null,
                    createdAt: null,
                    priority: null,
                    desc: null,
                    assignTo: null
                },

                relatedStatus: null,
                modals: {
                    addTask: false,
                    fullTask: false,
                    delTask: false,
                    noTasks: true
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
                await axios.get(`project/${this.projectId}`).then(res => {
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
                    color: this.setColor,
                    creator: this.id
                }

                axios.post(`project/${this.projectId}/add-task`, data).then(() => {
                    this.closeModalAddTask();
                    this.getData();
                })
            },

            moveTask(task) {
                axios.put(`/project/${this.projectId}/move`, {
                    id: task._id,
                    status: this.relatedStatus
                })
            },

            dropTask(id) {
                this.relatedStatus = id;
            },

            openModalAddTask() {
                this.modals.noTasks = false;
                this.modals.addTask = true;
            },

            closeModalAddTask() {
                this.modals.noTasks = true;
                this.modals.addTask = false;
            },

            openFullTask() {
                this.modals.fullTask = true;
            },

            closeFullTask() {
                this.modals.fullTask = false;
            },
            
            openDelTask() {
                this.modals.fullTask = false;
                this.modals.delTask = true;
            },

            closeDelTask() {
                this.modals.delTask = false;
            }
        },

        mounted() {
            this.getData();
            this.getUserInfo();
        }

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
    z-index: 4;

    &-smoke {
        position: fixed;
        bottom: calc(5% - 5px);
        right: calc(5% - 5px);
        width: 70px;
        height: 70px;
        border-radius: 50%;
        background-color: transparent;
        border: 2px solid #fff;
        box-shadow: .3px .3px 10px #fff;
        z-index: 3;
        animation: smokeOut 1.5s infinite;
    }

    &:hover {
        transform: scale(1.1);
    }
}

.modal {
    &-fulltask {
        @include Flex(flex-start, flex-start, column);
        padding: 30px;
    }

    &-notasks {
        z-index: 2;
    }
}

.fulltask {
    &-container {
        &-title {
            margin-bottom: 20px;
            font-size: 32px;
        }

        &-assign {
            @include Flex(flex-start, center);
            margin: 10px 0;
        }

        &-desc {
            margin-top: 20px;
            font-size: 26px;
        }
    }

    &-date {
        margin-right: 15px;
    }

    &-assign {
        &-img {
            margin: 0 10px;
        }
    }

    &-desc {
        margin-top: 10px;
        font-size: 18px;
    }

    &-buttons {
        position: absolute;
        bottom: 2%;
        left: 30px;
        @include Flex;
        width: 100%;

        .btns {
            margin-right: 20px;
        }
    }
}

@keyframes smokeOut {
    from {
        width: 30px;
        height: 30px;
        bottom: calc(5% + 25px);
        right: calc(5% + 25px);
        opacity: 1;
    }

    to {
        width: 160px;
        height: 160px;
        bottom: calc(5% - 40px);
        right: calc(5% - 40px);
        opacity: 0;
    }
}
</style>