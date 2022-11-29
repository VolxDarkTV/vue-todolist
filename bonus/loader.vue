<template>
    <div class="page-loader" v-if="!isloaded">
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
        <div class="cube"></div>
    </div>
</template>

<script>
    export default {
        data: () => {
            return{
                isloaded: false
            }
        },
        mounted(){
            document.onreadystatechange = () => {
                if(document.readyState == 'complete'){
                    this.isloaded = true;
                }
            }
            
        }
    }
</script>

<style lang="scss" scoped>
    $colors: #8CC271, #69BEEB, #F5AA39, #E9643B;
    .page-loader{
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: #333;
        z-index: 999;
    }

    .cube{
        width: 40px;
        height: 40px;
    }
</style>