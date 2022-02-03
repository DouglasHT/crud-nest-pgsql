import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Client } from 'src/database/entities/client.entity'
import { PaginationQueryDto } from 'src/shared/dto/pagination-query.dto'
import { Repository } from 'typeorm'
import { CreateClientDto } from './dto/create-client.dto'
import { UpdateClientDto } from './dto/update-client.dto'

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
  ) {}

  create(createClientDto: CreateClientDto) {
    const client = this.clientRepository.create(createClientDto)
    return this.clientRepository.save(client)
  }

  findAll(paginationQueryDto: PaginationQueryDto) {
    const { limit, offset } = paginationQueryDto
    return this.clientRepository.find({
      skip: offset,
      take: limit,
    })
  }

  findOne(id: number) {
    return this.clientRepository.findOne(id)
  }

  async update(id: number, updateClientDto: UpdateClientDto) {
    const client = await this.clientRepository.preload({
      id_client: id,
      ...updateClientDto,
    })

    if (!client) {
      throw new NotFoundException(`Client #${id} not found`)
    }

    return this.clientRepository.save(client)
  }

  async remove(id: number) {
    const client = await this.findOne(id)
    return this.clientRepository.remove(client)
  }
}
