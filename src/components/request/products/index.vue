<template>
    <div>
        <v-autocomplete
            v-model="productData"
            :items="options"
            label="Selecione um produto"
            :filter="customFilter"
            @input="onItemSelected"
        ></v-autocomplete>
    </div>
  </template>
  
  <script>
  export default {
    props:{
        productData: Object,
    },
    data() {
        return {
            selectedOption: null,
            options: [], // Aqui armazenaremos as opções do v-select
            loading: false,
        };
    }, 
    
    methods: {
        loadOptionsFromLocalStorage() {
            const produtos = localStorage.getItem('apiData');
            if (produtos) {
                this.options = JSON.parse(produtos).map(item => ({
                    
                    text: `${item.Code} -> ${item.Description}` ,
                    value: item,
                }));
            
            }
            //console.log('teste')
     
        },
        customFilter(item, queryText, itemText) {
            const normalizedQuery = queryText.toLowerCase();
            const normalizedItemText = itemText.toLowerCase();
            return normalizedItemText.includes(normalizedQuery);
            
        },
        onItemSelected(){
            //console.log('teste')
            
        }
    },
    mounted() {
      this.loadOptionsFromLocalStorage(); 
    },
  };
  </script>
  