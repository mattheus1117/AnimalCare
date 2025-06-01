import { FastifyRequest, FastifyReply } from 'fastify';
import { CustomerService } from '../services/CustomerService'

class CustomerController {
    async handleListCustomers(request: FastifyRequest, reply: FastifyReply){

        const customerService = new CustomerService();
        const customers = await customerService.listCustomers();

        reply.send(customers);
    }
    
    async handleLoginCustomer(request: FastifyRequest, reply: FastifyReply){

        const { email, password } = request.body as { email: string, password: string };

        const customerService = new CustomerService();
        const customer = await customerService.loginCustomer({email, password});

        reply.send(customer);
    }

    async handleCreateCustomer(request: FastifyRequest, reply: FastifyReply){

        const { name, email, password } = request.body as { name: string, email: string, password: string };

        const customerService = new CustomerService();
        const customer = await customerService.createCustomer({ name, email, password });

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