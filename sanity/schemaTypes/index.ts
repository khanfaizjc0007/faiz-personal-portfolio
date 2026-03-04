import { type SchemaTypeDefinition } from 'sanity'
import project from './projects'
import contactMessage from './contactMessage'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, contactMessage],
}
