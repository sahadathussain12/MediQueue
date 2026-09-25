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

import { FaChalkboardTeacher, FaCheckCircle } from "react-icons/fa";
import { FaLocationDot, FaMoneyBillWave } from "react-icons/fa6";
import { MdOutlineAccessTime, MdSchool } from "react-icons/md";
import { toast } from "react-toastify";

const AddTutor = () => {
  const router = useRouter();

  const [sessionStartDate, setSessionStartDate] = useState(null);
  const [loading, setLoading] = useState(false);

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    tutorName: "",
    photo: "",
    subject: "",
    availableDays: "",
    availableTime: "",
    hourlyFee: "",
    totalSlot: "",
    institution: "",
    experience: "",
    location: "",
    teachingMode: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    if (!sessionStartDate) {
      toast.error("Please select a session start date.");
      setLoading(false);
      return;
    }

    const tutorData = {
      ...formData,
      sessionStartDate: sessionStartDate.toISOString(),
    };

    try {
      const response = await fetch("http://localhost:5000/tutors", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(tutorData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Tutor added successfully!");
        setFormData({
          tutorName: "",
          photo: "",
          subject: "",
          availableDays: "",
          availableTime: "",
          hourlyFee: "",
          totalSlot: "",
          institution: "",
          experience: "",
          location: "",
          teachingMode: "",
        });
        setSessionStartDate(null);

        setTimeout(() => {
          router.push("/tutors");
        }, 1500);
      } else {
        toast.error(data?.message || "Failed to add tutor. Please try again.");
      }
    } catch (error) {
      console.error(error);
     toast.error("Something went wrong. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen px-4 py-12 sm:px-6 lg:px-8 bg-gradient-to-br from-default-50 via-background to-default-100/50">
      <div className="mx-auto max-w-3xl">

        {/* ================= HEADER ================= */}
        <div className="mb-10 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/15 shadow-inner ring-1 ring-primary/20">
            <FaChalkboardTeacher className="text-3xl text-primary" />
          </div>

          <h1 className="text-2xl font-extrabold tracking-tight sm:text-4xl text-foreground">
            Add New Tutor Profile
          </h1>

          <p className="mt-2 text-sm text-default-500 sm:text-base max-w-md mx-auto">
            Fill out the details below to publish your profile and start connecting with students seamlessly.
          </p>
        </div>

        {/* ================= SUCCESS ALERT ================= */}
        {successMessage && (
          <div className="mb-6 flex items-center gap-3 rounded-2xl border border-success/30 bg-success/10 p-4 text-success shadow-lg backdrop-blur-md animate-fadeIn">
            <FaCheckCircle className="text-xl shrink-0" />
            <p className="font-medium">{successMessage}</p>
          </div>
        )}

        {/* ================= ERROR ALERT ================= */}
        {errorMessage && (
          <div className="mb-6 rounded-2xl border border-danger/30 bg-danger/10 p-2 text-danger shadow-lg backdrop-blur-md animate-fadeIn">
            <p className="font-medium">{errorMessage}</p>
          </div>
        )}

        {/* ================= MAIN CARD ================= */}
        <Card className="rounded-3xl border border-default-200/60 bg-background/80 p-6 shadow-2xl sm:p-10 backdrop-blur-xl">
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* ================= BASIC INFORMATION ================= */}
            <section className="space-y-3">
              {/* <div className="border-b border-default-200/60 pb-3">
                <h2 className="flex items-center gap-2.5 text-lg font-bold sm:text-xl text-foreground">
                  <span className="p-2 rounded-xl bg-primary/10 text-primary">
                    <MdSchool className="text-xl" />
                  </span>
                  Basic Information
                </h2>
                <p className="mt-1 text-xs sm:text-sm text-default-500">
                  Provide core identification details for the tutor.
                </p>
              </div> */}

              <div className="grid gap-6 md:grid-cols-2">
                <TextField isRequired>
                  <Label>Tutor Name</Label>
                  <Input
                    name="tutorName"
                    value={formData.tutorName}
                    onChange={handleChange}
                    placeholder="Enter full name"
                  />
                  <Description>Your professional display name.</Description>
                </TextField>

                <TextField isRequired>
                  <Label>Photo URL</Label>
                  <Input
                    name="photo"
                    value={formData.photo}
                    onChange={handleChange}
                    placeholder="https://i.ibb.co/..."
                    type="url"
                  />
                  <Description>Direct link from ImgBB or PostImage.</Description>
                </TextField>

                {/* Subject Dropdown (Dark Mode Fixed) */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-foreground">
                    Subject / Category <span className="text-danger">*</span>
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="h-11 w-full rounded-xl border border-default-300 dark:border-default-100/20 bg-default-50 dark:bg-zinc-900/90 px-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 shadow-sm"
                  >
                    <option value="" disabled>Select subject</option>
                    <option value="Mathematics">Mathematics</option>
                    <option value="Physics">Physics</option>
                    <option value="Chemistry">Chemistry</option>
                    <option value="English">English</option>
                    <option value="Biology">Biology</option>
                    <option value="Computer Science">Computer Science</option>
                  </select>
                </div>

                {/* Teaching Mode Dropdown (Dark Mode Fixed) */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-foreground">
                    Teaching Mode <span className="text-danger">*</span>
                  </label>
                  <select
                    name="teachingMode"
                    value={formData.teachingMode}
                    onChange={handleChange}
                    required
                    className="h-11 w-full rounded-xl border border-default-300 dark:border-default-100/20 bg-default-50 dark:bg-zinc-900/90 px-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 shadow-sm"
                  >
                    <option value="" disabled>Select teaching mode</option>
                    <option value="Online">Online</option>
                    <option value="Offline">Offline</option>
                    <option value="Both">Both</option>
                  </select>
                </div>
              </div>
            </section>

            {/* ================= AVAILABILITY ================= */}
            <section className="space-y-6 pt-2">
              {/* <div className="border-b border-default-200/60 pb-3">
                <h2 className="flex items-center gap-2.5 text-lg font-bold sm:text-xl text-foreground">
                  <span className="p-2 rounded-xl bg-primary/10 text-primary">
                    <MdOutlineAccessTime className="text-xl" />
                  </span>
                  Availability & Schedule
                </h2>
                <p className="mt-1 text-xs sm:text-sm text-default-500">
                  Specify your teaching days, time slots, and start date.
                </p>
              </div> */}

              <div className="grid gap-6 md:grid-cols-2">
                <TextField isRequired>
                  <Label>Available Days</Label>
                  <Input
                    name="availableDays"
                    value={formData.availableDays}
                    onChange={handleChange}
                    placeholder="Sun - Thu"
                  />
                  <Description>Example: Sun - Thu</Description>
                </TextField>

                <TextField isRequired>
                  <Label>Available Time Slot</Label>
                  <Input
                    name="availableTime"
                    value={formData.availableTime}
                    onChange={handleChange}
                    placeholder="5:00 PM - 8:00 PM"
                  />
                  <Description>Example: 5:00 PM - 8:00 PM</Description>
                </TextField>

                <TextField isRequired>
                  <Label>Total Slots</Label>
                  <Input
                    name="totalSlot"
                    value={formData.totalSlot}
                    onChange={handleChange}
                    placeholder="10"
                    type="number"
                    min="1"
                  />
                  <Description>Maximum capacity of students.</Description>
                </TextField>

                {/* Session Start Date (Dark Mode Styled Wrapper) */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-foreground">
                    Session Start Date <span className="text-danger">*</span>
                  </label>
                  <div className="relative">
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
              </div>
            </section>

            {/* ================= FEE & EXPERIENCE ================= */}
            <section className="space-y-6 pt-2">
              {/* <div className="border-b border-default-200/60 pb-3">
                <h2 className="flex items-center gap-2.5 text-lg font-bold sm:text-xl text-foreground">
                  <span className="p-2 rounded-xl bg-primary/10 text-primary">
                    <FaMoneyBillWave className="text-xl" />
                  </span>
                  Fee & Qualifications
                </h2>
                <p className="mt-1 text-xs sm:text-sm text-default-500">
                  Share your hourly compensation rate and background.
                </p>
              </div> */}

              <div className="grid gap-6 md:grid-cols-2">
                <TextField isRequired>
                  <Label>Hourly Fee ($ / ৳)</Label>
                  <Input
                    name="hourlyFee"
                    value={formData.hourlyFee}
                    onChange={handleChange}
                    placeholder="500"
                    type="number"
                    min="0"
                  />
                  <Description>Rate charged per hour.</Description>
                </TextField>

                <TextField isRequired>
                  <Label>Institution / University</Label>
                  <Input
                    name="institution"
                    value={formData.institution}
                    onChange={handleChange}
                    placeholder="Moulvibazar Polytechnic Institute"
                  />
                  <Description>Your school or university name.</Description>
                </TextField>

                <TextField isRequired>
                  <Label>Experience</Label>
                  <Input
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    placeholder="3 years"
                  />
                  <Description>Total years of teaching background.</Description>
                </TextField>

                <TextField isRequired>
                  <Label>
                    <span className="flex items-center gap-1.5">
                      <FaLocationDot className="text-primary" />
                      Location
                    </span>
                  </Label>
                  <Input
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Moulvibazar, Bangladesh"
                  />
                  <Description>Your current teaching region.</Description>
                </TextField>
              </div>
            </section>

            {/* ================= PHOTO PREVIEW ================= */}
            {formData.photo && (
              <section className="border-t border-default-200/60 pt-6 animate-fadeIn">
                <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-default-500">
                  Photo Preview
                </h3>
                <div className="w-fit overflow-hidden rounded-2xl border border-default-200 bg-default-100/50 p-2 shadow-sm">
                  <img
                    src={formData.photo}
                    alt="Tutor preview"
                    className="h-28 w-28 rounded-xl object-cover shadow-inner"
                  />
                </div>
              </section>
            )}

            {/* ================= ACTION BUTTONS ================= */}
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