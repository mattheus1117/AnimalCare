import jwt from "jsonwebtoken";
import { OngService } from "../services/OngService";
import { CustomerService } from "../services/CustomerService";

export class AuthService {
    async refreshCustomer(refreshToken: string) {
      const decoded = jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET as string
      ) as jwt.JwtPayload;

      const customerId = decoded.userId;

      const customerService = new CustomerService();
      const customer = await customerService.findCustomerById(customerId);

      if (!customer) {
        throw new Error(`Ong (${customerId}) não encontrada`);
      }

      const newAccessToken = jwt.sign(
        { userId: customer.id, role: "Customer" },
        process.env.JWT_SECRET as string,
        { expiresIn: "1h" }
      );
      
      return { newAccessToken };
    }

    async refreshOng(refreshToken: string) {
      const decoded = jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET as string
      ) as jwt.JwtPayload;

      const ongId = decoded.userId;

      const ongService = new OngService();
      const ong = await ongService.findOngById(ongId);

      if (!ong) {
        throw new Error(`Ong (${ongId}) não encontrada`);
      }

      const newAccessToken = jwt.sign(
        { userId: ong.id, role: "Ong" },
        process.env.JWT_SECRET as string,
        { expiresIn: "1h" }
      );
      
      return { newAccessToken };
    }
}