<template>
<transition v-if="show" name="modal">
    <div class="modal-mask" @click="close" v-show="show" transition="modal">
        <div class="modal-container" @click.stop>
            <div class="row">
                <div class="col-md-12">
                    <h3>Real time editing</h3>
                </div>
            </div>
            <br>
            <vue-form :state="formstate" @submit.prevent="onSubmit">
                <div class="row">
                    <validate tag="label" class="col-md-4 form-group required-field" :class="fieldClassName(formstate.statusAprovacao)">
                        <label>Status Aprovação</label>
                        <input class="form-control" type="text" v-model.lazy.lazy="row['Status aprovação']" name="statusAprovacao" required>
                        <field-messages name="statusAprovacao">
                            <div slot="required">'Status aprovação' is a required field</div>
                        </field-messages>
                    </validate>
                    <validate tag="label" class="col-md-4 form-group required-field" :class="fieldClassName(formstate.codigo)">
                        <label>Código</label>
                        <input class="form-control" type="text" v-model.lazy.lazy="row['Código']" name="codigo" required>
                        <field-messages name="codigo">
                            <div slot="required">'Código' is a required field</div>
                        </field-messages>
                    </validate>
                    <validate tag="label" class="col-md-4 form-group required-field" :class="fieldClassName(formstate.comprador)">
                        <label>Comprador</label>
                        <input class="form-control" type="text" v-model.lazy="row['Comprador']" name="comprador" required>
                        <field-messages name="comprador">
                            <div slot="required">'Comprador' is a required field</div>
                        </field-messages>
                    </validate>
                </div>
                <div class="row">
                    <validate tag="label" class="col-md-4 form-group required-field" :class="fieldClassName(formstate.precoBase)">
                        <label>Preço base contratado</label>
                        <input class="form-control" type="text" v-model.lazy="row['Preço base contratado']" name="precoBase" required>
                        <field-messages name="precoBase">
                            <div slot="required">'Preço base contratado' is a required field</div>
                        </field-messages>
                    </validate>
                    <validate tag="label" class="col-md-4 form-group required-field" :class="fieldClassName(formstate.fimVigencia)">
                        <label>Fim vigência</label>
                        <input class="form-control" type="text" v-model.lazy="row['Fim vigência']" name="fimVigencia" required>
                        <field-messages name="fimVigencia">
                            <div slot="required">'Fim vigência' is a required field</div>
                        </field-messages>
                    </validate>
                    <validate tag="label" class="col-md-4 form-group required-field" :class="fieldClassName(formstate.energiaReferencia)">
                        <label>Energia referência</label>
                        <input class="form-control" type="text" v-model.lazy="row['Energia referência']" name="energiaReferencia" required>
                        <field-messages name="energiaReferencia">
                            <div slot="required">'Energia referência' is a required field</div>
                        </field-messages>
                    </validate>
                </div>
                <div class="row">
                    <validate tag="label" class="col-md-4 form-group required-field" :class="fieldClassName(formstate.energiaEntregue)">
                        <label>Energia entregue</label>
                        <input class="form-control" type="text" v-model.lazy="row['Energia entregue']" name="energiaEntregue" required>
                        <field-messages name="energiaEntregue">
                            <div slot="required">'Energia entregue' is a required field</div>
                        </field-messages>
                    </validate>
                    <validate tag="label" class="col-md-4 form-group required-field" :class="fieldClassName(formstate.dataComercial)">
                        <label>Data acordo comercial</label>
                        <input class="form-control" type="text" v-model.lazy="row['Data acordo comercial']" name="dataComercial" required>
                        <field-messages name="dataComercial">
                            <div slot="required">'Data acordo comercial' is a required field</div>
                        </field-messages>
                    </validate>
                    <validate tag="label" class="col-md-4 form-group required-field" :class="fieldClassName(formstate.fimFornecimento)">
                        <label>Fim fornecimento</label>
                        <input class="form-control" type="text" v-model.lazy="row['Fim fornecimento']" name="fimFornecimento" required>
                        <field-messages name="fimFornecimento">
                            <div slot="required">'Fim fornecimento' is a required field</div>
                        </field-messages>
                    </validate>
                </div>
                <div class="row">
                    <validate tag="label" class="col-md-4 form-group required-field" :class="fieldClassName(formstate.inicioFornecimento)">
                        <label>Início fornecimento</label>
                        <input class="form-control" type="text" v-model.lazy="row['Início fornecimento']" name="inicioFornecimento" required>
                        <field-messages name="inicioFornecimento">
                            <div slot="required">'Início fornecimento' is a required field</div>
                        </field-messages>
                    </validate>
                    <validate tag="label" class="col-md-4 form-group required-field" :class="fieldClassName(formstate.inicioVigencia)">
                        <label>Início vigência</label>
                        <input class="form-control" type="text" v-model.lazy="row['Início vigência']" name="inicioVigencia" required>

                        <field-messages name="inicioVigencia">
                            <div slot="required">'Início vigência' is a required field</div>
                        </field-messages>
                    </validate>
                    <validate tag="label" class="col-md-4 form-group required-field" :class="fieldClassName(formstate.modelo)">
                        <label>Modelo</label>
                        <input class="form-control" type="text" v-model.lazy="row['Modelo']" name="modelo" required>
                        <field-messages name="modelo">
                            <div slot="required">'Modelo' is a required field</div>
                        </field-messages>
                    </validate>
                </div>
                <div class="row">
                    <validate tag="label" class="col-md-4 form-group required-field" :class="fieldClassName(formstate.natureza)">
                        <label>Natureza</label>
                        <input class="form-control" type="text" v-model.lazy="row['Natureza']" name="natureza" required>
                        <field-messages name="natureza">
                            <div slot="required">'Natureza' is a required field</div>
                        </field-messages>
                    </validate>
                    <validate tag="label" class="col-md-4 form-group required-field" :class="fieldClassName(formstate.submercado)">
                        <label>Submercado</label>
                        <input class="form-control" type="text" v-model.lazy="row['Submercado']" name="submercado" required>
                        <field-messages name="submercado">
                            <div slot="required">'Submercado' is a required field</div>
                        </field-messages>
                    </validate>
                    <validate tag="label" class="col-md-4 form-group required-field" :class="fieldClassName(formstate.vendedor)">
                        <label>Vendedor</label>
                        <input class="form-control" type="text" v-model.lazy="row['Vendedor']" name="vendedor" required>
                        <field-messages name="vendedor">
                            <div slot="required">'Vendedor' is a required field</div>
                        </field-messages>
                    </validate>
                </div>
            </vue-form>
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
        },
        fieldClassName: function(field) {
            if (!field) {
                return '';
            }
            if ((field.$touched || field.$submitted) && field.$valid) {
                return 'has-success';
            }
            if ((field.$touched || field.$submitted) && field.$invalid) {
                return 'has-error';
            }
        }
    },
    data() {
        return {
            formstate: {}
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

.required-field>label::after {
    content: '*';
    color: red;
    margin-left: 0.25rem;
}
</style>
