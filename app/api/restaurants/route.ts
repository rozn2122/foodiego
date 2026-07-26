import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);

    const lat = searchParams.get("lat");
    const lng = searchParams.get("lng");
    const keyword = searchParams.get("keyword") || "restaurants";

    if (!lat || !lng) {
      return NextResponse.json(
        {
          error: "Latitude and longitude required",
        },
        {
          status: 400,
        }
      );
    }

    const apiKey = process.env.GOOGLE_MAPS_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        {
          error: "Google API key missing",
        },
        {
          status: 500,
        }
      );
    }


    const response = await fetch(
      "https://places.googleapis.com/v1/places:searchText",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask":
            "places.id,places.displayName,places.rating,places.userRatingCount,places.formattedAddress,places.photos,places.currentOpeningHours,places.priceLevel",
        },

        body: JSON.stringify({
          textQuery: keyword,

          maxResultCount: 20,

          locationBias: {
            circle: {
              center: {
                latitude: Number(lat),
                longitude: Number(lng),
              },

              radius: 5000,
            },
          },
        }),
      }
    );


    const data = await response.json();


    const restaurants =
      data.places?.map((place: any) => ({
        id: place.id,

        name:
          place.displayName?.text || "Restaurant",

        rating:
          place.rating || 0,

        reviews:
          place.userRatingCount || 0,

        address:
          place.formattedAddress || "",

        open:
          place.currentOpeningHours?.openNow ?? false,

        priceLevel:
          place.priceLevel || "PRICE_LEVEL_MODERATE",

        photos:
          place.photos || [],
      })) || [];


    return NextResponse.json(restaurants);


  } catch (error) {

    console.error(error);

    return NextResponse.json(
      {
        error: "Server error",
      },
      {
        status: 500,
      }
    );

  }
}