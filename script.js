/* ========================================
   📐 FORMULES EXAM - script.js
   ======================================== */

/* ---------- DATASET (Toutes les formules) ---------- */
const DATASET = {
  chapters: [
    {
      id: 1,
      title: "Analyse Combinatoire & Probabilités",
      formulas: [
        { name: "Principe Fondamental de l'Analyse Combinatoire (PFAC)", latex: "N = n_1 \\times n_2 \\times \\dots \\times n_k", conditions: "$k$ expériences successives ou simultanées" },
        { name: "Permutation sans répétition", latex: "P_n = n!", conditions: "Classement ordonné de $n$ objets distincts" },
        { name: "Permutation avec répétition", latex: "\\tilde{P}_n = \\frac{n!}{n_1! \\, n_2! \\dots n_k!}", conditions: "$n$ objets répartis en $k$ groupes de tailles $n_1, \\dots, n_k$" },
        { name: "Arrangement sans répétition", latex: "A_n^p = \\frac{n!}{(n-p)!}", conditions: "Ordre important, sans remise, $p \\leq n$" },
        { name: "Arrangement avec répétition", latex: "\\tilde{A}_n^p = n^p", conditions: "Ordre important, avec remise" },
        { name: "Combinaison sans remise", latex: "C_n^p = \\binom{n}{p} = \\frac{n!}{p!(n-p)!}", conditions: "Ordre sans importance, sans remise" },
        { name: "Combinaison avec remise", latex: "C_{n+p-1}^p = \\frac{(n+p-1)!}{p!(n-1)!}", conditions: "Ordre sans importance, avec remise" },
        { name: "Axiome de normalisation", latex: "P(\\Omega) = 1", conditions: "Espace des probabilités" },
        { name: "Axiome d'additivité (événements disjoints)", latex: "P\\left(\\bigcup_{i=1}^n A_i\\right) = \\sum_{i=1}^n P(A_i)", conditions: "Si $A_i \\cap A_j = \\emptyset$ pour $i \\neq j$" },
        { name: "Probabilité du complémentaire", latex: "P(\\bar{A}) = 1 - P(A)", conditions: "" },
        { name: "Probabilité de la réunion", latex: "P(A \\cup B) = P(A) + P(B) - P(A \\cap B)", conditions: "" },
        { name: "Probabilité de la différence", latex: "P(A \\setminus B) = P(A) - P(A \\cap B)", conditions: "" },
        { name: "Probabilité de la différence symétrique", latex: "P(A \\Delta B) = P(A) + P(B) - 2P(A \\cap B)", conditions: "" },
        { name: "Cas équiprobable (Loi de Laplace)", latex: "P(A) = \\frac{|A|}{|\\Omega|} = \\frac{\\text{cas favorables}}{\\text{cas possibles}}", conditions: "Tous les $\\omega \\in \\Omega$ ont même probabilité" },
        { name: "Probabilité conditionnelle", latex: "P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)}", conditions: "Si $P(B) > 0$" },
        { name: "Probabilité composée", latex: "P(A \\cap B) = P(A \\mid B)P(B) = P(B \\mid A)P(A)", conditions: "" },
        { name: "Formule des probabilités totales", latex: "P(B) = \\sum_{i=1}^n P(B \\mid A_i)P(A_i)", conditions: "$\\{A_1, \\dots, A_n\\}$ système complet d'événements" },
        { name: "Théorème de Bayes", latex: "P(A_j \\mid B) = \\frac{P(B \\mid A_j)P(A_j)}{\\sum_{i=1}^n P(B \\mid A_i)P(A_i)}", conditions: "Pour tout $j \\in \\{1, \\dots, n\\}$" },
        { name: "Indépendance de deux événements", latex: "P(A \\cap B) = P(A)P(B)", conditions: "Équivalent à $P(A\\mid B)=P(A)$ si $P(B)>0$" },
        { name: "Exactement un seul événement parmi A, B, C", latex: "(A \\cap \\bar{B} \\cap \\bar{C}) \\cup (\\bar{A} \\cap B \\cap \\bar{C}) \\cup (\\bar{A} \\cap \\bar{B} \\cap C)", conditions: "Un seul événement se réalise" }
      ]
    },
    {
      id: 2,
      title: "Statistique Descriptive Simple (Univariée)",
      formulas: [
        { name: "Fréquence", latex: "f_i = \\frac{n_i}{n}", conditions: "$n_i$ : effectif, $n = \\sum n_i$" },
        { name: "Effectif cumulé", latex: "N_i = \\sum_{j=1}^i n_j", conditions: "" },
        { name: "Fréquence cumulée", latex: "F_i = \\sum_{j=1}^i f_j", conditions: "" },
        { name: "Amplitude de classe", latex: "a = \\frac{x_{\\max} - x_{\\min}}{k} \\quad \\text{avec } k \\approx \\lfloor\\sqrt{n}\\rfloor", conditions: "Pour données continues" },
        { name: "Mode (Discret)", latex: "Mo = x_i \\text{ tel que } n_i \\text{ est maximal}", conditions: "Peut être plurimodal" },
        { name: "Mode (Continu - Interpolation)", latex: "Mo = l_1 + a \\cdot \\frac{d_1}{d_1 + d_2}", conditions: "$l_1$ : borne inf. classe modale, $d_1=n_i-n_{i-1}$, $d_2=n_i-n_{i+1}$" },
        { name: "Quantile d'ordre $\\alpha$ (Discret)", latex: "q_\\alpha = \\begin{cases} \\frac{x_{n\\alpha} + x_{n\\alpha+1}}{2} & \\text{si } n\\alpha \\in \\mathbb{N} \\\\ x_{\\lfloor n\\alpha \\rfloor + 1} & \\text{si } n\\alpha \\notin \\mathbb{N} \\end{cases}", conditions: "$\\alpha \\in [0,1[$. $\\alpha=0.5 \\Rightarrow$ Médiane" },
        { name: "Quantile d'ordre $\\alpha$ (Continu)", latex: "q_\\alpha = a + (b-a) \\frac{n\\alpha - N_{\\text{prev}}}{N_{\\text{curr}} - N_{\\text{prev}}}", conditions: "$[a,b[$ : classe contenant $q_\\alpha$, $N_{\\text{prev}}$ : cumul précédent" },
        { name: "Moyenne arithmétique", latex: "\\bar{x} = \\frac{1}{n}\\sum_{i=1}^k n_i x_i = \\sum_{i=1}^k f_i x_i", conditions: "$x_i$ : valeurs ou centres de classes" },
        { name: "Étendue", latex: "e = x_{\\max} - x_{\\min}", conditions: "Données brutes ou regroupées" },
        { name: "Variance", latex: "\\sigma^2 = \\frac{1}{n}\\sum_{i=1}^k n_i (x_i - \\bar{x})^2 = \\left(\\frac{1}{n}\\sum_{i=1}^k n_i x_i^2\\right) - \\bar{x}^2", conditions: "Mesure de dispersion" },
        { name: "Écart-type", latex: "\\sigma = \\sqrt{\\sigma^2}", conditions: "Même unité que $X$" },
        { name: "Coefficient de variation", latex: "C_v = \\frac{\\sigma}{\\bar{x}}", conditions: "Sans dimension. Permet comparaison entre séries" },
        { name: "Changement de variable ($X = aY+b$)", latex: "\\bar{x} = a\\bar{y} + b \\quad ; \\quad \\sigma_X^2 = a^2 \\sigma_Y^2", conditions: "Simplifie les calculs" },
        { name: "Fonction de répartition (Discret)", latex: "F(x) = \\begin{cases} 0 & x < x_1 \\\\ F_i & x_i \\leq x < x_{i+1} \\\\ 1 & x \\geq x_k \\end{cases}", conditions: "" },
        { name: "Fonction de répartition (Continu)", latex: "F(x) = F_{i-1} + \\frac{x - l_{i-1}}{l_i - l_{i-1}} f_i \\quad \\text{si } x \\in [l_{i-1}, l_i[$", conditions: "Interpolation linéaire" },
        { name: "Coefficient d'asymétrie de Fisher", latex: "\\gamma_1 = \\frac{\\mu_3}{\\sigma^3} \\quad \\text{avec } \\mu_3 = \\frac{1}{n}\\sum n_i (x_i - \\bar{x})^3", conditions: "$\\gamma_1=0$ symétrique, $>0$ étalé à droite, $<0$ à gauche" },
        { name: "Coefficient d'aplatissement de Fisher", latex: "\\gamma_2 = \\frac{\\mu_4}{\\sigma^4} - 3 \\quad \\text{avec } \\mu_4 = \\frac{1}{n}\\sum n_i (x_i - \\bar{x})^4", conditions: "$\\gamma_2=0$ normale, $>0$ pointue, $<0$ aplatie" }
      ]
    },
    {
      id: 3,
      title: "Statistique Descriptive Double (Bidimensionnelle)",
      formulas: [
        { name: "Fréquence conjointe", latex: "f_{ij} = \\frac{n_{ij}}{n}", conditions: "$n_{ij}$ : effectif conjoint" },
        { name: "Fréquences marginales", latex: "f_{i\\cdot} = \\frac{n_{i\\cdot}}{n} \\quad ; \\quad f_{\\cdot j} = \\frac{n_{\\cdot j}}{n}", conditions: "Distributions de $X$ seul et $Y$ seul" },
        { name: "Fréquences conditionnelles", latex: "f_{i/j} = \\frac{f_{ij}}{f_{\\cdot j}} = \\frac{n_{ij}}{n_{\\cdot j}} \\quad ; \\quad f_{j/i} = \\frac{f_{ij}}{f_{i\\cdot}} = \\frac{n_{ij}}{n_{i\\cdot}}", conditions: "Distribution de $X$ sachant $Y=y_j$ ou inversement" },
        { name: "Condition d'indépendance", latex: "f_{ij} = f_{i\\cdot} \\cdot f_{\\cdot j} \\iff n \\cdot n_{ij} = n_{i\\cdot} \\cdot n_{\\cdot j}", conditions: "Vrai pour tout $i,j$" },
        { name: "Moyennes marginales", latex: "\\bar{x} = \\sum_{i=1}^k f_{i\\cdot} x_i \\quad ; \\quad \\bar{y} = \\sum_{j=1}^l f_{\\cdot j} y_j", conditions: "" },
        { name: "Variances marginales", latex: "\\sigma_X^2 = \\sum f_{i\\cdot} x_i^2 - \\bar{x}^2 \\quad ; \\quad \\sigma_Y^2 = \\sum f_{\\cdot j} y_j^2 - \\bar{y}^2", conditions: "" },
        { name: "Moyenne conditionnelle", latex: "\\bar{x}_{/Y=y_j} = \\sum_{i=1}^k f_{i/j} x_i", conditions: "Centre de gravité de la colonne $j$" },
        { name: "Variance conditionnelle", latex: "\\sigma_{X/Y=y_j}^2 = \\sum_{i=1}^k f_{i/j} x_i^2 - (\\bar{x}_{/Y=y_j})^2", conditions: "Dispersion autour de la moyenne conditionnelle" },
        { name: "Covariance", latex: "S_{XY} = \\frac{1}{n}\\sum_{i,j} n_{ij} x_i y_j - \\bar{x}\\bar{y} = \\sum_{i,j} f_{ij}(x_i-\\bar{x})(y_j-\\bar{y})", conditions: "Symétrique. $S_{XX} = \\sigma_X^2$" },
        { name: "Coefficient de corrélation linéaire", latex: "\\rho_{XY} = \\frac{S_{XY}}{\\sigma_X \\sigma_Y}", conditions: "$\\rho \\in [-1, 1]$. $|\\rho|>0.7$ : forte liaison linéaire" },
        { name: "Droite de régression $y$ en $x$", latex: "\\hat{y} = \\hat{a}x + \\hat{b} \\quad \\text{avec } \\hat{a} = \\frac{S_{XY}}{\\sigma_X^2}, \\; \\hat{b} = \\bar{y} - \\hat{a}\\bar{x}", conditions: "Passe par $(\\bar{x}, \\bar{y})$" },
        { name: "Droite de régression $x$ en $y$", latex: "\\hat{x} = \\hat{a}'y + \\hat{b}' \\quad \\text{avec } \\hat{a}' = \\frac{S_{XY}}{\\sigma_Y^2}, \\; \\hat{b}' = \\bar{x} - \\hat{a}'\\bar{y}", conditions: "" },
        { name: "Relation des pentes", latex: "\\rho_{XY}^2 = \\hat{a} \\cdot \\hat{a}'", conditions: "Vérification de cohérence" },
        { name: "Prévision linéaire", latex: "\\hat{y}_0 = \\hat{a}x_0 + \\hat{b} \\quad ; \\quad \\hat{x}_0 = \\hat{a}'y_0 + \\hat{b}'", conditions: "Estimation hors échantillon" },
        { name: "Ajustement Puissance ($y = b x^a$)", latex: "\\ln y = a \\ln x + \\ln b \\Rightarrow V = aU + B", conditions: "Régression linéaire sur $(\\ln X, \\ln Y)$" },
        { name: "Ajustement Exponentiel ($y = b e^{ax}$)", latex: "\\ln y = ax + \\ln b \\Rightarrow V = aX + B", conditions: "Régression linéaire sur $(X, \\ln Y)$" }
      ]
    }
  ]
};

