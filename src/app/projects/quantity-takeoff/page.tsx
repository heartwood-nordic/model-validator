"use client";
import React from "react";
import "../../globals.css";

export default function QuantityTakeoffPage() {
  return (
    <div className="min-h-screen w-full flex flex-col" style={{ background: "var(--bg-eggshell)", color: "var(--ink)" }}>
      {/* Header */}
      <div className="px-8 py-6 border-b" style={{ borderColor: "color-mix(in srgb, var(--silver) 30%, transparent)", background: "var(--panel-muted)" }}>
        <h1 className="text-2xl font-semibold mb-2" style={{ color: "var(--ink)" }}>Quantity Takeoff</h1>
        <p className="text-sm" style={{ color: "var(--muted-ink)" }}>Material quantities and takeoff calculations</p>
      </div>

      {/* Content */}
      <div className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-lg p-8 text-center" style={{ background: "var(--panel)", border: "1px solid color-mix(in srgb, var(--silver) 30%, transparent)", boxShadow: "0 6px 18px rgba(0,0,0,0.06)" }}>
            <div className="text-6xl mb-4" style={{ color: "var(--muted-ink)" }}>📊</div>
            <h2 className="text-xl font-semibold mb-2" style={{ color: "var(--ink)" }}>Quantity Takeoff Coming Soon</h2>
            <p className="text-sm" style={{ color: "var(--muted-ink)" }}>
              Quantity takeoff and material calculation features are currently under development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
