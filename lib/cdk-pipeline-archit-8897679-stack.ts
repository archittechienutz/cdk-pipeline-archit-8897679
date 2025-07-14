import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';

export class CdkPipelineArchit8897679Stack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const myBucket = new s3.Bucket(this, 'MyBucketArchit8897679', {
      versioned: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });

    const myTable = new dynamodb.Table(this, 'MyTableArchit8897679', {
      partitionKey: { name: 'id', type: dynamodb.AttributeType.STRING },
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });

    const myLambda = new lambda.Function(this, 'MyLambdaArchit8897679', {
      runtime: lambda.Runtime.NODEJS_18_X,
      code: lambda.Code.fromInline(`
        exports.handler = async function(event) {
          console.log("Lambda invoked!");
          return {
            statusCode: 200,
            body: "Hello from Lambda"
          };
        };
      `),
      handler: 'index.handler',
      environment: {
        BUCKET_NAME: myBucket.bucketName,
        TABLE_NAME: myTable.tableName,
      }
    });

    myBucket.grantReadWrite(myLambda);
    myTable.grantReadWriteData(myLambda);
  }
}
