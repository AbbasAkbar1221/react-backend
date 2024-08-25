const BlogPostReact = require('../models/schema');

const blog_index_get = (req , res)=>{
    BlogPostReact.find().sort({createdAt: -1 })
    .then((blogs)=>{
        res.json(blogs);
    })
    .catch((error)=>{
        res.status(500).send("Error retrieving blogs");
    })
}
// blog_id_get
const blog_id_get = (req , res)=>{
    BlogPostReact.findById(req.params.id)
    .then((blog)=>{
        if(!blog){
            return res.status(404).send("blog not found");
        }
        res.json(blog);
    })
    .catch((err)=>{
        res.status(500).send('Error retrieving the blog');   
    })
}

// blog_create_post
const blog_create_post = (req , res)=>{
    const blog = req.body;
    console.log("blog:", blog);
    BlogPostReact.create(blog)
    .then((createdBlog)=>{
        res.status(201).json(createdBlog);
    })
    .catch((err)=>{
        res.status(500).send('Error creating the blog'); 
    })
}


// blog_delete
const blog_delete = (req , res)=>{
    BlogPostReact.findByIdAndDelete(req.params.id)
    .then((deletedBlog)=>{
        if(!deletedBlog){
            return res.status(404).send("blog not found");
        }
        res.json(deletedBlog);
    })
    .catch((err)=>{
        res.status(500).send('Error deleting the blog');
        
    })
}


module.exports = {
    blog_index_get,
    blog_id_get,
    blog_create_post,
    blog_delete
}
