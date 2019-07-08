<template>
    <div class="task im-1" id="task-1">
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
</template>

<script>
    export default {
        data() {
            return {
                dropped: false
            }
        },

        methods: {

        }
    }
</script>

<style lang="scss" scoped>
@import './../../assets/scss/config';

.task {
    position: relative;
    width: 90%;
    height: 170px;
    margin: 10px auto;
    padding: 10px;
    background-color: #a5a5a5;
    box-shadow: .4px .4px .3px #d5d5d5;
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