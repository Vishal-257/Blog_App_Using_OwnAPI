import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 4000;

let posts = [
  {
    id: 1,
    title: "The Rise of Decentralized Finance",
    content:
      "Decentralized Finance (DeFi) is an emerging and rapidly evolving field in the blockchain industry. It refers to the shift from traditional, centralized financial systems to peer-to-peer finance enabled by decentralized technologies built on Ethereum and other blockchains. With the promise of reduced dependency on the traditional banking sector, DeFi platforms offer a wide range of services, from lending and borrowing to insurance and trading.",
    author: "Alex Thompson",
    date: "2023-08-01T10:00:00Z",
  },
  {
    id: 2,
    title: "The Impact of Artificial Intelligence on Modern Businesses",
    content:
      "Artificial Intelligence (AI) is no longer a concept of the future. It's very much a part of our present, reshaping industries and enhancing the capabilities of existing systems. From automating routine tasks to offering intelligent insights, AI is proving to be a boon for businesses. With advancements in machine learning and deep learning, businesses can now address previously insurmountable problems and tap into new opportunities.",
    author: "Mia Williams",
    date: "2023-08-05T14:30:00Z",
  },
  {
    id: 3,
    title: "Sustainable Living: Tips for an Eco-Friendly Lifestyle",
    content:
      "Sustainability is more than just a buzzword; it's a way of life. As the effects of climate change become more pronounced, there's a growing realization about the need to live sustainably. From reducing waste and conserving energy to supporting eco-friendly products, there are numerous ways we can make our daily lives more environmentally friendly. This post will explore practical tips and habits that can make a significant difference.",
    author: "Samuel Green",
    date: "2023-08-10T09:15:00Z",
  },
];

let lastId = 3;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/posts",(req,res)=>{
  res.json(posts)
})

app.post("/posts",(req,res)=>{
  let id = lastId+1
  let newTitle = req.body.title
  let newContent = req.body.content
  let newAuthor = req.body.author
  let newDate = new Date()
  const newPost = {
    id: id,
    title: newTitle,
    content: newContent,
    author: newAuthor,
    date: newDate
  }
  posts.push(newPost);
  lastId = id  
  res.json(posts)
})

app.patch("/posts/:id",(req,res)=>{
  let oldPost
  for(let i = 0;i<posts.length;i++){
    if(posts[i].id == req.params.id){
      oldPost = posts[i]
    }
  }
  let updatePost = {
    title: req.body.title || oldPost.title,
    content: req.body.content || oldPost.content,
    author: req.body.author || oldPost.author
  }
  res.json(post)
})


app.delete("/posts/:id",(req,res)=>{
  let i = 0
  for(i;i<posts.length;i++){
    if(posts[i].id==req.params.id){
      break
    }
  }
  if(i<posts.length){
    posts.splice(i,1)
    res.status(200).json({message: "Successfully deleted."})
  }else{
    res.status(404).json({error: "Post Not Found."})
  }
})

app.listen(port, () => {
  console.log(`API is running at http://localhost:${port}`);
});
