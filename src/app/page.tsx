"use client";

import React from "react";

export default function Home() {
  const PDF_FILE = "/brekfuz.pdf";

  return (
    <main className="relative h-screen w-screen bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white overflow-hidden">
      {/* Fullscreen PDF (fixed under UI) */}
      <iframe
        src={PDF_FILE}
        title="Brekfuz Pitch Deck"
        style={{
          position: "fixed",
          inset: 0,           // top:0; right:0; bottom:0; left:0;
          width: "100vw",
          height: "100vh",
          border: "none",
          backgroundColor: "white",
          zIndex: 0,          // behind header/footer
        }}
      />

      {/* Top Nav (stays on top) */}
      <header className="fixed left-6 right-6 top-6 z-50 flex items-center justify-between gap-4 pointer-events-auto">
        <div className="flex items-center gap-3 bg-white/6 backdrop-blur-md border border-white/8 rounded-2xl px-4 py-2 shadow-md">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow">
            <span className="font-bold text-lg">B</span>
          </div>
          <div>
            <div className="text-sm font-semibold">Brekfuz</div>
            <div className="text-[11px] text-blue-100/70">Pitch Deck</div>
          </div>
        </div>

        <a
          href={PDF_FILE}
          download
          className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium shadow-lg hover:scale-[1.02] transform transition"
        >
          Download
        </a>
      </header>

      {/* Floating Glows (visual only) */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute -right-40 -top-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -left-40 -bottom-44 w-96 h-96 bg-indigo-500/18 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Footer (stays on top) */}
      <footer className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 text-sm text-blue-100/80 backdrop-blur-md bg-blue-900/20 px-4 py-2 rounded-full border border-white/6 pointer-events-auto">
        Scroll through the deck freely
      </footer>
    </main>
  );
}
