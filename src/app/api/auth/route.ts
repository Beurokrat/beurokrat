import bcrypt from 'bcryptjs';
import { NextRequest, NextResponse } from 'next/server';
import { generateJWT } from '../../../utils/jwt';
import { Admin } from '../../../models/admin';


// POST method for login
export async function POST(req: NextRequest) {
  const { username, password } = await req.json();

  try {
    const admin = await Admin.findOne({ where: { username } });
    if (!admin) {
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }

    const isValidPassword = await bcrypt.compare(password, admin.password);
    if (!isValidPassword) {
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }

    const token = generateJWT('1');

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
  }


}
