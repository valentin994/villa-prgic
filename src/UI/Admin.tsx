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

const SESSION_KEY = "admin_unlocked";

interface PriceOverrides {
  [link: string]: number;
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
        setError("Invalid username or password.");
      }
    } catch {
      setError("Unable to reach the server. Please try again.");
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
        <h1 className="text-xl font-semibold text-gray-900 mb-6">Admin Access</h1>
        <input
          type="text"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
            setError(null);
          }}
          placeholder="Username"
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
          placeholder="Password"
          autoComplete="current-password"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
        />
        {error && <p className="text-sm text-red-600 mb-3">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-60"
        >
          {loading ? "Signing in..." : "Sign in"}
        </button>
      </form>
    </div>
  );
}

function AdminPanel({ onLogout }: { onLogout: () => void }) {
  const [prices, setPrices] = useState<PriceOverrides>({});
  const [savedPrices, setSavedPrices] = useState<PriceOverrides>({});
  const [saved, setSaved] = useState(false);
  const [saving, setSaving] = useState(false);
  const [failedNames, setFailedNames] = useState<string[]>([]);
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
    <div className="min-h-screen bg-gray-50 px-6 pt-32 pb-12">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-2xl font-bold text-gray-900">Apartment Prices</h1>
          <button
            onClick={handleLogout}
            disabled={loggingOut}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-60"
          >
            {loggingOut ? "Signing out..." : "Sign out"}
          </button>
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
            disabled={saving}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-60"
          >
            {saving ? "Saving..." : "Save All"}
          </button>
          {saved && <span className="text-sm text-green-600">Prices updated.</span>}
          {failedNames.length > 0 && (
            <span className="text-sm text-red-600">
              Failed to update: {failedNames.join(", ")}
            </span>
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
