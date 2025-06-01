import prismaClient from "../prisma";
import bcrypt from "bcrypt"

interface CreateCustomerProps {
    name: string;
    email: string;
    password: string;
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

    async createCustomer({ name, email, password }: CreateCustomerProps) {

        if(!name || !email || !password){
            throw new Error("Preencha todos os campos")
        }

        const verifyEmailExist = await prismaClient.customer.findFirst({
            where: {
                email: email
            }
        });

        if (verifyEmailExist) {
            throw new Error("Email já cadastrado.")
        }

        const saltRounds = 10;
        const password_hash = await bcrypt.hash(password, saltRounds);

        const customer = await prismaClient.customer.create({
            data: {
                name,
                email,
                password_hash,
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