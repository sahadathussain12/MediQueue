'use client'

import { AlertDialog, Button } from "@heroui/react";
import React from "react";
import { toast } from "react-toastify";

const TutorsModalDelete = ({ tutor,token }) => {
 const handleDelete = async()=>{
   const res = await fetch(
        `${process.env.NEXT_PUBLIC_URI}/delete-tutors/${tutor._id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const result = await res.json()
      console.log(result,'result');

        if (result.deletedCount === 1) {
      window.location.reload();
      toast.success("Tutor Delete successfully")
    }

 }

  return (
    <div>
      <AlertDialog>
        <Button variant="danger">Delete</Button>
        <AlertDialog.Backdrop>
          <AlertDialog.Container>
            <AlertDialog.Dialog className="sm:max-w-[400px]">
              <AlertDialog.CloseTrigger />
              <AlertDialog.Header>
                <AlertDialog.Icon status="danger" />
                <AlertDialog.Heading>
                  Delete project permanently?
                </AlertDialog.Heading>
              </AlertDialog.Header>
              <AlertDialog.Body>
                <p>
                  This will permanently delete{" "}
                  <strong>{tutor.tutorName}</strong> and all of its data. This
                  action cannot be undone.
                </p>
              </AlertDialog.Body>
              <AlertDialog.Footer>
                <Button slot="close" variant="tertiary">
                  Cancel
                </Button>
                <Button onClick={handleDelete} slot="close" variant="danger">
                  Delete Tutor
                </Button>
              </AlertDialog.Footer>
            </AlertDialog.Dialog>
          </AlertDialog.Container>
        </AlertDialog.Backdrop>
      </AlertDialog>
    </div>
  );
};

export default TutorsModalDelete;
