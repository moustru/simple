<template>
    <div class="container account">
        <header-component></header-component>
        <div class="account-content">
            <h2 class="account-title text-bold">Личный кабинет</h2>
            <div class="account-container">
                <h3 class="account-container-title">Ваши проекты</h3>
                <div class="account-projects">
                    <div class="add-project" @click="showPopup('.popup-new-project')">
                        <img src="~/static/img/icons/plus.svg"/>
                    </div>
                    <div class="project" @click="toggleSlide('.project', 300)">
                        <div class="project-info">
                            <span class="project-title text-bold">Проект 1</span>
                            <span class="project-participants">Участников: <span class="participants-count">5</span></span>
                        </div>
                        <div class="project-link">
                            <a href="#" class="to-project text-bold">Перейти к проекту</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="account-container">
                <h3 class="account-container-title">Проекты с вашим участием</h3>
                <div class="account-projects">
                    <span class="no-projects">Вы пока не состоите ни в одном проекте</span>
                </div>
            </div>
        </div>
        <div class="bar bar-project-info">
            
        </div>
        <div class="popup popup-new-project">
            <div class="popup-content">
                <h1 class="popup-title text-bold">Новый проект</h1>
                <form method="POST" action="#" class="form-new-project">
                    <input type="text" class="input input-white" placeholder="Название проекта"/>
                    <div class="popup-container">
                        <h3 class="popup-container-title text-bold">Выберите цвет</h3>
                        <div class="choice-color">
                            <span class="choice-color-item this-color" id="color-1"></span>
                            <span class="choice-color-item" id="color-2"></span>
                            <span class="choice-color-item" id="color-3"></span>
                            <span class="choice-color-item" id="color-4"></span>
                            <span class="choice-color-item" id="color-5"></span>
                            <span class="choice-color-item" id="color-6"></span>
                            <span class="choice-color-item" id="color-7"></span>
                            <span class="choice-color-item" id="color-8"></span>
                        </div>
                    </div>
                    <div class="popup-buttons">
                        <button type="submit" class="btn btn-yes">Создать</button>
                        <a class="btn btn-no" @click="hidePopup('.popup-new-project')">Отмена</a>
                    </div>
                </form>
            </div>
        </div>
        <div class="popup">
            <div class="popup-content">
                <h1 class="popup-title text-bold">Вы действительно хотите выйти?</h1>
                <div class="popup-buttons popup-buttons-center">
                    <button class="btn btn-yes">Да</button>
                    <button class="btn btn-no">Нет</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from '@/components/Header.vue';
    import Anim from '@/assets/libs/Anim';

//    if(process.client) require('@/assets/libs/Anim');

    export default {
        name: 'account',
        components: {
            'header-component': Header
        },

        methods: {
            showPopup: function(s) {
                Anim.fadeIn(s);
            },

            hidePopup: function(s) {
                Anim.fadeOut(s);
            },

            toggleSlide: function(s, endH) {
                Anim.toggleSlide(s, endH);
            }
        }
    }
</script>

<style lang="scss">
    @import '@/assets/scss/config.scss';
    @import '@/assets/scss/main.scss';
    @import '@/assets/scss/Anim.scss';

    .account {
        &-content {
            min-height: 500px;
            padding: 9% 3% 1%;
        }

        &-title {
            padding-bottom: 30px;
            text-align: center;
            font-size: 32px;
        }

        &-container {
            &-title {
                padding-bottom: 15px;
                font-size: 26px;
                border-bottom: 2px solid #000;
            }
        }

        &-projects {
            @include Flex(flex-start, center, row, wrap);
            margin: 3% 0;

            .add-project {
                @include Flex(center, center);
                width: 24%;
                height: 180px;
                margin-right: 1%;
                border: 2px dashed #000;
                cursor: pointer;
                transition: $transition;

                img {
                    width: 64px;
                    height: 64px;
                    transition: $transition;
                }

                &:hover {
                    img {
                        width: 72px;
                        height: 72px;
                    }
                }
            }

            .project {
                position: relative;
                width: 24%;
                height: 180px;
                margin-right: 1%;
                background-color: #a5a5a5;
                box-shadow: .2px .5px .13px #a5a5a5;

                &-info {
                    @include Flex(flex-start, flex-start, column);
                    padding: 15px;
                }

                &-title {
                    padding-bottom: 5px;
                    font-size: 24px;
                }

                &-participants {
                    font-size: 16px;
                }

                &-link {
                    position: absolute;
                    @include Flex(center, center);
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 25%;
                    background-color: #fff;
                    
                    .to-project {
                        @include Flex(center, center);
                        width: 100%;
                        height: 100%;
                    }
                }
            }

            .no-projects {
                width: 100%;
                font-size: 32px;
                text-align: center;
                opacity: .6;
            }
        }
    }

    .popup {
        &-container {
            .choice-color {
                @include Flex(space-between, center, row, wrap);

                &-item {
                    width: 80px;
                    height: 80px;
                    margin-bottom: 8px;
                    background-color: #a5a5a5;
                    border: 3px solid transparent;
                    cursor: pointer;
                }

                #color {
                    &-1 { background-color: #ff5a5a; }
                    &-2 { background-color: #ffd45a; }
                    &-3 { background-color: #f5ff5a; }
                    &-4 { background-color: #b8ff5a; }
                    &-5 { background-color: #5aff85; }
                    &-6 { background-color: #5ac2ff; }
                    &-7 { background-color: #5a5fff; }
                    &-8 { background-color: #cf5aff; }
                }
            }
        }
    }
</style>