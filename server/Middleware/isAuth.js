


// Middleware to check if the user is authenticated
// This function checks for the presence of a JWT token in the request cookies
// If a token is found, it verifies the token and extracts the user information
// If the token is valid, it attaches the user information to the request object and calls the next middleware or route handler
// If the token is missing or invalid, it responds with a 401 Unauthorized status and an error message
import jwt from 'jsonwebtoken';
export const isAuth= async (req,res,next)=>{
    try{
        const token=req.cookies.token;
        if(!token){
            return res.status(401).json({message:"Unauthorized"});
        }
        // else Verify the token and extract user information
        const verifyToken=jwt.verify(token,process.env.JWT_SECRET);
        if(!verifyToken){
            return res.status(401).json({message:"Unauthorized"});
        }
        req.userId=verifyToken.userId;
        next();
        
    } catch(error){
        console.error(error);
        return res.status(500).json({message:"Authorization Error"});
        }

    }
    