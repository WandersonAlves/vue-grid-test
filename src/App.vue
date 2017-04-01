<template>
<div>
    <p>{{msg}}</p>
    <grid-component :columns="gridColumns" :gridData="gridData">
    </grid-component>
</div>
</template>

<script>
import GridComponent from './components/GridComponent.vue';
export default {
    name: 'app',
    data() {
        return {
            msg: 'Vue Grid Test for some company!',
            gridColumns: ['Código', 'Data acordo comercial', 'Natureza', 'Comprador', 'Vendedor', 'Energia referência',
                'Energia entregue', 'Status aprovação', 'Modelo', 'Preço base contratado', 'Submercado',
                'Início fornecimento', 'Fim fornecimento', 'Início vigência', 'Fim vigência'
            ],
            gridData: []
        }
    },
    components: {
        GridComponent
    },
    methods: {
        getGridData() {
            this.$http.get('https://api.myjson.com/bins/n25id').then(response => {
                this.gridData = response.data.contracts;
            }, response => {
                // error callback
            });
        }
    },
    mounted() {
        this.getGridData();
    }
}
</script>

<style>

</style>
