import mongoose, { Document, Model, Schema } from "mongoose";

interface ProfileImage {
  imageUrl: string;
  public_id: string;
}

interface TodoCategory {
  title: string;
  tasks: string[];
}

export interface UserModel extends Document {
  fullName: string;
  email: string;
  gender: string;
  phoneNumber: string;
  age: number;
  city: string;
  address: string;
  country: string;
  subscriptions: string[];
  profileImage: ProfileImage;
  todoList: TodoCategory[];
}

const ProfileImageSchema: Schema<ProfileImage> = new mongoose.Schema(
  {
    imageUrl: {
      type: String,
      required: true,
    },
    public_id: {
      type: String,
      required: true,
    },
  },
  { _id: false }
);

const TodoCategorySchema: Schema<TodoCategory> = new mongoose.Schema({
  title: {
    type: String,
    // required: true,
  },
  tasks: {
    type: [String],
    default: [],
  },
});

const UserSchema: Schema<UserModel> = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Please add a full name"],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Please add an email"],
      unique: true,
    },
    gender: {
      type: String,
      required: [true, "Please add a gender"],
    },
    phoneNumber: {
      type: String,
      required: [true, "Please add a phone number"],
    },
    age: {
      type: Number,
      required: [true, "Please add an age"],
    },
    city: {
      type: String,
      required: [true, "Please add a city"],
    },
    address: {
      type: String,
      required: [true, "Please add an address"],
    },
    country: {
      type: String,
      required: [true, "Please add a country"],
    },
    subscriptions: {
      type: [String],
      default: [],
    },
    // profileImage: {
    //   type: ProfileImageSchema,
    //   // required: true,
    // },
    todoList: {
      type: [TodoCategorySchema],
      default: [
        { title: "TO DO", tasks: [] },
        { title: "IN PROGRESS", tasks: [] },
        { title: "COMPLETED", tasks: [] },
      ],
    },
  },
  {
    timestamps: true,
  }
);

const User: Model<UserModel> =
  mongoose.models.User || mongoose.model<UserModel>("User", UserSchema);

export default User;
