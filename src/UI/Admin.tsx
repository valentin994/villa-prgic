// pages/Admin.tsx
//
// Login, logout, and price updates all hit the Rust admin API, which uses
// tower_sessions to set an auth cookie on login.
import { useEffect, useState } from "react";
import apartmentData from "../data/aparment_data.json";
import { adminLogin, adminLogout } from "../../api/_lib/adminAuth";
import {
  getApartmentPrices,
  updateApartmentPrice,
} from "../../api/_lib/apartments";
import {
  createReservation,
  getReservations,
  updateReservationStatus,
  type CreateReservationPayload,
  type Paginated,
  type Reservation,
  type ReservationStatus,
} from "../../api/_lib/reservations";

const RESERVATIONS_PAGE_LIMIT = 50;

const SESSION_KEY = "admin_unlocked";

interface PriceOverrides {
  [link: string]: number;
}

const APARTMENT_NAMES: Record<number, string> = apartmentData.reduce(
  (acc, apt) => {
    acc[Number(apt.link.replace("apartment_", ""))] = apt.name;
    return acc;
  },
  {} as Record<number, string>
);

const STATUS_LABELS: Record<ReservationStatus, string> = {
  pending: "Na čekanju",
  accepted: "Prihvaćeno",
  confirmed: "Potvrđeno",
  canceled: "Otkazano",
};

const STATUS_STYLES: Record<ReservationStatus, string> = {
  pending: "bg-yellow-100 text-yellow-800",
  accepted: "bg-blue-100 text-blue-800",
  confirmed: "bg-green-100 text-green-800",
  canceled: "bg-red-100 text-red-800",
};

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("hr-HR");
}

type AdminTab = "overview" | "pricing" | "reservations";

const ADMIN_TABS: { id: AdminTab; label: string }[] = [
  { id: "overview", label: "Pregled" },
  { id: "pricing", label: "Cijene" },
  { id: "reservations", label: "Rezervacije" },
];

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <p className="text-sm text-gray-500">{label}</p>
      <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
    </div>
  );
}

function OverviewPanel() {
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getReservations({ page: 1, limit: RESERVATIONS_PAGE_LIMIT })
      .then((result) => {
        setReservations(result.data);
        setTotal(result.total);
      })
      .catch(() => setError("Nije moguće dohvatiti podatke."))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-sm text-gray-500">Učitavanje...</p>;
  if (error) return <p className="text-sm text-red-600">{error}</p>;

  const pending = reservations.filter((r) => r.status === "pending").length;
  const confirmed = reservations.filter(
    (r) => r.status === "confirmed" || r.status === "accepted"
  ).length;
  const revenue = reservations
    .filter((r) => r.status === "confirmed" || r.status === "accepted")
    .reduce((sum, r) => sum + r.price, 0);

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard label="Ukupno rezervacija" value={String(total)} />
        <StatCard label="Na čekanju" value={String(pending)} />
        <StatCard label="Potvrđeno" value={String(confirmed)} />
        <StatCard label="Očekivani prihod" value={`${revenue} €`} />
      </div>
      {total > reservations.length && (
        <p className="text-xs text-gray-400 mt-2">
          Status i prihod se računaju na temelju posljednjih{" "}
          {reservations.length} od {total} rezervacija.
        </p>
      )}
      <p className="text-sm text-gray-500 mt-6">
        Detaljnija analitika (zauzetost, prihod po apartmanu, trendovi) dolazi
        uskoro.
      </p>
    </div>
  );
}

