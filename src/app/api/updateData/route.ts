import {connect} from "@/dbConfig/dbConfig";
import User from "@/model/userData";
import { NextRequest, NextResponse } from "next/server";


connect();

export async function PUT(request: NextRequest){
  const reqBody = await request.json();
  const { _id } = reqBody;
  let user = await User.findById(_id);
  if (user) {
    user = await User.findByIdAndUpdate(_id, reqBody, { new: true });
  } else {
    user = await new User(reqBody).save();
  }
  
  
  
  return NextResponse.json("user saved", { status: 201 });
};