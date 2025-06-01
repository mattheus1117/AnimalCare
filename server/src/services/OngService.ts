import prismaClient from "../prisma";
import bcrypt from "bcrypt"

interface CreateOngProps {
    corporateName: string;
    cnpj: string;
    name: string;
    representative: string;
    contact: string;
    email: string;
    password: string;
    state: string;
    zipcode: string;
    city: string;
    neighborhood: string;
    patio: string;
}

interface PutOngProps {
    id: string;
}

interface DeleteOngProps {
    id: string;
}

class OngService {
    async listOngs() {
        const ongs = await prismaClient.ong.findMany();

        return ongs;
    };

    async createOng({ corporateName, cnpj, name, representative, contact, email, password, state, zipcode, city, neighborhood, patio }: CreateOngProps) {

        if(!corporateName || !cnpj || !name || !representative || !contact || !email || !password || !state || !zipcode || !city || !neighborhood || !patio){
            throw new Error("Preencha todos os campos.")
        }

        const verifyCnpjExist = await prismaClient.ong.findFirst({
            where: {
                cnpj: cnpj
            }
        });

        if (verifyCnpjExist) {
            throw new Error("CNPJ já cadastrado.")
        }

        const saltRounds = 10;
        const password_hash = await bcrypt.hash(password, saltRounds);

        const ong = await prismaClient.ong.create({
            data: {
                corporateName,
                cnpj,
                name,
                representative,
                contact,
                email,
                password_hash,
                state,
                zipcode,
                city,
                neighborhood,
                patio
            }
        });

        if(ong){
            return { message: 'Ong criado com sucesso!' };
        } else {
            throw new Error("Erro ao criar o ong.")
        }
    }

    // async setStatusPDOng({ id }: PutOngProps) {

    //     if(!id){
    //         throw new Error("Solicitação inválida.");
    //     }

    //     const findOng = await prismaClient.ong.findFirst({
    //         where:{
    //             id: id
    //         }
    //     });

    //     if(!findOng){
    //         throw new Error("Ong não existe.");
    //     }

    //     await prismaClient.ong.update({
    //         where:{
    //             id: findOng.id
    //         },
    //         data: {
    //             status: "PD"
    //         }
    //     });

    //     return {message: `Ong ${findOng.name} (${findOng.id}) colocado para adoção com sucesso!`};
    // }
    
    async deleteOng({ id }: DeleteOngProps) {

        if(!id){
            throw new Error("Solicitação inválida.");
        }

        const findOng = await prismaClient.ong.findFirst({
            where:{
                id: id
            }
        });

        if(!findOng){
            throw new Error("Ong não existe.");
        }

        await prismaClient.ong.delete({
            where:{
                id: findOng.id
            }
        });

        return {message: `Ong ${findOng.name} (${findOng.id}) deletado com sucesso!`};
    }
}

export { OngService }