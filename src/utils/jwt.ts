import jwt from 'jsonwebtoken';
import { jwtVerify } from 'jose';

// Use your secret key securely
const SECRET_KEY = process.env.JWT_SECRET_KEY;
if (!SECRET_KEY) {
  throw new Error('JWT_SECRET_KEY is not defined in environment variables');
}


export const generateJWT = (userId: string) => {
  return jwt.sign({ userId }, SECRET_KEY, {
    expiresIn: '1h',
  });
};




export const verifyJWT = async (token: string) => {
  try {
    // jwtVerify uses Web Crypto API internally, compatible with Edge runtime
    const { payload } = await jwtVerify(token, new TextEncoder().encode(SECRET_KEY));
    return payload;
  } catch (error) {
    throw new Error('Invalid or expired token');
  }
};