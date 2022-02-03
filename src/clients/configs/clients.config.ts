import { registerAs } from '@nestjs/config'

export default registerAs('clients', () => ({
  foo: 'bar',
}))
