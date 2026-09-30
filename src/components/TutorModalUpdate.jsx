
"use client";

import { Button, Input, Modal } from "@heroui/react";
import React from "react";
import { toast } from "react-toastify";

const TutorModalUpdate = ({ tutor, token }) => {
  console.log(tutor, token, "tutorrr");

  const handleUpdate = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    if (data.availableDays) {
      data.availableDays = data.availableDays
        .split(",")
        .map((day) => day.trim());
    }

    data.hourlyFee = Number(data.hourlyFee);
    data.totalSlot = Number(data.totalSlot);

    const res = await fetch(
      `http://localhost:5000/update-tutors/${tutor._id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      }
    );

    const result = await res.json();

    console.log(result, "result");

    if (result.modifiedCount === 1) {
      toast.success("Tutor updated successfully");
      window.location.reload();
    } else {
      toast.error("Tutor update failed");
    }
  };

  return (
    <Modal>
      <Button variant="primary">Update</Button>

      <Modal.Backdrop>
        <Modal.Container>
          <Modal.Dialog className="max-w-3xl">
            <Modal.CloseTrigger />

            <Modal.Header>
              <Modal.Heading>Update Tutor</Modal.Heading>
            </Modal.Header>

            <form onSubmit={handleUpdate}>
              <Modal.Body>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Tutor Name
                    </label>
                    <Input
                      name="tutorName"
                      placeholder="Enter tutor name"
                      defaultValue={tutor?.tutorName || ""}
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Photo URL
                    </label>
                    <Input
                      name="photo"
                      placeholder="Enter photo URL"
                      defaultValue={tutor?.photo || ""}
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Subject
                    </label>
                    <Input
                      name="subject"
                      placeholder="Enter subject"
                      defaultValue={tutor?.subject || ""}
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Available Days
                    </label>
                    <Input
                      name="availableDays"
                      placeholder="e.g. Saturday, Monday, Wednesday"
                      defaultValue={
                        Array.isArray(tutor?.availableDays)
                          ? tutor.availableDays.join(", ")
                          : tutor?.availableDays || ""
                      }
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Available Time
                    </label>
                    <Input
                      name="availableTime"
                      placeholder="e.g. 5:00 PM - 7:00 PM"
                      defaultValue={tutor?.availableTime || ""}
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Hourly Fee
                    </label>
                    <Input
                      name="hourlyFee"
                      type="number"
                      placeholder="Enter hourly fee"
                      defaultValue={tutor?.hourlyFee || ""}
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Total Slot
                    </label>
                    <Input
                      name="totalSlot"
                      type="number"
                      placeholder="Enter total slot"
                      defaultValue={tutor?.totalSlot || ""}
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Session Start Date
                    </label>
                    <Input
                      name="sessionStartDate"
                      type="date"
                      defaultValue={
                        tutor?.sessionStartDate
                          ? new Date(tutor.sessionStartDate)
                              .toISOString()
                              .slice(0, 10)
                          : ""
                      }
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Institution
                    </label>
                    <Input
                      name="institution"
                      placeholder="Enter institution name"
                      defaultValue={tutor?.institution || ""}
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Experience
                    </label>
                    <Input
                      name="experience"
                      placeholder="e.g. 3 years"
                      defaultValue={tutor?.experience || ""}
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Location
                    </label>
                    <Input
                      name="location"
                      placeholder="Enter location"
                      defaultValue={tutor?.location || ""}
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Teaching Mode
                    </label>

                    <select
                      name="teachingMode"
                      defaultValue={tutor?.teachingMode || ""}
                      className="w-full rounded-lg border border-default-200 bg-transparent px-3 py-2.5 outline-none"
                    >
                      <option value="">Select teaching mode</option>
                      <option value="Online">Online</option>
                      <option value="Offline">Offline</option>
                      <option value="Both">Both</option>
                    </select>
                  </div>
                </div>
              </Modal.Body>

              <Modal.Footer>
                <Button slot="close" variant="tertiary">
                  Cancel
                </Button>

                <Button type="submit" slot="close" variant="primary">
                  Save Changes
                </Button>
              </Modal.Footer>
            </form>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default TutorModalUpdate;

