<template>
  <div>
    <h1>Dados da API da TOTVS</h1>
    <ul>
      <li v-if="!loading">
       carregando...
      </li>
      <li v-if="loading" v-for="item in items" :key="item.code">
        Código: {{ item.Code }}, Descrição: {{ item.Description }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      apiUrl: 'http://rodoparanaimplementos120531.protheus.cloudtotvs.com.br:4050/rest/api/retail/v1/retailItem?page=1&pageSize=5000&fields=code,description',
      items: [], // Armazenará os dados da API
      loading: false
    };
  },
  mounted() {
    this.loading = false
    // Faz a solicitação GET usando o Axios
    axios
      .get(this.apiUrl)
      .then(response => {
        // Verifica se a resposta da API foi bem-sucedida (código de status 200)
        if (response.status !== 200) {
          console.error('Erro na solicitação:', response.status);
          throw new Error('Não foi possível acessar a API da TOTVS');
        }

        // Armazena os dados da API na variável 'items'
        this.items = response.data.items;

        localStorage.setItem('PRODUCTS', JSON.stringify(this.items));

        // Recupere o objeto do localStorage e converta de volta para um objeto
        const objetoSalvo = JSON.parse(localStorage.getItem('PRODUCTS')); 

        console.log(objetoSalvo)
      })
      .catch(error => {
        console.error('Erro:', error);
      });

      this.loading = true
  },
};
</script>