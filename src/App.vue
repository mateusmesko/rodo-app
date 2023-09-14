<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <Navigation v-if="this.drawer" @close="drawerValidate"/>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawerValidate"></v-app-bar-nav-icon>

      <v-toolbar-title>{{ $t('titleAplication') }}</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Navigation from '../src/components/navigation'

export default {
  name: 'App',
  components:{
    Navigation
  },

  data: () => ({
    drawer: false 
  }),

  methods:{
    drawerValidate(){
      this.drawer = this.drawer ?  false : true
    }
  }
};
</script>
