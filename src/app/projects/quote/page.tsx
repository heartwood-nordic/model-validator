"use client";
import React from "react";
import "../../globals.css";

export default function QuotePage() {
  return (
    <div className="min-h-screen w-full flex flex-col" style={{ background: "var(--bg-eggshell)", color: "var(--ink)" }}>
      {/* Header */}
      <div className="px-8 py-6 border-b" style={{ borderColor: "color-mix(in srgb, var(--silver) 30%, transparent)", background: "var(--panel-muted)" }}>
        <h1 className="text-2xl font-semibold mb-2" style={{ color: "var(--ink)" }}>QUOTE: Structural Timber - KLH®-CLT & Glulam</h1>
        <p className="text-sm" style={{ color: "var(--muted-ink)" }}>Project quotation and pricing information</p>
      </div>

      {/* Content */}
      <div className="flex-1 p-8">
        <div className="max-w-6xl mx-auto space-y-8">
          
          {/* Company & Customer Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-lg p-6" style={{ background: "var(--panel)", border: "1px solid color-mix(in srgb, var(--silver) 30%, transparent)", boxShadow: "0 6px 18px rgba(0,0,0,0.06)" }}>
              <h2 className="text-lg font-semibold mb-4" style={{ color: "var(--ink)" }}>1. Your Company</h2>
              <div className="space-y-2 text-sm" style={{ color: "var(--muted-ink)" }}>
                <div>[Company Logo]</div>
                <div>[Company Name & Contact Info]</div>
              </div>
            </div>
            <div className="rounded-lg p-6" style={{ background: "var(--panel)", border: "1px solid color-mix(in srgb, var(--silver) 30%, transparent)", boxShadow: "0 6px 18px rgba(0,0,0,0.06)" }}>
              <h2 className="text-lg font-semibold mb-4" style={{ color: "var(--ink)" }}>2. Customer</h2>
              <div className="space-y-2 text-sm" style={{ color: "var(--muted-ink)" }}>
                <div>[Customer Name & Contact Info]</div>
              </div>
            </div>
          </div>

          {/* Project Info */}
          <div className="rounded-lg p-6" style={{ background: "var(--panel)", border: "1px solid color-mix(in srgb, var(--silver) 30%, transparent)", boxShadow: "0 6px 18px rgba(0,0,0,0.06)" }}>
            <h2 className="text-lg font-semibold mb-4" style={{ color: "var(--ink)" }}>3. Project</h2>
            <div className="text-sm" style={{ color: "var(--muted-ink)" }}>[Project Name]</div>
          </div>

          {/* Materials Table */}
          <div className="rounded-lg p-6" style={{ background: "var(--panel)", border: "1px solid color-mix(in srgb, var(--silver) 30%, transparent)", boxShadow: "0 6px 18px rgba(0,0,0,0.06)" }}>
            <h2 className="text-lg font-semibold mb-4" style={{ color: "var(--ink)" }}>4. Materials</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b" style={{ borderColor: "color-mix(in srgb, var(--silver) 30%, transparent)" }}>
                    <th className="text-left py-2 px-3 font-semibold" style={{ color: "var(--ink)" }}>Item</th>
                    <th className="text-left py-2 px-3 font-semibold" style={{ color: "var(--ink)" }}>Product</th>
                    <th className="text-left py-2 px-3 font-semibold" style={{ color: "var(--ink)" }}>Profile</th>
                    <th className="text-left py-2 px-3 font-semibold" style={{ color: "var(--ink)" }}>Layers</th>
                    <th className="text-left py-2 px-3 font-semibold" style={{ color: "var(--ink)" }}>Quality</th>
                    <th className="text-left py-2 px-3 font-semibold" style={{ color: "var(--ink)" }}>Units</th>
                    <th className="text-right py-2 px-3 font-semibold" style={{ color: "var(--ink)" }}>Quantity</th>
                    <th className="text-right py-2 px-3 font-semibold" style={{ color: "var(--ink)" }}>Unit Price €</th>
                    <th className="text-right py-2 px-3 font-semibold" style={{ color: "var(--ink)" }}>Total Price €</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b" style={{ borderColor: "color-mix(in srgb, var(--silver) 20%, transparent)" }}>
                    <td className="py-2 px-3" style={{ color: "var(--muted-ink)" }}>1</td>
                    <td className="py-2 px-3" style={{ color: "var(--muted-ink)" }}>Wall Panels</td>
                    <td className="py-2 px-3" style={{ color: "var(--muted-ink)" }}>CLT100 C 5</td>
                    <td className="py-2 px-3" style={{ color: "var(--muted-ink)" }}>(20-20-20-20-20)</td>
                    <td className="py-2 px-3" style={{ color: "var(--muted-ink)" }}>NVQ</td>
                    <td className="py-2 px-3" style={{ color: "var(--muted-ink)" }}>m²</td>
                    <td className="py-2 px-3 text-right font-mono" style={{ color: "var(--ink)" }}>258</td>
                    <td className="py-2 px-3 text-right font-mono" style={{ color: "var(--ink)" }}>87.82</td>
                    <td className="py-2 px-3 text-right font-mono font-semibold" style={{ color: "var(--ink)" }}>22,657.83</td>
                  </tr>
                  <tr className="border-b" style={{ borderColor: "color-mix(in srgb, var(--silver) 20%, transparent)" }}>
                    <td className="py-2 px-3" style={{ color: "var(--muted-ink)" }}>2</td>
                    <td className="py-2 px-3" style={{ color: "var(--muted-ink)" }}>Slab Panels</td>
                    <td className="py-2 px-3" style={{ color: "var(--muted-ink)" }}>CLT80 L 3</td>
                    <td className="py-2 px-3" style={{ color: "var(--muted-ink)" }}>(30-20-30)</td>
                    <td className="py-2 px-3" style={{ color: "var(--muted-ink)" }}>IVQ</td>
                    <td className="py-2 px-3" style={{ color: "var(--muted-ink)" }}>m²</td>
                    <td className="py-2 px-3 text-right font-mono" style={{ color: "var(--ink)" }}>64</td>
                    <td className="py-2 px-3 text-right font-mono" style={{ color: "var(--ink)" }}>69.47</td>
                    <td className="py-2 px-3 text-right font-mono font-semibold" style={{ color: "var(--ink)" }}>4,446.16</td>
                  </tr>
                  <tr className="border-b" style={{ borderColor: "color-mix(in srgb, var(--silver) 20%, transparent)" }}>
                    <td className="py-2 px-3" style={{ color: "var(--muted-ink)" }}>3</td>
                    <td className="py-2 px-3" style={{ color: "var(--muted-ink)" }}>Roof Panels</td>
                    <td className="py-2 px-3" style={{ color: "var(--muted-ink)" }}>CLT100 L 5</td>
                    <td className="py-2 px-3" style={{ color: "var(--muted-ink)" }}>(20-20-20-20-20)</td>
                    <td className="py-2 px-3" style={{ color: "var(--muted-ink)" }}>DVQ</td>
                    <td className="py-2 px-3" style={{ color: "var(--muted-ink)" }}>m²</td>
                    <td className="py-2 px-3 text-right font-mono" style={{ color: "var(--ink)" }}>257</td>
                    <td className="py-2 px-3 text-right font-mono" style={{ color: "var(--ink)" }}>87.82</td>
                    <td className="py-2 px-3 text-right font-mono font-semibold" style={{ color: "var(--ink)" }}>22,570.01</td>
                  </tr>
                  <tr className="border-b" style={{ borderColor: "color-mix(in srgb, var(--silver) 20%, transparent)" }}>
                    <td className="py-2 px-3" style={{ color: "var(--muted-ink)" }}>4</td>
                    <td className="py-2 px-3" style={{ color: "var(--muted-ink)" }}>Glulam Beams</td>
                    <td className="py-2 px-3" style={{ color: "var(--muted-ink)" }}>200mm x 400mm</td>
                    <td className="py-2 px-3" style={{ color: "var(--muted-ink)" }}>GL30c</td>
                    <td className="py-2 px-3" style={{ color: "var(--muted-ink)" }}>NVQ</td>
                    <td className="py-2 px-3" style={{ color: "var(--muted-ink)" }}>m³</td>
                    <td className="py-2 px-3 text-right font-mono" style={{ color: "var(--ink)" }}>4.43</td>
                    <td className="py-2 px-3 text-right font-mono" style={{ color: "var(--ink)" }}>1,093.17</td>
                    <td className="py-2 px-3 text-right font-mono font-semibold" style={{ color: "var(--ink)" }}>4,842.73</td>
                  </tr>
                  <tr className="border-b" style={{ borderColor: "color-mix(in srgb, var(--silver) 20%, transparent)" }}>
                    <td className="py-2 px-3" style={{ color: "var(--muted-ink)" }}>5</td>
                    <td className="py-2 px-3" style={{ color: "var(--muted-ink)" }}>Glulam Columns</td>
                    <td className="py-2 px-3" style={{ color: "var(--muted-ink)" }}>200mm x 200mm</td>
                    <td className="py-2 px-3" style={{ color: "var(--muted-ink)" }}>GL32h</td>
                    <td className="py-2 px-3" style={{ color: "var(--muted-ink)" }}>IVQ</td>
                    <td className="py-2 px-3" style={{ color: "var(--muted-ink)" }}>m³</td>
                    <td className="py-2 px-3 text-right font-mono" style={{ color: "var(--ink)" }}>4.43</td>
                    <td className="py-2 px-3 text-right font-mono" style={{ color: "var(--ink)" }}>1,093.17</td>
                    <td className="py-2 px-3 text-right font-mono font-semibold" style={{ color: "var(--ink)" }}>4,842.73</td>
                  </tr>
                  <tr className="border-t-2" style={{ borderColor: "color-mix(in srgb, var(--silver) 40%, transparent)" }}>
                    <td colSpan={8} className="py-2 px-3 text-right font-semibold" style={{ color: "var(--ink)" }}>Total elements, EUR excl. VAT</td>
                    <td className="py-2 px-3 text-right font-mono font-semibold text-lg" style={{ color: "var(--ink)" }}>59,357.46</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            {/* Key */}
            <div className="mt-6 p-4 rounded-lg" style={{ background: "var(--panel-muted)", border: "1px solid color-mix(in srgb, var(--silver) 20%, transparent)" }}>
              <h3 className="text-sm font-semibold mb-2" style={{ color: "var(--ink)" }}>Key:</h3>
              <div className="text-xs space-y-1" style={{ color: "var(--muted-ink)" }}>
                <div>• KLH = KLH®-CLT</div>
                <div>• Thickness (mm)</div>
                <div>• Layers (3s, 5s)</div>
                <div>• Wall/Roof/Floor</div>
                <div>• Spruce (unless noted)</div>
                <div>• Surface Quality (NVQ, IVQ, DVQ)</div>
                <div>• CNC Cut (if applicable)</div>
                <div>• Glulam: Specify dimensions (e.g., 200x400mm) and strength class (e.g., GL30c)</div>
              </div>
            </div>
          </div>

          {/* Costs Summary */}
          <div className="rounded-lg p-6" style={{ background: "var(--panel)", border: "1px solid color-mix(in srgb, var(--silver) 30%, transparent)", boxShadow: "0 6px 18px rgba(0,0,0,0.06)" }}>
            <h2 className="text-lg font-semibold mb-4" style={{ color: "var(--ink)" }}>5. Costs</h2>
            <div className="space-y-2">
              <div className="flex justify-between items-center py-2 border-b" style={{ borderColor: "color-mix(in srgb, var(--silver) 20%, transparent)" }}>
                <span className="text-sm" style={{ color: "var(--muted-ink)" }}>Material Subtotal:</span>
                <span className="font-mono font-semibold" style={{ color: "var(--ink)" }}>€59,357.46</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b" style={{ borderColor: "color-mix(in srgb, var(--silver) 20%, transparent)" }}>
                <span className="text-sm" style={{ color: "var(--muted-ink)" }}>Shipping (Estimated):</span>
                <span className="font-mono font-semibold" style={{ color: "var(--ink)" }}>€[TBD]</span>
              </div>
              <div className="flex justify-between items-center py-2 text-lg font-semibold" style={{ color: "var(--ink)" }}>
                <span>Total:</span>
                <span className="font-mono">€[TBD] (Plus VAT if applicable)</span>
              </div>
            </div>
          </div>

          {/* Additional Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-lg p-6" style={{ background: "var(--panel)", border: "1px solid color-mix(in srgb, var(--silver) 30%, transparent)", boxShadow: "0 6px 18px rgba(0,0,0,0.06)" }}>
              <h2 className="text-lg font-semibold mb-4" style={{ color: "var(--ink)" }}>6. Payment</h2>
              <div className="text-sm" style={{ color: "var(--muted-ink)" }}>[Payment Terms: e.g., 50% Deposit, Balance Net 30]</div>
            </div>
            <div className="rounded-lg p-6" style={{ background: "var(--panel)", border: "1px solid color-mix(in srgb, var(--silver) 30%, transparent)", boxShadow: "0 6px 18px rgba(0,0,0,0.06)" }}>
              <h2 className="text-lg font-semibold mb-4" style={{ color: "var(--ink)" }}>8. Validity</h2>
              <div className="text-sm" style={{ color: "var(--muted-ink)" }}>[Valid for X Days]</div>
            </div>
          </div>

          {/* Important Notes */}
          <div className="rounded-lg p-6" style={{ background: "var(--panel)", border: "1px solid color-mix(in srgb, var(--silver) 30%, transparent)", boxShadow: "0 6px 18px rgba(0,0,0,0.06)" }}>
            <h2 className="text-lg font-semibold mb-4" style={{ color: "var(--ink)" }}>7. Important Notes</h2>
            <div className="space-y-2 text-sm" style={{ color: "var(--muted-ink)" }}>
              <div>• <strong>Prices are estimates based on preliminary plans.</strong> Final pricing depends on approved drawings.</div>
              <div>• <strong>Shipping costs may change due to fuel/driver fluctuations.</strong></div>
              <div>• <strong>Check all dimensions with a structural engineer.</strong></div>
              <div>• <strong>Full terms & conditions available on request.</strong></div>
            </div>
          </div>

          {/* Signature */}
          <div className="rounded-lg p-6" style={{ background: "var(--panel)", border: "1px solid color-mix(in srgb, var(--silver) 30%, transparent)", boxShadow: "0 6px 18px rgba(0,0,0,0.06)" }}>
            <h2 className="text-lg font-semibold mb-4" style={{ color: "var(--ink)" }}>9. Signature</h2>
            <div className="text-sm" style={{ color: "var(--muted-ink)" }}>[Your Name & Title]</div>
          </div>

        </div>
      </div>
    </div>
  );
}
