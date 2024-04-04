import { Formateur } from './Formateur';

export interface Formation {
    id: number;
    description: string;
    price: number;
    startDate: Date;
    endDate: Date;
    formateur: Formateur;

    
}
