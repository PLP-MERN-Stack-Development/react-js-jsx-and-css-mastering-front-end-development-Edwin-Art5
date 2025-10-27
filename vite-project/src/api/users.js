// src/api/users.js

/**
 * Fetch users from JSONPlaceholder API
 */
export const fetchUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  return response.json();
};
