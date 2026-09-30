'use client'
import { Button, Input, Modal } from "@heroui/react";
import React from "react";

const TutorModalUpdate = ({ tutor, token }) => {
  console.log(tutor,token, "tutorrr");

  const handleUpdate = async(e)=>{
  e.preventDefault();

  const formData = new FormData(e.currentTarget);

  const data = Object.fromEntries(formData.entries());

   const res = await fetch(`http://localhost:5000/update-tutors/${tutor._id}`,{
    method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
          },
             body: JSON.stringify()
   })
    const result = await res.json(data)
         console.log(result,'result');
   
           if (result.UpdateCount === 1) {
         window.location.reload();
         toast.success("Tutor Update successfully")
       }
   
  }

  

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

            <Modal.Body>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {/* Tutor Name */}
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Tutor Name
                  </label>
                  <Input
                    placeholder="Enter tutor name"
                    defaultValue={tutor?.tutorName || ""}
                  />
                </div>

                {/* Photo URL */}
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Photo URL
                  </label>
                  <Input
                    placeholder="Enter photo URL"
                    defaultValue={tutor?.photo || ""}
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    placeholder="Enter subject"
                    defaultValue={tutor?.subject || ""}
                  />
                </div>

                {/* Available Days */}
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Available Days
                  </label>
                  <Input
                    placeholder="e.g. Saturday, Monday, Wednesday"
                    defaultValue={
                      Array.isArray(tutor?.availableDays)
                        ? tutor.availableDays.join(", ")
                        : tutor?.availableDays || ""
                    }
                  />
                </div>

                {/* Available Time */}
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Available Time
                  </label>
                  <Input
                    placeholder="e.g. 5:00 PM - 7:00 PM"
                    defaultValue={tutor?.availableTime || ""}
                  />
                </div>

                {/* Hourly Fee */}
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Hourly Fee
                  </label>
                  <Input
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
                    placeholder="Enter institution name"
                    defaultValue={tutor?.institution || ""}
                  />
                </div>

               
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Experience
                  </label>
                  <Input
                    placeholder="e.g. 3 years"
                    defaultValue={tutor?.experience || ""}
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Location
                  </label>
                  <Input
                    placeholder="Enter location"
                    defaultValue={tutor?.location || ""}
                  />
                </div>

      
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Teaching Mode
                  </label>

                  <select
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

              <Button onClick={handleUpdate} slot="close" variant="primary">
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default TutorModalUpdate;
