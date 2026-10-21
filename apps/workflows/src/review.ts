import { defineWorkflow } from '@sanity/workflow-engine/define';

export const fixtureReview = defineWorkflow({
  name: 'fixture-review',
  title: 'Fixture review',
  initialStage: 'drafting',
  stages: [
    { name: 'drafting', title: 'Drafting', transitions: [{ name: 'submit', to: 'approved' }] },
    { name: 'approved', title: 'Approved' },
  ],
});
