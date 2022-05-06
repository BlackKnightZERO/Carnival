<template>
    <div>
        <h2>App Layout</h2>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    setup() {
        
    },
    mounted() {
        console.log('app-layout-mounted')
    }
}
</script>
