export async function GET() {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return Response.json({ error: "Missing env variables" }, { status: 500 });
  }

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,reviews,user_ratings_total,url&key=${apiKey}`;

  const res = await fetch(url, { cache: "no-store" });
  const data = await res.json();

  if (data.status !== "OK") {
    return Response.json(
      { error: data.error_message || data.status, full: data },
      { status: 400 },
    );
  }

  return Response.json({
    name: data.result.name,
    rating: data.result.rating,
    user_ratings_total: data.result.user_ratings_total,
    url: data.result.url,
    reviews: data.result.reviews || [],
  });
}
