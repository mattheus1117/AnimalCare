import prismaClient from "../prisma";

class ListAnimalsService{
    async execute() {
        const animals = await prismaClient.animal.findMany();

        return animals;
    }
}

export { ListAnimalsService };