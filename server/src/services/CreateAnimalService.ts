import prismaClient from "../prisma";

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

class CreateAnimalService {
    async execute({ idUser, pictureBase64, name, age, gender, size, kind, race, weight, location, description }: CreateAnimalProps) {

        if(idUser){
            const user = await prismaClient.customer.findFirst({
                where: {
                    id: idUser  
                }
            });
            
            if(!user){
                throw new Error("Usuário não encontrado.")
            }

        } else {
            throw new Error("Usuário não encontrado.")
        }

        if(!pictureBase64 || !name || !age || !gender || !size || !kind || !race){
            throw new Error("Preencha todos os campos.")
        }

        const animal = await prismaClient.animal.create({
            data: {
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
                description
            }
        });

        if(animal){
            return { message: 'Animal criado com sucesso!' };
        } else {
            throw new Error("Erro ao criar o animal.")
        }
    }
}

export { CreateAnimalService }