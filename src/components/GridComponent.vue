<template>
<div class="table-responsive">
    <table class="table table-bordered table-hover table-condensed">
        <thead>
            <tr>
                <th v-for="key in columns" @click="sortBy(key)">
                    {{key}}
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="entry in gridData">
                <td v-for="key in columns">
                    {{entry[key]}}
                </td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
export default {
    name: 'GridComponent',
    props: {
        columns: Array,
        gridData: Array,
        searchKey: String
    },
    data() {
        var sortOrders = {};
        this.columns.forEach(key => {
            sortOrders[key] = 1;
        });
        return {
            sortKey: '',
            sortOrders: sortOrders
        }
    },
    computed: {
        filteredData() {
            var sortKey = this.sortKey;
            var searchKey = this.searchKey && this.searchKey.toLowerCase();
            var order = this.sortOrders[sortKey] || 1;
            var data = this.data;
            if (searchKey) {
                data = data.filter(row => {
                    return Object.keys(row).some(key => {
                        return String(row[key]).toLowerCase().indexOf(searchKey) > -1
                    })
                })
            }
            if (sortKey) {
                data = data.slice().sort(a, b => {
                    a = a[sortKey]
                    b = b[sortKey]
                    return (a === b ? 0 : a > b ? 1 : -1) * order
                });
            }
            return data
        }
    },
    filters: {
        capitalize: function(str) {
            return str.charAt(0).toUpperCase() + str.slice(1)
        }
    },
    methods: {
        sortBy(key) {
            this.sortKey = key
            this.sortOrders[key] = this.sortOrders[key] * -1
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
