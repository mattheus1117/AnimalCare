import { FastifyRequest, FastifyReply } from "fastify";
import { AuthService } from "../services/AuthService";

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
}