import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';

export default defineConfig({
  name: 'default',
  title: 'E2E Function Fixture',
  projectId: process.env.SANITY_STUDIO_PROJECT_ID ?? '',
  dataset: process.env.SANITY_STUDIO_DATASET ?? 'production',
  plugins: [structureTool(), visionTool()],
  schema: { types: [] },

  auth: {
    providers: (prev) =>
      process.env.SANITY_STUDIO_SSO_LOGIN_URL
        ? [
            ...prev,
            {
              name: 'saml',
              title: 'Sanity SSO',
              url: process.env.SANITY_STUDIO_SSO_LOGIN_URL,
            },
          ]
        : prev,
  },
});
