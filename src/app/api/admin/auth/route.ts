import bcrypt from 'bcryptjs';
import { NextRequest, NextResponse } from 'next/server';
import { generateJWT } from '../../../../utils/jwt';
import  admin  from '@/models/admin';

// POST method for login
export async function POST(req: NextRequest) {
  const { username, password } = await req.json();

  try {
    interface Admin {
      id: number;
      username: string;
      password: string;
    }

    const adminDetails = await admin.findOne({ where: { username } }) as Admin | null;
    if (!adminDetails) {
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }

    const isValidPassword = await bcrypt.compare(password, adminDetails.password);
    if (!isValidPassword) {
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }

    const token = generateJWT(adminDetails.id);

    // Set JWT token as an HttpOnly cookie
    const response = NextResponse.json({ message: 'Login successful' }, { status: 200 });
    response.cookies.set('token', token, {
      httpOnly: true,
      secure: true, // Ensure cookies are secure in production
      sameSite: 'strict',
      path: '/',
      maxAge: 3600, // 1 hour
    });

    return response;
  } catch (error) {
    console.error('Error parsing request body:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}

// DELETE method for logout
export async function DELETE(req: NextRequest) {
  try {
    // Clear the JWT token by setting an expired cookie
    const response = NextResponse.json({ message: 'Logout successful' }, { status: 200 });
    response.cookies.set('token', '', {
      httpOnly: true,
      secure: true, // Ensure cookies are secure in production
      sameSite: 'strict',
      path: '/',
      maxAge: 0, // Expire the cookie immediately
    });

    return response;
  } catch (error) {
    console.error('Error during logout:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
