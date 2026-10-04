"use client";

import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { FaGraduationCap } from "react-icons/fa6";
import { toast } from "react-toastify";

const BookingModal = ({ tutor, user, token }) => {
  const noSlot = Number(tutor?.totalSlot) === 0;

  const modalData = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_URI}/bookings`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        toast.error(result?.message || "Booking failed");
        return;
      }

      toast.success("Booking confirmed successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Modal>
      <Button
        isDisabled={noSlot}
        className="bg-accent text-accent-foreground w-full hover:bg-accent-soft"
        variant="secondary"
      >
        {noSlot ? "Fully Booked" : "Book Session"}
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />

            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <FaGraduationCap className="size-5" />
              </Modal.Icon>

              <Modal.Heading>Book Session</Modal.Heading>

              <p className="mt-1.5 text-sm leading-5 text-muted">
                Fill out the form below to book your session with this tutor.
              </p>
            </Modal.Header>

            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={modalData} className="flex flex-col gap-4">
                  <TextField
                    className="w-full"
                    name="studentName"
                    type="text"
                    variant="secondary"
                  >
                    <Label>Student Name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>

                  <TextField
                    className="w-full"
                    name="phone"
                    type="tel"
                    variant="secondary"
                  >
                    <Label>Phone</Label>
                    <Input placeholder="Enter your phone number" />
                  </TextField>

                  <TextField
                    className="w-full"
                    defaultValue={tutor?._id}
                    name="tutorId"
                    variant="secondary"
                    isReadOnly
                  >
                    <Label>Tutor ID</Label>
                    <Input />
                  </TextField>

                  <TextField
                    className="w-full"
                    defaultValue={tutor?.tutorName}
                    name="tutorName"
                    variant="secondary"
                    isReadOnly
                  >
                    <Label>Tutor Name</Label>
                    <Input />
                  </TextField>

                  <TextField
                    className="w-full"
                    defaultValue={user?.email}
                    name="studentEmail"
                    type="email"
                    variant="secondary"
                    isReadOnly
                  >
                    <Label>Student Email</Label>
                    <Input />
                  </TextField>

                  <Modal.Footer>
                    <Button slot="close" variant="secondary">
                      Cancel
                    </Button>

                    <Button type="submit" isDisabled={noSlot}>
                      {noSlot ? "Fully Booked" : "Confirm Booking"}
                    </Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default BookingModal;
