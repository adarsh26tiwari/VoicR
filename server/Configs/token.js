import jwt from 'jsonwebtoken';

// Function to generate a JWT token for a user
// This function takes a user object as input and returns a signed JWT token
// The token will contain the user's ID and email, and it will be signed using a secret key from the environment variables
//token is used to verify the user in subsequent requests, ensuring that they are authenticated and authorized to access certain resources or perform certain actions
const genToken= async (user)=>{
    try {
        const token=jwt.sign({userId:user._id,email:user.email},process.env.JWT_SECRET,{expiresIn:"7d"});
        return token;
    } catch (error) {
        console.error("Error generating token:", error);
        throw new Error("Error generating token");
    }
}

export default genToken;

