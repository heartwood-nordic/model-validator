"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import "../globals.css";

const geometricalChecks = [
  {
    name: "Clash Detection",
    status: "Passed",
    icon: "✓",
    details: "No clashes detected in the model.",
  },
  {
    name: "Gap Detection",
    status: "Passed",
    icon: "✓",
    details: "No significant gaps found between elements.",
  },
  {
    name: "Duplicated Objects",
    status: "Warning",
    icon: "!",
    details: "No duplicated objects found.",
  },
];

const dataChecks = [
  {
    name: "Valid Sizes Check",
    status: "Warning",
    icon: "!",
    details: "Checks if sizes are valid (Height, Length and Width).",
  },
  {
    name: "Valid Panel Style Check",
    status: "Passed",
    icon: "✓",
    details: "Checks if valid panel style has been specified for each element.",
  },
  {
    name: "Elements Numbering Check",
    status: "Warning",
    icon: "!",
    details: "Checks if elements have been numbered correctly.",
  },
  {
    name: "Surface Quality Check",
    status: "Warning",
    icon: "!",
    details: "Checks if surface quality has been specified for each element.",
  },
  {
    name: "Coating Check",
    status: "Warning",
    icon: "!",
    details: "Checks if coating has been specified for each element.",
  },
  {
    name: "Data Completeness Validation",
    status: "Passed",
    icon: "✓",
    details: "Ensures no elements are missing critical information across all parameters.",
  },
  {
    name: "Annotation Filtering",
    status: "Passed",
    icon: "✓",
    details: "Separates 3D annotation objects from actual building elements for accurate analysis.",
  },
];

