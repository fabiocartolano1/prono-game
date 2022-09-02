<template>
    <div class="card card-body mt-4">
      <form @submit.prevent="onSubmit">
        <div class="form-group">
          <label>Prenom</label>
          <input v-model="form.prenom" class="form-control" required />
        </div>
  
        <div class="form-group mt-3">
          <label>Nom</label>
          <input
            v-model="form.nom"
            class="form-control"
            required
          />
        </div>
  
        <button type="submit" class="btn btn-success mt-3">
          Create User
        </button>
      </form>
    </div>
  </template>
  
  <script>
  import { createUser } from '@/firebase'
  import { reactive } from 'vue'
  import { useRouter } from 'vue-router'
  export default {
    setup() {
      const form = reactive({ nom: '', prenom: '' })
      const onSubmit = async () => {
        await createUser({ ...form })
        form.nom = ''
        form.prenom = ''
      }
      return { form, onSubmit }
    }
  }
  </script>