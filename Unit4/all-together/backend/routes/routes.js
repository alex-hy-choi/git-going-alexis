const express = require('express')
const router = express.Router()
const BookSchema = require('../models/Book.js')
const MovieSchema = require('../models/Movie.js')
const UrlSchema = require('../models/Url.js')
const axios = require('axios')


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

// get by book title (if multiple, return multiple)
router.get('/book/title/:title', (req, res) => {
  BookSchema.findOne({ title: req.params.title})
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
  console.log("Received data:", req.body);
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
router.put('/book/update/:id', (req, res) => {
  console.log("PUT /book/update/:id called with id:", req.params.id);
  console.log("Body:", req.body);
  BookSchema.findByIdAndUpdate(req.params.id, req.body, { new: true })
  .then(updated => {
    if (!updated) {
      console.log("No document found with that ID");
      return res.status(404).send({ message: "Book not found" });
    }
    console.log("succesfully changed one!", updated);
    res.json(updated);
  })
  .catch(err => {
    console.error("Error updating book:", err);
    res.status(500).json(err);
  });
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

// get by title (if multiple, get all)
router.get('/movie/title/:title', (req, res) => {
  MovieSchema.findOne({ title: req.params.title})
  .then(movie => {
    console.log("succesfully got by title!")
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
router.put('/movie/update/:id', (req, res) => {
  console.log("PUT /movie/update/:id called with id:", req.params.id);
  console.log("Body:", req.body);
  MovieSchema.findByIdAndUpdate(req.params.id, req.body, { new: true })
  .then(updated => {
    if (!updated) {
      console.log("No document found with that ID");
      return res.status(404).send({ message: "Movie not found" });
    }
    console.log("succesfully changed one!", updated);
    res.json(updated);
  })
  .catch(err => {
    console.error("Error updating movie:", err);
    res.status(500).json(err);
  });
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


// --------------------
// URL SCHEMA

// get all urls with LinkedIn enrichment
router.get('/url', async (req, res) => {
  try {
    const urls = await UrlSchema.find(req.query);
    console.log('Successfully fetched URLs');

    if (urls.length === 0) {
      return res.json([]);
    }

    // Build comma-separated list of LinkedIn profile URLs.
    // Only include up to 25 per request as per API limits.
    // Only request enrichment for those without stored data
    const profileUrls = urls.filter(d => !d.enrichedData).map(doc => doc.url);
    const batches = [];
    while (profileUrls.length) {
      batches.push(profileUrls.splice(0, 25));
    }

    const token = (process.env.CRUSTDATA_API_TOKEN || '').trim();
    if (!token) {
      console.warn('CRUSTDATA_API_TOKEN environment variable not set. Skipping enrichment.');
      return res.json(urls);
    }

    const allEnriched = {};

    for (const batch of batches) {
      const queryParam = batch.join(',');
      try {
        const { data } = await axios.get('https://api.crustdata.com/screener/person/enrich', {
          params: { linkedin_profile_url: queryParam },
          headers: {
            Authorization: `Token ${token}`,
            'Content-Type': 'application/json',
          },
        });

        // data could be array or object; normalize to array
        const entries = Array.isArray(data) ? data : [data];
        entries.forEach(entry => {
          if (entry.linkedin_profile_url) {
            allEnriched[entry.linkedin_profile_url] = entry;
          }
        });
      } catch (apiErr) {
        console.error('Error calling Crustdata API:', apiErr?.response?.data || apiErr.message);
      }
    }

    // If new enrichment fetched, persist it
    const updatePromises = urls.map(doc => {
      const enriched = allEnriched[doc.url];
      if (enriched) {
        doc.enrichedData = enriched;
        return doc.save();
      }
      return doc;
    });
    await Promise.all(updatePromises);

    res.json(urls);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// get url by id
router.get('/url/:id', (req, res) => {
  UrlSchema.findById(req.params.id)
    .then(doc => {
      if (!doc) return res.status(404).json({ message: 'Not found' });
      res.json(doc);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json(err);
    });
});

// delete url by id
router.delete('/url/:id', (req, res) => {
  UrlSchema.findByIdAndDelete(req.params.id, { new: true })
    .then(deleted => {
      if (!deleted) return res.status(404).json({ message: 'URL not found' });
      console.log('Successfully deleted URL');
      res.json(deleted);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json(err);
    });
});

// add new url entry with enrichment on insert
router.post('/url/add', async (req, res) => {
  try {
    const { url } = req.body;
    if (!url) return res.status(400).json({ message: 'url is required' });

    // If document already exists, just return it.
    let doc = await UrlSchema.findOne({ url });
    if (doc) return res.json(doc);

    const token = (process.env.CRUSTDATA_API_TOKEN || '').trim();
    if (!token) {
      console.warn('CRUSTDATA_API_TOKEN not set – saving without enrichment');
      doc = await UrlSchema.create({ url });
      return res.json(doc);
    }

    const { data } = await axios.get('https://api.crustdata.com/screener/person/enrich', {
      params: { linkedin_profile_url: url },
      headers: { Authorization: `Token ${token}`, 'Content-Type': 'application/json' },
    });

    const entry = Array.isArray(data) ? data[0] : data;
    doc = await UrlSchema.create({ url, enrichedData: entry || null });
    res.json(doc);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router
