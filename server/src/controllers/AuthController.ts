import { FastifyRequest, FastifyReply } from "fastify";
import { AuthService } from "../services/AuthService";
import { CustomerService } from "../services/CustomerService";
import { OngService } from "../services/OngService";
import jwt from "jsonwebtoken";

export class AuthController {
    async handleRefresh(request: FastifyRequest, reply: FastifyReply) {

        let refreshToken;

        //OBS: QUANDO FOR PUBLICADO DEVE-SE RETIRAR ESSA CONDIÇÃO
        if (process.env.NODE_ENV === 'development'){
            refreshToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2ODQwYWMxN2M5NmVmN2E5ZmJiMGUwZDciLCJyb2xlIjoiQ3VzdG9tZXIiLCJpYXQiOjE3NDkyNDEzMTAsImV4cCI6MTc0OTg0NjExMH0.rGoN_MWq7GogCE-3wSt8gkvJ-J-pqsC-EiqhGom1VPw";        
        } else {
            refreshToken = request.cookies.refreshToken;
        }

        if (!refreshToken) {
            throw new Error("Refresh token ausente")
        }

        const authService = new AuthService();
        const newAccessToken = await authService.refresh(refreshToken);

        reply.send(newAccessToken);
    } 

    async handleMe(request: FastifyRequest, reply: FastifyReply) {
    const authHeader = request.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return reply.status(401).send({ error: 'Token não enviado ou inválido' });
    }

    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as any;

        const userId = decoded.userId;
        const role = decoded.role;

        if (role === 'Customer') {
            const customer = await new CustomerService().findCustomerById(userId);
            return reply.send(customer);
        } else if (role === 'Ong') {
            const ong = await new OngService().findOngById(userId);
            return reply.send(ong);
        } else {
            return reply.status(400).send({ error: 'Função desconhecida' });
        }
    } catch (error) {
        return reply.status(401).send({ error: 'Token inválido' });
    }
}
}

