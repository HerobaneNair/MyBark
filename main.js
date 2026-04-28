const NAV_LINKS = [
  { href: 'index.html', label: 'Home',  key: 'home' },
  { href: 'about.html', label: 'About', key: 'about' },
  { href: 'faq.html',   label: 'FAQ',   key: 'faq' },
  { href: 'forms.html', label: 'Forms', key: 'forms' },
  { href: 'team.html',  label: 'Team',  key: 'team' },
];

const ICONS = {
  scale: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v18m-7.5-3 3-9 3 9m1.5 0c-.85.63-1.885 1-3 1s-2.15-.37-3-1m15 0-3-9-3 9m1.5 0c-.85.63-1.885 1-3 1s-2.15-.37-3-1M3 6h18"/></svg>',
  briefcase: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.07a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25v-4.07m16.5 0a48.04 48.04 0 0 0-2.25-.4m2.25.4-1.85.4M16.5 18.75H7.5m8.25-9.75v-1.5a2.25 2.25 0 0 0-2.25-2.25h-3a2.25 2.25 0 0 0-2.25 2.25v1.5m12 0a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25v4.07c0 .9.59 1.7 1.46 1.95l5.79 1.65a4.5 4.5 0 0 0 2.5 0l5.79-1.65a2.03 2.03 0 0 0 1.46-1.95V9z"/></svg>',
  home: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955a1.5 1.5 0 0 1 2.122 0L22.28 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/></svg>',
  archive: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5 19.625 6m1.875 0V5.625c0-.621-.504-1.125-1.125-1.125H3.625c-.621 0-1.125.504-1.125 1.125V7.5m19.5 0H2.5m18 0v9.75a2.25 2.25 0 0 1-2.25 2.25H6.375a2.25 2.25 0 0 1-2.25-2.25V7.5"/></svg>',
  document: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9z"/></svg>',
  whatsapp: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5"><path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.683 5.515l-.999 3.648 3.805-.962zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/></svg>',
  envelope: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"/></svg>',
  globe: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"/></svg>',
  check: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-amber-500 flex-none mt-0.5"><path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5z" clip-rule="evenodd"/></svg>',
  plus: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 transition-transform"><path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5z"/></svg>',
  bars: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/></svg>',
  academic: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"/></svg>',
  trophy: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0"/></svg>',
  sparkles: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09zM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456zM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423z"/></svg>',
  building: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"/></svg>',
};

function brandMark(size = 'h-10 w-10') {
  return `<div class="${size} rounded-md bg-amber-500 text-slate-900 flex items-center justify-center font-black text-lg shadow-sm">M</div>`;
}

function navHTML(active) {
  const links = NAV_LINKS.map(l => {
    const isActive = l.key === active;
    const cls = isActive ? 'text-amber-500 font-semibold' : 'text-slate-300 hover:text-white transition-colors';
    return `<li><a href="${l.href}" class="${cls}">${l.label}</a></li>`;
  }).join('');

  return `
  <nav class="bg-slate-900 border-b border-slate-800 sticky top-0 z-40">
    <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      <a href="index.html" class="flex items-center gap-3">
        ${brandMark()}
        <div class="leading-tight">
          <div class="text-white font-bold tracking-wide">MyBark</div>
          <div class="text-[10px] uppercase tracking-[0.2em] text-amber-500/80">Legal Services</div>
        </div>
      </a>
      <ul class="hidden md:flex items-center gap-8 text-sm">${links}
        <li><a href="signup.html" class="bg-amber-500 text-slate-900 font-semibold px-4 py-2 rounded-md hover:bg-amber-400 transition-colors">Sign Up</a></li>
      </ul>
      <button id="nav-toggle" class="md:hidden text-white" aria-label="Menu">${ICONS.bars}</button>
    </div>
    <div id="mobile-nav" class="hidden md:hidden border-t border-slate-800 bg-slate-900">
      <ul class="px-6 py-4 space-y-3 text-sm">${links}
        <li><a href="signup.html" class="block text-center bg-amber-500 text-slate-900 font-semibold py-2 rounded-md">Sign Up</a></li>
      </ul>
    </div>
  </nav>`;
}

function footerHTML() {
  return `
  <footer class="bg-slate-900 text-slate-300 mt-24">
    <div class="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">
      <div>
        <a href="index.html" class="flex items-center gap-3 mb-4">
          ${brandMark()}
          <div class="leading-tight">
            <div class="text-white font-bold">MyBark</div>
            <div class="text-[10px] uppercase tracking-[0.2em] text-amber-500/80">Legal Services</div>
          </div>
        </a>
        <p class="text-sm text-slate-400 max-w-sm">Barristers and Record Keepers - a company of legal, paralegal and IT professionals providing trusted legal services across India.</p>
      </div>
      <div>
        <h5 class="text-white font-semibold uppercase text-xs tracking-widest mb-4">Navigation</h5>
        <ul class="space-y-2 text-sm">
          ${NAV_LINKS.map(l => `<li><a href="${l.href}" class="hover:text-amber-500">${l.label}</a></li>`).join('')}
          <li><a href="signup.html" class="hover:text-amber-500">Sign Up</a></li>
        </ul>
      </div>
      <div>
        <h5 class="text-white font-semibold uppercase text-xs tracking-widest mb-4">Contact</h5>
        <ul class="space-y-3 text-sm">
          <li class="flex items-center gap-2">${ICONS.whatsapp}<a href="https://wa.me/919867566083" class="hover:text-amber-500">+1234567890</a></li>
          <li class="flex items-center gap-2">${ICONS.envelope}<a href="mailto:info@mybark.org" class="hover:text-amber-500">info@mybark.org</a></li>
          <li class="flex items-center gap-2">${ICONS.globe}<span>Cochin - Thiruvananthapuram - Kottayam</span></li>
        </ul>
      </div>
    </div>
    <div class="border-t border-slate-800">
      <div class="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500">
        <p>© 2021 MyBark - Barristers and Record Keepers. All rights reserved.</p>
        <p><a href="https://mybark.org" class="hover:text-amber-500">mybark.org</a></p>
      </div>
    </div>
  </footer>`;
}

function mountLayout() {
  const active = document.body.dataset.page;
  const navSlot = document.getElementById('site-nav');
  const footSlot = document.getElementById('site-footer');
  if (navSlot) navSlot.outerHTML = navHTML(active);
  if (footSlot) footSlot.outerHTML = footerHTML();

  const toggle = document.getElementById('nav-toggle');
  const mobile = document.getElementById('mobile-nav');
  if (toggle && mobile) toggle.addEventListener('click', () => mobile.classList.toggle('hidden'));
}

function toggleFaq(btn) {
  const a = btn.nextElementSibling;
  const icon = btn.querySelector('svg');
  a.classList.toggle('hidden');
  if (icon) icon.classList.toggle('rotate-45');
}

function handleSubmit() {
  const name = document.getElementById('f-name')?.value.trim();
  const email = document.getElementById('f-email')?.value.trim();
  if (!name || !email) { alert('Please enter at least your name and email.'); return; }
  alert(`Thank you, ${name}. The MyBark team will reach out to begin your onboarding.`);
  ['f-name','f-email','f-phone','f-city','f-service','f-message'].forEach(id => {
    const el = document.getElementById(id); if (el) el.value = '';
  });
}

document.addEventListener('DOMContentLoaded', mountLayout);
