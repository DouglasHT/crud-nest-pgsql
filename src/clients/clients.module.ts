import { Module } from '@nestjs/common'
import { ClientsService } from './clients.service'
import { ClientsController } from './clients.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Client } from 'src/database/entities/client.entity'
import { ConfigModule } from '@nestjs/config'
import clientsConfig from './configs/clients.config'

@Module({
  imports: [TypeOrmModule.forFeature([Client]), ConfigModule.forFeature(clientsConfig)],
  controllers: [ClientsController],
  providers: [ClientsService],
  exports: [ClientsService],
})
export class ClientsModule {}
