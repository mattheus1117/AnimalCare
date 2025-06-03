import prismaClient from "../prisma";
import bcrypt from "bcrypt"

interface CreateCustomerProps {
    name: string;
    cpf: string;
    dateOfBirth: string;
    telephone: string;
    email: string;
    password: string;
    state: string;
    zipcode: string;
    city: string;
    neighborhood: string;
    patio: string;
}

interface LoginCustomerProps {
    email: string;
    password: string;
}

interface DeleteCustomerProps {
    id: string;
}

class CustomerService {
    async listCustomers() {
        const customers = await prismaClient.customer.findMany();

        return customers;
    };

    async loginCustomer({email, password}: LoginCustomerProps) {
        const customer = await prismaClient.customer.findFirst({
            where:{
                email: email
            }
        });
        
        if(customer){
            const match = await bcrypt.compare(password, customer.password_hash);

            if(match){
                return customer;
            } else {
                throw new Error("Email e/ou senha incorretos.")
            }
            
        } else {
            throw new Error("Email e/ou senha incorretos.")
        }
    };

    async createCustomer({ 
            name,
            cpf,
            dateOfBirth,
            telephone,
            email,
            password,
            state,
            zipcode,
            city,
            neighborhood,
            patio }: CreateCustomerProps) {

        if(!name || !cpf || !dateOfBirth || !telephone || !email || !password || !state || !zipcode || !city || !neighborhood || !patio){
            throw new Error("Preencha todos os campos")
        }

        const verifyEmailExist = await prismaClient.customer.findFirst({
            where: {
                OR: [
                    {
                        email: email
                    },
                    {
                        cpf: cpf
                    }
                ]
            }
        });

        if (verifyEmailExist) {
            throw new Error("Email/CPF já cadastrado.")
        }

        const saltRounds = 10;
        const password_hash = await bcrypt.hash(password, saltRounds);

        const customer = await prismaClient.customer.create({
            data: {
                name,
                cpf,
                dateOfBirth,
                telephone,
                email,
                password_hash,
                state,
                zipcode,
                city,
                neighborhood,
                patio,
                status: true
            }
        });

        return customer;
    }
    
    async deleteCustomer({ id }: DeleteCustomerProps) {

        if(!id){
            throw new Error("Solicitação inválida.");
        }

        const findCustomer = await prismaClient.customer.findFirst({
            where:{
                id: id
            }
        });

        if(!findCustomer){
            throw new Error("Customer não existe.");
        }

        await prismaClient.customer.delete({
            where:{
                id: findCustomer.id
            }
        });

        return {message: `Cliente ${findCustomer.name} (${findCustomer.id}) deletado com sucesso!`};
    }
}

export { CustomerService }