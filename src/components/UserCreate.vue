<template>
    <div class="row justify-content-center">
        <div class="col-md-5">
            <h3 class="text-center">Agregar Contacto</h3>
            <form @submit.prevent="onFormSubmit">
                <div class="form-group">
                    <label>Nombre</label>
                    <input type="text" class="form-control" v-model="contacto.nombre" required>
                </div>

                <div class="form-group">
                    <label>Email</label>
                    <input type="email" class="form-control" v-model="contacto.correo" required>
                </div>

                <div class="form-group">
                    <label>Telefono</label>
                    <input type="text" class="form-control" v-model="contacto.telefono" required>
                </div>

                <div class="form-group">
                    <button class="btn btn-primary btn-block">Agregar Contacto</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import { db } from '../firebaseDB';

    export default {
        data() {
            return {
                contacto: {
                }
            }
        },
        methods: {
            onFormSubmit(event) {
                event.preventDefault()
                db.collection('Contactos').add(this.contacto).then(() => {
                    alert("Contacto agregado Satisfactoriamente!");
                    this.contacto.nombre = ''
                    this.contacto.correo = ''
                    this.contacto.telefono = ''
                }).catch((error) => {
                    console.log(error);
                });
            }
        }
    }
</script>