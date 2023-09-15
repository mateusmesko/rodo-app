<template>
    <v-container>
        <v-card
          elevation="2"
          class="pa-2"
        >
            <v-row>
                <v-col
                    md="3"
                >
                    <v-text-field
                        v-model="propReceived.supplier.nameSupplier"
                        label="Fornecedor(input)"
                    ></v-text-field>
                </v-col>

                <v-col
                    md="3"
                >
                    <v-text-field
                        v-model="propReceived.supplier.dateShipedSupplier"
                        label="Data de entrega(input)"
                    ></v-text-field>
                </v-col>

                <v-col
                    md="3"
                >
                    <v-text-field
                    v-model="propReceived.supplier.valueShipedSupplier"
                    label="Valor frete(input)"
                    ></v-text-field>
                </v-col>

                <v-checkbox
                    v-model="propReceived.supplier.isSupplier"
                    :label="`Definir fornecedor`"
                ></v-checkbox>

                <v-btn block color="success"
                    elevation="2" @click="showModal"
                >
                    <v-icon light>mdi-plus</v-icon>
                    Adicionar fornecedor
                </v-btn>
            </v-row>
            
    </v-card>
      
    </v-container>
</template>

<script>
    export default {
        props:{
            propReceived: Object
        },
        name: 'SupplierRequest',

        data: () => ({
        
        }),
    }
</script>





