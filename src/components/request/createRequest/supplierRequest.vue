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
                label="serie(input)"
                ></v-text-field>
            </v-col>

            <v-col
                md="3"
            >
                <v-text-field
                label="numero(input)"
                ></v-text-field>
            </v-col>

            <v-col
                md="3"
            >
                <v-file-input
                counter
                multiple
                label="Importar nota"
                ></v-file-input>
            </v-col>
            <v-col
                sm="8"
            >
              <v-text-field
                label="Número da chave da nota"
              ></v-text-field>
            </v-col>

            <v-col
              sm="1"
            >
                <v-tooltip bottom color="warning">
                    <template v-slot:activator="{ on, attrs }">
                        <v-icon
                            color="warning"
                            dark
                            v-bind="attrs"
                            v-on="on"
                        >
                            mdi-alert-outline
                        </v-icon>
                    </template>
                    
                    <span>  
                        <v-icon dark>
                            mdi-alert-outline
                        </v-icon>

                        Validar chave no site da sefaz
                    </span>
                </v-tooltip>
            </v-col>
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
