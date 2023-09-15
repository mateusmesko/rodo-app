<template>
    <v-container >
        <v-card 
          elevation="2"
          class="pa-2"
        >
            <v-row>

                <v-col
                md="3"
            >
                <div>
                    <v-autocomplete
                        v-model="selectedOption"
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
                    v-model="product.amontProduct"
                    label="quantidade"
                ></v-text-field>
            </v-col>

            <v-col
                md="3"
            >
                <v-text-field
                v-model="product.discountProduct"
                type="number"
                prefix="$"
                label="Desconto"
                ></v-text-field>
            </v-col>

           
            <v-col
                md="3"
            >
                <v-text-field
                v-model="product.valueProduct"
                type="number"
                prefix="$"
                label="valor"
                ></v-text-field>
                <!-- verificar depois o campo para ter 2 casas decimais -->
            </v-col>
            <v-col
                md="3"
            >
                <v-text-field
                v-model="product.observationProduct"
                label="Observação"
                ></v-text-field>
            </v-col>

            
            <v-col
                md="3"
            >
                <v-text-field
                v-model="product.suggestionProduct"
                label="Sugestão(link do produto)"
                ></v-text-field>
            </v-col>

            <v-col
                md="3"
            >
                <v-text-field
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
                this.product.codeProduct = this.selectedOption.Code
                this.product.nameProduct = this.selectedOption.Description
                console.log(this.product)
            }
        }
        
    }
</script>