function PricingPanel() {
  const [prices, setPrices] = useState<PriceOverrides>({});
  const [savedPrices, setSavedPrices] = useState<PriceOverrides>({});
  const [saved, setSaved] = useState(false);
  const [saving, setSaving] = useState(false);
  const [failedNames, setFailedNames] = useState<string[]>([]);

  useEffect(() => {
    const fallback: PriceOverrides = {};
    apartmentData.forEach((apt) => {
      fallback[apt.link] = apt.price;
    });
    setPrices(fallback);
    setSavedPrices(fallback);

    getApartmentPrices()
      .then((livePrices) => {
        const live: PriceOverrides = { ...fallback };
        apartmentData.forEach((apt, i) => {
          if (typeof livePrices[i] === "number") live[apt.link] = livePrices[i];
        });
        setPrices(live);
        setSavedPrices(live);
      })
      .catch(() => {
        // Keep the static fallback prices if the backend is unreachable.
      });
  }, []);

  const handlePriceChange = (link: string, value: string) => {
    setPrices((prev) => ({ ...prev, [link]: Number(value) }));
    setSaved(false);
  };

  const handleSaveAll = async () => {
    const changed = apartmentData.filter(
      (apt) => prices[apt.link] !== savedPrices[apt.link]
    );
    if (changed.length === 0) return;

    setSaving(true);
    setFailedNames([]);

    const results = await Promise.all(
      changed.map(async (apt) => {
        try {
          const ok = await updateApartmentPrice(apt.link, prices[apt.link]);
          return { apt, ok };
        } catch {
          return { apt, ok: false };
        }
      })
    );

    const failed = results.filter((r) => !r.ok);
    setSavedPrices((prev) => {
      const next = { ...prev };
      results.filter((r) => r.ok).forEach((r) => {
        next[r.apt.link] = prices[r.apt.link];
      });
      return next;
    });

    setSaving(false);
    if (failed.length > 0) {
      setFailedNames(failed.map((r) => r.apt.name));
    } else {
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    }
  };

  return (
    <div>
      <div className="bg-white rounded-2xl shadow-sm divide-y">
        {apartmentData.map((apt) => (
          <div key={apt.link} className="flex items-center justify-between p-6">
            <div>
              <p className="font-semibold text-gray-900">{apt.name}</p>
              <p className="text-sm text-gray-500">{apt.detail}</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-500">€</span>
              <input
                type="number"
                min={0}
                value={prices[apt.link] ?? apt.price}
                onChange={(e) => handlePriceChange(apt.link, e.target.value)}
                className="w-24 px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-500">/ noć</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center space-x-4">
        <button
          onClick={handleSaveAll}
          disabled={saving}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-60"
        >
          {saving ? "Spremanje..." : "Spremi sve"}
        </button>
        {saved && (
          <span className="text-sm text-green-600">Cijene su ažurirane.</span>
        )}
        {failedNames.length > 0 && (
          <span className="text-sm text-red-600">
            Neuspjelo ažuriranje: {failedNames.join(", ")}
          </span>
        )}
      </div>
    </div>
  );
}

const EMPTY_RESERVATION_FORM: CreateReservationPayload = {
  apartment_id: Number(apartmentData[0].link.replace("apartment_", "")),
  guest_name: "",
  guest_email: "",
  guest_phone_number: "",
  guest_address: "",
  start_date: "",
  end_date: "",
  note: "",
};

function NewReservationModal({
  onClose,
  onCreated,
}: {
  onClose: () => void;
  onCreated: () => void;
}) {
  const [form, setForm] = useState<CreateReservationPayload>(
    EMPTY_RESERVATION_FORM
  );
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    field: keyof CreateReservationPayload,
    value: string | number
  ) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!form.start_date || !form.end_date) {
      setError("Odaberite datum dolaska i odlaska.");
      return;
    }
    if (form.end_date <= form.start_date) {
      setError("Datum odlaska mora biti nakon datuma dolaska.");
      return;
    }

    setSubmitting(true);
    try {
      await createReservation(form);
      onCreated();
      onClose();
    } catch {
      setError("Nije moguće spremiti rezervaciju. Provjerite podatke.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-md p-8 w-full max-w-lg max-h-[90vh] overflow-y-auto"
      >
        <h2 className="text-xl font-semibold text-gray-900 mb-6">
          Nova rezervacija
        </h2>

        <div className="grid grid-cols-2 gap-3">
          <label className="col-span-2 text-sm text-gray-700">
            Apartman
            <select
              value={form.apartment_id}
              onChange={(e) =>
                handleChange("apartment_id", Number(e.target.value))
              }
              className="mt-1 w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {apartmentData.map((apt) => (
                <option
                  key={apt.link}
                  value={Number(apt.link.replace("apartment_", ""))}
                >
                  {apt.name}
                </option>
              ))}
            </select>
          </label>

          <label className="col-span-2 text-sm text-gray-700">
            Ime i prezime gosta
            <input
              type="text"
              required
              value={form.guest_name}
              onChange={(e) => handleChange("guest_name", e.target.value)}
              className="mt-1 w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>

          <label className="text-sm text-gray-700">
            Email
            <input
              type="email"
              required
              value={form.guest_email}
              onChange={(e) => handleChange("guest_email", e.target.value)}
              className="mt-1 w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>

          <label className="text-sm text-gray-700">
            Telefon
            <input
              type="tel"
              required
              value={form.guest_phone_number}
              onChange={(e) =>
                handleChange("guest_phone_number", e.target.value)
              }
              className="mt-1 w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>

          <label className="col-span-2 text-sm text-gray-700">
            Adresa
            <input
              type="text"
              required
              value={form.guest_address}
              onChange={(e) => handleChange("guest_address", e.target.value)}
              className="mt-1 w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>

          <label className="text-sm text-gray-700">
            Dolazak
            <input
              type="date"
              required
              value={form.start_date}
              onChange={(e) => handleChange("start_date", e.target.value)}
              className="mt-1 w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>

          <label className="text-sm text-gray-700">
            Odlazak
            <input
              type="date"
              required
              value={form.end_date}
              onChange={(e) => handleChange("end_date", e.target.value)}
              className="mt-1 w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>

          <label className="col-span-2 text-sm text-gray-700">
            Napomena
            <textarea
              value={form.note}
              onChange={(e) => handleChange("note", e.target.value)}
              rows={3}
              className="mt-1 w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>
        </div>

        {error && <p className="text-sm text-red-600 mt-4">{error}</p>}

        <div className="flex items-center justify-end gap-3 mt-6">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Odustani
          </button>
          <button
            type="submit"
            disabled={submitting}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-60"
          >
            {submitting ? "Spremanje..." : "Spremi rezervaciju"}
          </button>
        </div>
      </form>
    </div>
  );
}

