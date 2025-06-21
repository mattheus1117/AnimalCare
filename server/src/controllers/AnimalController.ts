import { FastifyRequest, FastifyReply } from 'fastify';
import { AnimalService } from '../services/AnimalService'

class AnimalController {
    async handleListAnimals(request: FastifyRequest, reply: FastifyReply){

        const animalService = new AnimalService();
        const animals = await animalService.listAnimals();

        reply.send(animals);
    }

    async handleCreateAnimal(request: FastifyRequest, reply: FastifyReply){

        const {
            idUser,
            name,
            age,
            gender,
            size,
            kind,
            race,
            status,
            weight,
            location,
            description,
            animalPicture
        } = request.body as any;

        if(!animalPicture || !name || !age || !gender || !size || !kind || !race){
            throw new Error("Preencha todos os campos.")
        }

        const animalService = new AnimalService();
        const animal = await animalService.createAnimal(
            idUser,
            animalPicture,
            name,
            Number(age),
            gender,
            Number(size),
            kind,
            race,
            status,
            Number(weight),
            location,
            description );

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