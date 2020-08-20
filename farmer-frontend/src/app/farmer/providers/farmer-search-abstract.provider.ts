import { Farmer } from '../models/farmer';

export interface SearchParams {
    name: string;
    documentNumber: string;
}
export declare abstract class FarmerSearchAbstractProvider {
    abstract searchFarmers(params: SearchParams): Promise<Farmer[]>;
}