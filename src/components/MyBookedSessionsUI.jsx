"use client";

import { Chip, Table } from "@heroui/react";
import { toast } from "react-toastify";

export function MyBookedSessionsUI({ bookings, token }) {
  const handleCancel = async (id) => {
    const res = await fetch(`http://localhost:5000/cancel-booking/${id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const result = await res.json();

    if (result.modifiedCount === 1) {
      toast.success("Booking canceled");
      window.location.reload();
    }
  };

  return (
    <div className="container mx-auto px-2 sm:px-4 py-6 md:py-10">
      <div className="w-full overflow-hidden rounded-xl border border-default-200 shadow-sm">
        <Table>
          <Table.ScrollContainer className="overflow-x-auto w-full">
            <Table.Content
              aria-label="My Booked Sessions table"
              className="min-w-[900px]">
              <Table.Header>
                <Table.Column isRowHeader>Name</Table.Column>
                <Table.Column>Phone</Table.Column>
                <Table.Column>Tutor Name</Table.Column>
                <Table.Column>Email</Table.Column>
                <Table.Column>Status</Table.Column>
                <Table.Column>Cancel</Table.Column>
              </Table.Header>

              <Table.Body>
                {bookings?.map((booking) => (
                  <Table.Row key={booking._id}>
                    <Table.Cell>{booking.studentName}</Table.Cell>
                    <Table.Cell>{booking.phone}</Table.Cell>
                    <Table.Cell>{booking.tutorName}</Table.Cell>
                    <Table.Cell>{booking.studentEmail}</Table.Cell>

                    <Table.Cell>
                      <Chip size="sm" variant="soft">
                        {booking.bookStatus}
                      </Chip>
                    </Table.Cell>

                    <Table.Cell>
                      <button
                        onClick={() => handleCancel(booking._id)}
                        disabled={booking.bookStatus === "Canceled"}
                        className="px-2 py-1 bg-red-100 text-red-600 rounded text-xs font-bold"
                      >
                        {booking.bookStatus === "Canceled"
                          ? "Canceled"
                          : "Cancel"}
                      </button>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table.Content>
          </Table.ScrollContainer>
        </Table>
      </div>
    </div>
  );
}

export default MyBookedSessionsUI;
