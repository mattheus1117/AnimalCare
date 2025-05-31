import { FastifyRequest, FastifyReply } from 'fastify';
import { AnimalService } from '../services/AnimalService'

interface CreateAnimalProps {
    idUser: string;
    pictureBase64: string;
    name: string;
    age: number;
    gender: string;
    size: number;
    kind: string;
    race: string;
    status: string;
    weight?: number;
    location?: string;
    description?: string;
}

class AnimalController {
    async handleListAnimals(request: FastifyRequest, reply: FastifyReply){

        const animalService = new AnimalService();
        const animals = await animalService.listAnimals();

        reply.send(animals);
    }

    async handleCreateAnimal(request: FastifyRequest, reply: FastifyReply){

        const { 
            idUser,
            pictureBase64,
            name,
            age,
            gender,
            size,
            kind,
            race,
            status,
            weight,
            location,
            description } = request.body as CreateAnimalProps;

        const animalService = new AnimalService();
        const animal = await animalService.createAnimal({ 
            idUser,
            pictureBase64,
            name,
            age,
            gender,
            size,
            kind,
            race,
            status,
            weight,
            location,
            description });

        reply.send(animal);
    }
    
    async handleSetStatusPDAnimal(request: FastifyRequest, reply: FastifyReply){

        const { id } = request.query as { id: string };

        const animalService = new AnimalService();
        const animal = await animalService.setStatusPDAnimal({id});

        reply.send(animal);
    }

    async handleDeleteAnimal(request: FastifyRequest, reply: FastifyReply){

        const { id } = request.query as { id: string };

        const animalService = new AnimalService();
        const animal = await animalService.deleteAnimal({id});

        reply.send(animal);
    }
}

export { AnimalController };