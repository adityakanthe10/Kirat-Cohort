# Week 19.1 Middlewares


## What are middlewares?
1. Middlewares are code that runs before/after your request handlers
- Commonly used for thinks like
    1. Analytics
    2. <b>Authentication</b>
    3. Redirecting the users

## middlewares + Next
-  Middleware allows you to run code before a request is completed. Then, based on the incoming request, you can modify the response by 
    1. rewriting
    2. redirecting
    3. modifying the request or response headers or responding directly.

## Use Cases

1. Authentication and Authorization - <hr>
- Ensure user identity and check session cookies before granting access to specific pages or API routes.
2. Logging and Analytics - <hr>
- Capture and analyze request data for insights before processing by the page or API.

## Selectively Running Middleware

```
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  console.log(request.nextUrl.pathname)
  if (request.nextUrl.pathname.startsWith('/admin')) {
    return NextResponse.redirect(new URL('/signin', request.url))
  }
 
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.next()
  }
}
```