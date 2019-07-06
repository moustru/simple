<template>
    <div class="main-field">
        <header-component/>
        <h3 class="project-title title">Проект 1</h3>
        <a href="#" class="project-link">Вернуться</a>
        <div class="project-field">
            <div class="project-field-col col">
                <div class="col-head">Icebox</div>
                <div class="col-body">
                    <div class="task im-1">
                        <div class="task-header">
                            <span class="task-title">Починить бля все</span>
                        </div>
                        <div class="task-footer">
                            <div class="task-footer-img">
                                <img src="img/no_user.png" class=" ava ava-small"/>
                            </div>
                            <span class="task-footer-user">Евгений Могирко</span>
                        </div>                        
                    </div>
                </div>
            </div>
            <div class="project-field-col col">
                <div class="col-head">Ready for dev</div>
                <div class="col-body"></div>
            </div>
            <div class="project-field-col col">
                <div class="col-head">In dev</div>
                <div class="col-body"></div>
            </div>
            <div class="project-field-col col">
                <div class="col-head">In test</div>
                <div class="col-body"></div>
            </div>
            <div class="project-field-col col">
                <div class="col-head">Complete</div>
                <div class="col-body"></div>
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

        &-col {
            border-right: 2px dashed #a5a5a5;

            &:last-child {
                border-right: none;
            }
        }
    }
}

.col {
    width: 20%;
    height: 100%;

    &-head {
        padding: 10px;
        border-bottom: 2px dashed #a5a5a5;
        font-size: 22px;
        text-align: center;
    }
}

.task {
    position: relative;
    width: 90%;
    height: 170px;
    margin: 10px auto;
    padding: 10px;
    background-color: #a5a5a5;
    cursor: pointer;

    &-header {
        @include Flex(flex-start, flex-start, column);
    }

    &-title {
        padding-bottom: 5px;
        font-size: 18px;
    }

    &-footer {
        position: absolute;
        bottom: 0;
        left: 0;
        @include Flex(flex-start, center);
        width: 100%;
        height: 30%;
        background-color: #f5f5f5;
        font-weight: 800;
    }
}

.im-1 { background-color: lighten($red, 30%) }
.im-2 { background-color: lighten($yellow, 20%) }
.im-3 { background-color: lighten($green, 55%) }
</style>