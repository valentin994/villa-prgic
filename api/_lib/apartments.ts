import { API_BASE_URL } from "./config";

const APARTMENTS_URL = `${API_BASE_URL}/apartments`;

export async function getApartmentPrices(): Promise<number[]> {
  const response = await fetch(APARTMENTS_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch apartment prices");
  }
  const entries: unknown[] = await response.json();
  return entries.map((entry) =>
    typeof entry === "number" ? entry : (entry as { price: number }).price
  );
}

export async function updateApartmentPrice(
  link: string,
  price: number
): Promise<boolean> {
  const id = link.replace("apartment_", "");
  const response = await fetch(`${APARTMENTS_URL}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ price }),
  });
  return response.ok;
}
