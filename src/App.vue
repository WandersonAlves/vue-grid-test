<template>
<div>
    <nav class="navbar navbar-inverse navbar-fixed-top">
        <div class="container-fluid">
            <div>
                <p class="navbar-text">{{msg}}</p>
            </div>
        </div>
    </nav>
    <div class="jumbotron">
        <div class="container">
            <div class="page-header">
                <h1>Hello mysterious company! <br><small>Hope you like it!</small></h1>
            </div>
            <p>So far, we have concluded these requirements:</p>
            <div class="input-group">
                <input type="checkbox" checked disabled aria-label=""> Sort the contracts from the table columns
            </div>
            <div class="input-group">
                <input type="checkbox" checked disabled aria-label=""> Add / Remove Table Columns
            </div>
            <div class="input-group">
                <input type="checkbox" checked disabled aria-label=""> Find a line by text (from any column)
            </div>
            <div class="input-group">
                <input type="checkbox" checked disabled aria-label=""> Edit record
            </div>
            <div class="input-group">
                <input type="checkbox" disabled aria-label=""> You should use a datepicker for dates
            </div>
            <div class="input-group">
                <input type="checkbox" checked disabled aria-label=""> There should be a validation of the inserted data
            </div>
            <br>
            <p>This application was made with Vue.js</p>
            <!-- /input-group -->
        </div>
    </div>
    <grid-component :columns="gridColumns" :gridData="gridData"></grid-component>
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
            }, response => {});
        }
    },
    mounted() {
        this.getGridData();
    }
}
</script>
<style>
body {
    padding-top: 50px;
}
</style>
