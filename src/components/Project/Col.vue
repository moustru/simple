<template>
    <div class="col">
        <div class="col-head">{{ title }}</div>
        <div class="col-body">
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