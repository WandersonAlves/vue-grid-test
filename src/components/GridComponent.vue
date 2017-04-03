<template>
<div class="container">
    <div class="row">
        <div class="col-md-3">
            <div class="input-group">
                <input type="text" class="form-control" v-model="searchQuery" placeholder="Search record...">
            </div>
        </div>
        <div class="col-md-5">
            <div class="input-group">
                <span class="input-group-btn">
                    <button class="btn btn-default" @click="addColumn()" type="button">Add Column</button>
                </span>
                <input type="text" class="form-control" v-model="columnName" placeholder="Column name...">
                <span class="input-group-btn">
                    <button class="btn btn-default" @click="removeColumn()" type="button">Remove Column</button>
                </span>
            </div>
        </div>
    </div>
    <br>
    <div class="row">
        <div class="col-md-12">
            <div class="panel panel-default table-responsive">
                <div class="panel-heading">Contracts Table</div>
                <modal-component v-bind:show="showModal" :onClose="onClose" v-bind:row="editingRow"></modal-component>
                <table class="table table-bordered table-hover table-sm">
                    <thead>
                        <tr>
                            <th v-for="header in columns" @click="sortBy(header)" :class="{ active: sortKey == header }">
                                {{header}}
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
        </div>
    </div>
</div>
</template>

<script>
import ModalComponent from './ModalComponent.vue';
export default {
    name: 'GridComponent',
    props: {
        columns: Array,
        gridData: Array
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
            editingRow: {},
            columnName: '',
            searchQuery: ''
        }
    },
    components: {
        ModalComponent
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
        },
        addColumn() {
            this.columns.push(this.columnName);
        },
        removeColumn() {
            var indexOf = this.columns.indexOf(this.columnName);
            this.columns = this.columns.splice(indexOf, 1);
        }
    }
}
</script>
