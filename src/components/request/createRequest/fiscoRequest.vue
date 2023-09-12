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
                label="Fornecedor(input)"
                ></v-text-field>
            </v-col>

            <v-col
                md="3"
            >
                <v-text-field
                label="Data de entrega(input)"
                ></v-text-field>
            </v-col>

            <v-col
                md="3"
            >
                <v-text-field
                label="Valor frete(input)"
                ></v-text-field>
            </v-col>
            <v-checkbox
        v-model="checkbox"
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
        name: 'SupplierRequest',

        data: () => ({
        
        }),
    }
</script>
