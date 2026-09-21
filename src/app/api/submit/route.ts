import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const token = process.env.SENDER_API_TOKEN;

    if (!token) {
      console.error("Missing SENDER_API_TOKEN");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    // Prepare payload for Sender.net API v2
    // Sender expects email and firstname at minimum. We can pass the rest of the form data into custom fields or just serialize it.
    // For simplicity, we'll extract the name and email, and dump the rest as a JSON string into a generic note/custom field if supported, 
    // or just map known fields.
    
    // Determine first and last name from full name or contact name
    const rawName = data.name || data.full_name || data.contact_name || "";
    const nameParts = rawName.split(" ");
    const firstname = nameParts[0] || "Unknown";
    const lastname = nameParts.slice(1).join(" ") || undefined;
    
    // Flatten remaining data into a single readable string to send to a generic 'message' field 
    // or to keep record of it, since Sender is subscriber-based.
    const customData = Object.entries(data)
      .filter(([key]) => !["name", "full_name", "contact_name", "email"].includes(key))
      .map(([key, value]) => `${key}: ${value}`)
      .join(" | ");

    const payload = {
      email: data.email,
      firstname,
      lastname,
      fields: {
        form_data: customData // Assumes you create a custom field 'form_data' in Sender, otherwise it ignores it gracefully
      },
      // You can also add them to a specific group by passing groups: ['GROUP_ID']
    };

    const response = await fetch("https://api.sender.net/v2/subscribers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Sender.net API Error:", errorData);
      return NextResponse.json(
        { error: "Failed to submit to Sender.net" },
        { status: response.status }
      );
    }

    const responseData = await response.json();
    return NextResponse.json({ success: true, data: responseData });

  } catch (error) {
    console.error("API Route Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
