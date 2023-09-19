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
				<v-expansion-panel-content v-if="request">
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
									<ListProducts :product="item" :index="index" v-for="(item, index) in request.products" @delete="deleteProduct" @edit="editProduct" :key="index"/>
									
								</tbody>
							</template>
						</v-simple-table>
					</v-card>
				</v-expansion-panel-content>
			</v-expansion-panel>
			<v-btn block color="success"
					:disabled="!request.info.numberRequest"
                    elevation="2" @click="saveRequest(request)"
                >
                    <v-icon light>mdi-plus</v-icon>
                    SALVAR PEDIDO
                </v-btn>
				<modal
					:show="isModalVisible"
					:product="productWorking"
					@close="closeModal"
					@save="saveModal"
					:isEdit="idEdit" 
				/>
		</v-expansion-panels>
	</div>
</template>

<script>
import { db } from '../../../firebaseDb'

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
	props:{
		index: {
			type: Number,
			default: null,
			},
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
		requestList:[],
		headerProducts:[
			{title:'request.addRequest.headProductsList.name'},
			{title:'request.addRequest.headProductsList.value'},
			{title:'request.addRequest.headProductsList.amountSolicited'},
			{title:'request.addRequest.headProductsList.amountShiped'},
			{title:'request.addRequest.headProductsList.statusShip'},
			{title:'request.addRequest.headProductsList.actions'}
		],

		products: [],
		idEdit: false,
		panel:[
		
			{title:'Dados do pedido', tag:1, component:'InfoRequest'},
			{title:'Dados do fornecedor', tag:5,component:'SupplierRequest'},
			{title:'Dados de nota', tag:2, component:'FiscoRequest'},
			{title:'Produtos de pedido', tag:3, component:'ProductRequest'},
			{title:'Pagamento', tag:4, component:'PaymentRequest'},
		],
		form:{
			subject:'teste',
			description:'teste'
		}
    }),
    methods:{
		valueProps(){
			return this.requestInfo
		},

		createProduct(){//
			this.insertModelProduct()
			this.showModal()
		},
		insertModelProduct(){
			this.productWorking = new RequestProduct
		},
		showModal() {
			this.isModalVisible = true
		},
		
		saveModal() {
			this.isEdited() ? this.editedRequestProduct() : this.saveNewRequestProduct()
                                                                                                                                                                                                                            
			this.closeModal()
		},
		isEdited(){
			return this.idEdit
		},
		editedRequestProduct(){
			this.request.products[this.newId] = this.productWorking
			this.idEdit = false
		},
		saveNewRequestProduct(){
			this.request.products.push(this.productWorking);
		},

		closeModal() {
			this.isModalVisible = false
		},

		saveRequest(newRequest){
			this.form.subject='thiago gomez'
			db.collection('request').add(newRequest).then(()=>{

			})
			let requestList = this.fetchAllRequest()
			
			if(this.$route.params.id+1){
				requestList[this.$route.params.id] = newRequest
				// requestList[this.$route.params.id].fisco = newRequest.fisco
				// requestList[this.$route.params.id].id = newRequest.id
				// requestList[this.$route.params.id].info = newRequest.info
				// requestList[this.$route.params.id].payment = newRequest.payment
				// requestList[this.$route.params.id].products = newRequest.products
				// requestList[this.$route.params.id].supplier = newRequest.supplier
			}else {
				requestList.push(newRequest)
			}
			this.addNewRequest(requestList)
			this.backRouteList()
		},
		fetchAllRequest(){
			const requestGet = localStorage.getItem('requestList');
			return requestGet ? JSON.parse(requestGet) : [];
		},
		addNewRequest(requestList){
			localStorage.setItem('requestList', JSON.stringify(requestList));
		},
		backRouteList(){
			this.$router.push({ name: 'list' })
		},

		deleteProduct(newId){
			this.request.products.splice(newId, 1)
		},

		editProduct(newId) {
			this.idEdit = true;
			this.productWorking = this.request.products[newId];
			this.newId = newId;
			this.showModal();
		},	

		configModel(){
			
			this.request = new ModelRequest(1, this.requestInfo, this.requestSupplier, this.requestFisco, this.requestPayment,)
			this.request.products = []
		},

		
    },

	created(){
		this.configModel()
		
		if(this.$route.params.id+1){
			

			this.request = this.fetchAllRequest()
			this.request = this.request[this.$route.params.id]
			console.log(this.request)
		}
		
	}
}
</script>
