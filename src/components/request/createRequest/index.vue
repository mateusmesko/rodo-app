<template>
  <v-div>
    <v-expansion-panels>
     
        <modal 	:show="isModalVisible" 
				:title="modalTitle" 
				:content="modalContent" 
				@close="closeModal"
		/>
      <v-expansion-panel v-if="!isModalVisible"
        v-for="(item,i) of panel"
        :key="i"
      >
        <v-expansion-panel-header>
          {{ item.title }}
        </v-expansion-panel-header>

        

        <v-expansion-panel-content>
          <InfoRequest v-if="item.tag === 1" />
          <FiscoRequest v-if="item.tag === 5" />
          <SupplierRequest v-if="item.tag === 2" />
          <v-card  v-if="item.tag === 3" class="overflow-y-auto overflow-x-hidden" 
                  height="300">
                  <v-col md="3">
          <v-btn block color="success"
            elevation="2" @click="showModal"
          >
              <v-icon light>mdi-plus</v-icon>
              criar
            </v-btn>
          </v-col>
          <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">
              Name
            </th>
            <th class="text-left">
              Fornecedor
            </th>
            <th class="text-left">
              Valor
            </th>
            <th class="text-left">
              Quantidade solicitada
            </th>
          
            <th class="text-left">
              Quantidade entregue
            </th>
            <th class="text-left">
              Status de entrega
            </th>
            <th class="text-left">
              Valor de frete
            </th>
            <th class="text-left">
              Ações
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in products"
            :key="item.name"
          >
            <td>{{ item.name }}</td>
            <td>{{ item.supplier }}</td>
            <td>{{ item.value }}</td>
            <td>{{ item.amount }}</td>
            <td v-if="item.amountnow">{{ item.amountnow }}</td> 
            <td :color="item.color">{{ item.status }}</td>
            <td v-if="item.deliveryValue > 0">{{ item.deliveryValue }}</td>
            <td v-if="item.deliveryValue == 0">Sem valor</td>
            <td>
              <v-btn
                icon
                color="blue"
              >
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
              <v-btn
                icon
                color="red"
              >
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
          </v-card>
          <PaymentRequest v-if="item.tag === 4" />
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
   
  </v-div>
</template>

<script>
import InfoRequest from './infoRequest.vue'
import ProductRequest from './productRequest.vue'
import PaymentRequest from './paymentRequest.vue'
import SupplierRequest from './supplierRequest.vue'
import FiscoRequest from './fiscoRequest.vue'

import Modal from './modalProduct.vue'

export default {
    name: 'Home',

    components:{
      InfoRequest,
      PaymentRequest,
      ProductRequest,
      SupplierRequest,
      FiscoRequest,
      Modal,
    },

    props: {
      
    },

    data: () => ({
      isModalVisible: false,
      products: [
        {
          name: 'Frozen Yogurt',
          value: 159,
          amount: 5,
          amountnow: '3',
          status: 'Parcialmente entregue',
          deliveryValue: 4562,
          color:'yeallow',
          supplier:'Guilherme'
        },
        {
          name: 'Ice cream sandwich',
          value: 237,
          amount: 5,
          amountnow: 5,
          status: 'Cancelado',
          deliveryValue: 0,
          color:'red',
          supplier:'thiago'
        },
        {
          name: 'Eclair',
          value: 262,
          
          amount: 5,
          amountnow: 5,
          status: 'Aguardando entrega',
          deliveryValue: 46545,
          color:'orange',
          supplier:'Fernando'
        },
        {
          name: 'Cupcake',
          value: 305,
          amount: 5,
          amountnow: 5,
          status: 'Entregue',
          deliveryValue: 3520,
          color:'green',
          supplier:'Mesko'
        }
      ],
      panel:[
       
        {title:'Dados do pedido', tag:1},
        {title:'Dados do fornecedor', tag:5},
        {title:'Dados de nota', tag:2},
        {title:'Produtos de pedido', tag:3},
        {title:'Pagamento', tag:4},
        
      ]
    }),

    methods:{
      showModal() {
        this.isModalVisible = true;
        this.modalTitle = 'titulo'
        this.modalContent = ''
      },

      closeModal() {
        this.isModalVisible = false
        this.modalContent = null
      },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
  