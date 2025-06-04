import { FastifyRequest, FastifyReply } from "fastify";
import { AuthService } from "../services/AuthService";

export class AuthController {
    async handleRefreshCustomer(request: FastifyRequest, reply: FastifyReply) {
        const refreshToken = request.cookies.refreshToken;

        if (!refreshToken) {
            throw new Error("Refresh token ausente")
        }

        const authService = new AuthService();
        const newAccessToken = await authService.refreshCustomer(refreshToken);

        reply.send({ accessToken: newAccessToken });
    }

    async handleRefreshOng(request: FastifyRequest, reply: FastifyReply) {
        const refreshToken = request.cookies.refreshToken;

        if (!refreshToken) {
            throw new Error("Refresh token ausente")
        }

        const authService = new AuthService();
        const newAccessToken = await authService.refreshOng(refreshToken);

        reply.send({ accessToken: newAccessToken });
    }   
}