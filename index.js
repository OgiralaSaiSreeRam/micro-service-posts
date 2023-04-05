const express= require('express')
const bodyParser=require('body-parser')

const app= express()
app.use(bodyParser.json())

const {randomBytes}=require('crypto')
const posts={}

app.get('/posts',(req,res,next)=>{
    // retrieve all the posts
    res.send(posts)
})

app.post('/posts',(req,res,next)=>{
    const id=randomBytes(4).toString('hex')
    const {title}=req.body

    posts[id]={
        id,title
    }

    res.status(201).send(posts[id])
    res.end()
})

app.listen(4000,()=>{
    console.log('listen to port 4000');
})