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

// get whole schema
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

// get by id
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

// get by book name (if multiple, return multiple)
router.get('/book/name/:name', (req, res) => {
  BookSchema.find({ name: req.params.name})
  .then(book => {
    console.log("succesfully got one!")
    console.log(book)
    res.json(book)
  })
  .catch(err => {
    console.error(err)
  })
})

// get by author (if multiple, return multiple)
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

// create new book entry
router.post('/book/add', (req, res) => {
  BookSchema.create(req.body)
  .then(book => {
    console.log(BookSchema)
    res.json(book)
  })
  .catch(err => {
    res.json(err)
  })
})

// find by id and update
router.put('/book/:id', (req, res) => {
  BookSchema.findByIdAndUpdate(req.params.id, req.body, { new: true })
  .then(updated => {
    console.log("succesfully changed one!")
    res.send(updated)
  })
  .catch(err => {
    return res.json(err)
  })
})

// find by id and delete
router.delete('/book/:id', (req, res) => {
  BookSchema.findByIdAndDelete(req.params.id, { new: true })
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

// get whole schema
router.get('/movie', (req, res) => {
  MovieSchema.find(req.query)
  .then(movies => {
    console.log("succesfully got entire db!")
    console.log(movies)
    res.json(movies)
  })
  .catch(err => {
    console.error(err)
  })
})

// get by id
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

// get by name (if multiple, get all)
router.get('/movie/name/:name', (req, res) => {
  MovieSchema.find({ name: req.params.name})
  .then(movie => {
    console.log("succesfully got by name!")
    console.log(movie)
    res.json(movie)
  })
  .catch(err => {
    console.error(err)
  })
})

// get by corresponding book (if multiple, get all)
router.get('/movie/book/:book', (req, res) => {
  MovieSchema.find({ book: req.params.book})
  .then(movie => {
    console.log("succesfully got by book!")
    console.log(movie)
    res.json(movie)
  })
  .catch(err => {
    console.error(err)
  })
})

// add new movie entry
router.post('/movie/add', (req, res) => {
  MovieSchema.create(req.body)
  .then(movie => {
    console.log(MovieSchema)
    res.json(movie)
  })
  .catch(err => {
    res.json(err)
  })
})

// find by id and update
router.put('/movie/:id', (req, res) => {
  MovieSchema.findByIdAndUpdate(req.params.id, req.body, { new: true })
  .then(updated => {
    console.log("succesfully changed one!")
    res.send(updated)
  })
  .catch(err => {
    res.json(err)
  })
})

// find by id and delete
router.delete('/movie/:id', (req, res) => {
  MovieSchema.findByIdAndDelete(req.params.id, { new: true })
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
