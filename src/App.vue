<template>
<div class="container">
    <div class="row">
        <div class="col-md-12">
            <div class="text-center">
                <p>{{msg}}</p>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-md-12">
            <form id="search">
                Search <input name="query" v-model="searchQuery">
            </form>
            <br>
        </div>
    </div>
    <div class="row">
        <grid-component :columns="gridColumns" :gridData="gridData" :searchQuery="searchQuery"></grid-component>
    </div>
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
            gridData: [],
            searchQuery: ''
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