const modelValidationChecks = [
  {
    name: "CLT Element Classification (W/R/F)",
    status: "Warning",
    icon: "!",
    details: (
      <div className="space-y-2 text-[12px]">
        <div><b>Classification Results:</b></div>
        <div className="grid grid-cols-2 gap-1 text-[11px]">
          <div>W (Walls): <span className="font-mono">221</span></div>
          <div>R (Roofs): <span className="font-mono">42</span></div>
          <div>F (Floors): <span className="font-mono">450</span></div>
          <div>Glt: <span className="font-mono">0</span></div>
          <div>Ambiguous: <span className="font-mono">0</span></div>
          <div>Invalid: <span className="font-mono text-red-600">10</span></div>
        </div>
        <div><b>CLT Total (W/R/F):</b> <span className="font-mono">713</span></div>
        <div className="text-amber-600 font-semibold">⚠️ 10 invalid classifications found - requires review</div>
      </div>
    ),
  },
  {
    name: "Position Number Uniqueness",
    status: "Passed",
    icon: "✓",
    details: (
      <div className="space-y-1 text-[12px]">
        <div><b>Position Number Results:</b></div>
        <div>With value: <span className="font-mono">713</span></div>
        <div>Unique values: <span className="font-mono">713</span></div>
        <div>Duplicate values: <span className="font-mono">0</span></div>
        <div className="text-green-600 font-semibold">✓ All CLT elements have unique position numbers</div>
      </div>
    ),
  },
  {
    name: "Panel Build-Up Configuration",
    status: "Passed",
    icon: "✓",
    details: (
      <div className="space-y-2 text-[12px]">
        <div><b>PanelBuildUp Analysis:</b></div>
        <div>Distinct configurations: <span className="font-mono">6</span> | Total elements: <span className="font-mono">713</span></div>
        <div className="space-y-1 text-[11px]">
          <div>• L30-Q20-L20-Q20-L30: <span className="font-mono">51</span></div>
          <div>• L30-Q20-L30-Q20-L30-Q20-L30: <span className="font-mono">210</span></div>
          <div>• L40-Q20-L40: <span className="font-mono">117</span></div>
          <div>• L40L40-Q20-L40-Q20-L40L40: <span className="font-mono">321</span></div>
          <div>• Q30-L20-Q30-L20-Q30-L20-Q30: <span className="font-mono">10</span></div>
          <div>• Q40-L20-Q40: <span className="font-mono">4</span></div>
        </div>
        <div className="text-green-600 font-semibold">✓ All panel configurations are valid</div>
      </div>
    ),
  },
  {
    name: "Surface Quality Standards",
    status: "Passed",
    icon: "✓",
    details: (
      <div className="space-y-2 text-[12px]">
        <div><b>Surface Quality Analysis:</b></div>
        <div>Surface total: <span className="font-mono">713</span></div>
        <div className="space-y-1 text-[11px]">
          <div>• ISI-(ISI): <span className="font-mono">306</span></div>
          <div>• ISI-(NSI): <span className="font-mono">250</span></div>
          <div>• NSI-(NSI): <span className="font-mono">157</span></div>
        </div>
        <div className="text-green-600 font-semibold">✓ All elements meet surface quality standards</div>
      </div>
    ),
  },
  {
    name: "Element Dimensions & Weight Analysis",
    status: "Passed",
    icon: "✓",
    details: (
      <div className="space-y-3 text-[12px]">
        <div><b>Largest Element (by Volume):</b></div>
        <div className="text-[11px] space-y-1 pl-2">
          <div>ID: <span className="font-mono">f449bca7ff0ae5c3236713282579ed54</span></div>
          <div>Geometry: <span className="font-mono">2950.00 × 240 × 10267.60 mm</span></div>
          <div>Volume: <span className="font-mono">7,269,457,926.35 mm³</span></div>
          <div>Position: <span className="font-mono">213</span></div>
          <div>PanelBuildUp: <span className="font-mono">L40L40-Q20-L40-Q20-L40L40</span></div>
        </div>
        <div><b>Heaviest Element (by Weight):</b></div>
        <div className="text-[11px] space-y-1 pl-2">
          <div>ID: <span className="font-mono">88d55d9669cfe9375592ddf8315c07b4</span></div>
          <div>Weight: <span className="font-mono">2,673.87 kg</span></div>
          <div>Position: <span className="font-mono">24</span></div>
          <div>PanelBuildUp: <span className="font-mono">L30-Q20-L30-Q20-L30-Q20-L30</span></div>
        </div>
        <div className="text-green-600 font-semibold">✓ Critical elements identified for logistics planning</div>
      </div>
    ),
  },
  {
    name: "Data Completeness",
    status: "Passed",
    icon: "✓",
    details: (
      <div className="space-y-2 text-[12px]">
        <div><b>Data Completeness Analysis:</b></div>
        <div>Total objects analyzed: <span className="font-mono">2,422</span></div>
        <div>CLT elements with complete data: <span className="font-mono">713</span></div>
        <div>Annotations filtered: <span className="font-mono">1,699</span></div>
        <div className="text-green-600 font-semibold">✓ All CLT elements have complete required data</div>
      </div>
    ),
  },
  {
    name: "Object Size Constraints",
    status: "Passed",
    icon: "✓",
    details: (
      <div className="space-y-2 text-[12px]">
        <div><b>Size Constraint Validation:</b></div>
        <div>Elements checked: <span className="font-mono">713</span></div>
        <div>Constraint violations: <span className="font-mono">0</span></div>
        <div className="text-green-600 font-semibold">✓ No size constraint violations found</div>
      </div>
    ),
  },
];

const reports = [
  {
    label: "Model Analysis Report",
    route: "/projects/analysis",
  },
  {
    label: "Quote",
    route: "/projects/quote",
  },
  {
    label: "Quantity Takeoff",
    route: "/projects/quantity-takeoff",
  },
];

