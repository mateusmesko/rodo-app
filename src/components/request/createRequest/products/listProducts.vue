<template>
    <tr>
       
        <td>{{ product.nameProduct }}</td>
        <td>teste</td>
        <td>{{ product.amontProduct }}</td>
        <td>{{ product.amontProduct }}</td>
        <td v-if="product.amontProduct">{{ product.amontProduct }}</td> 
        <td :color="product.color">{{ product.amontProduct }}</td>
        <td v-if="product.statusShipProduct > 0">{{ product.statusShipProduct }}</td>
        <td v-if="product.amontProduct == 0">Sem valor</td>
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