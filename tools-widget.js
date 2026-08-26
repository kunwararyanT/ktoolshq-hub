document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('related-tools');
  if (!container) return;

  const allTools = [
    {
      title: "Safe Zone Visualizer",
      path: "/safe-zone",
      desc: "Check TikTok & Reels UI overlays before exporting.",
      icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>`
    },
    {
      title: "Sensitivity Matcher",
      path: "/sens-matcher",
      desc: "Convert true eDPI and cm/360 across all FPS titles.",
      icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>`
    },
    {
      title: "EXIF Data Scrubber",
      path: "/remove-metadata",
      desc: "Strip GPS and camera metadata locally in-browser.",
      icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>`
    },
    {
      title: "Polling Rate & Hz Tester",
      path: "/hz-and-polling",
      desc: "Real-time hardware polling rate diagnostic checker.",
      icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>`
    },
    {
      title: "AI Auto Captions",
      path: "/ai-auto-captions",
      desc: "Generate local animated captions with zero cloud upload.",
      icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path></svg>`
    },
    {
      title: "AI Background Remover",
      path: "/ai-background-remover",
      desc: "Isolate subjects and cut out backgrounds client-side.",
      icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>`
    },
    {
      title: "PDF Unlocker",
      path: "/pdf-unlocker",
      desc: "Remove restrictions from PDF files securely in browser.",
      icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"></path></svg>`
    },
    {
      title: "Reels Aspect Ratio Guide",
      path: "/reels-aspect-ratio",
      desc: "Pixel dimensions & frame grids for vertical video.",
      icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>`
    },
    {
      title: "DOM Smooth Scroll Tester",
      path: "/dom-scroll",
      desc: "Diagnose frame drops and browser scroll latency.",
      icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>`
    },
    {
      title: "Video Hook Scorer",
      path: "/hook-scorer",
      desc: "Analyze retention potential and pacing of opening hooks.",
      icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>`
    },
    {
      title: "Account Shadowban Checker",
      path: "/shadowban-checker",
      desc: "Check tag visibility and indexing status across platforms.",
      icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"></path></svg>`
    },
    {
      title: "Retro Game Tools",
      path: "/retro-gaming",
      desc: "Aspect ratio scaling and scanline visualizers.",
      icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`
    },
    {
      title: "image Size Reducer",
      path: "/image-size-reducer",
      desc: "Compress images to target KB sizes 100% locally.",
      icon: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path></svg>`
    }
  ];

  const currentPath = window.location.pathname.replace(/\/$/, "");
  const eligibleTools = allTools.filter(tool => tool.path !== currentPath && tool.path !== currentPath + ".html");
  const shuffled = [...eligibleTools].sort(() => 0.5 - Math.random());
  const selectedTools = shuffled.slice(0, 3);

  container.innerHTML = `
    <section class="max-w-5xl mx-auto mt-16 mb-12 px-4">
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
        <div class="flex items-center gap-3">
          <div class="h-6 w-1.5 bg-indigo-500 rounded-full"></div>
          <div>
            <h3 class="text-xl font-bold text-zinc-100">Try More Free Utilities</h3>
            <p class="text-xs text-zinc-400">100% local, client-side, zero cloud limits</p>
          </div>
        </div>
        <a href="/" class="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-indigo-400 bg-indigo-500/10 hover:bg-indigo-500 hover:text-white border border-indigo-500/20 rounded-lg transition-all duration-200">
          Explore All 13+ Tools
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </a>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        ${selectedTools.map(tool => `
          <a href="${tool.path}" class="group relative block p-5 bg-zinc-900/90 border border-zinc-800 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/10 hover:border-indigo-500/50">
            <div class="flex items-center gap-3 mb-2.5">
              <span class="p-2.5 bg-zinc-800 text-indigo-400 rounded-lg group-hover:bg-indigo-500 group-hover:text-white transition-colors duration-200">
                ${tool.icon}
              </span>
              <h4 class="font-semibold text-zinc-200 text-sm group-hover:text-indigo-300 transition-colors">${tool.title}</h4>
            </div>
            <p class="text-xs text-zinc-400 leading-relaxed">${tool.desc}</p>
          </a>
        `).join('')}
      </div>
    </section>
  `;
});
