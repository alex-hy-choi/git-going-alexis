const express = require('express')
const router = express.Router()
const NuevanSchema = require('../models/Nuevan.js')
const BookSchema = require('../models/Book.js')
const MovieSchema = require('../models/Movie.js')

// NUEVAN SCHEMA

router.get('/nueva', (req, res) => {
    NuevanSchema.find(req.query)
    //'then' happens if find is succesful
    .then(nuevans => {
      console.log("succesfully got entire db!")
      console.log(nuevans)
      res.json(nuevans)
    })
    //if theres an error, 'catch' happens instead
    .catch(err => {
      console.error(err)
    })
})

//Read/get by id
router.get('/nueva/:id', (req, res) => {
    NuevanSchema.findById(req.params.id)
    .then(nuevan => {
      console.log("succesfully got one!")
      console.log(req.params)
      res.json(nuevan)
    })
    .catch(err => {
      console.error(err)
    })
})

router.get('/nueva/name/:name', (req, res) => {
  NuevanSchema.findOne({ name: req.params.name})
  .then(nuevan => {
    console.log("succesfully got one!")
    console.log(nuevan)
    res.json(nuevan)
  })
  .catch(err => {
    console.error(err)
  })
})

//we will be using the '/add' to do a POST request
router.post('/nueva/add', (req, res) => {
    // TODO:
    // Create:
    NuevanSchema.create(req.body)
    .then(nuevan => {
      console.log(NuevanSchema)
      res.json(nuevan)
    })
    .catch(err => {
      res.json(err)
    })
})

//TODO: change '/' below to be by id
router.put('/nueva/:id', (req, res) => {
    // TODO:
    // Update:
    NuevanSchema.findByIdAndUpdate(req.params.id, req.body )
    .then(updated => {
      console.log("succesfully changed one!")
      res.send(updated)
      console.log(nuevan)
    })
    .catch(err => {
      res.json(err)
    })
})

//TODO: change '/' below to be by id
router.delete('/nueva/:id', (req, res) => {
    // TODO:
    // Delete:
    NuevanSchema.findByIdAndDelete(req.params.id)
    .then(updated => {
      console.log("succesfully deleted one!")
      res.send(updated)
      console.log(NuevanSchema)
    })
    .catch(err => {
      res.json(err)
    })
})

















// BOOK SCHEMA

router.get('/book', (req, res) => {
  BookSchema.find(req.query)
  .then(books => {
    console.log("succesfully got entire db!")
    console.log(books)
    res.json(books)
  })
  .catch(err => {
    console.error(err)
  })
})

//Read/get by id
router.get('/book/:id', (req, res) => {
  BookSchema.findById(req.params.id)
  .then(book => {
    console.log("succesfully got one!")
    console.log(req.params)
    res.json(book)
  })
  .catch(err => {
    console.error(err)
  })
})

router.get('/book/name/:name', (req, res) => {
  BookSchema.findOne({ name: req.params.name})
  .then(book => {
    console.log("succesfully got one!")
    console.log(book)
    res.json(book)
  })
  .catch(err => {
    console.error(err)
  })
})

router.get('/book/author/:author', (req, res) => {
  BookSchema.find({ author: req.params.author})
  .then(book => {
    console.log("succesfully got your author!")
    console.log(book)
    res.json(book)
  })
  .catch(err => {
    console.error(err)
  })
})


//we will be using the '/add' to do a POST request
router.post('/book/add', (req, res) => {
  // TODO:
  // Create:
  BookSchema.create(req.body)
  .then(book => {
    console.log(BookSchema)
    res.json(book)
  })
  .catch(err => {
    res.json(err)
  })
})

//TODO: change '/' below to be by id
router.put('/book/:id', (req, res) => {
  // TODO:
  // Update:
  BookSchema.findByIdAndUpdate(req.params.id, req.body )
  .then(updated => {
    console.log("succesfully changed one!")
    res.send(updated)
    console.log(book)
  })
  .catch(err => {
    res.json(err)
  })
})

//TODO: change '/' below to be by id
router.delete('/book/:id', (req, res) => {
  // TODO:
  // Delete:
  BookSchema.findByIdAndDelete(req.params.id)
  .then(updated => {
    console.log("succesfully deleted one!")
    res.send(updated)
    console.log(BookSchema)
  })
  .catch(err => {
    res.json(err)
  })
})
















// MOVIE SCHEMA

router.get('/movie', (req, res) => {
  MovieSchema.find(req.query)
  //'then' happens if find is succesful
  .then(movies => {
    console.log("succesfully got entire db!")
    console.log(movies)
    res.json(movies)
  })
  //if theres an error, 'catch' happens instead
  .catch(err => {
    console.error(err)
  })
})

//Read/get by id
router.get('/movie/:id', (req, res) => {
  MovieSchema.findById(req.params.id)
  .then(movie => {
    console.log("succesfully got one!")
    console.log(req.params)
    res.json(movie)
  })
  .catch(err => {
    console.error(err)
  })
})

router.get('/movie/name/:name', (req, res) => {
  MovieSchema.findOne({ name: req.params.name})
  .then(movie => {
    console.log("succesfully got one!")
    console.log(movie)
    res.json(movie)
  })
  .catch(err => {
    console.error(err)
  })
})

router.get('/movie/director/:director', (req, res) => {
  MovieSchema.findOne({ director: req.params.director})
  .then(movie => {
    console.log("succesfully got one!")
    console.log(movie)
    res.json(movie)
  })
  .catch(err => {
    console.error(err)
  })
})


//we will be using the '/add' to do a POST request
router.post('/movie/add', (req, res) => {
  // TODO:
  // Create:
  MovieSchema.create(req.body)
  .then(movie => {
    console.log(MovieSchema)
    res.json(movie)
  })
  .catch(err => {
    res.json(err)
  })
})

//TODO: change '/' below to be by id
router.put('/book/:id', (req, res) => {
  // TODO:
  // Update:
  MovieSchema.findByIdAndUpdate(req.params.id, req.body )
  .then(updated => {
    console.log("succesfully changed one!")
    res.send(updated)
    console.log(movie)
  })
  .catch(err => {
    res.json(err)
  })
})

//TODO: change '/' below to be by id
router.delete('/book/:id', (req, res) => {
  // TODO:
  // Delete:
  MovieSchema.findByIdAndDelete(req.params.id)
  .then(updated => {
    console.log("succesfully deleted one!")
    res.send(updated)
    console.log(MovieSchema)
  })
  .catch(err => {
    res.json(err)
  })
})



module.exports = router
