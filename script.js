/* ========================================
   DATASET JSON
   ======================================== */
const DATASET = {
  "chapters": [
    {
      "id": 1,
      "title": "Analyse Combinatoire & Probabilités",
      "formulas": [
        { "name": "Principe Fondamental de l'Analyse Combinatoire (PFAC)", "latex": "N = n_1 \\times n_2 \\times \\dots \\times n_k", "conditions": "$k$ expériences successives ou simultanées" },
        { "name": "Permutation sans répétition", "latex": "P_n = n!", "conditions": "Classement ordonné de $n$ objets distincts" },
        { "name": "Permutation avec répétition", "latex": "\\tilde{P}_n = \\frac{n!}{n_1! \\, n_2! \\dots n_k!}", "conditions": "$n$ objets répartis en $k$ groupes de tailles $n_1, \\dots, n_k$" },
        { "name": "Arrangement sans répétition", "latex": "A_n^p = \\frac{n!}{(n-p)!}", "conditions": "Ordre important, sans remise, $p \\leq n$" },
        { "name": "Arrangement avec répétition", "latex": "\\tilde{A}_n^p = n^p", "conditions": "Ordre important, avec remise" },
        { "name": "Combinaison sans remise", "latex": "C_n^p = \\binom{n}{p} = \\frac{n!}{p!(n-p)!}", "conditions": "Ordre sans importance, sans remise" },
        { "name": "Combinaison avec remise", "latex": "C_{n+p-1}^p = \\frac{(n+p-1)!}{p!(n-1)!}", "conditions": "Ordre sans importance, avec remise" },
        { "name": "Axiome de normalisation", "latex": "P(\\Omega) = 1", "conditions": "Espace des probabilités" },
        { "name": "Axiome d'additivité (événements disjoints)", "latex": "P\\left(\\bigcup_{i=1}^n A_i\\right) = \\sum_{i=1}^n P(A_i)", "conditions": "Si $A_i \\cap A_j = \\emptyset$ pour $i \\neq j$" },
        { "name": "Probabilité du complémentaire", "latex": "P(\\bar{A}) = 1 - P(A)", "conditions": "" },
        { "name": "Probabilité de la réunion", "latex": "P(A \\cup B) = P(A) + P(B) - P(A \\cap B)", "conditions": "" },
        { "name": "Probabilité de la différence", "latex": "P(A \\setminus B) = P(A) - P(A \\cap B)", "conditions": "" },
        { "name": "Probabilité de la différence symétrique", "latex": "P(A \\Delta B) = P(A) + P(B) - 2P(A \\cap B)", "conditions": "" },
        { "name": "Cas équiprobable (Loi de Laplace)", "latex": "P(A) = \\frac{|A|}{|\\Omega|} = \\frac{\\text{cas favorables}}{\\text{cas possibles}}", "conditions": "Tous les $\\omega \\in \\Omega$ ont même probabilité" },
        { "name": "Probabilité conditionnelle", "latex": "P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)}", "conditions": "Si $P(B) > 0$" },
        { "name": "Probabilité composée", "latex": "P(A \\cap B) = P(A \\mid B)P(B) = P(B \\mid A)P(A)", "conditions": "" },
        { "name": "Formule des probabilités totales", "latex": "P(B) = \\sum_{i=1}^n P(B \\mid A_i)P(A_i)", "conditions": "$\\{A_1, \\dots, A_n\\}$ système complet d'événements" },
        { "name": "Théorème de Bayes", "latex": "P(A_j \\mid B) = \\frac{P(B \\mid A_j)P(A_j)}{\\sum_{i=1}^n P(B \\mid A_i)P(A_i)}", "conditions": "Pour tout $j \\in \\{1, \\dots, n\\}$" },
        { "name": "Indépendance de deux événements", "latex": "P(A \\cap B) = P(A)P(B)", "conditions": "Équivalent à $P(A\\mid B)=P(A)$ si $P(B)>0$" }
      ]
    },
    {
      "id": 2,
      "title": "Statistique Descriptive Simple (Univariée)",
      "formulas": [
        { "name": "Fréquence", "latex": "f_i = \\frac{n_i}{n}", "conditions": "$n_i$ : effectif, $n = \\sum n_i$" },
        { "name": "Effectif cumulé", "latex": "N_i = \\sum_{j=1}^i n_j", "conditions": "" },
        { "name": "Fréquence cumulée", "latex": "F_i = \\sum_{j=1}^i f_j", "conditions": "" },
        { "name": "Amplitude de classe", "latex": "a = \\frac{x_{\\max} - x_{\\min}}{k} \\quad \\text{avec } k \\approx \\lfloor\\sqrt{n}\\rfloor", "conditions": "Pour données continues" },
        { "name": "Mode (Discret)", "latex": "Mo = x_i \\text{ tel que } n_i \\text{ est maximal}", "conditions": "Peut être plurimodal" },
        { "name": "Mode (Continu - Interpolation)", "latex": "Mo = l_1 + a \\cdot \\frac{d_1}{d_1 + d_2}", "conditions": "$l_1$ : borne inf. classe modale, $d_1=n_i-n_{i-1}$, $d_2=n_i-n_{i+1}$" },
        { "name": "Quantile d'ordre $\\alpha$ (Discret)", "latex": "q_\\alpha = \\begin{cases} \\frac{x_{n\\alpha} + x_{n\\alpha+1}}{2} & \\text{si } n\\alpha \\in \\mathbb{N} \\\\ x_{\\lfloor n\\alpha \\rfloor + 1} & \\text{si } n\\alpha \\notin \\mathbb{N} \\end{cases}", "conditions": "$\\alpha \\in [0,1[$. $\\alpha=0.5 \\Rightarrow$ Médiane" },
        { "name": "Quantile d'ordre $\\alpha$ (Continu)", "latex": "q_\\alpha = a + (b-a) \\frac{n\\alpha - N_{\\text{prev}}}{N_{\\text{curr}} - N_{\\text{prev}}}", "conditions": "$[a,b[$ : classe contenant $q_\\alpha$, $N_{\\text{prev}}$ : cumul précédent" },
        { "name": "Moyenne arithmétique", "latex": "\\bar{x} = \\frac{1}{n}\\sum_{i=1}^k n_i x_i = \\sum_{i=1}^k f_i x_i", "conditions": "$x_i$ : valeurs ou centres de classes" },
        { "name": "Étendue", "latex": "e = x_{\\max} - x_{\\min}", "conditions": "Données brutes ou regroupées" },
        { "name": "Variance", "latex": "\\sigma^2 = \\frac{1}{n}\\sum_{i=1}^k n_i (x_i - \\bar{x})^2 = \\left(\\frac{1}{n}\\sum_{i=1}^k n_i x_i^2\\right) - \\bar{x}^2", "conditions": "Mesure de dispersion" },
        { "name": "Écart-type", "latex": "\\sigma = \\sqrt{\\sigma^2}", "conditions": "Même unité que $X$" },
        { "name": "Coefficient de variation", "latex": "C_v = \\frac{\\sigma}{\\bar{x}}", "conditions": "Sans dimension. Permet comparaison entre séries" },
        { "name": "Changement de variable ($X = aY+b$)", "latex": "\\bar{x} = a\\bar{y} + b \\quad ; \\quad \\sigma_X^2 = a^2 \\sigma_Y^2", "conditions": "Simplifie les calculs" },
        { "name": "Fonction de répartition (Discret)", "latex": "F(x) = \\begin{cases} 0 & x < x_1 \\\\ F_i & x_i \\leq x < x_{i+1} \\\\ 1 & x \\geq x_k \\end{cases}", "conditions": "" },
        { "name": "Fonction de répartition (Continu)", "latex": "F(x) = F_{i-1} + \\frac{x - l_{i-1}}{l_i - l_{i-1}} f_i \\quad \\text{si } x \\in [l_{i-1}, l_i[$", "conditions": "Interpolation linéaire" },
        { "name": "Coefficient d'asymétrie de Fisher", "latex": "\\gamma_1 = \\frac{\\mu_3}{\\sigma^3} \\quad \\text{avec } \\mu_3 = \\frac{1}{n}\\sum n_i (x_i - \\bar{x})^3", "conditions": "$\\gamma_1=0$ symétrique, $>0$ étalé à droite, $<0$ à gauche" },
        { "name": "Coefficient d'aplatissement de Fisher", "latex": "\\gamma_2 = \\frac{\\mu_4}{\\sigma^4} - 3 \\quad \\text{avec } \\mu_4 = \\frac{1}{n}\\sum n_i (x_i - \\bar{x})^4", "conditions": "$\\gamma_2=0$ normale, $>0$ pointue, $<0$ aplatie" }
      ]
    },
    {
      "id": 3,
      "title": "Statistique Descriptive Double (Bidimensionnelle)",
      "formulas": [
        { "name": "Fréquence conjointe", "latex": "f_{ij} = \\frac{n_{ij}}{n}", "conditions": "$n_{ij}$ : effectif conjoint" },
        { "name": "Fréquences marginales", "latex": "f_{i\\cdot} = \\frac{n_{i\\cdot}}{n} \\quad ; \\quad f_{\\cdot j} = \\frac{n_{\\cdot j}}{n}", "conditions": "Distributions de $X$ seul et $Y$ seul" },
        { "name": "Fréquences conditionnelles", "latex": "f_{i/j} = \\frac{f_{ij}}{f_{\\cdot j}} = \\frac{n_{ij}}{n_{\\cdot j}} \\quad ; \\quad f_{j/i} = \\frac{f_{ij}}{f_{i\\cdot}} = \\frac{n_{ij}}{n_{i\\cdot}}", "conditions": "Distribution de $X$ sachant $Y=y_j$ ou inversement" },
        { "name": "Condition d'indépendance", "latex": "f_{ij} = f_{i\\cdot} \\cdot f_{\\cdot j} \\iff n \\cdot n_{ij} = n_{i\\cdot} \\cdot n_{\\cdot j}", "conditions": "Vrai pour tout $i,j$" },
        { "name": "Moyennes marginales", "latex": "\\bar{x} = \\sum_{i=1}^k f_{i\\cdot} x_i \\quad ; \\quad \\bar{y} = \\sum_{j=1}^l f_{\\cdot j} y_j", "conditions": "" },
        { "name": "Variances marginales", "latex": "\\sigma_X^2 = \\sum f_{i\\cdot} x_i^2 - \\bar{x}^2 \\quad ; \\quad \\sigma_Y^2 = \\sum f_{\\cdot j} y_j^2 - \\bar{y}^2", "conditions": "" },
        { "name": "Moyenne conditionnelle", "latex": "\\bar{x}_{/Y=y_j} = \\sum_{i=1}^k f_{i/j} x_i", "conditions": "Centre de gravité de la colonne $j$" },
        { "name": "Variance conditionnelle", "latex": "\\sigma_{X/Y=y_j}^2 = \\sum_{i=1}^k f_{i/j} x_i^2 - (\\bar{x}_{/Y=y_j})^2", "conditions": "Dispersion autour de la moyenne conditionnelle" },
        { "name": "Covariance", "latex": "S_{XY} = \\frac{1}{n}\\sum_{i,j} n_{ij} x_i y_j - \\bar{x}\\bar{y} = \\sum_{i,j} f_{ij}(x_i-\\bar{x})(y_j-\\bar{y})", "conditions": "Symétrique. $S_{XX} = \\sigma_X^2$" },
        { "name": "Coefficient de corrélation linéaire", "latex": "\\rho_{XY} = \\frac{S_{XY}}{\\sigma_X \\sigma_Y}", "conditions": "$\\rho \\in [-1, 1]$. $|\\rho|>0.7$ : forte liaison linéaire" },
        { "name": "Droite de régression $y$ en $x$", "latex": "\\hat{y} = \\hat{a}x + \\hat{b} \\quad \\text{avec } \\hat{a} = \\frac{S_{XY}}{\\sigma_X^2}, \\; \\hat{b} = \\bar{y} - \\hat{a}\\bar{x}", "conditions": "Passe par $(\\bar{x}, \\bar{y})$" },
        { "name": "Droite de régression $x$ en $y$", "latex": "\\hat{x} = \\hat{a}'y + \\hat{b}' \\quad \\text{avec } \\hat{a}' = \\frac{S_{XY}}{\\sigma_Y^2}, \\; \\hat{b}' = \\bar{x} - \\hat{a}'\\bar{y}", "conditions": "" },
        { "name": "Relation des pentes", "latex": "\\rho_{XY}^2 = \\hat{a} \\cdot \\hat{a}'", "conditions": "Vérification de cohérence" },
        { "name": "Prévision linéaire", "latex": "\\hat{y}_0 = \\hat{a}x_0 + \\hat{b} \\quad ; \\quad \\hat{x}_0 = \\hat{a}'y_0 + \\hat{b}'", "conditions": "Estimation hors échantillon" },
        { "name": "Ajustement Puissance ($y = b x^a$)", "latex": "\\ln y = a \\ln x + \\ln b \\Rightarrow V = aU + B", "conditions": "Régression linéaire sur $(\\ln X, \\ln Y)$" },
        { "name": "Ajustement Exponentiel ($y = b e^{ax}$)", "latex": "\\ln y = ax + \\ln b \\Rightarrow V = aX + B", "conditions": "Régression linéaire sur $(X, \\ln Y)$" }
      ]
    }
  ]
};

