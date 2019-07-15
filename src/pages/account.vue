<template>
    <div class="main-field">
        <header-component :name="account.name" :login="account.login"/>
        <div class="content">
            <div class="content-admin">
                <h2 class="content-title title">Ваши доски</h2>
                <div class="content-projects">
                    <project-card v-for="(project, i) in account.projectsAdmin" 
                                  :key="i" 
                                  :project="project"
                                  @delete="openModalDelete(project._id)"
                                  @share="openModalShare(project._id)"/>
                    <div class="project-add" @click="openModalAdd">+</div>
                </div>
            </div>
            <div class="content-parts">
                <h2 class="content-title title">Участник</h2>
                <div class="content-projects">
                    <project-card v-for="(project, i) in account.projectsTeam" :key="i" :project="project"/>
                    <span class="no-projects">Вы не состоите ни в одном проекте как участник</span>
                </div>
            </div>
        </div>

        <div class="modal" v-if="modals.addProject">
            <div class="modal-header">
                <h2 class="modal-title title">Новый проект</h2>
            </div>
            <div class="modal-body">
                <input class="input-modal" v-model="newProject.title" type="text" placeholder="Название проекта"/>
                <div class="color-block">
                    <h3>Выберите цвет карточки</h3>
                    <div class="color-block-items">
                        <div class="color-block-item" 
                             v-for="(color, i) in colors" 
                             :key="i" 
                             :style="{ 'background-color': color }" 
                             :class="{ 'this-color': newProject.color == color }"
                             @click="selectColor(color)">
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btns btn-yes" @click="addProject()">Создать</button>
                <button class="btns btn-no" @click="closeModalAdd">Отмена</button>
            </div>
        </div>

        <div class="modal" v-if="modals.deleteProject">
            <div class="modal-header">
                <h2 class="modal-title title">Вы действительно хотите удалить проект?</h2>
                <span class="modal-subtitle">Восстановить проект будет невозможно!</span>
            </div>
            <div class="modal-footer">
                <button class="btns btn-yes" @click="deleteProject">Да</button>
                <button class="btns btn-no" @click="closeModalDelete">Нет</button>
            </div>
        </div>

        <div class="modal" v-if="modals.shareProject">
            <div class="modal-header">
                <h2 class="modal-title title">Приглашение участников</h2>
            </div>
            <div class="modal-body">
                <input type="text" id="share" class="input-modal" v-model="share"/>
            </div>
            <div class="modal-footer">
                <button class="btns btn-yes" @click="copyLink">Скопировать ссылку</button>
                <button class="btns btn-no" @click="closeModalShare">Закрыть</button>
            </div>
        </div>
    </div>
</template>

<script>
    import HeaderComponent from './../components/Header.vue';
    import ProjectCard from './../components/Account/ProjectCard.vue';
    import axios from 'axios';
    import { mapState, mapActions } from 'vuex';

    export default {
        data() {
            return {
                id: this.$route.params.id,
                //account: {},
                modals: {
                    addProject: false,
                    deleteProject: false,
                    shareProject: false
                },
                colors: [ '#f1b6b6', '#f1cfb6', '#f1eab6', '#cff1b6', '#b6f1e4', '#b6d3f1', '#b7b6f1', '#e0b6f1' ],
                newProject: {
                    title: null,
                    color: '#f1b6b6'
                },
                relatedProject: null,
                //share: null
            }
        },

        components: { HeaderComponent, ProjectCard },

        computed: {
            ...mapState({
                'account': state => state.account.account,
                'share': state => state.account.share
            })
        },

        methods: {
            ...mapActions('account', [
                'GET_ACCOUNT_INFO',
                'ADD_PROJECT',
                'DELETE_PROJECT',
                'GET_SHARE_LINK'
            ]),

            addProject() {
                this.ADD_PROJECT({ id: this.id, data: this.newProject }).then(() => {
                    this.closeModalAdd();
                    this.GET_ACCOUNT_INFO(this.id);                    
                })
            },

            deleteProject() {
                this.DELETE_PROJECT({ id: this.id, projectId: this.relatedProject }).then(() => {
                    this.closeModalDelete();
                    this.GET_ACCOUNT_INFO(this.id);                    
                })
                // axios.post(`/${this.id}/account/delete-project`, {
                //     projectId: this.relatedProject
                // }).then(() => {
                //     this.closeModalDelete();
                //     this.GET_ACCOUNT_INFO(this.id);
                // })
            },

            selectColor(color) {
                this.newProject.color = color;
            },

            copyLink() {
                const linkText = document.getElementById('share');
                linkText.select();
                document.execCommand('copy');
            },

            openModalAdd() {
                this.modals.addProject = true;
            },

            closeModalAdd() {
                this.modals.addProject = false;
                this.newProject = {
                    title: null,
                    color: '#f1b6b6'
                }
            },

            openModalDelete(id) {
                this.modals.deleteProject = true;
                this.relatedProject = id;
            },

            closeModalDelete() {
                this.modals.deleteProject = false;
            },

            openModalShare(id) {
                this.GET_SHARE_LINK(id).then(() => {
                    this.modals.shareProject = true;
                })
                // axios.get(`project/${id}/share`).then(res => {
                //     this.share = `http://localhost:9000/project/share/${res.data.link}`;
                //     this.modals.shareProject = true;
                // })
            },

            closeModalShare() {
                this.modals.shareProject = false;
            }            
        },

        mounted() {
            this.GET_ACCOUNT_INFO(this.id);
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

.no-projects {
    display: block;
    margin-top: 20px;
    font-size: 22px;
    color: #a5a5a5;
    user-select: none;
}

.color-block {
    width: 100%;
    margin: 20px 0;

    &-items {
        @include Flex(space-between);
        width: 100%;
        margin: 30px 0;
    }

    &-item {
        width: 90px;
        height: 90px;
        border: 2px solid transparent;
        cursor: pointer;
    }
}

.this-color {
    border: 4px solid $skyblue-hover !important;
}

.share-link {
    margin: 20px 0;
}
</style>