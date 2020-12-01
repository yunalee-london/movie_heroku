const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;


app.use(express.urlencoded({ extended: true }))
app.use(express.json())


const data = [
    { 
        "title": "Little Women",
        "image" : "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTfmqfPBu_4-lbAiQnydRIgp-O56dEPvo3yfaWImBzAfbAnooTz",
        "country": "USA",
        "year": 2019,
        "synopsis" : "Jo March reflects back and forth on her life, telling the beloved story of the March sisters - four young women, each determined to live life on her own terms.",
        "release": "2019.12.07",
        "cast_crew": [{"director": "Greta Gerwig",
                        "cast1": "Saoirose Roman", 
                        "cast2":"Emma Watson"
                    }]
    },
    { 
        "title": "No Time To Die",
        "image" : "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTjsL_VQnwmAa-wuEARqPxzJRF2q6j9RJwFeNSan_-INrXXY6Yy",
        "country": "USA",
        "year": 2021,
        "synopsis" : "James Bond has left active service. His peace is short-lived when Felix Leiter, an old friend from the CIA, turns up asking for help, leading Bond onto the trail of a mysterious villain armed with dangerous new technology.",
        "release": "2021.04.02",
        "cast_crew": [{"director": "Gary Fukunaga",
                        "cast1": "Daniel Craig", 
                        "cast2":"Rami Malek"
                    }]
    }

]

app.get('/', (req, res) => {
    res.send(data)
})

app.listen(port, () => {
  console.log(`Example app running`)
})
