import { getAuth, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

document.getElementById("resetBtn").addEventListener("click", async () => {
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message");

    if (!email) {
        message.textContent = "⚠ Please enter your email.";
        message.style.color = "orange";
        return;
    }

    try {
        const auth = getAuth();
        await sendPasswordResetEmail(auth, email);
        
        message.textContent = "✔ Reset link sent! Check your inbox.";
        message.style.color = "lightgreen";
    } catch (error) {
        console.log(error);
        message.textContent = `❌ Error: ${error.message}`;
        message.style.color = "red";
    }
});
