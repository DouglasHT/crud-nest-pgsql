import { IsString } from 'class-validator'

export class CreateClientDto {
  @IsString()
  readonly name: string

  @IsString()
  readonly email: string

  @IsString()
  readonly phone: string

  @IsString()
  readonly street: string

  @IsString()
  readonly number: string

  @IsString()
  readonly district: string

  @IsString()
  readonly city: string

  @IsString()
  readonly state: string
}
