import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ClientsModule } from './clients/clients.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [`.env`],
    }),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        host: process.env.TYPEORM_HOST,
        port: +process.env.TYPEORM_PORT,
        username: process.env.TYPEORM_USER,
        password: process.env.TYPEORM_PASSWORD,
        database: process.env.TYPEORM_NAME,
        autoLoadEntities: true,
        synchronize: true,
      }),
    }),
    ClientsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
