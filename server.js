const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const router = express.Router();
const PORT = process.env.PORT || 3002;
const {Film, Castcrew, Sequelize} = require('./models')


app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(bodyParser.json())

const goodData = [
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
    },
    { 
        "title": "Wonder Woman 1984",
        "image" : "https://www.slashfilm.com/wp/wp-content/images/wonder-woman-1984-poster-new.jpg",
        "country": "USA",
        "year": 2020,
        "synopsis" : "Fast forward to the 1980s as Wonder Woman's next big screen adventure finds her facing two all-new foes: Max Lord and The Cheetah.",      
        "release": "2020.12.16(UK)",
        "cast_crew": [{"director": "Patty Jenkins",
                        "dirImage" : "https://m.media-amazon.com/images/M/MV5BMTg4NDA4NTQ5MF5BMl5BanBnXkFtZTgwOTA0Nzc0MzE@._V1_UY317_CR35,0,214,317_AL_.jpg",
                        "cast1": "Gal Gadot", 
                        "cast1Image": "https://m.media-amazon.com/images/M/MV5BMjUzZTJmZDItODRjYS00ZGRhLTg2NWQtOGE0YjJhNWVlMjNjXkEyXkFqcGdeQXVyMTg4NDI0NDM@._V1_UY317_CR51,0,214,317_AL_.jpg",
                        "cast2":"Pedro Pascal",
                        "cast2Image" : "https://m.media-amazon.com/images/M/MV5BYzQ5Yzg1NzktMDcxNC00ZDc1LWJlMjEtNTg2ZjRlOTk4ZDNjXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UY317_CR5,0,214,317_AL_.jpg"
                    }]
    },
    { 
        "title": "Parasite",
        "image" : "https://www.vintagemovieposters.co.uk/wp-content/uploads/2020/03/IMG_3746-scaled.jpeg",
        "country": "South Korea",
        "year": 2019,
        "synopsis" : "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
        "release": "2020.02.07(UK)",
        "cast_crew": [{"director": "Bong Joon Ho",
                        "dirImage" : "https://m.media-amazon.com/images/M/MV5BOGVmYzZkODgtNTQ3OS00MzgxLTllOGUtZTFjNDc4MmE1ZDcwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY317_CR108,0,214,317_AL_.jpg",
                        "cast1": "Song Kang-Ho", 
                        "cast1Image": "https://m.media-amazon.com/images/M/MV5BYjYyYzcyZTAtY2I4Yy00NGE2LThiNzYtYmVjNGIyNWU2YjVkXkEyXkFqcGdeQXVyNTI5NjIyMw@@._V1_UX214_CR0,0,214,317_AL_.jpg",
                        "cast2":"Choi Woo-sik",
                        "cast2Image" : "https://m.media-amazon.com/images/M/MV5BYzZkMzdlOWItMmUwNC00MmY0LTlkNTgtZjVmMGRhNTQwZjcyXkEyXkFqcGdeQXVyNTI5NjIyMw@@._V1_UX214_CR0,0,214,317_AL_.jpg"
                    }]
    }

]

const badData = [
    { 
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
    },
    { 
    },
    { 
        "title": "Parasite",
        "image" : "https://www.vintagemovieposters.co.uk/wp-content/uploads/2020/03/IMG_3746-scaled.jpeg",
        "country": "1000.01.01",
        "year": 2019,
        "synopsis" : 10,
        "release": 4,
        "cast_crew": [{"director": "Bong Joon Ho",
                        "dirImage" : "https://m.media-amazon.com/images/M/MV5BOGVmYzZkODgtNTQ3OS00MzgxLTllOGUtZTFjNDc4MmE1ZDcwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY317_CR108,0,214,317_AL_.jpg",
                        "cast1": "Song Kang-Ho", 
                        "cast1Image": "https://m.media-amazon.com/images/M/MV5BYjYyYzcyZTAtY2I4Yy00NGE2LThiNzYtYmVjNGIyNWU2YjVkXkEyXkFqcGdeQXVyNTI5NjIyMw@@._V1_UX214_CR0,0,214,317_AL_.jpg",
                        "cast2":"Choi Woo-sik",
                        "cast2Image" : "https://m.media-amazon.com/images/M/MV5BYzZkMzdlOWItMmUwNC00MmY0LTlkNTgtZjVmMGRhNTQwZjcyXkEyXkFqcGdeQXVyNTI5NjIyMw@@._V1_UX214_CR0,0,214,317_AL_.jpg"
                    }]
    }

]


app.get('/', (req, res) => {
    res.send(goodData)
})

app.get('/bad', (req, res) => {
    res.send(badData)
})

router.post('/',(req,res) => {
    //code to perform particular action.
    //To access POST variable use req.body()methods.
    console.log(request.body);
});

// add router in the Express app.
app.use("/", router);

app.listen(PORT, () => {
  console.log(`Example app running`)
})

/*
app.post('/submitMovie', (req, res) => {
    if (!res.title)
    {
        res.send("Please provide a title")
    }

    var movie = {
        title: res.title
    }
    userMovies.append(movie)
    res.send("success!")
})
*/