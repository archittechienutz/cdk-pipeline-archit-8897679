# AWS CDK CI/CD Pipeline – Assignment

This project demonstrates how to use the **AWS Cloud Development Kit (CDK)** to provision cloud infrastructure using code and set up a **CI/CD pipeline** using **AWS CodePipeline**.

---

## 📌 Project Details

- **Student ID / Initials**: `archit-8897679`
- **Framework**: AWS CDK (TypeScript)
- **CI/CD Tool**: AWS CodePipeline
- **Deployment Platform**: AWS Cloud
- **Source Control**: GitHub

---

## 🚀 Features

✅ Provisioned with AWS CDK:
- **Amazon S3 Bucket** – For static storage  
- **AWS Lambda Function** – With S3 + DynamoDB integration  
- **Amazon DynamoDB Table** – For basic CRUD operations  

✅ CI/CD Pipeline using AWS CodePipeline:
- **Source**: GitHub repository  
- **Build**: AWS CodeBuild compiles and synthesizes CDK  
- **Deploy**: CDK automatically deploys via CloudFormation  

---

## 🧰 Technologies Used

| Service         | Description                                 |
|----------------|---------------------------------------------|
| AWS CDK         | Infrastructure as Code (TypeScript)        |
| AWS CodePipeline| Automates deployment steps                 |
| AWS CodeBuild   | Builds and synthesizes CDK stacks          |
| AWS Lambda      | Runs serverless compute                    |
| Amazon S3       | Stores static files / data                 |
| DynamoDB        | Serverless NoSQL database                  |

---

## 📂 Project Structure

cdk-pipeline-archit-8897679/
├── bin/ # CDK entry point
│ └── cdk-pipeline-archit-8897679.ts
├── lib/ # Stack definitions
│ └── cdk-pipeline-archit-8897679-stack.ts
├── node_modules/ # Dependencies
├── package.json
├── tsconfig.json
├── buildspec.yml # CodeBuild instructions
└── README.md


---

## ⚙️ Prerequisites

- AWS Account (with billing enabled)
- AWS CLI configured (`aws configure`)
- AWS CDK installed globally (`npm install -g aws-cdk`)
- GitHub repository connected to CodePipeline
- AWS CodeBuild project (with required permissions)

---

## 🛠 Setup Instructions

### 1. Install Dependencies

```bash
npm install

2. Bootstrap CDK (one time per account/region)

```bash
npx cdk bootstrap

3. Synthesize & Deploy

```bash
npx cdk synth
npx cdk deploy

4. Test the Setup

    1. Push changes to GitHub

    2. Go to AWS CodePipeline → Pipeline → Click Release Change

    3. Verify:

        1. S3 bucket exists

        2. Lambda function runs

        3. DynamoDB table is created

    4. Review logs in CodeBuild