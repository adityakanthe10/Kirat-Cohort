## Week 14.2 Backend in NextJS

1. Next.js is a full stack framework. That means the same process can handle frontend and backend code .
  - Single codebase for all your codebase
  - No cors issue, single domain for FE and BE.
  - Ease of deployment , deploy a single codebase. 

2. Data Fetching In Next
 - You should fetch the user details on the server side and pre-render the page before returning it to the user.

 3. Introducing api routes in next.js
  - Code in a single repo
  - All standard things you get in a backend framework like express
  - Server components can directly talk to the backend

  4. Benefits of server actions
 - Single function can be used in both client and server components
 - Gives you types of the function response on the frontend (very similar to trpc)
 - Can be integrated seamlessly with forms (ref https://www.youtube.com/watch?v=dDpZfOQBMaU)