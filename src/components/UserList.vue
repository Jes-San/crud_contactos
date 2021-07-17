<template>
    <div class="row">
        <div class="col-md-12">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Correo</th>
                        <th>Telefono</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="contacto in contactos" :key="contacto.key">
                        <td>{{ contacto.nombre }}</td>
                        <td>{{ contacto.correo }}</td>
                        <td>{{ contacto.telefono }}</td>
                        <td>
                            <router-link :to="{name: 'edit', params: { id: contacto.key }}" class="btn btn-primary">Editar
                            </router-link>
                            <button @click.prevent="deleteUser(contacto.key)" class="btn btn-danger">Borrar</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import { db } from '../firebaseDB';
    
    export default {
        data() {
            return {
                contactos: []
            }
        },
        created() {
            db.collection('Contactos').onSnapshot((snapshotChange) => {
                this.contactos = [];
                snapshotChange.forEach((doc) => {
                    this.contactos.push({
                        key: doc.id,
                        nombre: doc.data().nombre,
                        correo: doc.data().correo,
                        telefono: doc.data().telefono
                    })
                });
            })
        },
        methods: {
            deleteUser(id){
              if (window.confirm("Realmente quieres borrar el contacto?")) {
                db.collection("Contactos").doc(id).delete().then(() => {
                    console.log("Contacto Borrado!");
                })
                .catch((error) => {
                    console.error(error);
                })
              }
            }
        }
    }
</script>

<style>
    .btn-primary {
        margin-right: 12px;
    }
</style>