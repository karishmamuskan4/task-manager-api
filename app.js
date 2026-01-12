import express from 'express'
import taskRoutes from './routes/taskRoutes.js'

const app = express();
const port = 5000;

app.use(express.json());
app.use('/api/tasks',taskRoutes);
app.listen(port,()=>{
    console.log("your server is running live on 5000 port ")
})