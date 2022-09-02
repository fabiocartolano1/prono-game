<template>
    <div class="card mt-4">
        <table>
            <thead>
                <th>Nom</th>
                <th>Prenom</th>
            </thead>
            <tbody>
                <tr v-for="{nom,prenom} in users">
                    <td>{{nom}}</td>
                    <td>{{prenom}}</td>
                </tr>
            </tbody>
        </table>
    </div>
  </template>
  
  <script>
  import { useLoadUsers } from '@/firebase'
  export default {
    setup() {
        const users = useLoadUsers()
    return{users}
    }
  }
  </script>