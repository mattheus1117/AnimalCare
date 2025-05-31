import { FastifyRequest, FastifyReply } from 'fastify';
import { CustomerService } from '../services/CustomerService'

class CustomerController {
    async handleListCustomers(request: FastifyRequest, reply: FastifyReply){

        const customerService = new CustomerService();
        const customers = await customerService.listCustomers();

        reply.send(customers);
    }

    async handleCreateCustomer(request: FastifyRequest, reply: FastifyReply){

        const { name, email } = request.body as { name: string, email: string };

        const customerService = new CustomerService();
        const customer = await customerService.createCustomer({ name, email });

        reply.send(customer);
    }

    async handleDeleteCustomer(request: FastifyRequest, reply: FastifyReply){

        const { id } = request.query as { id: string };

        const customerService = new CustomerService();
        const customer = await customerService.deleteCustomer({id});

        reply.send(customer);
    }
}

export { CustomerController };