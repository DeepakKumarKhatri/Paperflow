import dbConnect from "@/lib/db.config";
import { UploadProfileImage } from "@/lib/uploadMedia";
import User from "@/models/user";
import { NextRequest, NextResponse } from "next/server";

dbConnect();

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const profileImage = formData.get("image") as unknown as File;

    // Assuming UploadProfileImage returns an object with imageUrl and public_id
    // const imageUploadData = await UploadProfileImage(profileImage, "users-profile-images");

    // Extracting other form data
    const fullName = formData.get("fullName") as string;
    const email = formData.get("email") as string;
    const gender = formData.get("gender") as string;
    const phoneNumber = formData.get("phone") as string;
    const age = formData.get("age") as string;
    const city = formData.get("city") as string;
    const address = formData.get("address") as string;
    const country = formData.get("country") as string;

    // Create a new user in the database
    const newUser = await User.create({
      fullName,
      email,
      gender,
      phoneNumber,
      age,
      city,
      address,
      country,
      // profileImage: imageUploadData,  // Assuming this is the correct format
    });

    // Return a success response
    return NextResponse.json({ message: "User Created", user: newUser }, { status: 201 });
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const users = await User.find({});
    return NextResponse.json({ data: users }, { status: 200 });
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
