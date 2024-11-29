"use client";

import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../../lib/api";

export default function UserDetails() {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["users"], // Unique key for this query
    queryFn: getUser, // API function
    refetchInterval: 5000, // Refetch data every 5 seconds
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error instanceof Error) {
    return <p>Error: {error.message}</p>;
  }

  const users = data.data; // Assuming the API returns an array of users

  return (
    <div style={{ padding: "2rem" }}>
      <h1 style={{ textAlign: "center", marginBottom: "1rem" }}>User List</h1>

          {users.map((user: any) => (

    <div
      style={{
        maxWidth: "600px",
        margin: "1rem auto",
        padding: "1rem",
        border: "1px solid #ccc",
        borderRadius: "8px",
      }}
    >
      <h2 style={{ textAlign: "center" }}>User Details</h2>
      <div style={{ marginBottom: "1rem" }}>
        <strong>Name:</strong> {user.nama_user}
      </div>
      <div style={{ marginBottom: "1rem" }}>
        <strong>Username:</strong> {user.username}
      </div>
      <div style={{ marginBottom: "1rem" }}>
        <strong>Role:</strong> {user.role}
      </div>
      <div style={{ marginBottom: "1rem" }}>
        <strong>Status:</strong> {user.status}
      </div>
      <div style={{ marginBottom: "1rem" }}>
        <strong>Created At:</strong>{" "}
        {new Date(user.date_created).toLocaleString()}
      </div>
    </div>

          ))}

    </div>
  );
}
