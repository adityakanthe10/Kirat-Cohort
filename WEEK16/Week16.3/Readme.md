# Week 16.3 Authentication Using Cookies

 Cookies in web development are a small pieces of data sent from a website and stored on the users computer by the users web browser while the user is browsing. They are designed to be a reliable mechanism for website to remember things(very similar to local storage).

 1. <b> Session Management </b>: Cookies allow websites to identify users and track their individual session states across multiple pages or visits.

 2. <b>Personalization</b>:Websites use cookies to personalize content and ads. For instance, cookies might store information about a user's preferences, allowing the site to tailor content or advertisements to those interests.

 3. <b>Tracking</b>:Cookies can track users across websites, providing insights into browsing behavior. This information can be used for analytics purposes, to improve website functionality, or for advertising targeting.

 4. <b>Security</b>:Secure cookies can be used to enhance the security of a website by ensuring that the transmission of information is only done over an encrypted connection, helping to prevent unauthorized access to user data.

 ## Why not local Storage?

 1. Cookies are send with every request to the website (by the browser) (you don’t have to explicitly add a header to the fetch call).

 2. Cookies can have an expiry attached to them.

 3. Cookies can be be restricted to only https and to certain domains .

 4. You don’t need to explicitly set the cookie header in the browser. It’s automatically set by the browser in every request 

 ## Properties Of Cookies

 ### Types of Cookies

1. Persistent - Stay even if u close the window
2. Session - Go away after the window closes
3. Secure - Sent only over secure, encrypted connections (HTTPS).

### Properties Of Cookies

- HttpOnly - Can not be accessed by client side scripts
- SameSite - Ensures cookies are not send on cross origin requests
1. Strict
2. Lax - Only GET requests and on top level navigation
3. None

### CSRF Attacks
1. Cross site request forgery attacks were super common because of cookies and hence the Samesite attribute was introduced.
