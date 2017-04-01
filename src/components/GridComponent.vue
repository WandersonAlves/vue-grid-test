<template>
<v-client-table :data="gridData" :columns="columns" :options="options" @row-click="onRowClick"></v-client-table>
</template>

<script>
export default {
    name: 'GridComponent',
    props: {
        columns: Array,
        gridData: Array,
        options: Object
    },
    data() {
        return {}
    },
    methods: {
        onRowClick(payload) {
            console.log(payload);
        }
    }
}
</script>