function ReservationsPanel() {
  const [page, setPage] = useState(1);
  const [result, setResult] = useState<Paginated<Reservation> | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showNewModal, setShowNewModal] = useState(false);
  const [updatingId, setUpdatingId] = useState<number | null>(null);

  const refetch = () => {
    setLoading(true);
    setError(null);
    getReservations({ page, limit: RESERVATIONS_PAGE_LIMIT })
      .then(setResult)
      .catch(() => setError("Nije moguće dohvatiti rezervacije."))
      .finally(() => setLoading(false));
  };

  useEffect(refetch, [page]);

  const reservations = result?.data ?? [];
  const totalPages = result ? Math.max(1, Math.ceil(result.total / result.limit)) : 1;

  const handleStatusChange = async (id: number, status: ReservationStatus) => {
    setUpdatingId(id);
    try {
      const updated = await updateReservationStatus(id, status);
      setResult((prev) =>
        prev
          ? {
              ...prev,
              data: prev.data.map((r) => (r.id === id ? updated : r)),
            }
          : prev
      );
    } catch {
      setError("Nije moguće ažurirati status rezervacije.");
    } finally {
      setUpdatingId(null);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-end mb-4">
        <button
          onClick={() => setShowNewModal(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm"
        >
          + Nova rezervacija
        </button>
      </div>

      {showNewModal && (
        <NewReservationModal
          onClose={() => setShowNewModal(false)}
          onCreated={() => {
            if (page === 1) {
              refetch();
            } else {
              setPage(1);
            }
          }}
        />
      )}

      {loading && <p className="text-sm text-gray-500">Učitavanje...</p>}
      {error && <p className="text-sm text-red-600">{error}</p>}

      {!loading && !error && reservations.length === 0 && (
        <p className="text-sm text-gray-500">Nema rezervacija.</p>
      )}

      {!loading && !error && reservations.length > 0 && (
        <>
          <div className="bg-white rounded-2xl shadow-sm overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-gray-500 border-b">
                  <th className="p-4 font-medium">Apartman</th>
                  <th className="p-4 font-medium">Gost</th>
                  <th className="p-4 font-medium">Kontakt</th>
                  <th className="p-4 font-medium">Dolazak</th>
                  <th className="p-4 font-medium">Odlazak</th>
                  <th className="p-4 font-medium">Cijena</th>
                  <th className="p-4 font-medium">Status</th>
                  <th className="p-4 font-medium">Napomena</th>
                  <th className="p-4 font-medium">Akcije</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {reservations.map((r) => (
                  <tr key={r.id}>
                    <td className="p-4 whitespace-nowrap">
                      {APARTMENT_NAMES[r.apartment_id] ?? r.apartment_id}
                    </td>
                    <td className="p-4">
                      <p className="font-medium text-gray-900">
                        {r.guest_name}
                      </p>
                      <p className="text-gray-500">{r.guest_address}</p>
                    </td>
                    <td className="p-4">
                      <p>{r.guest_email}</p>
                      <p className="text-gray-500">{r.guest_phone_number}</p>
                    </td>
                    <td className="p-4 whitespace-nowrap">
                      {formatDate(r.start_date)}
                    </td>
                    <td className="p-4 whitespace-nowrap">
                      {formatDate(r.end_date)}
                    </td>
                    <td className="p-4 whitespace-nowrap">{r.price} €</td>
                    <td className="p-4 whitespace-nowrap">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${STATUS_STYLES[r.status]}`}
                      >
                        {STATUS_LABELS[r.status]}
                      </span>
                    </td>
                    <td className="p-4 text-gray-500">{r.note || "—"}</td>
                    <td className="p-4 whitespace-nowrap">
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleStatusChange(r.id, "accepted")}
                          disabled={updatingId === r.id || r.status === "accepted"}
                          className="px-3 py-1.5 text-xs font-medium text-green-700 bg-green-50 border border-green-200 rounded-lg hover:bg-green-100 transition-colors disabled:opacity-50"
                        >
                          Prihvati
                        </button>
                        <button
                          onClick={() => handleStatusChange(r.id, "canceled")}
                          disabled={updatingId === r.id || r.status === "canceled"}
                          className="px-3 py-1.5 text-xs font-medium text-red-700 bg-red-50 border border-red-200 rounded-lg hover:bg-red-100 transition-colors disabled:opacity-50"
                        >
                          Odbij
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-between mt-4">
            <p className="text-sm text-gray-500">
              Stranica {page} od {totalPages} ({result?.total} rezervacija)
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page <= 1}
                className="px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-60"
              >
                Prethodna
              </button>
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page >= totalPages}
                className="px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-60"
              >
                Sljedeća
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function AdminLogin({ onUnlock }: { onUnlock: () => void }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const ok = await adminLogin(username, password);
      if (ok) {
        sessionStorage.setItem(SESSION_KEY, "true");
        onUnlock();
      } else {
        setError("Neispravno korisničko ime ili lozinka.");
      }
    } catch {
      setError("Nije moguće povezati se s poslužiteljem. Pokušajte ponovno.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6 pt-32">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-md p-8 w-full max-w-sm"
      >
        <h1 className="text-xl font-semibold text-gray-900 mb-6">
          Administratorski pristup
        </h1>
        <input
          type="text"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
            setError(null);
          }}
          placeholder="Korisničko ime"
          autoComplete="username"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError(null);
          }}
          placeholder="Lozinka"
          autoComplete="current-password"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
        />
        {error && <p className="text-sm text-red-600 mb-3">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-60"
        >
          {loading ? "Prijava u tijeku..." : "Prijava"}
        </button>
      </form>
    </div>
  );
}

function AdminPanel({ onLogout }: { onLogout: () => void }) {
  const [activeTab, setActiveTab] = useState<AdminTab>("overview");
  const [loggingOut, setLoggingOut] = useState(false);

  const handleLogout = async () => {
    setLoggingOut(true);
    try {
      await adminLogout();
    } finally {
      sessionStorage.removeItem(SESSION_KEY);
      onLogout();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 pt-32 pb-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Admin panel</h1>
          <button
            onClick={handleLogout}
            disabled={loggingOut}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-60"
          >
            {loggingOut ? "Odjava u tijeku..." : "Odjava"}
          </button>
        </div>

        <div className="flex gap-2 border-b border-gray-200 mb-6">
          {ADMIN_TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                activeTab === tab.id
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === "overview" && <OverviewPanel />}
        {activeTab === "pricing" && <PricingPanel />}
        {activeTab === "reservations" && <ReservationsPanel />}
      </div>
    </div>
  );
}

function Admin() {
  const [unlocked, setUnlocked] = useState(
    () => sessionStorage.getItem(SESSION_KEY) === "true"
  );

  useEffect(() => {
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.head.appendChild(meta);
    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  if (!unlocked) {
    return <AdminLogin onUnlock={() => setUnlocked(true)} />;
  }

  return <AdminPanel onLogout={() => setUnlocked(false)} />;
}

export default Admin;
