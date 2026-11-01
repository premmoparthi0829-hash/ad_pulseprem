import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const fullName = body.fullName;
    const email = body.email;
    const phone = body.phone;
    const companyName = body.companyName || body.organization;
    const serviceRequired = body.serviceRequired || body.service;
    const projectDetails = body.projectDetails;

    // Strict validation
    if (!fullName || typeof fullName !== "string" || fullName.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid full name." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid corporate email address." },
        { status: 400 }
      );
    }

    if (!companyName || typeof companyName !== "string" || companyName.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Please enter your organization or company name." },
        { status: 400 }
      );
    }

    if (!serviceRequired || typeof serviceRequired !== "string") {
      return NextResponse.json(
        { success: false, error: "Please select the primary capability required." },
        { status: 400 }
      );
    }

    if (!projectDetails || projectDetails.trim().length < 10) {
      return NextResponse.json(
        {
          success: false,
          error: "Please share brief project objectives (at least 10 characters).",
        },
        { status: 400 }
      );
    }

    // Structured lead record for future CRM / email integration
    const leadRecord = {
      leadId: `LEAD-${Date.now()}-${Math.random().toString(36).substring(2, 7).toUpperCase()}`,
      timestamp: new Date().toISOString(),
      fullName: fullName.trim(),
      email: email.trim().toLowerCase(),
      phone: phone ? phone.trim() : "Not provided",
      companyName: companyName.trim(),
      serviceRequired,
      projectDetails: projectDetails.trim(),
      source: "AdPulse Enterprise Web Portal",
      status: "NEW_INQUIRY",
    };

    console.log("[AdPulse CRM Pipeline] Received new enterprise inquiry:", leadRecord);

    return NextResponse.json({
      success: true,
      message:
        "Thank you for contacting AdPulse Digital. Your enterprise inquiry has been registered. An executive partner will connect with you within 4 business hours.",
      referenceId: leadRecord.leadId,
    });
  } catch (error) {
    console.error("[AdPulse API Error] Contact form submission error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred while processing your request. Please try again.",
      },
      { status: 500 }
    );
  }
}