export default function Home() {
  const router = useRouter();
  const [openGeometrical, setOpenGeometrical] = useState(false);
  const [openData, setOpenData] = useState(false);
  const [openModelValidation, setOpenModelValidation] = useState(false);
  const [openReport, setOpenReport] = useState(false);
  const [activeTab, setActiveTab] = useState<'checks' | 'reports' | 'quotation'>('checks');
  const [openDetails, setOpenDetails] = useState<Set<string>>(new Set());

  const handleReportClick = (route: string) => {
    router.push(route);
  };

  const toggleCheckDetail = (checkId: string) => {
    setOpenDetails(prev => {
      const newSet = new Set(prev);
      if (newSet.has(checkId)) {
        newSet.delete(checkId);
      } else {
        newSet.add(checkId);
      }
      return newSet;
    });
  };


  return (
    <div className="min-h-screen w-full flex flex-row font-sans relative overflow-hidden" style={{ background: "var(--bg-eggshell)", color: "var(--ink)" }}>
      
      {/* Left Ribbon: Project Info */}
      <div className="flex flex-col justify-between px-6 py-10 min-w-[220px] max-w-[260px] w-full h-screen relative shadow-2xl"
           style={{ background: "var(--panel-muted)", borderRight: "1px solid color-mix(in srgb, var(--silver) 40%, transparent)" }}>
        <div>
          <div className="mb-8">
            <div className="text-xs mb-1 uppercase tracking-wider" style={{ color: "var(--muted-ink)" }}>Project</div>
            <div className="font-semibold text-base" style={{ color: "var(--ink)" }}>P1-test</div>
          </div>
          <div className="mb-8">
            <div className="text-xs mb-1 uppercase tracking-wider" style={{ color: "var(--muted-ink)" }}>Model</div>
            <div className="font-semibold text-base" style={{ color: "var(--ink)" }}>asdf</div>
          </div>
          <div className="mb-8">
            <div className="text-xs mb-1 uppercase tracking-wider" style={{ color: "var(--muted-ink)" }}>Uploaded</div>
            <div className="font-semibold text-base" style={{ color: "var(--ink)" }}>6/3/2025 10:34 AM</div>
          </div>
          <div className="mb-8">
            <div className="text-xs mb-1 uppercase tracking-wider" style={{ color: "var(--muted-ink)" }}>Status</div>
            <div className="font-medium text-sm flex items-center gap-2" style={{ color: "var(--muted-ink)" }}>
              <div className="w-2 h-2 rounded-full" style={{ background: "var(--silver)" }}></div>
              Checks Passed
            </div>
          </div>
          <div className="text-xs mt-4" style={{ color: "var(--muted-ink)" }}>
            Commit Upload <span className="font-mono" style={{ color: "var(--muted-ink)" }}>#12</span> by j.philip@doestech.de
          </div>
        </div>
        <div className="text-xs space-y-2 rounded-lg p-4 shadow-lg"
             style={{ background: "var(--panel)", border: "1px solid color-mix(in srgb, var(--silver) 30%, transparent)", color: "var(--muted-ink)" }}>
          <div className="flex justify-between"><span>Model ID</span><span className="font-mono" style={{ color: "var(--ink)" }}>CLT Model</span></div>
          <div className="flex justify-between"><span>Size</span><span style={{ color: "var(--ink)" }}>14 MB</span></div>
          <div className="flex justify-between"><span>Parts</span><span style={{ color: "var(--ink)" }}>128</span></div>
          <div className="flex justify-between"><span>Units</span><span style={{ color: "var(--ink)" }}>mm</span></div>
          <div className="flex justify-between"><span>Created</span><span style={{ color: "var(--ink)" }}>6/3/2025 10:34 AM</span></div>
        </div>
      </div>

      {/* Center: 3D Model Fullscreen */}
      <div className="flex-1 flex items-center justify-center h-screen p-0 m-0 relative">
        <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{ background: "radial-gradient(1200px 800px at 20% 50%, rgba(0,0,0,0.02), transparent)" }}></div>
        <iframe
          src="https://app.speckle.systems/projects/9e8198a9fa/models/3150602dab#embed=%7B%22isEnabled%22%3Atrue%7D"
          title="Speckle 3D Model"
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            borderRadius: "12px",
            boxShadow: "0 6px 18px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.04)",
            background: "#f2f0ea"
          }}
          allowFullScreen
        />
      </div>

      {/* Right Ribbon: Tabs for Checks and Reports */}
      <div className="flex flex-col px-6 py-10 min-w-[260px] max-w-[320px] w-full h-screen relative shadow-2xl"
           style={{ background: "var(--panel-muted)", borderLeft: "1px solid color-mix(in srgb, var(--silver) 40%, transparent)" }}>
        <div className="flex-1 overflow-y-auto">
          <div className="flex gap-4 mb-6">
            <button
              className={`pb-2 border-b transition text-sm font-semibold ${activeTab === 'checks' ? '' : ''}`}
              style={{ borderColor: activeTab === 'checks' ? 'var(--soft-gold)' : 'transparent', color: activeTab === 'checks' ? 'var(--ink)' : 'var(--muted-ink)' }}
              onClick={() => setActiveTab('checks')}
            >
              Checks
            </button>
            <button
              className={`pb-2 border-b transition text-sm font-semibold ${activeTab === 'reports' ? '' : ''}`}
              style={{ borderColor: activeTab === 'reports' ? 'var(--soft-gold)' : 'transparent', color: activeTab === 'reports' ? 'var(--ink)' : 'var(--muted-ink)' }}
              onClick={() => setActiveTab('reports')}
            >
              Reports
            </button>
            <button
              className={`pb-2 border-b transition text-sm font-semibold ${activeTab === 'quotation' ? '' : ''}`}
              style={{ borderColor: activeTab === 'quotation' ? 'var(--soft-gold)' : 'transparent', color: activeTab === 'quotation' ? 'var(--ink)' : 'var(--muted-ink)' }}
              onClick={() => setActiveTab('quotation')}
            >
              Quotation
            </button>
          </div>
          {/* Checks Tab */}
          {activeTab === 'checks' && (
            <div>
              <button
                className="w-full flex items-center justify-between text-left font-medium mb-3 px-2 py-2 rounded transition"
                style={{ color: "var(--ink)", background: "transparent" }}
                onClick={() => setOpenGeometrical((prev) => !prev)}
                aria-expanded={openGeometrical}
              >
                <span>Geometrical Checks</span>
                <span className="text-xl" style={{ color: "var(--muted-ink)" }}>{openGeometrical ? '▲' : '▼'}</span>
              </button>
              {openGeometrical && (
                <div className="flex flex-col gap-4">
                  {geometricalChecks.map((check, idx) => (
                    <div key={`geo-${check.name}`} className="rounded-lg p-4 flex flex-col transition-all"
                         style={{ background: "var(--panel)", border: "1px solid color-mix(in srgb, var(--silver) 30%, transparent)", boxShadow: "0 6px 18px rgba(0,0,0,0.06)" }}>
                      <button
                        className={"flex items-center justify-between w-full text-left focus:outline-none text-sm font-semibold"}
                        style={{ color: "var(--ink)" }}
                        onClick={() => toggleCheckDetail(`geo-${idx}`)}
                        aria-expanded={openDetails.has(`geo-${idx}`)}
                      >
                        <span className="flex items-center gap-2">
                          <span style={{ color: "var(--muted-ink)" }}>{check.icon}</span>
                          {check.name}
                        </span>
                        <span className="ml-2 text-xs" style={{ color: "var(--muted-ink)" }}>{check.status}</span>
                        <span className="ml-2" style={{ color: "var(--muted-ink)" }}>{openDetails.has(`geo-${idx}`) ? "▲" : "▼"}</span>
                      </button>
                      {openDetails.has(`geo-${idx}`) && (
                        <div className="mt-3 text-xs border-t pt-3 animate-fade-in" style={{ color: "var(--muted-ink)", borderColor: "color-mix(in srgb, var(--silver) 30%, transparent)" }}>
                          {check.details}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
              <button
                className="w-full flex items-center justify-between text-left font-medium mb-3 px-2 py-2 rounded transition"
                style={{ color: "var(--ink)", background: "transparent" }}
                onClick={() => setOpenData((prev) => !prev)}
                aria-expanded={openData}
              >
                <span>Data Checks</span>
                <span className="text-xl" style={{ color: "var(--muted-ink)" }}>{openData ? '▲' : '▼'}</span>
              </button>
              {openData && (
                <div className="flex flex-col gap-4 mt-2">
                  {dataChecks.map((check, idx) => (
                    <div key={`data-${check.name}`} className="rounded-lg p-4 flex flex-col transition-all"
                         style={{ background: "var(--panel)", border: "1px solid color-mix(in srgb, var(--silver) 30%, transparent)", boxShadow: "0 6px 18px rgba(0,0,0,0.06)" }}>
                      <button
                        className="flex items-center justify-between w-full text-left focus:outline-none text-sm font-semibold"
                        style={{ color: "var(--ink)" }}
                        onClick={() => toggleCheckDetail(`data-${idx}`)}
                        aria-expanded={openDetails.has(`data-${idx}`)}
                      >
                        <span className="flex items-center gap-2">
                          <span style={{ color: "var(--muted-ink)" }}>{check.icon}</span>
                          {check.name}
                        </span>
                        <span className="ml-2 text-xs" style={{ color: "var(--muted-ink)" }}>{check.status}</span>
                        <span className="ml-2" style={{ color: "var(--muted-ink)" }}>{openDetails.has(`data-${idx}`) ? "▲" : "▼"}</span>
                      </button>
                      {openDetails.has(`data-${idx}`) && (
                        <div className="mt-3 text-xs border-t pt-3 animate-fade-in" style={{ color: "var(--muted-ink)", borderColor: "color-mix(in srgb, var(--silver) 30%, transparent)" }}>
                          {check.details}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
              <button
                className="w-full flex items-center justify-between text-left font-medium mb-3 px-2 py-2 rounded transition"
                style={{ color: "var(--ink)", background: "transparent" }}
                onClick={() => setOpenModelValidation((prev) => !prev)}
                aria-expanded={openModelValidation}
              >
                <span>Model Validation Checklist</span>
                <span className="text-xl" style={{ color: "var(--muted-ink)" }}>{openModelValidation ? '▲' : '▼'}</span>
              </button>
              {openModelValidation && (
                <div className="flex flex-col gap-4 mt-2">
                  {modelValidationChecks.map((check, idx) => (
                    <div key={`validation-${check.name}`} className="rounded-lg p-3 flex flex-col transition-all"
                         style={{ background: "var(--panel)", border: "1px solid color-mix(in srgb, var(--silver) 30%, transparent)", boxShadow: "0 6px 18px rgba(0,0,0,0.06)" }}>
                      <button
                        className="flex items-center justify-between w-full text-left focus:outline-none text-xs font-semibold"
                        style={{ color: "var(--ink)" }}
                        onClick={() => toggleCheckDetail(`validation-${idx}`)}
                        aria-expanded={openDetails.has(`validation-${idx}`)}
                      >
                        <span className="flex items-center gap-2">
                          <span className="inline-flex items-center justify-center w-4 h-4 border rounded-full text-[10px]" style={{ color: "var(--muted-ink)", borderColor: "color-mix(in srgb, var(--silver) 40%, transparent)" }}>{check.icon}</span>
                          {check.name}
                        </span>
                        <span className="ml-2 text-[11px]" style={{ color: "var(--muted-ink)" }}>{check.status}</span>
                        <span className="ml-2 text-xs" style={{ color: "var(--muted-ink)" }}>{openDetails.has(`validation-${idx}`) ? "▲" : "▼"}</span>
                      </button>
                      {openDetails.has(`validation-${idx}`) && (
                        <div className="mt-2 text-[12px] border-t pt-2 animate-fade-in" style={{ color: "var(--muted-ink)", borderColor: "color-mix(in srgb, var(--silver) 30%, transparent)" }}>
                          {check.details}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
          {/* Reports Tab */}
          {activeTab === 'reports' && (
            <div className="space-y-3">
              {reports.map((report) => (
                <button
                  key={report.label}
                  className="w-full text-left px-4 py-3 rounded-lg transition-all duration-200 focus:outline-none"
                  style={{ 
                    background: "var(--panel)", 
                    border: "1px solid color-mix(in srgb, var(--silver) 30%, transparent)",
                    color: "var(--ink)",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.04)"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.04)";
                  }}
                  onClick={() => handleReportClick(report.route)}
                >
                  <span className="text-sm font-medium">{report.label}</span>
                </button>
              ))}
            </div>
          )}
          {/* Quotation Tab */}
          {activeTab === 'quotation' && (
            <div className="space-y-3">
              <button
                className="w-full text-left px-4 py-3 rounded-lg transition-all duration-200 focus:outline-none"
                style={{ 
                  background: "var(--panel)", 
                  border: "1px solid color-mix(in srgb, var(--silver) 30%, transparent)",
                  color: "var(--ink)",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.04)"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.04)";
                }}
                onClick={() => router.push("/projects/quote")}
              >
                <span className="text-sm font-medium">Quote</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
