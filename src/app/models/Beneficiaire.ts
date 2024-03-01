// beneficiaire.model.ts
import { Formation } from "./Formation";

export interface Beneficiaire {
    id: number;
    firstName: string;
    lastName: string;
    cin: string;
    phoneNumber: string;
    email: string;
    adress: string;
    educationLevel: string;
    image: string;
    formations: Formation[]; 

  
}
