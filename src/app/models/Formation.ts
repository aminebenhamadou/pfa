// formation.model.ts
import { Beneficiaire } from './Beneficiaire';
import { Formateur } from './Formateur';

export interface  Formation {
    id: number;
    description: string;
    price: number;
    startDate: Date;
    endDate: Date;
    beneficiaires: Beneficiaire[];
    formateur: Formateur;

    
}
