// pages/Admin.tsx
//
// SCAFFOLD ONLY — this page previews a future admin UI for editing apartment
// prices. There is no backend/database in this project today, so edits made
// here are saved only to this browser's localStorage and never touch the
// live site. To make this real:
//   1. Add a database (none exists yet).
//   2. Add a Vercel serverless route, e.g. api/update-price.ts, following the
//      same pattern as the existing api/get_dates.ts, to write price changes
//      to that database.
//   3. Replace the localStorage read/write below with real fetch() calls to
//      that route.
//
// The password gate below is NOT real authentication — see the comment on
// ADMIN_PASSWORD for details.
import { useEffect, useState } from "react";
import apartmentData from "../data/aparment_data.json";

const ADMIN_PASSWORD = "villa-admin-preview";
const SESSION_KEY = "admin_unlocked";
const OVERRIDES_KEY = "admin_price_overrides";

interface PriceOverrides {
  [link: string]: number;
}

function AdminLogin({ onUnlock }: { onUnlock: () => void }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      sessionStorage.setItem(SESSION_KEY, "true");
      onUnlock();
    } else {
      setError(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-md p-8 w-full max-w-sm"
      >
        <h1 className="text-xl font-semibold text-gray-900 mb-1">Admin Access</h1>
        <p className="text-sm text-gray-500 mb-6">
          This is a placeholder gate, not real authentication.
        </p>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError(false);
          }}
          placeholder="Password"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
        />
        {error && (
          <p className="text-sm text-red-600 mb-3">Incorrect password.</p>
        )}
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          Unlock
        </button>
      </form>
    </div>
  );
}

function AdminPanel() {
  const [prices, setPrices] = useState<PriceOverrides>({});
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(OVERRIDES_KEY);
    const overrides: PriceOverrides = stored ? JSON.parse(stored) : {};
    const initial: PriceOverrides = {};
    apartmentData.forEach((apt) => {
      initial[apt.link] = overrides[apt.link] ?? apt.price;
    });
    setPrices(initial);
  }, []);

  const handlePriceChange = (link: string, value: string) => {
    setPrices((prev) => ({ ...prev, [link]: Number(value) }));
    setSaved(false);
  };

  const handleSaveAll = () => {
    localStorage.setItem(OVERRIDES_KEY, JSON.stringify(prices));
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Apartment Prices</h1>

        <div className="bg-amber-50 border border-amber-300 text-amber-800 rounded-xl p-4 mb-8 text-sm">
          Changes made here are saved only in this browser's local storage and do{" "}
          <strong>not</strong> affect the live site. Real persistence requires a
          backend/database — this page is a preview of the future admin UI.
        </div>

        <div className="bg-white rounded-2xl shadow-sm divide-y">
          {apartmentData.map((apt) => (
            <div
              key={apt.link}
              className="flex items-center justify-between p-6"
            >
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
                <span className="text-sm text-gray-500">/ night</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center space-x-4">
          <button
            onClick={handleSaveAll}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Save All
          </button>
          {saved && (
            <span className="text-sm text-green-600">Saved to this browser.</span>
          )}
        </div>
      </div>
    </div>
  );
}

function Admin() {
  const [unlocked, setUnlocked] = useState(
    () => sessionStorage.getItem(SESSION_KEY) === "true"
  );

  if (!unlocked) {
    return <AdminLogin onUnlock={() => setUnlocked(true)} />;
  }

  return <AdminPanel />;
}

export default Admin;
