import { DzueluTypeScriptProject } from 'dzuelu-projen';

const project = new DzueluTypeScriptProject({
  defaultReleaseBranch: 'main',
  name: 'RecursiveKeyOf',
  releaseToNpm: true
});

project.synth();
