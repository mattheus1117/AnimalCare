import { FastifyRequest, FastifyReply } from 'fastify';
import { CreateAnimalService } from '../services/CreateAnimalService'

interface CreateAnimalProps {
    idUser: string;
    pictureBase64: string;
    name: string;
    age: number;
    gender: string;
    size: number;
    kind: string;
    race: string;
    weight?: number;
    location?: string;
    description?: string;
}

class CreateAnimalController {
    async handle(request: FastifyRequest, reply: FastifyReply){

        const { 
            idUser,
            pictureBase64,
            name,
            age,
            gender,
            size,
            kind,
            race,
            weight,
            location,
            description } = request.body as CreateAnimalProps;

        const animalService = new CreateAnimalService();
        const animal = await animalService.execute({ 
            idUser,
            pictureBase64,
            name,
            age,
            gender,
            size,
            kind,
            race,
            weight,
            location,
            description });

        reply.send(animal);
    }
}

export { CreateAnimalController };
