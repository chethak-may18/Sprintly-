import { auth, provider, signInWithPopup } from "./firebase.js";

const loginBtn = document.getElementById("login-btn");
const userBox = document.getElementById("user-box");

loginBtn.addEventListener("click", async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    // Show user info
    userBox.innerHTML = `
      <h2>Welcome ${user.displayName}</h2>
      <p>${user.email}</p>
      <img src="${user.photoURL}" width="80" style="border-radius:50%" />
    `;

  } catch (error) {
    console.error(error);
    alert("Login failed");
  }
});
