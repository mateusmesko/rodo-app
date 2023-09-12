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
                <v-text-field
                label="produto"
                ></v-text-field>
            </v-col>
            
            <v-col
                md="3"
            >
                <v-text-field
                label="quantidade"
                ></v-text-field>
            </v-col>

            <v-col
                md="3"
            >
                <v-text-field
                type="number"
                prefix="$"
                label="Desconto"
                ></v-text-field>
            </v-col>

           
            <v-col
                md="3"
            >
                <v-text-field
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
                label="Observação"
                ></v-text-field>
            </v-col>

            
            <v-col
                md="3"
            >
                <v-text-field
                label="Sugestão(link do produto)"
                ></v-text-field>
            </v-col>

            <v-col
                md="3"
            >
                <v-text-field
                label="Motivo de solicitação"
                ></v-text-field>
                <!-- verificar melhor como configurar o tipo de solicitação / despesa -->
            </v-col>
            
            <v-col
                md="3"
            >
                <v-text-field
                type="date"
                label="Previsão de entrega"
                ></v-text-field>
            </v-col>
            

            <v-col
                md="3"
            >
                 <v-select
                    v-model="select"
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
    export default {
        name: 'ProductRequest',

        data: () => ({
            select: { state: 'Aguardando', color: 'alert' },
            items: [
                { state: 'Cancelada' ,color: 'red' },
                { state: 'Aguardando', color: 'yellow lighten-1' },
                { state: 'Entregue', color: 'green' },
                { state: 'Entregue parcialmente', color: 'orange' }
            ],
        }),
    }
</script>
