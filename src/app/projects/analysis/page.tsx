"use client";
import React from "react";
import "../../globals.css";

export default function AnalysisPage() {
  return (
    <div className="min-h-screen w-full flex flex-col" style={{ background: "var(--bg-eggshell)", color: "var(--ink)" }}>
      {/* Header */}
      <div className="px-8 py-6 border-b" style={{ borderColor: "color-mix(in srgb, var(--silver) 30%, transparent)", background: "var(--panel-muted)" }}>
        <h1 className="text-2xl font-semibold mb-2" style={{ color: "var(--ink)" }}>Model Analysis Report</h1>
        <p className="text-sm" style={{ color: "var(--muted-ink)" }}>Comprehensive breakdown of model data and statistics</p>
      </div>

      {/* Content */}
      <div className="flex-1 p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Overview */}
          <div className="rounded-lg p-6" style={{ background: "var(--panel)", border: "1px solid color-mix(in srgb, var(--silver) 30%, transparent)", boxShadow: "0 6px 18px rgba(0,0,0,0.06)" }}>
            <h2 className="text-lg font-semibold mb-4" style={{ color: "var(--ink)" }}>=== Overview ===</h2>
            <div className="text-sm" style={{ color: "var(--muted-ink)" }}>
              <div className="flex justify-between items-center py-2 border-b" style={{ borderColor: "color-mix(in srgb, var(--silver) 20%, transparent)" }}>
                <span>Total objects:</span>
                <span className="font-mono font-semibold" style={{ color: "var(--ink)" }}>2,422</span>
              </div>
            </div>
          </div>

          {/* CLT Classification */}
          <div className="rounded-lg p-6" style={{ background: "var(--panel)", border: "1px solid color-mix(in srgb, var(--silver) 30%, transparent)", boxShadow: "0 6px 18px rgba(0,0,0,0.06)" }}>
            <h2 className="text-lg font-semibold mb-4" style={{ color: "var(--ink)" }}>=== CLT Classification (by Label) ===</h2>
            <div className="space-y-2">
              <div className="flex justify-between items-center py-1">
                <span className="text-sm" style={{ color: "var(--muted-ink)" }}>W:</span>
                <span className="font-mono text-sm font-semibold" style={{ color: "var(--ink)" }}>221</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-sm" style={{ color: "var(--muted-ink)" }}>R:</span>
                <span className="font-mono text-sm font-semibold" style={{ color: "var(--ink)" }}>42</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-sm" style={{ color: "var(--muted-ink)" }}>F:</span>
                <span className="font-mono text-sm font-semibold" style={{ color: "var(--ink)" }}>450</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-sm" style={{ color: "var(--muted-ink)" }}>Glt:</span>
                <span className="font-mono text-sm font-semibold" style={{ color: "var(--ink)" }}>0</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-sm" style={{ color: "var(--muted-ink)" }}>Ambiguous:</span>
                <span className="font-mono text-sm font-semibold" style={{ color: "var(--ink)" }}>0</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-sm" style={{ color: "var(--muted-ink)" }}>Invalid:</span>
                <span className="font-mono text-sm font-semibold" style={{ color: "var(--ink)" }}>10</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-sm" style={{ color: "var(--muted-ink)" }}>Annotations:</span>
                <span className="font-mono text-sm font-semibold" style={{ color: "var(--ink)" }}>1,699</span>
              </div>
              <div className="flex justify-between items-center py-2 border-t mt-3" style={{ borderColor: "color-mix(in srgb, var(--silver) 20%, transparent)" }}>
                <span className="text-sm font-semibold" style={{ color: "var(--ink)" }}>CLT total (W/R/F):</span>
                <span className="font-mono text-sm font-semibold" style={{ color: "var(--ink)" }}>713</span>
              </div>
            </div>
          </div>

          {/* PanelBuildUp */}
          <div className="rounded-lg p-6" style={{ background: "var(--panel)", border: "1px solid color-mix(in srgb, var(--silver) 30%, transparent)", boxShadow: "0 6px 18px rgba(0,0,0,0.06)" }}>
            <h2 className="text-lg font-semibold mb-4" style={{ color: "var(--ink)" }}>=== PanelBuildUp (properties → KLH Elementliste) ===</h2>
            <div className="mb-4">
              <div className="flex justify-between items-center py-1">
                <span className="text-sm" style={{ color: "var(--muted-ink)" }}>Distinct:</span>
                <span className="font-mono text-sm font-semibold" style={{ color: "var(--ink)" }}>6</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-sm" style={{ color: "var(--muted-ink)" }}>Total:</span>
                <span className="font-mono text-sm font-semibold" style={{ color: "var(--ink)" }}>713</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center py-1">
                <span className="text-sm font-mono" style={{ color: "var(--muted-ink)" }}>L30-Q20-L20-Q20-L30:</span>
                <span className="font-mono text-sm font-semibold" style={{ color: "var(--ink)" }}>51</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-sm font-mono" style={{ color: "var(--muted-ink)" }}>L30-Q20-L30-Q20-L30-Q20-L30:</span>
                <span className="font-mono text-sm font-semibold" style={{ color: "var(--ink)" }}>210</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-sm font-mono" style={{ color: "var(--muted-ink)" }}>L40-Q20-L40:</span>
                <span className="font-mono text-sm font-semibold" style={{ color: "var(--ink)" }}>117</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-sm font-mono" style={{ color: "var(--muted-ink)" }}>L40L40-Q20-L40-Q20-L40L40:</span>
                <span className="font-mono text-sm font-semibold" style={{ color: "var(--ink)" }}>321</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-sm font-mono" style={{ color: "var(--muted-ink)" }}>Q30-L20-Q30-L20-Q30-L20-Q30:</span>
                <span className="font-mono text-sm font-semibold" style={{ color: "var(--ink)" }}>10</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-sm font-mono" style={{ color: "var(--muted-ink)" }}>Q40-L20-Q40:</span>
                <span className="font-mono text-sm font-semibold" style={{ color: "var(--ink)" }}>4</span>
              </div>
            </div>
          </div>

          {/* Surface Quality */}
          <div className="rounded-lg p-6" style={{ background: "var(--panel)", border: "1px solid color-mix(in srgb, var(--silver) 30%, transparent)", boxShadow: "0 6px 18px rgba(0,0,0,0.06)" }}>
            <h2 className="text-lg font-semibold mb-4" style={{ color: "var(--ink)" }}>=== Surface Quality (from Data.Information) ===</h2>
            <div className="space-y-2">
              <div className="flex justify-between items-center py-1">
                <span className="text-sm" style={{ color: "var(--muted-ink)" }}>Surface total:</span>
                <span className="font-mono text-sm font-semibold" style={{ color: "var(--ink)" }}>713</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-sm font-mono" style={{ color: "var(--muted-ink)" }}>ISI-(ISI):</span>
                <span className="font-mono text-sm font-semibold" style={{ color: "var(--ink)" }}>306</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-sm font-mono" style={{ color: "var(--muted-ink)" }}>ISI-(NSI):</span>
                <span className="font-mono text-sm font-semibold" style={{ color: "var(--ink)" }}>250</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-sm font-mono" style={{ color: "var(--muted-ink)" }}>NSI-(NSI):</span>
                <span className="font-mono text-sm font-semibold" style={{ color: "var(--ink)" }}>157</span>
              </div>
            </div>
          </div>

          {/* Position Number */}
          <div className="rounded-lg p-6" style={{ background: "var(--panel)", border: "1px solid color-mix(in srgb, var(--silver) 30%, transparent)", boxShadow: "0 6px 18px rgba(0,0,0,0.06)" }}>
            <h2 className="text-lg font-semibold mb-4" style={{ color: "var(--ink)" }}>=== Position number (CLT only) ===</h2>
            <div className="space-y-2">
              <div className="flex justify-between items-center py-1">
                <span className="text-sm" style={{ color: "var(--muted-ink)" }}>With value:</span>
                <span className="font-mono text-sm font-semibold" style={{ color: "var(--ink)" }}>713</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-sm" style={{ color: "var(--muted-ink)" }}>Unique values:</span>
                <span className="font-mono text-sm font-semibold" style={{ color: "var(--ink)" }}>713</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-sm" style={{ color: "var(--muted-ink)" }}>Duplicate values:</span>
                <span className="font-mono text-sm font-semibold" style={{ color: "var(--ink)" }}>0</span>
              </div>
            </div>
          </div>

          {/* Largest Element */}
          <div className="rounded-lg p-6" style={{ background: "var(--panel)", border: "1px solid color-mix(in srgb, var(--silver) 30%, transparent)", boxShadow: "0 6px 18px rgba(0,0,0,0.06)" }}>
            <h2 className="text-lg font-semibold mb-4" style={{ color: "var(--ink)" }}>=== Largest element (by Geometry volume) ===</h2>
            <div className="space-y-2">
              <div className="flex justify-between items-start py-1">
                <span className="text-sm" style={{ color: "var(--muted-ink)" }}>ID:</span>
                <span className="font-mono text-xs font-semibold text-right" style={{ color: "var(--ink)" }}>f449bca7ff0ae5c3236713282579ed54</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-sm" style={{ color: "var(--muted-ink)" }}>Geometry (W×H×L):</span>
                <span className="font-mono text-sm font-semibold" style={{ color: "var(--ink)" }}>2950.00 × 240 × 10267.60</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-sm" style={{ color: "var(--muted-ink)" }}>Volume:</span>
                <span className="font-mono text-sm font-semibold" style={{ color: "var(--ink)" }}>7,269,457,926.35</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-sm" style={{ color: "var(--muted-ink)" }}>Position number:</span>
                <span className="font-mono text-sm font-semibold" style={{ color: "var(--ink)" }}>213</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-sm" style={{ color: "var(--muted-ink)" }}>PanelBuildUp:</span>
                <span className="font-mono text-sm font-semibold" style={{ color: "var(--ink)" }}>L40L40-Q20-L40-Q20-L40L40</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-sm" style={{ color: "var(--muted-ink)" }}>Surface quality:</span>
                <span className="font-mono text-sm font-semibold" style={{ color: "var(--ink)" }}>ISI-(NSI)</span>
              </div>
            </div>
          </div>

          {/* Heaviest Element */}
          <div className="rounded-lg p-6" style={{ background: "var(--panel)", border: "1px solid color-mix(in srgb, var(--silver) 30%, transparent)", boxShadow: "0 6px 18px rgba(0,0,0,0.06)" }}>
            <h2 className="text-lg font-semibold mb-4" style={{ color: "var(--ink)" }}>=== Heaviest element (by KLH weight_net) ===</h2>
            <div className="space-y-2">
              <div className="flex justify-between items-start py-1">
                <span className="text-sm" style={{ color: "var(--muted-ink)" }}>ID:</span>
                <span className="font-mono text-xs font-semibold text-right" style={{ color: "var(--ink)" }}>88d55d9669cfe9375592ddf8315c07b4</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-sm" style={{ color: "var(--muted-ink)" }}>Weight (net):</span>
                <span className="font-mono text-sm font-semibold" style={{ color: "var(--ink)" }}>2,673.87 kg</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-sm" style={{ color: "var(--muted-ink)" }}>Position number:</span>
                <span className="font-mono text-sm font-semibold" style={{ color: "var(--ink)" }}>24</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-sm" style={{ color: "var(--muted-ink)" }}>PanelBuildUp:</span>
                <span className="font-mono text-sm font-semibold" style={{ color: "var(--ink)" }}>L30-Q20-L30-Q20-L30-Q20-L30</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-sm" style={{ color: "var(--muted-ink)" }}>Surface quality:</span>
                <span className="font-mono text-sm font-semibold" style={{ color: "var(--ink)" }}>ISI-(ISI)</span>
              </div>
            </div>
          </div>

          {/* Automation Status */}
          <div className="rounded-lg p-6" style={{ background: "var(--panel)", border: "1px solid color-mix(in srgb, var(--silver) 30%, transparent)", boxShadow: "0 6px 18px rgba(0,0,0,0.06)" }}>
            <h2 className="text-lg font-semibold mb-4" style={{ color: "var(--ink)" }}>=== Automation Status ===</h2>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full" style={{ background: "var(--soft-gold)" }}></div>
              <span className="text-sm font-semibold" style={{ color: "var(--ink)" }}>Automation run SUCCEEDED after 8.71 seconds</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
