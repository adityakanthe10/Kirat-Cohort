## Week 19.2 CSR vs SSR vs SSG

### Client Side rendering

- Client-side rendering (CSR) is a modern technique used in web development where the rendering of a webpage is performed in the browser using JavaScript. Instead of the server sending a fully rendered HTML page to the client

- Js runs and actually populates/renders the contents on the page.
- React (or CSR) makes your life as a developer easy. You write components, JS renders them to the DOM.

- Downsides?
    1. Not SEO optimised
    2. User sees a flash before the page renders
    3. Waterfalling problem

### Server side rendering

- When the rendering process (converting JS components to HTML) happens on the server, it’s called SSR. 

- Why SSR?
    1. SEO Optimisations
    2. Gets rid of the waterfalling problem
    3. No white flash before you see content

- Downsides of SSR?
    1. Expensive since every request needs to render on the server
    2. Harder to scale, you can’t cache to CDNs

### Static Site Generation

- If a page uses Static Generation, the page HTML is generated at build time. That means in production, the page HTML is generated when you run next build. This HTML will then be reused on each request. It can be cached by a CDN.
 
### Why?
- If you use static site generation, you can defer the expensive operation of rendering a page to the build time so it only happens once.

### How?
- Let’s say you have an endpoint that gives you all the global todos of an app.
- By global todos  we mean that they are the same for all users, and hence this page can be statically generated .