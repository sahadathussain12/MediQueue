"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import {
  Button,
  Card,
  Description,
  Input,
  Label,
  TextField,
} from "@heroui/react";

import { FaChalkboardTeacher } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-clien";

const AddTutor = () => {
  const router = useRouter();

  const { data: session } = authClient.useSession();
  const userId = session?.user?.id;

  const [sessionStartDate, setSessionStartDate] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form element immediately save
    const form = e.currentTarget;
    const formData = new FormData(form);

    if (!sessionStartDate) {
      toast.error("Please select a session start date.");
      return;
    }

    if (!userId) {
      toast.error("Please login first.");
      return;
    }

    setLoading(true);

    try {
      // Get all form data
      const formValues = Object.fromEntries(formData.entries());

      const tutorsData = {
        ...formValues,
        userId,
        sessionStartDate: sessionStartDate.toISOString(),
        totalSlot: Number(formData.get("totalSlot")),
        hourlyFee: Number(formData.get("hourlyFee")),
      };

      // Get token
      const tokenResponse = await authClient.token();

      console.log("Token Response:", tokenResponse);

      const token = tokenResponse?.data?.token;

      if (!token) {
        toast.error("Authentication token not found. Please login again.");
        return;
      }

      console.log("Tutor Data:", tutorsData);

      const response = await fetch("http://localhost:5000/tutors", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(tutorsData),
      });

      const data = await response.json();

      console.log("Server Response:", data);

      if (response.ok) {
        toast.success("Tutor added successfully!");

        form.reset();
        setSessionStartDate(null);

        setTimeout(() => {
          router.push("/tutors");
        }, 1000);
      } else {
        toast.error(data?.message || "Failed to add tutor. Please try again.");
      }
    } catch (error) {
      console.error("Add tutor error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen px-4 py-12 sm:px-6 lg:px-8 bg-gradient-to-br from-default-50 via-background to-default-100/50">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/15 shadow-inner ring-1 ring-primary/20">
            <FaChalkboardTeacher className="text-3xl text-primary" />
          </div>

          <h1 className="text-2xl font-extrabold tracking-tight sm:text-4xl text-foreground">
            Add New Tutor Profile
          </h1>

          <p className="mt-2 text-sm text-default-500 sm:text-base max-w-md mx-auto">
            Fill out the details below to publish your profile and start
            connecting with students seamlessly.
          </p>
        </div>

        <Card className="rounded-3xl border border-default-200/60 bg-background/80 p-6 shadow-2xl sm:p-10 backdrop-blur-xl">
          <form onSubmit={handleSubmit} className="space-y-5">
            <section className="space-y-3">
              <div className="grid gap-6 md:grid-cols-2">
                <TextField name="tutorName" isRequired>
                  <Label>Tutor Name</Label>
                  <Input
                    placeholder="Enter full name"
                    className="rounded-2xl"
                  />
                  <Description>Your professional display name.</Description>
                </TextField>

                <TextField name="photo" isRequired>
                  <Label>Photo URL</Label>
                  <Input
                    type="url"
                    placeholder="https://i.ibb.co/..."
                    className="rounded-2xl"
                  />
                  <Description>
                    Direct link from ImgBB or PostImage.
                  </Description>
                </TextField>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-foreground">
                    Subject / Category <span className="text-danger">*</span>
                  </label>

                  <select
                    name="subject"
                    required
                    defaultValue=""
                    className="h-11 w-full rounded-xl border border-default-300 dark:border-default-100/20 bg-default-50 dark:bg-zinc-900/90 px-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 shadow-sm"
                  >
                    <option value="" disabled>
                      Select subject
                    </option>
                    <option value="Mathematics">Mathematics</option>
                    <option value="Physics">Physics</option>
                    <option value="Chemistry">Chemistry</option>
                    <option value="English">English</option>
                    <option value="Biology">Biology</option>
                    <option value="Computer Science">Computer Science</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-foreground">
                    Teaching Mode <span className="text-danger">*</span>
                  </label>

                  <select
                    name="teachingMode"
                    required
                    defaultValue=""
                    className="h-11 w-full rounded-xl border border-default-300 dark:border-default-100/20 bg-default-50 dark:bg-zinc-900/90 px-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 shadow-sm"
                  >
                    <option value="" disabled>
                      Select teaching mode
                    </option>
                    <option value="Online">Online</option>
                    <option value="Offline">Offline</option>
                    <option value="Both">Both</option>
                  </select>
                </div>
              </div>
            </section>

            <section className="space-y-6 pt-2">
              <div className="grid gap-6 md:grid-cols-2">
                <TextField name="availableDays" isRequired>
                  <Label>Available Days</Label>
                  <Input placeholder="Sun - Thu" className="rounded-2xl" />
                  <Description>Example: Sun - Thu</Description>
                </TextField>

                <TextField name="availableTime" isRequired>
                  <Label>Available Time Slot</Label>
                  <Input
                    placeholder="5:00 PM - 8:00 PM"
                    className="rounded-2xl"
                  />
                  <Description>Example: 5:00 PM - 8:00 PM</Description>
                </TextField>

                <TextField name="totalSlot" type="number" isRequired>
                  <Label>Total Slots</Label>
                  <Input
                    type="number"
                    min="1"
                    placeholder="10"
                    className="rounded-2xl"
                  />
                  <Description>Maximum capacity of students.</Description>
                </TextField>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-foreground">
                    Session Start Date <span className="text-danger">*</span>
                  </label>

                  <DatePicker
                    selected={sessionStartDate}
                    onChange={(date) => setSessionStartDate(date)}
                    minDate={new Date()}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="Select start date"
                    className="h-11 w-full rounded-xl border border-default-300 dark:border-default-100/20 bg-default-50 dark:bg-zinc-900/90 px-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 shadow-sm"
                  />
                </div>
              </div>
            </section>

            <section className="space-y-6 pt-2">
              <div className="grid gap-6 md:grid-cols-2">
                <TextField name="hourlyFee" type="number" isRequired>
                  <Label>Hourly Fee ($ / ৳)</Label>
                  <Input
                    type="number"
                    min="0"
                    placeholder="500"
                    className="rounded-2xl"
                  />
                  <Description>Rate charged per hour.</Description>
                </TextField>

                <TextField name="institution" isRequired>
                  <Label>Institution / University</Label>
                  <Input
                    placeholder="Moulvibazar Polytechnic Institute"
                    className="rounded-2xl"
                  />
                  <Description>Your school or university name.</Description>
                </TextField>

                <TextField name="experience" isRequired>
                  <Label>Experience</Label>
                  <Input placeholder="3 years" className="rounded-2xl" />
                  <Description>Total years of teaching background.</Description>
                </TextField>

                <TextField name="location" isRequired>
                  <Label>
                    <span className="flex items-center gap-1.5">
                      <FaLocationDot className="text-primary" />
                      Location
                    </span>
                  </Label>

                  <Input
                    placeholder="Moulvibazar, Bangladesh"
                    className="rounded-2xl"
                  />

                  <Description>Your current teaching region.</Description>
                </TextField>
              </div>
            </section>

            <div className="flex flex-col-reverse gap-3 border-t border-default-200/60 pt-6 sm:flex-row sm:justify-end">
              <Button
                type="button"
                variant="flat"
                onPress={() => router.back()}
                className="w-full rounded-xl sm:w-auto px-6 font-medium"
              >
                Cancel
              </Button>

              <Button
                type="submit"
                color="primary"
                size="lg"
                isDisabled={loading}
                className="w-full rounded-xl font-semibold sm:w-auto px-8 shadow-lg shadow-primary/25 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                {loading ? "Adding Tutor..." : "Add Tutor Profile"}
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </main>
  );
};

export default AddTutor;
