"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  function handleCreateProject() {
    alert("Feature coming soon: Create New Project");
  }

  function handleOpenProject() {
    router.push("/projects");
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4" style={{ background: "var(--bg-eggshell)", color: "var(--ink)" }}>
      <img
        src="/Heartwood_Logo_Sand.png"
        alt="Heartwood Logo"
        className="mb-12 w-64 h-auto drop-shadow-lg"
        style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.08))" }}
      />
      <div className="flex flex-col gap-6 w-full max-w-md">
        <div
          className="rounded-xl p-5 cursor-pointer transition text-center"
          style={{ background: "color-mix(in srgb, var(--panel) 95%, white)", border: "1px solid color-mix(in srgb, var(--silver) 50%, transparent)", color: "var(--ink)" }}
          onClick={handleCreateProject}
        >
          <div className="text-base font-semibold">+ Create Project</div>
        </div>
        <div>
          <div className="text-sm font-semibold mb-2" style={{ color: "var(--muted-ink)" }}>Your Projects</div>
          <ul className="flex flex-col gap-2">
            <li
              className="rounded-lg p-4 cursor-pointer transition text-base font-medium"
              style={{ background: "color-mix(in srgb, var(--panel) 90%, white)", border: "1px solid color-mix(in srgb, var(--silver) 50%, transparent)", color: "var(--ink)" }}
              onClick={handleOpenProject}
            >
              P1-test
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
