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
                        "dirImage" : "https://m.media-amazon.com/images/M/MV5BNDE5MTIxMTMzMV5BMl5BanBnXkFtZTcwMjMxMDYxOQ@@._V1_UX214_CR0,0,214,317_AL_.jpg",
                        "cast1": "Saoirose Roman", 
                        "cast1Image": "https://m.media-amazon.com/images/M/MV5BMjExNTM5NDE4NV5BMl5BanBnXkFtZTcwNzczMzEzOQ@@._V1_UX214_CR0,0,214,317_AL_.jpg",
                        "cast2":"Emma Watson",
                        "cast2Image" : "https://m.media-amazon.com/images/M/MV5BMTQ3ODE2NTMxMV5BMl5BanBnXkFtZTgwOTIzOTQzMjE@._V1_UY317_CR21,0,214,317_AL_.jpg"
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
                        "dirImage" : "https://m.media-amazon.com/images/M/MV5BMTU4MTY2ODExMV5BMl5BanBnXkFtZTcwMzEwNzY2NA@@._V1_UY317_CR14,0,214,317_AL_.jpg",
                        "cast1": "Daniel Craig", 
                        "cast1Image": "https://m.media-amazon.com/images/M/MV5BMjEzMjk4NDU4MF5BMl5BanBnXkFtZTcwMDMyNjQzMg@@._V1_UX214_CR0,0,214,317_AL_.jpg",
                        "cast2":"Rami Malek",
                        "cast2Image" : "https://m.media-amazon.com/images/M/MV5BODA3OTM4ODU0MV5BMl5BanBnXkFtZTgwNjQ5Njg3NjM@._V1_UX214_CR0,0,214,317_AL_.jpg"
                    }]
    }

]

app.get('/', (req, res) => {
    res.send(data)
})

app.listen(PORT, () => {
  console.log(`Example app running`)
})
