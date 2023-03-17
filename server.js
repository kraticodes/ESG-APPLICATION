const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
// const transaction = require('./routes/transaction');
const user = require('./routes/user');
const connectDB = require('./config/db');
const cors = require("cors");
const { randomUUID } = require('crypto');
const server = require("http").createServer();
const Thread = require("./models/Thread");
const User = require('./models/User');
const Blog = require('./models/Blog');

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

dotenv.config({path: './config/config.env'});
const PORT = process.env.PORT || 5000;

const corsOptions = {
    origin: "http://localhost:3000",
};

connectDB();

const app = express();
app.use(express.json());
app.use(cors(corsOptions));
app.use('/api/user', user);





const threadList = [];

app.post("/api/create/thread", async (req, res) => {
const { thread, userId } = req.body;
// console.log(req.body);


try{
 
  const response = await Thread.create({title: thread, replies: [], likes: [], userId: userId});
  const threadList = await Thread.find({});
  res.json({
    message: "Thread created successfully!",
    threads: threadList,
});
 next();
}catch(e){
   if(e.name === 'ValidationError'){
       const messages = Object.values(e.errors).map(val => val.message);
       return res.status(400).json({
           success: false,
           error: messages
         });
   }
   else
       return res.status(500).json({
           success: false,
           error: 'Server Error'
         });
}


});

app.get("/api/all/threads", async(req, res) => {
  try{
    const transactions = await Thread.find({});

    return res.status(201).json({
     success: true,
     count: transactions.length,
     threads: transactions
   });
   next();
 }catch(e){
     return res.status(500).json({
         success: false,
         error: 'Server Error'
       });
 }
});

app.get("/api/all/blogs", async(req, res) => {
  try{
    const blogs = await Blog.find({});

    return res.status(201).json({
     success: true,
     count: blogs.length,
     blogs: blogs
   });
   next();
 }catch(e){
     return res.status(500).json({
         success: false,
         error: 'Server Error'
       });
 }
});

app.post("/api/thread/like", async (req, res) => {

  const { threadId, userId } = req.body;
  
  const threadList = await Thread.find({});
  console.log("Like me thread",threadList);
  // search for the exact post that was replied to
  const result = threadList.filter(
    (thread) => 
       thread.id === threadId
    
    );
  // gets the likes property
  console.log("LikreOId,", threadId);
  console.log("Like result",result);

  const threadLikes = result[0].likes;
  // authenticates the reaction
  const authenticateReaction = threadLikes.filter((user) => user === userId);
  // adds the users to the likes array
  if (authenticateReaction.length === 0) {
    result[0].likes = [...result[0].likes, userId];
      const newList = await Thread.findByIdAndUpdate({_id:threadId},{ likes : result[0].likes});
      return res.json({
          message: "You've reacted to the post!",
      });
  }
  // Returns an error user has reacted to the post earlier
  res.json({
      error_message: "You can only react once!",
  });
});

app.post("/api/thread/replies",async (req, res) => {
  // The post ID
  const { id } = req.body;
  const threadList = await Thread.find({});
  // searches for the post
  const result = threadList.filter(
    (thread) => 
       thread.id === id
    
    );
  // return the title and replies
  console.log(id);
  console.log("thread/replies",result);
  return res.status(201).json({
    success: true,
    replies: result[0].replies,
    title:result[0].title
  });
 

});

app.post("/api/create/reply", async (req, res) => {
  // accepts the post id, user id, and reply
  const { id, userId, reply } = req.body;
  const threadList = await Thread.find({});
  // search for the exact post that was replied to
  const result = threadList.filter((thread) => 
     thread.id === id
  );
  // // search for the user via its id
  // const userList = User.find({});
  // const user = userList.filter((u) => 
  //    u._id === useId
  // );
  // console.log(user);
  // saves the user name and reply
  console.log(" Reply Thread", result);
  result[0].replies =  [...result[0].replies , reply];
  console.log("Reply is added", result[0].replies);
  console.log(result);
   const newList = await Thread.findByIdAndUpdate({_id:id},{ replies : result[0].replies});
   console.log("Neww", newList);
  res.json({
      message: "Response added successfully!",
  });
});

app.post("/api/create/blog", async (req, res) => {
  // accepts the post id, user id, and reply
  const { title,body,author } = req.body;
  try{
 
    const response = await Blog.create({title: title, body: body, author:author});
    const blogs = await Thread.find({});
    res.json({
      message: "Blog created successfully!",
      blogs: blogs,
  });
   next();
  }catch(e){
     if(e.name === 'ValidationError'){
         const messages = Object.values(e.errors).map(val => val.message);
         return res.status(400).json({
             success: false,
             error: messages
           });
     }
     else
         return res.status(500).json({
             success: false,
             error: 'Server Error'
           });
  }
  

  
});


// app.use('/api/transaction', transaction);

// io.on("connection", (socket) => {
//     console.log(`Client ${socket.id} connected`);
  
//     // Join a conversation
//     const { roomId } = socket.handshake.query;
//     socket.join(roomId);
  
//     // Listen for new messages
//     socket.on(NEW_CHAT_MESSAGE_EVENT, (data) => {
//       io.in(roomId).emit(NEW_CHAT_MESSAGE_EVENT, data);
//     });
  
//     // Leave the room if the user closes the socket
//     socket.on("disconnect", () => {
//       console.log(`Client ${socket.id} diconnected`);
//       socket.leave(roomId);
//     });
// });
  

app.listen(PORT, console.log(`Server ruuning at ${PORT}`));