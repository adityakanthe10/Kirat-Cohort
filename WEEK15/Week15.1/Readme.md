# Week 15.1 Docker

- Docker/Containers are important for few reasons
    1. Kubernetes/containers orchestration
    2. Running processes in isolated environments
    3. Starting projects/auxillary services locally


- What are containers
    - Containers are a way package and different software applications in a way such that makes them easy to deploy and run consistently across different environments
    - They allow you to package an application, along with all its dependencies and libraries, into a single unit that can be run on any machine on container environment, such as docker

- Why containers 
    - Everyone has different OS
    - Steps to run a project can vary based on OS
    - Extremely harder to keep track of dependencies as project grows

- Benefits 
    1. Let you describe configuration in a single file.
    2. Can run in isolated env.
    3. Makes local setup of OS a breeze
    4. Makes installing auxillary services/DBs very easy

- Docker isn't a only way to create containers

1. Docker Engine
Docker Engine is an open-source containerization technology that allows developers to package applications into container
Containers are standardized executable components combining application source code with the operating system (OS) libraries and dependencies required to run that code in any environment.

2. Docker CLI 
The command line interface lets you talk to the docker engine and lets you start/stop/list containers

3. Docker registry
The docker registry is how Docker makes money. 
It is similar to github, but it lets you push images rather than sourcecode
Docker’s main registry - https://dockerhub.com/
Mongo image on docker registry - https://hub.docker.com/_/mongo

- COMMANDS
 - docker images, docker ps, docker run, docker build, docker kill, docker exec, docker rmi

 - Passing the env variables