/* ========================================
   DOM REFERENCES
   ======================================== */
const tabsNav       = document.getElementById('tabs-nav');
const contentArea    = document.getElementById('content-area');
const searchInput    = document.getElementById('search-input');
const clearBtn       = document.getElementById('clear-search');
const searchCount    = document.getElementById('search-count');
const themeToggle    = document.getElementById('theme-toggle');
const toast          = document.getElementById('toast');

let activeTab = 0; // index

/* ========================================
   RENDER TABS
   ======================================== */
function renderTabs() {
  tabsNav.innerHTML = '';
  DATASET.chapters.forEach((chapter, index) => {
    const btn = document.createElement('button');
    btn.className = `tab-btn${index === activeTab ? ' active' : ''}`;
    btn.dataset.index = index;
    btn.innerHTML = `${chapter.title}<span class="tab-count">${chapter.formulas.length}</span>`;
    btn.addEventListener('click', () => switchTab(index));
    tabsNav.appendChild(btn);
  });
}

/* ========================================
   SWITCH TAB
   ======================================== */
function switchTab(index) {
  activeTab = index;
  document.querySelectorAll('.tab-btn').forEach((btn, i) => {
    btn.classList.toggle('active', i === index);
  });
  document.querySelectorAll('.chapter-section').forEach((section, i) => {
    section.classList.toggle('active', i === index);
  });
}

