<template>
    
    <div class="card" v-for="match in matchs">
        <div class="home">
            <center>  
            <div><img class="logo" :src="match.teams.home.logo"></div>
            <div>{{match.teams.home.name}}</div>
            </center>
        </div>
        <div class = "score">
            <div class="date">
                <center>
                    date
                </center>
            </div>
            <div class="score_inputs">
                <center>
                <input class="input_score" :value ="match.goals.home" type="text" >
                <input class="input_score" :value ="match.goals.away" type="text" >
            </center>
            </div>
            <div class="cotes">
                <span class="cote">36</span>
                <span class="cote">30</span>
                <span class="cote">22</span>
            </div>
        </div>
        <div class="away">
            <center>
            <div><img class="logo" :src="match.teams.away.logo"></div>
            <div>{{match.teams.away.name}}</div>
            </center>
        </div>
        
    </div>
         
  </template>
  
  <script setup>
    import { onMounted, onUpdated, ref } from 'vue';
    const matchs = ref([])
    onMounted(()=>{
        const resp = [
    {
        "goals": {
            "home": 2,
            "away": 4
        },
        "teams": {
            "home": {
                "id": 91,
                "name": "Monaco",
                "logo": "https://media.api-sports.io/football/teams/91.png",
                "winner": false
            },
            "away": {
                "id": 110,
                "name": "Estac Troyes",
                "logo": "https://media.api-sports.io/football/teams/110.png",
                "winner": true
            }
        },
        "round": "5",
        "season": 2022
    },
    {
        "goals": {
            "home": 2,
            "away": 4
        },
        "teams": {
            "home": {
                "id": 77,
                "name": "Angers",
                "logo": "https://media.api-sports.io/football/teams/77.png",
                "winner": false
            },
            "away": {
                "id": 93,
                "name": "Reims",
                "logo": "https://media.api-sports.io/football/teams/93.png",
                "winner": true
            }
        },
        "round": "5",
        "season": 2022
    },
    {
        "goals": {
            "home": 1,
            "away": 2
        },
        "teams": {
            "home": {
                "id": 79,
                "name": "Lille",
                "logo": "https://media.api-sports.io/football/teams/79.png",
                "winner": false
            },
            "away": {
                "id": 84,
                "name": "Nice",
                "logo": "https://media.api-sports.io/football/teams/84.png",
                "winner": true
            }
        },
        "round": "5",
        "season": 2022
    },
    {
        "goals": {
            "home": 2,
            "away": 0
        },
        "teams": {
            "home": {
                "id": 82,
                "name": "Montpellier",
                "logo": "https://media.api-sports.io/football/teams/82.png",
                "winner": true
            },
            "away": {
                "id": 98,
                "name": "Ajaccio",
                "logo": "https://media.api-sports.io/football/teams/98.png",
                "winner": false
            }
        },
        "round": "5",
        "season": 2022
    },
    {
        "goals": {
            "home": 2,
            "away": 1
        },
        "teams": {
            "home": {
                "id": 80,
                "name": "Lyon",
                "logo": "https://media.api-sports.io/football/teams/80.png",
                "winner": true
            },
            "away": {
                "id": 108,
                "name": "Auxerre",
                "logo": "https://media.api-sports.io/football/teams/108.png",
                "winner": false
            }
        },
        "round": "5",
        "season": 2022
    },
    {
        "goals": {
            "home": 1,
            "away": 0
        },
        "teams": {
            "home": {
                "id": 81,
                "name": "Marseille",
                "logo": "https://media.api-sports.io/football/teams/81.png",
                "winner": true
            },
            "away": {
                "id": 99,
                "name": "Clermont Foot",
                "logo": "https://media.api-sports.io/football/teams/99.png",
                "winner": false
            }
        },
        "round": "5",
        "season": 2022
    },
    {
        "goals": {
            "home": 5,
            "away": 2
        },
        "teams": {
            "home": {
                "id": 116,
                "name": "Lens",
                "logo": "https://media.api-sports.io/football/teams/116.png",
                "winner": true
            },
            "away": {
                "id": 97,
                "name": "Lorient",
                "logo": "https://media.api-sports.io/football/teams/97.png",
                "winner": false
            }
        },
        "round": "5",
        "season": 2022
    },
    {
        "goals": {
            "home": 1,
            "away": 1
        },
        "teams": {
            "home": {
                "id": 95,
                "name": "Strasbourg",
                "logo": "https://media.api-sports.io/football/teams/95.png",
                "winner": null
            },
            "away": {
                "id": 83,
                "name": "Nantes",
                "logo": "https://media.api-sports.io/football/teams/83.png",
                "winner": null
            }
        },
        "round": "5",
        "season": 2022
    },
    {
        "goals": {
            "home": 3,
            "away": 1
        },
        "teams": {
            "home": {
                "id": 94,
                "name": "Rennes",
                "logo": "https://media.api-sports.io/football/teams/94.png",
                "winner": true
            },
            "away": {
                "id": 106,
                "name": "Stade Brestois 29",
                "logo": "https://media.api-sports.io/football/teams/106.png",
                "winner": false
            }
        },
        "round": "5",
        "season": 2022
    },
    {
        "goals": {
            "home": 0,
            "away": 3
        },
        "teams": {
            "home": {
                "id": 96,
                "name": "Toulouse",
                "logo": "https://media.api-sports.io/football/teams/96.png",
                "winner": false
            },
            "away": {
                "id": 85,
                "name": "Paris Saint Germain",
                "logo": "https://media.api-sports.io/football/teams/85.png",
                "winner": true
            }
        },
        "round": "5",
        "season": 2022
    }
]
        let temp =[]
        matchs.value = resp   
    })
   
   
  </script>
  <style>
    body{
        font-family :'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
    .card{
        display: grid;
        grid-template-columns: 30% 38% 30%;
        grid-gap: 1%;
        max-width: 500px;
        padding: 15px;
        margin-bottom: 20px;
        height: 120px;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        border-radius: 25px;
        background-color: rgb(240, 240, 240);
        margin-right: 5px;
    }


    .cote{
        padding-right: 10px;
        padding-left: 10px;
        margin-left: 5px;
        margin-right: 5px;
        border-radius: 5px;
        background-color: rgb(223, 223, 223);
        font-size: 14px;
    }
    .score{
        display: grid;
    }
    .input_score{
        height: 35px;
        width: 35px;
        font-size: 25px;
        border: 1px solid rgb(190, 189, 189);
        text-align: center;
        border-radius: 5px;
        margin-right: 10px;
        margin-left: 10px;
    }
    .logo{
        width: 80px;
        height: 80px;
    }
    .home, .away{
        margin-top: 10px;
    }
    .cotes{
        width: 100%;
    }
  </style>