/* ---------- DOM REFERENCES ---------- */
const tabsNav     = document.getElementById('tabs-nav');
const contentArea = document.getElementById('content-area');
const searchInput = document.getElementById('search-input');
const clearBtn    = document.getElementById('clear-search');
const searchCount = document.getElementById('search-count');
const themeToggle = document.getElementById('theme-toggle');
const toast       = document.getElementById('toast');

let activeTab = 0;

/* ---------- RENDER TABS ---------- */
function renderTabs() {
  tabsNav.innerHTML = '';
  DATASET.chapters.forEach((ch, i) => {
    const btn = document.createElement('button');
    btn.className = `tab-btn${i === activeTab ? ' active' : ''}`;
    btn.dataset.index = i;
    btn.innerHTML = `${ch.title}<span class="tab-count">${ch.formulas.length}</span>`;
    btn.addEventListener('click', () => switchTab(i));
    tabsNav.appendChild(btn);
  });
}

function switchTab(index) {
  activeTab = index;
  document.querySelectorAll('.tab-btn').forEach((b, i) => b.classList.toggle('active', i === index));
  document.querySelectorAll('.chapter-section').forEach((s, i) => s.classList.toggle('active', i === index));
}

/* ---------- RENDER CONTENT ---------- */
function renderContent() {
  contentArea.innerHTML = '';

  DATASET.chapters.forEach((chapter, ci) => {
    const section = document.createElement('section');
    section.className = `chapter-section${ci === activeTab ? ' active' : ''}`;

    const title = document.createElement('h2');
    title.className = 'chapter-title';
    title.textContent = chapter.title;

    const sub = document.createElement('p');
    sub.className = 'chapter-subtitle';
    sub.textContent = `${chapter.formulas.length} formules à retenir`;

    const grid = document.createElement('div');
    grid.className = 'formula-grid';

    chapter.formulas.forEach((f, fi) => {
      const card = document.createElement('div');
      card.className = 'formula-card';
      card.dataset.searchable = `${f.name} ${f.latex} ${f.conditions}`.toLowerCase();

      // Badge
      const badge = document.createElement('span');
      badge.className = 'card-badge';
      badge.textContent = `#${fi + 1}`;

      // Nom
      const h3 = document.createElement('h3');
      h3.textContent = f.name;

      // Latex (texte brut avec délimiteurs $$ pour l'auto-render)
      const latexDiv = document.createElement('div');
      latexDiv.className = 'latex';
      latexDiv.textContent = `$$${f.latex}$$`;

      // Conditions
      const condP = document.createElement('p');
      condP.className = 'conditions';
      condP.innerHTML = f.conditions ? `📌 <strong>Conditions :</strong> ${f.conditions}` : '';

      // Bouton copier
      const copyBtn = document.createElement('button');
      copyBtn.className = 'copy-btn';
      copyBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
        Copier LaTeX
      `;
      copyBtn.addEventListener('click', () => copyLatex(`$$${f.latex}$$`));

      card.append(badge, h3, latexDiv, condP, copyBtn);
      grid.appendChild(card);
    });

    section.append(title, sub, grid);
    contentArea.appendChild(section);
  });

  // Attendre que KaTeX soit chargé puis rendre les maths
  waitForKaTeX().then(() => renderAllMath());
}

/* ---------- WAIT FOR KATEX ---------- */
function waitForKaTeX() {
  return new Promise(resolve => {
    if (typeof katex !== 'undefined' && typeof renderMathInElement !== 'undefined') {
      resolve();
      return;
    }
    const check = setInterval(() => {
      if (typeof katex !== 'undefined' && typeof renderMathInElement !== 'undefined') {
        clearInterval(check);
        resolve();
      }
    }, 50);
  });
}

/* ---------- AUTO-RENDER MATH ---------- */
function renderAllMath() {
  try {
    renderMathInElement(contentArea, {
      delimiters: [
        { left: '$$', right: '$$', display: true },
        { left: '$',  right: '$',  display: false }
      ],
      throwOnError: false,
      output: 'html'
    });
  } catch (e) {
    console.warn('KaTeX rendering error:', e);
  }
}

/* ---------- COPY TO CLIPBOARD ---------- */
function copyLatex(text) {
  navigator.clipboard.writeText(text).then(showToast).catch(() => {
    const ta = document.createElement('textarea');
    ta.value = text; document.body.appendChild(ta);
    ta.select(); document.execCommand('copy');
    document.body.removeChild(ta);
    showToast();
  });
}

function showToast() {
  toast.classList.add('visible');
  clearTimeout(toast._t);
  toast._t = setTimeout(() => toast.classList.remove('visible'), 2500);
}

/* ---------- SEARCH / FILTER ---------- */
function handleSearch() {
  const q = searchInput.value.trim().toLowerCase();
  clearBtn.classList.toggle('hidden', !q);

  let count = 0;
  document.querySelectorAll('.formula-card').forEach(card => {
    const match = !q || card.dataset.searchable.includes(q);
    card.classList.toggle('hidden-card', !match);
    if (match) count++;
  });

  searchCount.textContent = q ? `${count} résultat${count !== 1 ? 's' : ''}` : '';

  // Message "Aucun résultat"
  let nr = document.querySelector('.no-results');
  if (!count && q) {
    if (!nr) {
      nr = document.createElement('div');
      nr.className = 'no-results';
      nr.innerHTML = `<span class="emoji">🔍</span><p>Aucune formule trouvée pour « ${searchInput.value} »</p>`;
      contentArea.appendChild(nr);
    }
  } else if (nr) {
    nr.remove();
  }
}

searchInput.addEventListener('input', handleSearch);
clearBtn.addEventListener('click', () => { searchInput.value = ''; handleSearch(); searchInput.focus(); });

/* ---------- THEME TOGGLE ---------- */
function initTheme() {
  const saved = localStorage.getItem('theme');
  if (saved) { document.documentElement.setAttribute('data-theme', saved); }
  else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
}

themeToggle.addEventListener('click', () => {
  const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});

/* ---------- KEYBOARD SHORTCUTS ---------- */
document.addEventListener('keydown', e => {
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') { e.preventDefault(); searchInput.focus(); searchInput.select(); }
  if (e.key === 'Escape') { searchInput.value = ''; handleSearch(); searchInput.blur(); }
});

/* ---------- INIT ---------- */
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderTabs();
  renderContent();
});
