import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'shareme_jsm',

  projectId: 'bd6v3tbf',
  dataset: 'nayan',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
