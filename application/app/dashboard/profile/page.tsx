"use client";

import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { SelectScrollable } from "@/components/SelectDropdown";
import axios from "axios";

const formSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Full Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  phone: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits." }),
  city: z.string().min(2, { message: "City must be at least 2 characters." }),
  address: z
    .string()
    .min(5, { message: "Address must be at least 5 characters." }),
  dob: z.string().optional(),
});

const UserProfile = () => {
  const [date, setDate] = React.useState<Date>();
  const [image, setImage] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      city: "",
      address: "",
      dob: "",
      country: "",
      gender: "",
      age: 0,
    },
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      setImageFile(file);
    }
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      // if (!image) {
      //   console.log("Image is missing");
      //   return;
      // }
      const formData = new FormData();
      formData.append("image", image); // Ensure this is the actual file object
      formData.append("fullName", values.fullName);
      formData.append("email", values.email);
      formData.append("phone", values.phone);
      formData.append("city", values.city);
      formData.append("address", values.address);
      if (values.dob) formData.append("dob", values.dob); // optional fields
      formData.append("country", "Pakistan");
      formData.append("gender", "Unknown");
      formData.append("age", 30);
      const response = await axios.post("/api/users", formData);
      const data = await response.data;
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {/* <div className="flex justify-center">
          <label className="relative block cursor-pointer">
            <input
              type="file"
              accept="image/*"
              className="hidden"
              name="image"
              onChange={handleImageChange}
              // required
            />
            <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
              {image ? (
                <img
                  src={image}
                  alt="Profile"
                  className="object-cover w-full h-full"
                />
              ) : (
                <span className="text-gray-400">Click to upload</span>
              )}
            </div>
          </label>
        </div> */}

        <div className="flex flex-wrap justify-between space-y-4">
          <div className="w-full sm:w-5/12 mb-4">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Deepak Kumar Khatri" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="w-full sm:w-5/12 mb-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="deepak@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="w-full sm:w-5/12 mb-4">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input placeholder="+923333760281" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="w-full sm:w-5/12 mb-4">
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>City</FormLabel>
                  <FormControl>
                    <Input placeholder="Hyderabad" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="w-full sm:w-5/12 mb-4">
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="R#D03 3rd Floor Hostel City Islamabad...."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="w-full sm:w-5/12 mb-4">
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country</FormLabel>
                  <FormControl>
                    <SelectScrollable from="country" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="w-full sm:w-5/12 mb-4">
            <FormLabel>Date of Birth</FormLabel>
            <FormField
              control={form.control}
              name="dob"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? (
                            format(date, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={(selectedDate) => {
                            setDate(selectedDate);
                            field.onChange(
                              selectedDate
                                ? format(selectedDate, "yyyy-MM-dd")
                                : ""
                            );
                          }}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="w-full sm:w-5/12 mb-4">
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Gender</FormLabel>
                  <FormControl>
                    <SelectScrollable from="gender" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="flex justify-center">
          <Button type="submit" className="w-1/2">
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default UserProfile;
