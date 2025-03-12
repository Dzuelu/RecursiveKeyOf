import { DzueluTypeScriptProject } from 'dzuelu-projen';

const project = new DzueluTypeScriptProject({
  defaultReleaseBranch: 'main',
  name: 'recursive-keyof',
  releaseToNpm: true
});

project.synth();
