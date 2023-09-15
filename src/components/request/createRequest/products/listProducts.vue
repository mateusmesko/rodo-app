<template>
    <tr>
       
        <td>{{ product.nameProduct }}</td>
        <td>{{ product.valueProduct }}</td>
        <td>{{ product.amontProduct }}</td>
        <td >{{ product.amontShipedProduct }}</td> 
        <v-alert :color="product.statusShipProduct.color">{{ product.statusShipProduct.state }}</v-alert>

        <td>
            <v-btn
                icon
                color="blue"
            >
                <v-icon>mdi-pencil</v-icon>
            </v-btn>

            <v-btn
                icon
                color="red"
            >
                <v-icon>mdi-delete</v-icon>
            </v-btn>
        </td>
    </tr>
</template>

<script>
    export default {
        name: 'ListProducts',
        props:{
            product: Object
        },

        data: () => ({
        
        }),
    }
</script>