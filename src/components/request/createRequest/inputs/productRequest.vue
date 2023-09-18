<template>
    <v-container >
        
        <v-card 
          elevation="2"
          class="pa-2"
          v-if="product"
        >
        <v-form
        ref="form"
        @submit.prevent="submit"
      >
            <v-row>

                <v-col
                md="3"
            >
                <div>
                    <v-autocomplete
                    required
                        :rules="[rules.required]"
                        v-model="product.selectedOption"
                        :items="options"
                        label="Selecione um produto"
                        :filter="customFilter"
                        @input="onItemSelected"
                    ></v-autocomplete>
                </div>
            </v-col>
            
            <v-col
                md="3"
            >
                <v-text-field
                    :rules="[rules.required]"
                    v-model="product.amontProduct"
                    label="quantidade"
                ></v-text-field>
            </v-col>

            <v-col
                md="3"
            >
                <v-text-field
                    :rules="[rules.required]"
                    v-model="product.discountProduct"
                    prefix="$"
                    label="Desconto"
                ></v-text-field>
            </v-col>

           
            <v-col
                md="3"
            >
                <v-text-field
                    :rules="[rules.required]"
                    v-model="product.valueProduct"
                    prefix="$"
                    label="valor"
                ></v-text-field>
                <!-- verificar depois o campo para ter 2 casas decimais -->
            </v-col>
            <v-col
                md="3"
            >
                <v-text-field
                    :rules="[rules.required]"
                    v-model="product.observationProduct"
                    label="Observação"
                ></v-text-field>
            </v-col>

            
            <v-col
                md="3"
            >
                <v-text-field
                    :rules="[rules.required]"
                    v-model="product.suggestionProduct"
                    label="Sugestão(link do produto)"
                ></v-text-field>
            </v-col>

            <v-col
                md="3"
            >
                <v-text-field
                    :rules="[rules.required]"
                    v-model="product.reasonProduct"
                    label="Motivo de solicitação"
                ></v-text-field>
                <!-- verificar melhor como configurar o tipo de solicitação / despesa -->
            </v-col>
        </v-row>
            <v-row>
                <v-col
                    md="3"
                >
                    <v-text-field
                        :rules="[rules.required]"
                        v-model="product.dataShipDateProduct"
                        type="date"
                        label="Previsão de entrega"
                    ></v-text-field>
                </v-col>

                <v-col
                    md="3"
                >
                    <v-text-field
                        v-model="product.amontShipedProduct"
                        label="quantidade entregue"
                    ></v-text-field>
                </v-col>

                <v-col
                    md="3"
                >
                    <v-select
                        :rules="[rules.required]"
                        v-model="product.statusShipProduct"
                        :hint="`${select.state}`"
                        :items="items"
                        :color="select.color"
                        item-text="state"
                        item-value="abbr"
                        label="Status de entrega"
                        persistent-hint
                        return-object
                        single-line
                    ></v-select>
                </v-col>
            </v-row>
				
                <v-btn 
                    color="green" 
                    @click="saveModal" 
                    :disabled="!formIsValid"
                    elevation="0"
                >
                    <v-icon>
                        mdi-check
                    </v-icon>Salvar
                </v-btn>
            </v-form>
           
        </v-card>
    </v-container>
</template>

<script>
import listProducts from '../../products'
    export default {
        name: 'ProductRequest',
        props: {
            product: Object
        },
        components:{
            listProducts
            
        },
        data: () => ({
            select: { state: 'Aguardando', color: 'alert' },
            selected:{},
            rules: {
                required: value => !!value || 'Campo obrigatorio.',
                // counter: value => value.length <= 20 || 'Max 20 characters',
                // email: value => {
                // const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                // return pattern.test(value) || 'Invalid e-mail.'
                },
            items: [
                { state: 'Cancelada' ,color: 'red' },
                { state: 'Aguardando', color: 'yellow lighten-1' },
                { state: 'Entregue', color: 'green' },
                { state: 'Entregue parcialmente', color: 'orange' }
            ],
            
            selectedOption: null,
            options: [], // Aqui armazenaremos as opções do v-select
            loading: false,
       
        }),
        computed: {
            formIsValid () {
                return(
                    this.product.selectedOption &&
                    this.product.statusShipProduct
                )
            }
        },
        mounted() {
            this.loadOptionsFromLocalStorage(); 
        },
        methods:{
            loadOptionsFromLocalStorage() {
            const produtos = localStorage.getItem('apiData');
            if (produtos) {
                this.options = JSON.parse(produtos).map(item => ({
                    
                    text: `${item.Code} -> ${item.Description}` ,
                    value: item,
                }));
            
            }
     
        },
        customFilter(item, queryText, itemText) {
            const normalizedQuery = queryText.toLowerCase();
            const normalizedItemText = itemText.toLowerCase();
            return normalizedItemText.includes(normalizedQuery);
            
        },
            onItemSelected(){
                console.log('teste')
                this.product.codeProduct = this.product.selectedOption.Code
                this.product.nameProduct = this.product.selectedOption.Description
                console.log(this.product)
            },

            saveModal() {
			    this.$emit('save');
		    },
        }
    }
</script>
