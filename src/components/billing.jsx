import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function BillingPage() {
  const [user, setUser] = useState(null);
  const [billingInfo, setBillingInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [canceling, setCanceling] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const backendUrl = "http://localhost:5000";

  async function fetchBillingInfo(email) {
    try {
      const res = await fetch(`${backendUrl}/billing-info`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        const txt = await res.text();
        throw new Error(txt || `HTTP ${res.status}`);
      }

      const data = await res.json();
      console.log(data);
      setBillingInfo(data);
    } catch (err) {
      console.error("Billing info fetch error:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleCancel() {
    if (!user?.email) return;
    setCanceling(true);
    setError("");

    try {
      const res = await fetch(`${backendUrl}/cancel-subscription`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: user.email }),
      });

      if (!res.ok) {
        const txt = await res.text();
        throw new Error(txt || `HTTP ${res.status}`);
      }

      const data = await res.json();
      // Option 1: Update status locally
      setBillingInfo((prev) =>
        prev
          ? {
              ...prev,
              status: data.status || "cancelling",
              cancelAtPeriodEnd: true,
            }
          : prev
      );

      // Option 2 (preferred): Re-fetch billing info after cancel
      // await fetchBillingInfo(user.email);

    } catch (err) {
      console.error("Cancel error:", err);
      setError(err.message);
    } finally {
      setCanceling(false);
    }
  }

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((u) => {
      if (u?.email) {
        setUser(u);
        fetchBillingInfo(u.email);
      } else {
        navigate("/login");
      }
    });
    return () => unsub();
  }, [navigate]);

  if (loading) return <div className="text-center py-10 text-gray-500">Loading billing info...</div>;

  if (error) return (
    <main className="max-w-2xl mx-auto px-4 py-8">
      <section className="border rounded-xl bg-red-50 border-red-200 text-red-700 p-4"> 
        <p className="font-medium">Billing error</p>
        <p className="text-sm mt-1">{error}</p>
      </section>
    </main>
  );
    

  if (!billingInfo?.active) {
    return (
      <main className="max-w-3xl mx-auto px-4 py-10 space-y-6">
        <header>
          <h1 className="text-2xl font-semibold">Billing</h1>
        </header>

        <section className="border rounded-xl bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 p-6">
          <h2 className="text-lg font-medium">No active Subscription</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-1">You don’t have any active plan.</p>
          <button onClick={() => navigate("/")} className="mt-4 inline-flex items-center rounded-lg px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 transition">Go to Dashboard</button>
        </section>
      </main>
    );
  }

  return (
  <main className="flex justify-center items-center min-h-[70vh] bg-gray-50">
    <div className="bg-white shadow-lg rounded-xl border border-gray-200 p-8 w-full max-w-md text-gray-800">
      <h1 className="text-2xl font-semibold mb-6 text-center text-blue-700">Billing Details</h1>

      <div className="space-y-3">
        <p>
          <span className="font-medium text-gray-600">Plan:</span>{" "}
          <span className="font-semibold">{billingInfo.plan}</span>
        </p>

        <p className="flex items-center gap-2">
          <span className="font-medium text-gray-600">Status:</span>
          <span
            className={`px-2 py-1 rounded-md text-sm font-medium ${
              billingInfo.cancelAtPeriodEnd
                ? "bg-yellow-100 text-yellow-800"
                : billingInfo.status === "active"
                ? "bg-green-100 text-green-700"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            {billingInfo.cancelAtPeriodEnd ? "Cancels soon" : billingInfo.status}
          </span>
        </p>

        <p>
          <span className="font-medium text-gray-600">Next Billing:</span>{" "}
          <span className="font-semibold">{billingInfo.nextBillingDate}</span>
        </p>
      </div>

      {!billingInfo.cancelAtPeriodEnd && (
        <button
          onClick={handleCancel}
          disabled={canceling}
          className="mt-6 w-full py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white font-medium transition disabled:opacity-50"
        >
          {canceling ? "Cancelling..." : "Cancel Subscription"}
        </button>
      )}

      {billingInfo.cancelAtPeriodEnd && (
        <p className="mt-6 text-sm text-center text-gray-500">
          Your subscription will end at the next billing date.
        </p>
      )}

      <button
        onClick={() => navigate("/dashboard")}
        className="mt-4 w-full py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition"
      >
        Back to Dashboard
      </button>
    </div>
  </main>
)};
