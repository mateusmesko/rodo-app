<template>
	<div>
		<v-expansion-panels>
			
			<v-expansion-panel v-if="!isModalVisible"
				v-for="(item,i) of panel"
				:key="i"
			>

				<v-expansion-panel-header>
					{{ item.title }}
				</v-expansion-panel-header>
				<v-expansion-panel-content>
					<component :is="item.component" :propReceived="request"/>

					<v-card  
						v-if="item.tag === 3"
						class="overflow-y-auto overflow-x-hidden"
						height="300"
					>
						<v-col md="3">
							<v-btn block color="success"
								elevation="2" @click="createProduct"
							>
								<v-icon light>mdi-plus</v-icon>

								criar
							</v-btn>
						</v-col>
						
						<v-simple-table>
							<template v-slot:default>
								<thead>
									<toolbar :toobarList="headerProducts"/>
								</thead>

								<tbody>
									<ListProducts :product="item" v-for="(item, index) in request.products" :key="index"/>
								</tbody>
							</template>
						</v-simple-table>
					</v-card>
				</v-expansion-panel-content>
			</v-expansion-panel>
			<modal 	:show="isModalVisible" :product="productWorking" @close="closeModal"/>
		</v-expansion-panels>
	</div>
</template>

<script>
import InfoRequest from './inputs/infoRequest.vue'
import ProductRequest from './inputs/productRequest.vue'
import PaymentRequest from './inputs/paymentRequest.vue'
import SupplierRequest from './inputs/supplierRequest.vue'
import FiscoRequest from './inputs/fiscoRequest.vue'
import Modal from './inputs/modalProduct.vue'

import ListProducts from './products/listProducts.vue'

import Toolbar from '../../tools/toolbar'
import ButtonTooltip from '../../tools/buttonIconTooltip'

import RequestInfo from '../../../models/request/Info'
import RequestFisco from '../../../models/request/Fisco'
import RequestPayment from '../../../models/request/Payment'
import RequestProduct from '../../../models/request/Product'
import RequestSupplier from '../../../models/request/Supplier'

import ModelRequest from '../../../models/Request'

export default {
    name: 'Home',

    components:{
		InfoRequest,
		PaymentRequest,
		ProductRequest,
		SupplierRequest,
		FiscoRequest,
		Modal,
		Toolbar,
		ListProducts,
		ButtonTooltip
    },

    data: () => ({
		requestInfo: new RequestInfo,
		requestFisco: new RequestFisco,
		requestPayment: new RequestPayment,
		requestSupplier: new RequestSupplier,

		productWorking:null,

		isModalVisible: false,
		BASE_ROUTE_I18N:'request.addRequest.',

		request: null,

		headerProducts:[
			{title:'request.addRequest.headProductsList.name'},
			{title:'request.addRequest.headProductsList.value'},
			{title:'request.addRequest.headProductsList.amountSolicited'},
			{title:'request.addRequest.headProductsList.amountShiped'},
			{title:'request.addRequest.headProductsList.statusShip'},
			{title:'request.addRequest.headProductsList.valueShip'},
			{title:'request.addRequest.headProductsList.actions'}
		],

		products: [],
		
		panel:[
		
			{title:'Dados do pedido', tag:1, component:'InfoRequest'},
			{title:'Dados do fornecedor', tag:5,component:'SupplierRequest'},
			{title:'Dados de nota', tag:2, component:'FiscoRequest'},
			{title:'Produtos de pedido', tag:3, component:'ProductRequest'},
			{title:'Pagamento', tag:4, component:'PaymentRequest'},
		]
    }),

    methods:{
		valueProps(){
			
			return this.requestInfo
		},
		createProduct(){
			this.insertProduct()
			
		},
		insertProduct(){
			this.productWorking = new RequestProduct
			this.showModal()
			this.request.products.push(this.productWorking)
			console.log(this.products)
		},
		showModal() {
			this.isModalVisible = true;
		},

		closeModal() {
			this.isModalVisible = false
		},
    },
	created(){
		this.request = new ModelRequest(1, this.requestInfo, this.requestSupplier, this.requestFisco, this.requestPayment,)
		this.request.products = []
		console.log(this.request)
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
  