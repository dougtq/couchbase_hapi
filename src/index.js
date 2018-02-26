import Hapi from 'hapi'
import Good from 'good'

import { treatEnv } from './utils/env'

const env = treatEnv()

const server = new Hapi.Server({ port: env.API_PORT })

server.register({
  plugin: Good,
  options: {
    reporters: {
      myConsoleReporter: [{
        module: 'good-console'
      }, 'stdout']
    }
  }
})
.then(() => {
  server
    .start()
    .then(() => {
      console.info(`Server running at ${server.info.uri}`)
    })
})

server.route({
  method: 'GET',
  path: '/',
  handler: (request) => {
    return { message: 'Success' }
  }
})
