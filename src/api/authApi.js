export const sendTokenToBackend = async (token) => {
  return fetch("https://ecommerce-vzru.onrender.com/api/auth/firebase", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token }),
  });
};