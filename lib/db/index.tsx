import { MongoClient } from 'mongodb'

async function connection(){
    try {
        // const client = await MongoClient.connect('mongodb+srv://ramsaibusiness:cI4FjypGugWLGg5R@cluster0.hcrdqfo.mongodb.net/')
        const client = await MongoClient.connect('mongodb://0.0.0.0:27017/ecommerceNextjs')

        return client;
    } catch (error) {
        throw error
    }
}

export async function getDb(){
    const client = await connection()
    return client.db()
}