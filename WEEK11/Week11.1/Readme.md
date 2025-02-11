# SERVERLESS BACKEND

- Few ways to deploy a server on the internet
    1. GO to AWS ,Azure, GCP, Cloudflare .
        1. Rent a VM and deploy your app.
        2. Put it in an auto scaling group.
        3. Deploy it in a Kubernetes Cluster.

- Few Downsides to doing this
    1. Taking care of how/when to scale.
    2. Base cost even if no one is visiting the website.
    3. Monitoring various servers to make sure no server is down.

- SERVERLESS BACKENDS.
    1. "Serverless" is a backend deployment in which the cloud provider dynamically manages the allocation and provisioning of servers. The term "serverless" doesn't mean there are no servers involved. Instead, it means that developers and operators do not have to worry about the servers.
    
    - Easier defination
        - What if you could just write your express routes and run a command. The app would automatically 
        - Deploy
        - Autoscale
        - Charge you on a per request basis (rather than you paying for VMs)

- Problems with this approach
        - More expensive at scale
        - Cold start problem

- When should you use a serverless architecture?
    1. When you have to get off the ground fast and don't want to worry about deployment.
    2. When you can't anticipate the traffic and worry about the autoscaling.
    3. If you have very low traffic and want to optimise the cost.

 - Hono works like an express working with nodejs and basically used for routing. 