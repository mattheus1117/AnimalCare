import { FastifyRequest, FastifyReply } from "fastify";
import { AuthService } from "../services/AuthService";

export class AuthController {
    async handleRefresh(request: FastifyRequest, reply: FastifyReply) {

        const refreshToken = request.cookies.refreshToken;

        if (!refreshToken) {
            throw new Error("Refresh token ausente")
        }

        const authService = new AuthService();
        const newAccessToken = await authService.refresh(refreshToken);

        reply.send(newAccessToken);
    } 
}