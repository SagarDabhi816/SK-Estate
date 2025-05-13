import bcrypt from "bcrypt";
import prisma from "./lib/prisma.js";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const hashedpassword = await bcrypt.hash(password, 10);
    console.log(hashedpassword);

    // Hashing password

    //Create a new user and save it to database

    const newuser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedpassword,
      },
    });
    console.log(newuser);
    res.status(201).json({ message: "User Created Succesfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to Create" });
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    //cheak user exist or not
    const user = await prisma.user.findUnique({
      where: { username },
    });

    if (!user) return res.status(401).json({ message: "Invalid Credentials" });

    // check password is correct or not
    const isPAsswordValid = await bcrypt.compare(password, user.password);
    if (!isPAsswordValid)
      return res.status(401).json({ message: "Invalid Credentials" });

    //generate cookie and send it to user

    // res.setHeader("Set-Cookie","test=" + "myValue").json({message:"success"})

    const age = 1000 * 60 * 60 * 24 * 7;
    const token = jwt.sign({ id: user.id ,isAdmin:false }, process.env.JWT_SECRET_KEY, {
      expiresIn: age,
    });

    const {password:userPassword , ...userInfo} = user;
    res
      .cookie("token", token, {
        httpOnly: true,
        maxAge: age,
        // secure:true
      })
      .status(200)
      .json( userInfo);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to Login " });
  }
};

export const logout = (req, res) => {
  res.clearCookie("token").status(200).json({ message: "Logout Successful" });
};
