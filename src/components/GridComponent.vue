<template>
<table class="table table-striped">
    <thead>
        <tr>
            <th v-for="key in columns">
                <p>
                    {{key}}
                </p>
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
