<template>
    <div id="app">
        <PmHeader></PmHeader>
        <RouterView></RouterView>
        <PmFooter></PmFooter>
    </div>
</template>

<script>
    import PmFooter from '@/components/layout/Footer'
    import PmHeader from '@/components/layout/Header'

    export default {
        name: 'app',
        components: {
            PmFooter,
            PmHeader
        }
    }
</script>

<style lang="scss">
    @import './scss/main.scss';
    .results {
        margin-top: 30px;
    }
    .is-active {
        border: 3px #00d1b2 solid;
    }

</style>
<style lang="css">
    @import './assets/emoji.css';
</style>
