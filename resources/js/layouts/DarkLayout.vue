<template>
  <Header></Header>
  <main>
    <div class="flex flex-col md:flex-row">
        <NavBar></NavBar>
        <section>
            <div id="main" class="main-content flex-1 bg-gray-100 mt-12 md:mt-2 pb-24 md:pb-5">
                
                <router-view></router-view>

            </div>
        </section>
    </div>
</main>
</template>

<script>
import Header from '../components/DarkAdmin/Header.vue'
import NavBar from '../components/DarkAdmin/NavBar.vue'
export default {
    setup(){
        
    },
    components: {
        Header,
        NavBar
    },
    mounted() {
        console.log('dark-layout-counted')
    }
}
</script>

<style>

</style>