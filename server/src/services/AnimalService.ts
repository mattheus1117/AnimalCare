import prismaClient from "../prisma";
import { supabase } from '../supabase';
import { randomUUID } from 'crypto';

interface CreateAnimalProps {
    idUser: string;
    animalPicture: any;
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

interface PutAnimalProps {
    id: string;
}

interface DeleteAnimalProps {
    id: string;
}

class AnimalService {

    async listAnimals() {
        const animals = await prismaClient.animal.findMany();

        return animals;
    };

    async createAnimal(idUser: string, animalPicture: any, name: string, age: number, gender: string, size: number, kind: string, race: string, status: string, weight: number, location: string, description: string) {
        
        const fileBuffer = await animalPicture.toBuffer();
        const fileExtension = animalPicture.filename.split('.').pop();
        const fileName = `${randomUUID()}.${fileExtension}`;

        const { error } = await supabase.storage
            .from('animals')
            .upload(fileName, fileBuffer, {
            contentType: animalPicture.mimetype,
        });

        if (error) {
            console.log(error);
            throw new Error("Erro ao fazer upload da imagem.")
        }

        // Gerar URL pública
        const { data } = supabase.storage
            .from('animals')
            .getPublicUrl(fileName);

        const imageUrl = data.publicUrl;

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

        const animal = await prismaClient.animal.create({
            data: {
                idUser,
                imageUrl,
                name,
                age,
                gender,
                size,
                kind,
                race,
                status: "PD",
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

    async setStatusPDAnimal({ id }: PutAnimalProps) {

        if(!id){
            throw new Error("Solicitação inválida.");
        }

        const findAnimal = await prismaClient.animal.findFirst({
            where:{
                id: id
            }
        });

        if(!findAnimal){
            throw new Error("Animal não existe.");
        }

        await prismaClient.animal.update({
            where:{
                id: findAnimal.id
            },
            data: {
                status: "PD"
            }
        });

        return {message: `Animal ${findAnimal.name} (${findAnimal.id}) colocado para adoção com sucesso!`};
    }
    
    async deleteAnimal({ id }: DeleteAnimalProps) {

        if(!id){
            throw new Error("Solicitação inválida.");
        }

        const findAnimal = await prismaClient.animal.findFirst({
            where:{
                id: id
            }
        });

        if(!findAnimal){
            throw new Error("Animal não existe.");
        }

        await prismaClient.animal.delete({
            where:{
                id: findAnimal.id
            }
        });

        return {message: `Animal ${findAnimal.name} (${findAnimal.id}) deletado com sucesso!`};
    }
}

export { AnimalService }