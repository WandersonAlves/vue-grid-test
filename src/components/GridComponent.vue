<template>
<v-client-table :data="gridData" :columns="columns" @row-click="onRowClick"></v-client-table>
</template>

<script>
export default {
    name: 'GridComponent',
    props: {
        columns: Array,
        gridData: Array
    },
    data() {
        return {}
    },
    methods: {
        onRowClick(payload) {
            console.log(payload)
        }
    }
}
</script>
