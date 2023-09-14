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
                label="Número de pedido"
              ></v-text-field>
            </v-col>

          
            <v-col
              md="3"
            >
              <v-text-field type="date"
                label="Data de emissao"
              ></v-text-field>
              <!-- COLOCAR DATA DE HOJE -->
            </v-col>
            
            <v-col
              md="3"
            >
              <v-text-field type="date"
                label="Previsão de entrega"
              ></v-text-field>
            </v-col>
            
            <v-col
              md="3"
            >
              <v-text-field
                label="Filial"
              ></v-text-field>
            </v-col>
            
            <v-col
              md="3"
            >
              <v-text-field
                label="Solicitante"
              ></v-text-field>
            </v-col>

            <v-col
              md="3"
            >
              <v-text-field
                label="Contato"
              ></v-text-field>
            </v-col>

            <v-col
              md="3"
            >
                    <v-select
                        v-model="select"
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
