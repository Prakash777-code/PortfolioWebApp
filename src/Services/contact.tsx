export async function submitContactForm(
  name: string,
  email: string,
  message: string,
) {
  try {
    
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });

    return await res.json();
  } catch (error) {
    console.log(error);
  }
}
