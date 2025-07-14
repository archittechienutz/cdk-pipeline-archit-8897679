#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { CdkPipelineArchit8897679Stack } from '../lib/cdk-pipeline-archit-8897679-stack';

const app = new cdk.App();

new CdkPipelineArchit8897679Stack(app, 'CdkPipelineArchit8897679Stack', {
  env: {
    region: 'us-east-1',
    account: '154514164180',
  }
});
