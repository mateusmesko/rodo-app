<template>
    <v-container>
        <v-card
          elevation="2"
          class="pa-2"
        >
          <v-row>
            <v-col
            v-if="showField('numberRequest')"
              sm="3"
            >
              <v-text-field
                v-model="propReceived.info.numberRequest"
                label="Número de pedido"
              ></v-text-field>
            </v-col>

          
            <v-col
            v-if="showField('startRequest')"
              md="3"
            >
              <v-text-field 
                
                type="date"
                v-model="propReceived.info.dateStartRequest"
                label="Data de emissao"
              ></v-text-field>
              <!-- COLOCAR DATA DE HOJE -->
            </v-col>
            
            <v-col
            v-if="showField('shippedRequest')"
              md="3"
            >
              <v-text-field 
                
                type="date"
                v-model="propReceived.info.dataShippedRequest"
                label="Previsão de entrega"
              ></v-text-field>
            </v-col>
            
            <v-col
              md="3"
              v-if="showField('branchRequest')"
            >
              <v-text-field
               
                v-model="propReceived.info.branchRequest"
                label="Filial"
              ></v-text-field>
            </v-col>
            
            <v-col
              md="3"
              v-if="showField('userRequest')"
            >
              <v-text-field
                
                v-model="propReceived.info.userRequest"
                label="Solicitante"
              ></v-text-field>
            </v-col>

            <v-col
              md="3"
              v-if="showField('contactRequest')"
            >
              <v-text-field
                
                v-model="propReceived.info.contactRequest"
                label="Contato"
              ></v-text-field>
            </v-col>

            <v-col
              md="3"
              v-if="showField('priorityRequest')"
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

            newRequestFieldsReturn:{
                numberRequest:true,
                startRequest:false,
                shippedRequest:false,
                branchRequest:true,
                userRequest:false,
                contactRequest:true,
                priorityRequest:true
            },
            otherTeste:{
                numberRequest:true,
                startRequest:true,
                shippedRequest:true,
                branchRequest:true,
                userRequest:false,
                contactRequest:true,
                priorityRequest:true
            }
        }),
        methods:{
            showField(field){ 
                const statusAndFieldValid = statusDefine =>{
                    const listStatus = {
                        newRequest: this.statusNewRequest(field, this.otherTeste),
                        confirmRequest: this.statusNewRequest(field, this.newRequestFieldsReturn),   
                    }
                    return listStatus[statusDefine]
                }
                
    		    return statusAndFieldValid('newRequest')
            },
            statusNewRequest(field, returnRequest){
                const newRequestFields = statusDefine =>{
                    const listStatus = returnRequest
                    return listStatus[statusDefine]
                }
    		    return newRequestFields(field)
            }
        }
    }
</script>
