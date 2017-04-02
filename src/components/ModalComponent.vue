<template>
<transition v-if="show" name="modal">
    <div class="modal-mask" @click="close" v-show="show" transition="modal">
        <div class="modal-container" @click.stop>
            <slot>
                <h3>Editing some values of</h3>
                <form id="row-edit">
                    <p>Status Aprovação</p>
                    <input type="text" v-model="row['Status aprovação']">
                    <p>Código</p>
                    <input type="text" v-model="row['Código']">
                    <p>Comprador</p>
                    <input type="text" v-model="row['Comprador']">
                    <p>Preço base contratado</p>
                    <input type="text" v-model="row['Preço base contratado']">
                    <p>Fim vigência</p>
                    <input type="text" v-model="row['Fim vigência']">
                    <p>Energia referência</p>
                    <input type="text" v-model="row['Energia referência']">
                    <p>Energia entregue</p>
                    <input type="text" v-model="row['Energia entregue']">
                    <p>Data acordo comercial</p>
                    <input type="text" v-model="row['Data acordo comercial']">
                </form>
            </slot>
        </div>
    </div>
</transition>
</template>

<script>
export default {
    name: 'ModalComponent',
    props: ['show', 'onClose', 'row'],
    methods: {
        close() {
            this.onClose();
        }
    }
}
</script>

<style>
* {
    box-sizing: border-box;
}

.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    transition: opacity .3s ease;
}

.modal-container {
    width: 300px;
    margin: 40px auto 0;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
    margin-top: 0;
    color: #42b983;
}

.modal-body {
    margin: 20px 0;
}

.text-right {
    text-align: right;
}

.form-label {
    display: block;
    margin-bottom: 1em;
}

.form-label>.form-control {
    margin-top: 0.5em;
}

.form-control {
    display: block;
    width: 100%;
    padding: 0.5em 1em;
    line-height: 1.5;
    border: 1px solid #ddd;
}

.modal-enter,
.modal-leave {
    opacity: 0;
}

.modal-enter .modal-container,
.modal-leave .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}
</style>
