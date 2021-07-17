<template>
    <div class="row justify-content-center">
        <div class="col-md-5">
            <h3 class="text-center">Update User</h3>
            <form @submit.prevent="onUpdateForm">
                <div class="form-group">
                    <label>Nombre</label>
                    <input type="text" class="form-control" v-model="contacto.nombre" required>
                </div>

                <div class="form-group">
                    <label>Correo</label>
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
        created() {
            let dbRef = db.collection('Contactos').doc(this.$route.params.id);
            dbRef.get().then((doc) => {
                this.contacto = doc.data();
            }).catch((error) => {
                console.log(error)
            })
        },
        methods: {
            onUpdateForm(event) {
                event.preventDefault()
                db.collection('Contactos').doc(this.$route.params.id)
                .update(this.contacto).then(() => {
                    console.log("Contacto actualisado satisfactoriamente");
                    this.$router.push('/list')
                }).catch((error) => {
                    console.log(error);
                });
            }
        }
    }
</script>