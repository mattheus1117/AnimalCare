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
            status = "disponível",
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
            idUser.value,
            animalPicture,
            name.value,
            Number(age.value),
            gender.value,
            Number(size.value),
            kind.value,
            race.value,
            status.value,
            Number(weight.value),
            location.value,
            description.value );

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