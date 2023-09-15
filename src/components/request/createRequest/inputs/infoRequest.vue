<template>
    <v-container>
        <v-card
          elevation="2"
          class="pa-2"
        >
          <v-row>
            <v-col
              sm="3"
            >
              <v-text-field
                v-model="propReceived.info.numberRequest"
                label="Número de pedido"
              ></v-text-field>
            </v-col>

          
            <v-col
              md="3"
            >
              <v-text-field type="date"
              v-model="propReceived.info.dateStartRequest"
                label="Data de emissao"
              ></v-text-field>
              <!-- COLOCAR DATA DE HOJE -->
            </v-col>
            
            <v-col
              md="3"
            >
              <v-text-field type="date"
              v-model="propReceived.info.dataShippedRequest"
                label="Previsão de entrega"
              ></v-text-field>
            </v-col>
            
            <v-col
              md="3"
            >
              <v-text-field
              v-model="propReceived.info.branchRequest"
                label="Filial"
              ></v-text-field>
            </v-col>
            
            <v-col
              md="3"
            >
              <v-text-field
              v-model="propReceived.info.userRequest"
                label="Solicitante"
              ></v-text-field>
            </v-col>

            <v-col
              md="3"
            >
              <v-text-field
                v-model="propReceived.info.contactRequest"
                label="Contato"
              ></v-text-field>
            </v-col>

            <v-col
              md="3"
            >
                    <v-select
                        v-model="propReceived.info.priorityRequest"
                        :hint="`Prioridade`"
                        :items="items"
                        :color="select.color"
                        item-text="state"
                        item-value="abbr"
                        label="Status"
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
    export default {
        name: 'InfoRequest',
        props:{
          propReceived: Object
        },
        data: () => ({
            select: { state: 'Baixa', color: 'alert' },
            
            items: [
                { state: 'Alta' ,color: 'red' },
                { state: 'Media', color: 'warning' },
                { state: 'Baixa', color: 'green' }
            ],
        }),
    }
</script>
