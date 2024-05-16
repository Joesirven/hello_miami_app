import { NextRequest, NextResponse } from "next/server";

type TypeformResponse = {
  items: any[];
};

export async function GET() {
  try {
    const res = await fetch(process.env.TYPEFORM_ENDPOINT_URL!, {
      headers: {
        Authorization: `Bearer ${process.env.TYPREFORM_API_KEY}`,
      },
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to fetch data" },
        { status: 500 },
      );
    }

    const data: TypeformResponse = await res.json();
    return NextResponse.json({ count: data.items.length });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 },
    );
  }
}
