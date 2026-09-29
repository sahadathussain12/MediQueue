
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { Table } from "@heroui/react";

const MyTutorsPage = async () => {
  const tokenData = await auth.api.getToken({
    headers: await headers(),
  });

  const res = await fetch("http://localhost:5000/my-tutors", {
    headers: {
      Authorization: `Bearer ${tokenData.token}`,
    },
    cache: "no-store",
  });

  const tutors = await res.json();

  console.log(tutors, "my tutors");

  return (
    <div className="container mx-auto px-4 py-10">
      {/* <div className="mb-6">
        <h1 className="text-2xl font-bold">My Tutors</h1>
        <p className="mt-1 text-sm text-default-500">
          Manage the tutors you have created.
        </p>
      </div> */}

      {tutors.length === 0 ? (
        <div className="rounded-xl border border-default-200 p-10 text-center">
          <h2 className="text-xl font-semibold">No Tutors Found</h2>
          <p className="mt-2 text-default-500">
            You haven't added any tutors yet.
          </p>
        </div>
      ) : (
        <Table aria-label="My tutors table">
          <Table.ScrollContainer>
            <Table.Content className="min-w-[900px]">
              <Table.Header>
                <Table.Column isRowHeader>Tutor Name</Table.Column>
                <Table.Column>Subject</Table.Column>
                <Table.Column>Available Days</Table.Column>
                <Table.Column>Hourly Fee</Table.Column>
                <Table.Column>Location</Table.Column>
                <Table.Column>Teaching Mode</Table.Column>
                <Table.Column>Actions</Table.Column>
              </Table.Header>

              <Table.Body>
                {tutors.map((tutor) => (
                  <Table.Row key={tutor._id}>
                    <Table.Cell>{tutor.tutorName}</Table.Cell>

                    <Table.Cell>{tutor.subject}</Table.Cell>

                    <Table.Cell>
                      {Array.isArray(tutor.availableDays)
                        ? tutor.availableDays.join(", ")
                        : tutor.availableDays}
                    </Table.Cell>

                    <Table.Cell>৳{tutor.hourlyFee}</Table.Cell>

                    <Table.Cell>{tutor.location}</Table.Cell>

                    <Table.Cell>{tutor.teachingMode}</Table.Cell>

                    <Table.Cell>
                      <div className="flex gap-2">
                        <button
                          className="rounded-md bg-blue-500 px-3 py-1.5 text-sm text-white hover:bg-blue-600"
                        >
                          Update
                        </button>

                        <button
                          className="rounded-md bg-red-500 px-3 py-1.5 text-sm text-white hover:bg-red-600"
                        >
                          Delete
                        </button>
                      </div>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table.Content>
          </Table.ScrollContainer>
        </Table>
      )}
    </div>
  );
};

export default MyTutorsPage;

