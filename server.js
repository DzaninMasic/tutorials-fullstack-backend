import express from 'express'
import cors from 'cors'

const server=express();
const PORT=7999;

const init=() => {

    server.use(express.json());
    server.use(cors());

    server.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`)
    })

}

init();