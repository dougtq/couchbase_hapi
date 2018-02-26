import Joi from 'joi'
import { generate } from 'shortid'

import couchbase from './../db/conn'

export default [
  {
    method: 'POST',
    path: '/person',
    handler: (request) => {
      const { name } = request.payload

      const shortId = generate()
    },
    config: {
      validate: {
        payload: Joi.object({
          name: Joi.string().required()
        })
      }
    }
  }
]