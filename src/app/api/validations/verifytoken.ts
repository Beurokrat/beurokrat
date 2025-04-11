import { verifyJWT } from "@/utils/jwt";
const verifyToken = async (req: Request): Promise<boolean> => {
    
    const cookies = req.headers.get('cookie') || '';
    const token = cookies.split('; ').find(cookie => cookie.startsWith('token='))?.split('=')[1];

    if (!token) return false; // No token found in cookies

    try {
        await verifyJWT(token); // Verify the token using the JWT utility function
        return true; // Token is valid
    } catch (err) {
        return false; // Token is invalid
    }
};

export default verifyToken;
