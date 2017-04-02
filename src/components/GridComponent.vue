<template>
<div class="col-md-12 table-responsive ">
    <modal-component v-bind:show="showModal" :onClose="onClose" v-bind:row="editingRow"></modal-component>
    <table class="table table-bordered table-hover table-sm">
        <thead class="thead-inverse">
            <tr>
                <th v-for="header in columns" @click="sortBy(header)" :class="{ active: sortKey == header }">
                    {{header | upperCase}}
                    <span class="glyphicon" :class="sortOrders[header] > 0 ? 'glyphicon-chevron-up' : 'glyphicon-chevron-down'"></span>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="row in filteredData">
                <td v-for="header in columns" @click="onRowClick(row)">
                    {{row[header]}}
                </td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
import ModalComponent from './ModalComponent.vue';
export default {
    name: 'GridComponent',
    props: {
        columns: Array,
        gridData: Array,
        searchQuery: String
    },
    data() {
        var sortOrders = {}
        this.columns.forEach((key) => {
            sortOrders[key] = 1
        });
        return {
            sortKey: '',
            sortOrders: sortOrders,
            showModal: false,
            editingRow: {}
        }
    },
    components: {
        ModalComponent
    },
    filters: {
        upperCase(str) {
            return str.toUpperCase();
        }
    },
    computed: {
        filteredData() {
            var sortKey = this.sortKey;
            var searchQuery = this.searchQuery && this.searchQuery.toLowerCase();
            var order = this.sortOrders[sortKey] || 1;
            var data = this.gridData;
            if (searchQuery) {
                data = data.filter((row) => {
                    return Object.keys(row).some((key) => {
                        return String(row[key]).toLowerCase().indexOf(searchQuery) > -1
                    });
                });
            }
            if (sortKey) {
                data = data.slice().sort((a, b) => {
                    a = a[sortKey]
                    b = b[sortKey]
                    return (a === b ? 0 : a > b ? 1 : -1) * order
                });
            }
            return data;
        }
    },
    methods: {
        onRowClick(row) {
            console.log(row);
            this.showModal = true;
            this.editingRow = row;
        },
        sortBy(key) {
            this.sortKey = key
            this.sortOrders[key] = this.sortOrders[key] * -1
        },
        onClose() {
            this.showModal = false;
        }
    }
}
</script>
