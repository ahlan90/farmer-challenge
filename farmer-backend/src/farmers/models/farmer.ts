import { Document } from "./document";
import { Address } from "./address";

export interface Farmer {
    id: string;
    document: Document;
    name: string;
    address: Address
}