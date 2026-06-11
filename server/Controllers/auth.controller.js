import User from "../Models/user.model.js";
import genToken from "../Configs/token.js";

export const googleAuth= async(req,res)=>{
    try{

        //yaani frontend se google se sign in karne ke baad user ka name aur email milega, usko hum req.body se le lenge
        const {name,email}=req.body;
        if(!name || !email){
            return res.status(400).json({message:"Name and email are required"});
        }
        let user=await User.findOne({email});
        if(!user){
            //agar user database me nahi hai to naya user create karenge
            user=await User.create({name,email});
        }
        //ab user ke liye token generate karenge
        const token=await genToken(user._id);
        //token ko cookie me store karenge, taki frontend me user ke login state ko maintain kar sake
        res.cookie("token",token,{
            httpOnly:true,
            secure:false, // Set to true in production when using HTTPS
            sameSite:"strict",
            maxAge: 7*24*60*60*1000, // 7 days
        });
        return res.status(200).json({user, token});
    } catch (error) {
        console.error("Error in googleAuth:", error);
        res.status(500).json({ message: `Google Authentication Failed ${error.message}` });
    }
}

export const logOut= async(req,res)=>{
    try {
        res.clearCookie("token",{
            httpOnly:true,
            secure:false, // Set to true in production when using HTTPS
            sameSite:"strict",
        });
        return res.status(200).json({message:"Logout successfully"})
    } catch (error) {
        console.error("Error in logout:", error);
        res.status(500).json({ message: `Logout Failed ${error.message}` });
    }
}