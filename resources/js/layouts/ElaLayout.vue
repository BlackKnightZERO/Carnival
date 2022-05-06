<template>
    <div>
        <Navbar></Navbar>
            <div id="right-panel" class="right-panel">
                <Header></Header>
                    <router-view></router-view>
                <Footer></Footer>
            </div>
    </div>
</template>

<script>
import { useLoggedInUserStore } from '../store/loggedInUser'
import { useTemplateStateStore } from '../store/templateState'

import Navbar from '../components/ElaAdmin/NavBar.vue'
import Header from '../components/ElaAdmin/Header.vue'
import Footer from '../components/ElaAdmin/Footer.vue'

export default {

    props: ['user', 'logo', 'logoThumbnail'],

    setup(props) {
        const authStore = useLoggedInUserStore()
        authStore.setUser(props.user)

        const templateStore = useTemplateStateStore()
        templateStore.setLogo(props.logo)
        templateStore.setLogoThumbnail(props.logoThumbnail)

        console.log(templateStore.$state)
    },
    components: {
        Navbar,
        Header,
        Footer
    },
    mounted(){
        console.log('ela-admin-layout-mounted')
    }
}
</script>

<style>

</style>