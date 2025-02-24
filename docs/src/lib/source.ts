import { docs } from '@/.source'
import { loader } from 'fumadocs-core/source'

export const source = loader({
  baseUrl: '/docs', // in next.js app folder
  source: docs.toFumadocsSource(),
})
