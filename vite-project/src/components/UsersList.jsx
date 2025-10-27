// src/components/UsersList.jsx
import React, { useState, useEffect } from "react";
import Button from "./Button";

/**
 * Fetches users from the JSONPlaceholder API
 * Displays loading and error states
 */
const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) throw new Error("Failed to fetch users");
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p className="text-gray-500 text-center">Loading users...</p>;
  if (error) return <p className="text-red-500 text-center">Error: {error}</p>;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mt-8">
      <h2 className="text-2xl font-bold mb-4">User List (from API)</h2>

      <ul className="space-y-3">
        {users.map((user) => (
          <li
            key={user.id}
            className="border rounded-lg p-3 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition"
          >
            <p className="font-semibold">{user.name}</p>
            <p className="text-sm text-gray-500">{user.email}</p>
            <p className="text-sm text-gray-400">{user.company.name}</p>
          </li>
        ))}
      </ul>

      <div className="text-center mt-6">
        <Button variant="secondary" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Back to Top ↑
        </Button>
      </div>
    </div>
  );
};

export default UsersList;
