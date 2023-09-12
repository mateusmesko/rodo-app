<template>
    <div id="app">
    <v-app id="inspire">
      <v-card
        height="400"
        width="256"
        class="mx-auto"
      >
        <v-navigation-drawer permanent>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                Application
              </v-list-item-title>
              <v-list-item-subtitle>
                subtext
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
    
          <v-divider></v-divider>
    
          <v-list
            dense
            nav
          >
            <v-list-item
              v-for="item in items"
              :key="item.title"
              @click="navRouter(item.router)"
              link
            >
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>
    
              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </v-card>
    </v-app>
  </div>
</template>
  
<script>
export default {
    data() {
        return {
          items: [
            { title: 'Home', icon: 'mdi-view-dashboard', router:'home' },
            { title: 'Lista de pedidos', icon: 'mdi-image', router:'list'},
            { title: 'Criar pedido', icon: 'mdi-help-box', router:'create'},
          ],

          right: null,
        }
    },
    methods: {
    navRouter(nameRouter) {
      this.$route.name != nameRouter ? this.$router.push({ name: nameRouter }) :  ''
    }
  },
};
</script>
