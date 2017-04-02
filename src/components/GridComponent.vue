<template>
<div class="col-md-12">
    <modal-component v-bind:show="showModal" :onClose="onClose" v-bind:row="editingRow"></modal-component>
    <table class="table table-responsive table-bordered table-hover table-sm">
        <thead class="thead-inverse">
            <tr>
                <th v-for="header in columns" @click="sortBy(header)" :class="{ active: sortKey == header }">
                    {{header | upperCase}}
                    <span class="arrow" :class="sortOrders[header] > 0 ? 'asc' : 'dsc'"></span>
                    <span class="glyphicon glyphicon-scissors" aria-hidden="true"></span>
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

<style>
.arrow {
    display: inline-block;
    vertical-align: middle;
    width: 0;
    height: 0;
    margin-left: 5px;
    opacity: 0.66;
}

.arrow.asc {
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-bottom: 4px solid #fff;
}

.arrow.dsc {
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid #fff;
}
</style>
