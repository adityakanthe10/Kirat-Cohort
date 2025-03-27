# WEEK 18.2 CI/CD (Continuous Integration and Continuous Deployment)

- Continuous Integration(CI) is a development practice where developers frequently integrate their code changes into the shared repository, preferably secerla times a day.Each integration is automatically verified by 
    1. Building the project and 
    2. Running automated tests. 
This process allows teams to detect problems early, improve software quality, and reduce the time it takes to validate and release new software updates.

- Continuous Deployment
As the name suggests, deploying your code continuously to various environments (dev/stage/prod)

## STEP 1 - Create the CI Pipeline
- Make sure that whenever someone tries to create a PR, we build the project and make sure that it builds as expected

## STEP 2 - Add a build pipeline for our repo
- Add .github/workflows/build.yml  in the root folder
- Create the workflow
- 
```
name: Build on PR

on:
  pull_request:
    branches:
      - master

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Use Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'
      
      - name: Install Dependencies
        run: npm install
        
      - name: Run Build
        run: npm run build
```

- Push this to master branch
- Create a new branch with some minimal changes and create a PR from it
- You should see the workflow run

- Create the CD pipeline that
  - Clones the repo
  - Builds the docker image
  - Pushes the docker image

```
Create the CD pipeline that
Clones the repo
Builds the docker image
Pushes the docker image
```

  - Make sure to add the dockerhub secrets to github secrets  of the repo (DOCKER_USERNAME, DOCKER_PASSWORD)

  - You should see a workflow running

- Check dockerhub to ensure the image has indeed reached there
