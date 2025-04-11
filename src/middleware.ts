import { NextResponse } from 'next/server';
import { verifyJWT } from './utils/jwt'; // Path to your updated JWT verification function

export async function middleware(req: Request) {
  const cookies = req.headers.get('cookie'); // Get the cookies from the headers
  const token = cookies?.split('; ').find(cookie => cookie.startsWith('token='))?.split('=')[1]; // Extract the token

  // If there's no token, redirect to login page
  if (!token) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  try {
    // Use the new verifyJWT function that works with Web Crypto API    
    await verifyJWT(token); 
    return NextResponse.next(); // Allow the request to continue if the token is valid
  } catch (error) {    
    // If the token is invalid, redirect to login page
    return NextResponse.redirect(new URL('/login', req.url));
  }
}

export const config = {
  matcher: ['/admin'], // Protect all /admin routes
};
