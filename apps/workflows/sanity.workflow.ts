import type { WorkflowDeploymentInput } from '@sanity/workflow-engine';
import { defineWorkflowConfig } from '@sanity/workflow-engine/define';

import { fixtureReview } from './src/review';

declare const process: { env: Record<string, string | undefined> };

const projectId = process.env.SANITY_PROJECT_ID;

if (!projectId) {
  throw new Error('SANITY_PROJECT_ID must be set to load the workflow configuration.');
}

const dataset = process.env.SANITY_DATASET ?? 'production';

export const demo = {
  name: 'demo',
  tag: 'demo',
  expectedMinReaderModel: 10,
  workflowResource: { type: 'dataset', id: `${projectId}.${dataset}` },
  definitions: [fixtureReview],
} satisfies WorkflowDeploymentInput;

export default defineWorkflowConfig({ deployments: [demo] });
