import express from 'express';
// import cors from 'cors';
import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';
import path from 'path';

const envFile = process.env.NODE_ENV === 'production' ? '.env' : '.env.local';

dotenv.config({
    path:envFile,
});

const url = process.env.DB_HOST;
const client = new MongoClient(url);

const app = express();
// app.use(cors());
app.use(express.json());

app.use('/images', express.static(path.join(__dirname, '../assets')));
app.use(express.static(
    path.resolve(__dirname, '../dist/'),
    { maxAge:'1y', etag:false }
))

async function populatedCartArray (cartIds) {
    await client.connect();
    const db = client.db('ECommerceApp-db');
    console.log(cartIds);
    // cocurrently execute multiple promises and wait them to resolve, and will be resolved to an array of documents
    const promises = Promise.all(cartIds.map((id) => db.collection('products').findOne({id})));
    return promises;
}


app.get('/api/products', async (req,res) => {
    await client.connect();
    const db = client.db('ECommerceApp-db');

    const products = await db.collection('products').find({}).toArray();
    res.send(products);
})

app.get('/api/users/:userId/cart', async (req,res) => {
    await client.connect();
    const db = client.db('ECommerceApp-db');

    // user is an object representing a user document from the "users" collection in MongoDB
    const user = await db.collection('users').findOne({id: req.params.userId});
    const cartArray = await populatedCartArray(user?.cartItems || []);
    
    res.json(cartArray);
})

app.get('/api/products/:productId', async (req,res) => {
    await client.connect();
    const db = client.db('ECommerceApp-db');

    const productId = req.params.productId;
    const product = await db.collection('products').findOne({id:productId});
    res.json(product);
})


app.post('/api/users/:userId/cart', async (req,res) => {
    const userId = req.params.userId;
    const productId = req.body.id;

    await client.connect();
    const db = client.db('ECommerceApp-db');

    const existingUser = await db.collection('users').findOne({id:userId});
    if(!existingUser) {
        await db.collection('users').insertOne({
            id: userId,
            cartItems:[],
        });
    }

    await db.collection('users').updateOne(
        {
            id: userId
        },
        {
            $addToSet: 
            {
                cartItems: productId
            }
        }
    )

    const user = await db.collection('users').findOne({id: userId});
    const cartArray = await populatedCartArray(user?.cartItems || []);
    res.json(cartArray);    
})

app.delete('/api/users/:userId/cart/:productId',async (req,res) => {
    const userId = req.params.userId;
    const productId = req.params.productId;

    await client.connect();
    const db = client.db('ECommerceApp-db');

    await db.collection('users').updateOne(
        {
            id: userId
        },
        {
            $pull:
            {
                cartItems:productId
            }
        }
    )
    const user = await db.collection('users').findOne({id: userId});
    const cartArray = await populatedCartArray(user?.cartItems || []);
    res.json(cartArray);    
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
})

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server is runing on ${port}`);
})