<template>
    <div class="task"
         :id="task._id" 
         :style="{ 'background-color': task.color }" 
         @click="openTask"
         @dragstart="dragStart"
         @dragend="moveTask"  
         draggable>
        <div class="task-header">
            <span class="task-title">{{ task.title }}</span>
        </div>
        <div v-if="task.assignTo" class="task-footer">
            <div class="task-footer-img">
                <img v-if="task.assignTo.avatar" :src="task.assignTo.avatar" class="ava ava-small"/>
                <img v-else src="img/no_user.png" class="ava ava-small"/>
            </div>
            <span class="task-footer-user">{{ task.assignTo.login }}</span>
        </div>
        <div v-else class="task-footer">
            <span class="task-footer-user">Не назначена</span>
        </div>
    </div>
</template>

<script>
    export default {
        props: [ 'task', 'col' ],

        data() {
            return {
                status: null
            }
        },

        methods: {
            dragStart(ev) {
                ev.dataTransfer.dropEffect = 'move';
                ev.dataTransfer.setData('text', ev.target.getAttribute('id'));
            },

            dragEnd(ev) {
                ev.preventDefault();
            },

            // setAssignName() {
            //     const relatedUser = this.projectData.team.find(x => x.login === this.task.assignTo);
                
            // },

            openTask() {
                this.$emit('open');
            },

            moveTask(id) {
                this.$emit('move', id);
            }
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
        padding: 0 5px;
        background-color: #f5f5f5;
        font-weight: 800;

        &-user {
            margin-left: 5px;
            font-size: 13px;
        }
    }
}
</style>