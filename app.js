const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 3080;
const blogRoutes = require('./routes/blogRoutes');
const authRoutes = require('./routes/authRoutes');

app.use(cors());

const username = "abbas_akbar";
const password = "abbas";
const dbname = "merndb";
const DB_URI = `mongodb+srv://${username}:${password}@merncluster.yuwtlwd.mongodb.net/${dbname}?retryWrites=true&w=majority&appName=mernCluster`;

app.use(morgan('dev'));
app.use(express.json());

mongoose.connect(DB_URI)
.then((result)=>{
    app.listen(port, () => {
        console.log(`Server is running on port: ${port}`);
    });
})
.catch((err)=>{
    console.log("Failed to connect to the database");
    process.exit(1);   //process.exit(0) indicates a successful termination.
   // process.exit(1) (or any non-zero value) indicates that the process is terminating due to an error or some other issue.
})



//Create 100 blogs

// for(let i=0;i<100;i++){
//     let blog={
//         "title":`title ${i}`,
//         "summary":`summary ${i}`,
//         "content":`content ${i}`,
//         "author":`author ${i}`
//     }
//     BlogPostReact.create(blog)
//     .then((result)=>{
//         console.log("created");
        
//     })
//     .catch((err)=>{
//         console.log(err);
        
//     })
// }

app.get('/' , (req, res)=>{
    res.send("Home Page / default page");
})

app.use('/blogs', blogRoutes);

app.use('/auth', authRoutes);

// app.get('/blogs' , (req , res)=>{
//     BlogPostReact.find().sort({createdAt: -1 })
//     .then((blogs)=>{
//         res.json(blogs);
//     })
//     .catch((error)=>{
//         res.status(500).send("Error retrieving blogs");
//     })
// })

// app.get('/blogs/id/:id' , (req , res)=>{
//     BlogPostReact.findById(req.params.id)
//     .then((blog)=>{
//         if(!blog){
//             return res.status(404).send("blog not found");
//         }
//         res.json(blog);
//     })
//     .catch((err)=>{
//         res.status(500).send('Error retrieving the blog');   
//     })
// })

// app.post('/blogs' , (req , res)=>{
//     const blog = req.body;
//     BlogPostReact.create(blog)
//     .then((createdBlog)=>{
//         res.status(201).json(createdBlog);
//     })
//     .catch((err)=>{
//         res.status(500).send('Error creating the blog'); 
//     })
// })

// app.delete('/blogs/id/:id' , (req , res)=>{
//     BlogPostReact.findByIdAndDelete(req.params.id)
//     .then((deletedBlog)=>{
//         if(!deletedBlog){
//             return res.status(404).send("blog not found");
//         }
//         res.json(deletedBlog);
//     })
//     .catch((err)=>{
//         res.status(500).send('Error deleting the blog');
        
//     })
// })

