import { defineBlueprint, defineDocumentFunction } from '@sanity/blueprints';

export default defineBlueprint({
  resources: [
    defineDocumentFunction({
      name: 'e2e-on-publish',
      src: './functions/on-publish',
      project: process.env.SANITY_STUDIO_PROJECT_ID,
      event: {
        on: ['publish'],
        filter: '!(_id in path("_.**"))',
        resource: {
          type: 'dataset',
          id: `${process.env.SANITY_STUDIO_PROJECT_ID}.${process.env.SANITY_STUDIO_DATASET ?? 'production'}`,
        },
      },
    }),
  ],
});
