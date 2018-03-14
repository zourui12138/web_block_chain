<template>
    <div class="footer clear">
        <div class="fl footer_left"></div>
        <div class="fr footer_right"></div>
    </div>
</template>

<script>
    export default {
        name: "footer-component"
    }
</script>

<style lang="scss" scoped>
    .footer{
        .footer_left{
            height: 88px;
            width: 345px;
            background: url('../assets/footer_left.png') no-repeat center;
        }
        .footer_right{
            height: 88px;
            width: 345px;
            background: url('../assets/footer_right.png') no-repeat center;
        }
    }
</style>
