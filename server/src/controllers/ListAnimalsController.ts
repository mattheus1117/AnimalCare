import { FastifyRequest, FastifyReply } from 'fastify';
import { ListAnimalsService } from '../services/ListAnimalsService'

class ListAnimalsController {
    async handle(request: FastifyRequest, reply: FastifyReply){

        const animalService = new ListAnimalsService();
        const animals = await animalService.execute();

        reply.send(animals);
    }
}

export { ListAnimalsController };