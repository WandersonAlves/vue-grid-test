<template>
<transition v-if="show" name="modal">
    <div class="modal-mask" @click="close" v-show="show" transition="modal">
        <div class="modal-container" @click.stop>
            <div class="row">
                <div class="col-md-12">
                    <h3>Real time editing</h3>
                </div>
            </div>
            <form id="row-edit">
                <div class="row">
                    <div class="col-md-4 form-group">
                        <p>Status Aprovação</p>
                        <input type="text" v-model="row['Status aprovação']" required>
                    </div>
                    <div class="col-md-4 form-group">
                        <p>Código</p>
                        <input type="text" v-model="row['Código']" required>
                    </div>
                    <div class="col-md-4 form-group">
                        <p>Comprador</p>
                        <input type="text" v-model="row['Comprador']" required>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4 form-group">
                        <p>Preço base contratado</p>
                        <input type="text" v-model="row['Preço base contratado']" required>
                    </div>
                    <div class="col-md-4 form-group">
                        <p>Fim vigência</p>
                        <input type="text" v-model="row['Fim vigência']" required>
                    </div>
                    <div class="col-md-4 form-group">
                        <p>Energia referência</p>
                        <input type="text" v-model="row['Energia referência']" required>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4 form-group">
                        <p>Energia entregue</p>
                        <input type="text" v-model="row['Energia entregue']" required>
                    </div>
                    <div class="col-md-4 form-group">
                        <p>Data acordo comercial</p>
                        <input type="text" v-model="row['Data acordo comercial']" required>
                    </div>
                    <div class="col-md-4 form-group">
                        <p>Fim fornecimento</p>
                        <input type="text" v-model="row['Fim fornecimento']" required>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4 form-group">
                        <p>Início fornecimento</p>
                        <input type="text" v-model="row['Início fornecimento']" required>
                    </div>
                    <div class="col-md-4 form-group">
                        <p>Início vigência</p>
                        <input type="text" v-model="row['Início vigência']" required>
                    </div>
                    <div class="col-md-4 form-group">
                        <p>Modelo</p>
                        <input type="text" v-model="row['Modelo']" required>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4 form-group">
                        <p>Natureza</p>
                        <input type="text" v-model="row['Natureza']" required>
                    </div>
                    <div class="col-md-4 form-group">
                        <p>Submercado</p>
                        <input type="text" v-model="row['Submercado']" required>
                    </div>
                    <div class="col-md-4 form-group">
                        <p>Vendedor</p>
                        <input type="text" v-model="row['Vendedor']" required>
                    </div>
                </div>
            </form>
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
    width: 95%;
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
