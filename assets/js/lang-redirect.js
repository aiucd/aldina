function setLanguage(lang) {
  localStorage.setItem('preferredLang', lang);
}

document.addEventListener('DOMContentLoaded', function () {
  const preferred = localStorage.getItem('preferredLang');
  const current = window.location.pathname;

  // Solo se la preferenza è impostata e non siamo già nella versione giusta
  if (!preferred) return;

  const filename = current.split('/').pop();

  // Verifica che il file sia una pagina HTML
  if (!filename.endsWith('.html')) return;

  if (preferred === 'en' && !filename.includes('-en.html')) {
    const en = filename.replace('.html', '-en.html');
    fetch(en).then(r => { if (r.ok) window.location.href = en; });
  }

  if (preferred === 'it' && filename.includes('-en.html')) {
    const it = filename.replace('-en.html', '.html');
    fetch(it).then(r => { if (r.ok) window.location.href = it; });
  }
});
