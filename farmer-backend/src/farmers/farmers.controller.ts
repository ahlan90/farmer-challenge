import { Logger, Controller, Get, Param, Query } from "@nestjs/common";

import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from "@nestjs/swagger";
import { FarmersService } from "./farmers.service";
import { Farmer } from "./models/farmer";


@ApiTags('Farmers')
@Controller('farmers')
export class FarmersController {

    constructor(
        private farmerService: FarmersService
    ) { }

    @Get(':search')
    @ApiOperation({ summary: 'List of farmers, with optional filter name or #document' })
    @ApiParam({ name: 'search', required: false })
    async getAllWithFilter(
        @Param('search') search: string
    ): Promise<Farmer[]> {
        return this.farmerService.findAllFilter(search);
    }

}