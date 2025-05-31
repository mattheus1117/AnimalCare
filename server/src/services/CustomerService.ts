import prismaClient from "../prisma";

interface CreateCustomerProps {
    name: string;
    email: string;
}

interface DeleteCustomerProps {
    id: string;
}

class CustomerService {
    async listCustomers() {
        const customers = await prismaClient.customer.findMany();

        return customers;
    };

    async createCustomer({ name, email }: CreateCustomerProps) {

        if(!name || !email){
            throw new Error("Preencha todos os campos")
        }

        const customer = await prismaClient.customer.create({
            data: {
                name,
                email,
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