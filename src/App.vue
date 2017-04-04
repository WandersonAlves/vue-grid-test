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
                <h1>Hello mysterious company!</h1>
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
                <input type="checkbox" disabled aria-label=""> Use datepicker for dates
            </div>
            <div class="input-group">
                <input type="checkbox" checked disabled aria-label=""> There should be a validation of the inserted data
            </div>
            <br>
            <p>This application was made with Vue.js</p>
            <p>Source code on <a href="https://github.com/WandersonAlves/vue-grid-test"><span class="span-svg"></span></a></p>
        </div>
    </div>
    <grid-component :columns="gridColumns" :gridData="gridData"></grid-component>
</div>
</template>

<script>
import GridComponent from './components/GridComponent.vue';
export default {
    name: 'app',
    // NOTE: All variables declaration for this component
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
    // NOTE: List all components that this component use
    components: {
        GridComponent
    },
    // NOTE: List all methods that this component can use
    methods: {
        getGridData() {
            // NOTE: $http is from vue-resource-2
            this.$http.get('https://api.myjson.com/bins/n25id').then(response => {
                this.gridData = response.data.contracts;
            }, response => {});
        }
    },
    // NOTE: It's like a 'init' function from Angular 1.x.x
    mounted() {
        this.getGridData();
    }
}
</script>
<style>
body {
    padding-top: 50px;
    font-family: 'Open Sans', sans-serif !important;
}
/*This make jumbotron take all of visible height*/
.jumbotron{
    height: 100vh;
    background-image: url("/src/assets/01.png");
    min-height: 50%;
    background-repeat: no-repeat;
    background-position: center;
    -webkit-background-size: cover;
    background-size: cover;
}
.input-group {
    color: black;
}
.page-header {
    border-bottom: none;
}
.span-svg {
    content: url("/src/assets/svg/logo-github.svg");
}
</style>
