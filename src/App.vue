<template>
<div>
    <p>{{msg}}</p>
    <grid-component :columns="gridColumns"
                    :gridData="gridData">
    </grid-component>
</div>
</template>

<script>
import GridComponent from './components/GridComponent.vue';
export default {
    name: 'app',
    data() {
        return {
            msg: 'Main Window Application',
            gridColumns: ['Autor', 'Ano'],
            gridData: [{
                    Autor: 'Chuck Norris',
                    Ano: Infinity
                },
                {
                    Autor: 'Bruce Lee',
                    Ano: 9000
                },
                {
                    Autor: 'Jackie Chan',
                    Ano: 7000
                },
                {
                    Autor: 'Jet Li',
                    Ano: 8000
                }
            ]
        }
    },
    components: {
        GridComponent
    }
}
</script>

<style>

</style>
