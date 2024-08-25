const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const blogController = require('../controllers/blogController');



// Middleware to parse form data
router.use(bodyParser.urlencoded({ extended: true }));

// GET request to view all blogs
router.get('/', blogController.blog_index_get );

// New route to view a single blog post
router.get('/id/:id', blogController.blog_id_get);

// POST request to create a new blog
router.post('/', blogController.blog_create_post);

// DELETE request to delete a blog
router.delete('/id/:id', blogController.blog_delete);

module.exports = router;



