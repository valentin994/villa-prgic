import { API_BASE_URL } from "./config";

const RESERVATIONS_URL = `${API_BASE_URL}/reservations`;

export interface CreateReservationPayload {
  apartment_id: number;
  guest_name: string;
  guest_email: string;
  guest_phone_number: string;
  guest_address: string;
  start_date: string;
  end_date: string;
  note: string;
}

export type ReservationStatus =
  | "pending"
  | "accepted"
  | "confirmed"
  | "canceled";

export interface Reservation {
  id: number;
  apartment_id: number;
  guest_name: string;
  guest_email: string;
  guest_address: string;
  guest_phone_number: string;
  start_date: string;
  end_date: string;
  price: number;
  status: ReservationStatus;
  note: string | null;
  created_at: string;
}

export async function createReservation(
  payload: CreateReservationPayload
): Promise<void> {
  const response = await fetch(RESERVATIONS_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!response.ok) {
    throw new Error("Failed to create reservation");
  }
}

export interface Paginated<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
}

export interface ReservationQuery {
  status?: ReservationStatus;
  apartment_id?: number;
  start_date?: string;
  end_date?: string;
  page?: number;
  limit?: number;
}

export async function getReservations(
  query: ReservationQuery = {}
): Promise<Paginated<Reservation>> {
  const params = new URLSearchParams();
  if (query.status) params.set("status", query.status);
  if (query.apartment_id != null)
    params.set("apartment_id", String(query.apartment_id));
  if (query.start_date) params.set("start_date", query.start_date);
  if (query.end_date) params.set("end_date", query.end_date);
  if (query.page != null) params.set("page", String(query.page));
  if (query.limit != null) params.set("limit", String(query.limit));

  const url = params.size > 0 ? `${RESERVATIONS_URL}?${params}` : RESERVATIONS_URL;
  const response = await fetch(url, {
    credentials: "include",
  });
  if (!response.ok) {
    throw new Error("Failed to fetch reservations");
  }
  return response.json();
}

export async function updateReservationStatus(
  id: number,
  status: ReservationStatus
): Promise<Reservation> {
  const response = await fetch(`${RESERVATIONS_URL}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ status }),
  });
  if (!response.ok) {
    throw new Error("Failed to update reservation status");
  }
  return response.json();
}
