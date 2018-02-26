import { Cluster, N1qlQuery } from 'couchbase'

import { treatEnv } from './../utils/env'

const env = treatEnv()
const cluster = new Cluster(env.COUCH_URI, {
  username: env.CLUSTER_USER,
  password: env.CLUSTER_PASS
})

const bucket = cluster.openBucket(env.COUCH_BUCKET, env.BUCKET_PASS)

export default bucket
