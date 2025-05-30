import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";

//Customers
import { ListCustomersController } from "./controllers/ListCustomersController";
import { CreateCustomerController } from "./controllers/CreateCustomerController";
import { DeleteCustomerController } from "./controllers/DeleteCustomerController";

//Animals
import { ListAnimalsController } from "./controllers/ListAnimalsController";
import { CreateAnimalController } from "./controllers/CreateAnimalController";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {

    //Customers
    fastify.get("/customers", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListCustomersController().handle(request, reply);
    });

    fastify.post("/customer", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateCustomerController().handle(request, reply);
    });

    fastify.delete("/customer", async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteCustomerController().handle(request, reply);
    });

    //Animals
    fastify.get("/animals", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListAnimalsController().handle(request, reply);
    });

    fastify.post("/animal", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateAnimalController().handle(request, reply);
    });
}