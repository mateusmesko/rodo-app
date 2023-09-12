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
                prefix="$"
              label="valor"
            ></v-text-field>
          </v-col>

          <v-col
            md="3"
          >
            <v-select
                :items="statusPayment"
                label="status"
            ></v-select>
          </v-col>

          <v-col
            md="3"
          >
            <v-select
                :items="methodPayment"
                label="Condição de pagamento"
            ></v-select>
          </v-col>

          <v-col
            md="3"
          >
          <v-select
            :items="mutiplayerPayment"
            label="Numero de parcelas"
          ></v-select>
          </v-col>

          <v-col
            md="3"
          >
            <v-text-field
                prefix="$"
                label="valor parcela"
            ></v-text-field>
          </v-col>

          <v-col
            md="3"
          >
            <v-text-field
              label="observação"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
</template>

<script>
    export default {
        name: 'PaymentRequest',

        data: () => ({
            mutiplayerPayment: ['1x', '2x', '3x', '4x'],
            methodPayment: ['boleto', 'cartao', 'pix', 'permuta'],
            statusPayment:['Pago', 'Não pago', 'Parcialmente pago', 'Aguardando pagamento'],
        }),
    }
</script>
