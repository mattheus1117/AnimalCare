import Fastify from 'fastify';
import cookie from '@fastify/cookie';
import cors from '@fastify/cors';
import multipart from '@fastify/multipart';
import { routes } from './routes';
import dotenv from "dotenv";

const app = Fastify({ logger: true })

// gerar Token do usuário
dotenv.config();

// cookies
app.register(cookie, {
  secret: process.env.COOKIE_SECRET || 'default_cookie_secret', // se quiser usar cookies assinados
});

app.register(multipart, {
  attachFieldsToBody: true, // Faz com que os campos fiquem acessíveis via request.body
  limits: {
    fileSize: 10 * 1024 * 1024, // Limite de 10MB por arquivo
  },
});

// Tratamento de exceções
app.setErrorHandler((error, request, reply)=> {
    reply.code(400).send({ message: error.message })
})

const start = async() => {

    await app.register(cors, {
        origin: 'http://localhost:5173', // Front-end
        credentials: true                // Para aceitar cookies no front
    });

    await app.register(routes);

    try{
        await app.listen({ port: 3333 })
    }catch(err){
        process.exit(1);
    }
}

start();