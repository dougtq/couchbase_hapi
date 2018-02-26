import { config } from 'dotenv'

const getEnv = () => {
  config()
  const { env } = process
  
  return env || {}
}

const treatEnv = () => {
  const env = getEnv()

  env.COUCHURI = env.COUCH_URI || 'couchbase://127.0.0.1'
  env.API_PORT = env.API_PORT || 3000
  env.COUCH_BUCKET = env.COUCH_BUCKET || 'hapi_api'

  return env
}

export { treatEnv }
