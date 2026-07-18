"use server";

// Lead + newsletter Server Actions.
// Extension point: forward to your CRM / email provider (Resend, Brevo, HubSpot…).
type Result = { ok: boolean; error?: string };

export async function requestBooking(_prev: Result | null, formData: FormData): Promise<Result> {
  const email = String(formData.get("email") ?? "");
  const name = String(formData.get("name") ?? "");
  if (!email.includes("@") || name.length < 2) return { ok: false, error: "Please check your name and email." };
  console.log("[lead]", Object.fromEntries(formData));
  return { ok: true };
}

export async function subscribe(_prev: Result | null, formData: FormData): Promise<Result> {
  const email = String(formData.get("email") ?? "");
  if (!email.includes("@")) return { ok: false, error: "Invalid email." };
  console.log("[newsletter]", email);
  return { ok: true };
}

export async function sendContactMessage(_prev: Result | null, formData: FormData): Promise<Result> {
  const email = String(formData.get("email") ?? "");
  const name = String(formData.get("name") ?? "");
  const message = String(formData.get("message") ?? "");
  if (!email.includes("@") || name.length < 2 || message.length < 5) return { ok: false, error: "Please check your name, email, and message." };
  console.log("[contact]", Object.fromEntries(formData));
  return { ok: true };
}

export async function submitOrder(_prev: Result | null, formData: FormData): Promise<Result> {
  const email = String(formData.get("email") ?? "");
  const name = String(formData.get("name") ?? "");
  const phone = String(formData.get("phone") ?? "");
  const address = String(formData.get("address") ?? "");
  const items = String(formData.get("items") ?? "[]");
  if (!email.includes("@") || name.length < 2 || phone.length < 6 || address.length < 5) {
    return { ok: false, error: "Please check your name, email, phone, and shipping address." };
  }
  console.log("[order]", { name, email, phone, address, items });
  return { ok: true };
}
