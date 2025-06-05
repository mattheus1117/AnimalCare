import jwt from "jsonwebtoken";
import { OngService } from "../services/OngService";
import { CustomerService } from "../services/CustomerService";

export class AuthService {
    async refresh(refreshToken: string) {
      const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET as string) as { userId: string, role: string };

      let newAccessToken: string;

      if (decoded.role.toLowerCase() === "customer") {
        const customerService = new CustomerService();
        const customer = await customerService.findCustomerById(decoded.userId);

        if (!customer) throw new Error("Usuário inválido");

        newAccessToken = jwt.sign(
          { userId: customer.id, role: "Customer" },
          process.env.JWT_SECRET as string,
          { expiresIn: "1h" }
        );
      } else if (decoded.role.toLowerCase() === "ong") {
        const ongService = new OngService();
        const ong = await ongService.findOngById(decoded.userId);

        if (!ong) throw new Error("Usuário inválido");

        newAccessToken = jwt.sign(
          { userId: ong.id, role: "Ong" },
          process.env.JWT_SECRET as string,
          { expiresIn: "1h" }
        );
      } else {
        throw new Error("Role inválido");
      }

      return newAccessToken;
    }
}