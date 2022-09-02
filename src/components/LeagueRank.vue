<template>
    <button @click="round--">Past</button>
    {{round}}
    <button @click="round++">Next</button>
    <table>
        <thead>
            <th>Domicile</th>
            <th>Score</th>
            <th>Exterieur</th>
        </thead>
        <tbody>
            <tr v-for="match in matchs">
                <td>{{match.teams.home.name}} <img :src="match.teams.home.logo" width="25"></td>
                <td>{{match.goals.home}} - {{match.goals.away}}</td>
                <td>{{match.teams.away.name}} <img :src="match.teams.away.logo" width = "25"></td>
            </tr>
        </tbody>   
    </table>
  </template>
  
  <script setup>
    import { onMounted, onUpdated, ref } from 'vue';
    import {getMatchs} from '@/firebase'

    console.log('allo')
    const matchs = ref([])
    const round = ref(1)

    onMounted(async ()=>{
        matchs.value = await getMatchs(round.value)        
    })
        
    onUpdated(async ()=>{
        matchs.value = await getMatchs(round.value)        
    })
   
   
  </script>