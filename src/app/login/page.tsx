'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '../_components/shadui/input';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../_components/shadui/card';
import { Button } from '../_components/shadui/button';
import { Loader2 } from 'lucide-react';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      setLoading(true);
      const res = await fetch('/api/auth', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (res.ok) {
        console.log('Login successful');

        router.push('/admin'); // Redirect to the dashboard on successful login
      } else {
        const data = await res.json();
        setError(data.message || 'Login failed');
      }
    } catch (error) {
      setError('Login failed due to server error');
    }
    finally {
      setLoading(false);
    }

  };

  return (
    <Card className="w-full max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 my-[150px]">
      <CardHeader>
        <CardTitle><h1 className="text-3xl font-bold mb-4">Admin Login</h1></CardTitle>
      </CardHeader>
      <CardContent className="max-w-md mx-auto mt-10">

        <form onSubmit={handleLogin} className="space-y-4">
          <Input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
          />
          <div className="flex justify-center align-center">
            {error && <div className="text-red-600">{error}</div>}
          </div>
          <CardFooter className="flex justify-center align-center">
            < Button type="submit" disabled={!username || !password} >


              {loading ? <Loader2 className="animate-spin" /> : 'Login'}
            </Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
};

export default LoginPage;
