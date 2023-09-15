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
								{{ $t('titleAplication') }}
							</v-list-item-title>

							<v-list-item-subtitle>
								{{ $t('titleAplication') }}
							</v-list-item-subtitle>
						</v-list-item-content>
					</v-list-item>
			
					<v-divider></v-divider>

					<v-list
						dense
						nav
					>
						<v-list-item
							v-for="item in menuItens"
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
			menuItens: [
				{ title: this.$t('navgation.home'), icon: 'mdi-view-dashboard', router:'home' },
				{ title: this.$t('navgation.listRequest'), icon: 'mdi-image', router:'list'},
				{ title: this.$t('navgation.product'), icon: 'mdi-dropbox', router:'product'},
			],

			right: null,
		}
	},
	
	methods: {
		navRouter(nameRouter) {
			this.$emit('close');
			this.$route.name != nameRouter ? this.$router.push({ name: nameRouter }) :  ''
		}
	},
};
</script>
