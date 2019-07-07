<template>
    <div class="col">
        <div class="col-head">{{ title }}</div>
        <!-- <div class="col-body" @dragenter="dragEnter" @dragleave="dragLeave" @dragover="dragOver" @drop="dragDrop"> -->
        <div class="col-body">    
            <!-- <div class="enter-task" v-if="enterTask"></div> -->
            <slot name="tasks"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['title'],

        data() {
            return {
                enterTask: false,
            }
        },

        methods: {
            // dragEnter() {
            //     this.enterTask = true;
            // },

            // dragLeave() {
            //     this.enterTask = false;
            // },

            // dragOver(ev) {
            //     ev.preventDefault();
            // },

            // dragDrop(ev) {
            //     ev.preventDefault();

            //     var elID = ev.dataTransfer.getData('text');
            //     var el = document.getElementById(elID);
            //     this.enterTask = false;

            //     //ev.appendChild(el)
            //     console.log('Объект перетащен')
            //     // this.children.length == 0 ? this.appendChild(el) : this.insertBefore(el, this.children[0]);

            //     // this.dropped = true;

            //     // var addTask = ev.querySelector('.enter-task');
            //     // addTask.parentNode.removeChild(addTask);
            // },           
        }
    }
</script>

<style lang="scss" scoped>
@import './../../assets/scss/config';

.col {
    width: 20%;
    height: 100%;

    &-head {
        padding: 10px;
        border-bottom: 2px dashed #a5a5a5;
        font-size: 22px;
        text-align: center;
        user-select: none;
    }

    &-body {
        height: 90%;
        overflow-y: auto;
    }
}
</style>