/* ========================================
   RENDER CHAPTERS & CARDS
   ======================================== */
function renderContent() {
  contentArea.innerHTML = '';

  DATASET.chapters.forEach((chapter, chapterIndex) => {
    const section = document.createElement('section');
    section.className = `chapter-section${chapterIndex === activeTab ? ' active' : ''}`;
    section.dataset.chapterIndex = chapterIndex;

    const title = document.createElement('h2');
    title.className = 'chapter-title';
    title.textContent = chapter.title;

    const subtitle = document.createElement('p');
    subtitle.className = 'chapter-subtitle';
    subtitle.textContent = `${chapter.formulas.length} formules à retenir`;

    const grid = document.createElement('div');
    grid.className = 'formula-grid';

    chapter.formulas.forEach((formula, fIndex) => {
      const card = document.createElement('div');
      card.className = 'formula-card';
      card.dataset.chapterIndex = chapterIndex;
      card.dataset.formulaIndex = fIndex;
      card.dataset.searchable = `${formula.name} ${formula.latex} ${formula.conditions}`.toLowerCase();

      // Card number badge
      const badge = document.createElement('span');
      badge.style.cssText = `
        position:absolute; top:16px; right:18px;
        background:var(--bg-tab); color:var(--text-muted);
        font-size:0.7rem; font-weight:700; padding:3px 10px;
        border-radius:99px;
      `;
      badge.textContent = `#${fIndex + 1}`;

      // Formula name
      const h3 = document.createElement('h3');
      h3.textContent = formula.name;

      // LaTeX container
      const latexDiv = document.createElement('div');
      latexDiv.className = 'latex';
      // Store raw LaTeX for copying
      const rawLatex = `$$${formula.latex}$$`;
      latexDiv.dataset.latex = rawLatex;

      // Conditions
      const condP = document.createElement('p');
      condP.className = 'conditions';
      condP.innerHTML = formula.conditions ? `📌 <strong>Conditions :</strong> ${formula.conditions}` : '';

      // Copy button
      const copyBtn = document.createElement('button');
      copyBtn.className = 'copy-btn';
      copyBtn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
        Copier LaTeX
      `;
      copyBtn.addEventListener('click', () => copyLatex(rawLatex));

      card.appendChild(badge);
      card.appendChild(h3);
      card.appendChild(latexDiv);
      card.appendChild(condP);
      card.appendChild(copyBtn);
      grid.appendChild(card);
    });

    section.appendChild(title);
    section.appendChild(subtitle);
    section.appendChild(grid);
    contentArea.appendChild(section);
  });

  // Render all KaTeX after DOM injection
  renderAllKaTeX();
}

/* ========================================
   RENDER KATEX
   ======================================== */
function renderAllKaTeX() {
  const latexElements = document.querySelectorAll('.formula-card .latex');

  latexElements.forEach(el => {
    try {
      katex.render(el.dataset.latex, el, {
        displayMode: true,
        throwOnError: false,
        output: 'html'
      });
    } catch (e) {
      el.textContent = el.dataset.latex;
    }
  });

  // Also render KaTeX inside conditions (inline math with $...$)
  const conditionElements = document.querySelectorAll('.formula-card .conditions');
  conditionElements.forEach(el => {
    if (el.innerHTML.includes('$')) {
      try {
        renderMathInElement(el, {
          delimiters: [
            { left: '$$', right: '$$', display: true },
            { left: '$', right: '$', display: false }
          ],
          throwOnError: false
        });
      } catch (e) { /* ignore */ }
    }
  });
}

/* ========================================
   COPY TO CLIPBOARD
   ======================================== */
function copyLatex(text) {
  navigator.clipboard.writeText(text).then(() => {
    showToast();
  }).catch(() => {
    // Fallback
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    showToast();
  });
}

function showToast() {
  toast.classList.add('visible');
  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => {
    toast.classList.remove('visible');
  }, 2500);
}

/* ========================================
   SEARCH / FILTER
   ======================================== */
function handleSearch() {
  const query = searchInput.value.trim().toLowerCase();

  // Toggle clear button
  clearBtn.classList.toggle('hidden', query.length === 0);

  let totalVisible = 0;

  document.querySelectorAll('.formula-card').forEach(card => {
    const searchable = card.dataset.searchable;
    const match = !query || searchable.includes(query);
    card.classList.toggle('hidden-card', !match);
    if (match) totalVisible++;
  });

  // Update count
  if (query) {
    searchCount.textContent = `${totalVisible} résultat${totalVisible !== 1 ? 's' : ''}`;
  } else {
    searchCount.textContent = '';
  }

  // Show "no results" message
  let noResults = document.querySelector('.no-results');
  if (totalVisible === 0 && query) {
    if (!noResults) {
      noResults = document.createElement('div');
      noResults.className = 'no-results';
      noResults.innerHTML = `<span class="emoji">🔍</span><p>Aucune formule trouvée pour « ${query} »</p>`;
      contentArea.appendChild(noResults);
    }
  } else if (noResults) {
    noResults.remove();
  }
}

searchInput.addEventListener('input', handleSearch);

clearBtn.addEventListener('click', () => {
  searchInput.value = '';
  handleSearch();
  searchInput.focus();
});

/* ========================================
   THEME TOGGLE
   ======================================== */
function initTheme() {
  const saved = localStorage.getItem('theme');
  if (saved) {
    document.documentElement.setAttribute('data-theme', saved);
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
}

themeToggle.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});

/* ========================================
   KEYBOARD SHORTCUTS
   ======================================== */
document.addEventListener('keydown', (e) => {
  // Ctrl/Cmd + K → focus search
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault();
    searchInput.focus();
    searchInput.select();
  }
  // Escape → clear search / blur
  if (e.key === 'Escape') {
    if (searchInput.value) {
      searchInput.value = '';
      handleSearch();
    }
    searchInput.blur();
  }
});

/* ========================================
   INIT
   ======================================== */
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderTabs();
  renderContent();
});
