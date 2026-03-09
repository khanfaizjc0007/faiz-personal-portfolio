import { type SchemaTypeDefinition } from 'sanity'
import project from './projects'
import contactMessage from './contactMessage'
import aboutPage from './about'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, contactMessage, aboutPage],
}
