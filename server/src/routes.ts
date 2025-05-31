import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";

import { CustomerController } from "./controllers/CustomerController";
import { AnimalController } from "./controllers/AnimalController";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {

    //Customers
    fastify.get("/customers", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CustomerController().handleListCustomers(request, reply);
    });

    fastify.post("/customer", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CustomerController().handleCreateCustomer(request, reply);
    });

    fastify.delete("/customer", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CustomerController().handleDeleteCustomer(request, reply);
    });

    //Animals
    fastify.get("/animals", async (request: FastifyRequest, reply: FastifyReply) => {
        return new AnimalController().handleListAnimals(request, reply);
    });

    fastify.post("/animal", async (request: FastifyRequest, reply: FastifyReply) => {
        return new AnimalController().handleCreateAnimal(request, reply);
    });
    
    fastify.put("/setPDAnimal", async (request: FastifyRequest, reply: FastifyReply) => {
        return new AnimalController().handleSetStatusPDAnimal(request, reply);
    });

    fastify.delete("/animal", async (request: FastifyRequest, reply: FastifyReply) => {
        return new AnimalController().handleDeleteAnimal(request, reply);
    });
}