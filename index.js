import express from 'express';
import userRouters from './src/routers/user.routers.js';
const app = express();

app.use(express.json());
app.use(userRouters)

app.listen(3000, () => { 
    console.log('Server is running on port 3000');
});