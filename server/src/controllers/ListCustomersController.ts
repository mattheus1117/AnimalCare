import { FastifyRequest, FastifyReply } from 'fastify';
import { ListCustomersService } from '../services/ListCustomersService'

class ListCustomersController {
    async handle(request: FastifyRequest, reply: FastifyReply){

        const customerService = new ListCustomersService();
        const customers = await customerService.execute();

        reply.send(customers);
    }
}

export { ListCustomersController };