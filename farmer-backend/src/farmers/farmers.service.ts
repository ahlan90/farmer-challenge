import { Injectable } from '@nestjs/common';
import { Farmer } from './models/farmer';

export type User = any;

@Injectable()
export class FarmersService {

    private readonly farmers: Farmer[];

    constructor() {
        this.farmers = [
            {
                id: 'asdfasdfsad21dsfw4',
                document: {
                    documentNumber: '12312341234',
                    documentType: 'folder'
                },
                name: 'Ahlan Guarnier',
                address: {
                    street: 'Avenida Pedro Depiante',
                    state: 'Espírito Santo',
                    address: 'Morada de Camburi',
                    country: 'Brasil'
                }
            },
            {
                id: '3sad423sad423',
                document: {
                    documentNumber: '1231332aasd',
                    documentType: 'email'
                },
                name: 'Aline Bayer',
                address: {
                    street: 'Avenida Marcio Filho',
                    state: 'Santa Catarina',
                    address: 'Morada',
                    country: 'Brasil'
                }
            },
            {
                id: '1232dssd3',
                document: {
                    documentNumber: 'asdf32dfa21',
                    documentType: 'papper'
                },
                name: 'Marcio Alvarenga',
                address: {
                    street: 'Avenida Pedro Depiante',
                    state: ' São Paulo',
                    address: 'Anhenbi',
                    country: 'Brasil'
                }
            },
            {
                id: 'sad2133asdrfgd',
                document: {
                    documentNumber: '003434232',
                    documentType: 'folder'
                },
                name: 'Ahlan Guarnier',
                address: {
                    street: 'Rua Cavalcante Depiante',
                    state: 'Rio de Janeiro',
                    address: 'Copa cabana',
                    country: 'Brasil'
                }
            },
        ];
    }

    async findAllFilter(search: string) {

        if (search === '{search}') {
            return this.farmers;
        }

        if (search.includes('#')) {
            return this.farmers.filter(farmer => farmer.document.documentNumber.includes(search.replace('#','').toLowerCase()))
        }

        return this.farmers.filter(farmer => farmer.name.toLowerCase().includes(search.toLowerCase()))

    }

}