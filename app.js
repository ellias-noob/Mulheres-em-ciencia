'use strict';

/*
 * CIÊNCIA DELAS — MUSEU DIGITAL
 * JavaScript do protótipo.
 *
 * Importante:
 * - Confirmar fatos, fontes, citações e direitos de imagem.
 * - A senha beta é apenas demonstrativa, não é segurança real.
 */

const profiles = [
  {
    id: 'beatriz-marimon',
    name: 'Dra. Beatriz Schwantes Marimon',
    shortName: 'Beatriz Marimon',
    firstName: 'Beatriz',
    initials: 'BM',
    category: 'Ambiente',
    areas: 'Ecologia vegetal · Cerrado · Amazônia',
    place: 'UNEMAT · Nova Xavantina, MT',
    photo: null,
    photoCredit: 'Solicitar fotografia oficial à UNEMAT.',
    summary: 'Pesquisadora de ecologia vegetal, com estudos sobre diversidade e dinâmica da vegetação.',
    trajectory: `<p>Beatriz Schwantes Marimon atua na Universidade do Estado de Mato Grosso (UNEMAT), em pesquisas de ecologia vegetal.</p><p>Completar os marcos da trajetória com o currículo institucional atualizado.</p>`,
    research: `<p>Como a vegetação do Cerrado responde às mudanças ambientais? Como medir a diversidade das plantas e estudar os efeitos da seca?</p>`,
    contributions: `<ul><li>Estudos sobre estrutura e diversidade da vegetação.</li><li>Pesquisa sobre o Cerrado e a transição Amazônia–Cerrado.</li><li>Participação em investigações sobre mudanças ambientais.</li></ul><p>Confirmar resultados específicos nos artigos científicos originais.</p>`,
    context: `<p>O trabalho está ligado ao Cerrado mato-grossense e à região de transição Amazônia–Cerrado.</p>`,
    interview: `<p>A UNEMAT publicou um perfil em formato de entrevista sobre a trajetória da pesquisadora em 2023.</p>`,
    questions: `<ul><li>Qual descoberta mudou a sua forma de compreender o Cerrado?</li><li>Como se realiza um experimento de campo?</li><li>Que resultado da pesquisa pode ser explicado ao público?</li></ul>`,
    sources: [
      {
        label: 'UNEMAT — entrevista e trajetória',
        url: 'https://unemat.br/noticias/27-4-2023-pesquisadora-da-unemat-esta-entre-as-melhores-do-mundo-em-ranking-na-area-de-ecologia-e-evolucao',
        type: 'Entrevista institucional'
      },
      {
        label: 'University of Leeds — pesquisa sobre seca',
        url: 'https://www.leeds.ac.uk/directory-record/22847/creating-a-drought-to-predict-the-amazon-tipping-point',
        type: 'Pesquisa científica'
      }
    ]
  },
  {
    id: 'rosane-hahn',
    name: 'Dra. Rosane Christine Hahn',
    shortName: 'Rosane Hahn',
    firstName: 'Rosane',
    initials: 'RH',
    category: 'Saúde',
    areas: 'Micologia médica · Diagnóstico · Saúde rural',
    place: 'UFMT · Cuiabá, MT',
    photo: null,
    photoCredit: 'Solicitar retrato autorizado à UFMT.',
    summary: 'Pesquisadora de fungos de importância médica e estratégias de diagnóstico de doenças infecciosas.',
    trajectory: `<p>Rosane Christine Hahn está associada a projetos de investigação registados na Universidade Federal de Mato Grosso (UFMT).</p><p>Confirmar formação, cargos e datas em currículo institucional atualizado.</p>`,
    research: `<p>Como melhorar o diagnóstico da paracoccidioidomicose? Como a investigação laboratorial pode contribuir para o diagnóstico precoce?</p>`,
    contributions: `<ul><li>Investigação sobre diagnóstico da paracoccidioidomicose.</li><li>Estudos relacionados à saúde de trabalhadores rurais.</li><li>Pesquisa que aproxima laboratório e saúde pública.</li></ul><p>Um projeto registado não comprova, por si só, que todos os resultados previstos foram alcançados.</p>`,
    context: `<p>A pesquisa aproxima a micologia médica das necessidades de saúde pública e dos trabalhadores rurais.</p>`,
    interview: `<p>Os projetos registados na UFMT são fontes de referência para preparar uma entrevista com a pesquisadora.</p>`,
    questions: `<ul><li>Por que esta doença pode ser difícil de diagnosticar?</li><li>Como a pesquisa laboratorial pode ajudar os trabalhadores rurais?</li><li>Quais resultados já foram publicados?</li></ul>`,
    sources: [
      {
        label: 'UFMT — projeto de diagnóstico',
        url: 'https://sistemas.ufmt.br/sgpp/Publico/Detalhe/13797',
        type: 'Projeto institucional'
      },
      {
        label: 'UFMT — diagnóstico e saúde rural',
        url: 'https://sistemas.ufmt.br/sgpp/Publico/Detalhe/15234',
        type: 'Projeto institucional'
      }
    ]
  },
  {
    id: 'ana-tercas-trettel',
    name: 'Dra. Ana Cláudia Terças Trettel',
    shortName: 'Ana Cláudia Terças Trettel',
    firstName: 'Ana Cláudia',
    initials: 'AT',
    category: 'Saúde',
    areas: 'Enfermagem intercultural indígena · Saúde coletiva',
    place: 'UNEMAT · Mato Grosso',
    photo: null,
    photoCredit: 'Solicitar fotografia autorizada à UNEMAT.',
    summary: 'Pesquisadora ligada à formação em enfermagem intercultural indígena e à articulação entre saúde e educação.',
    trajectory: `<p>Ana Cláudia Terças Trettel está associada à UNEMAT e à formação em enfermagem intercultural indígena.</p><p>Confirmar os dados biográficos diretamente com a pesquisadora ou em fonte institucional.</p>`,
    research: `<p>Como formar profissionais de saúde para atuar em contextos interculturais? Como respeitar as diferenças culturais na formação e no cuidado?</p>`,
    contributions: `<ul><li>Formação de profissionais de saúde em contexto intercultural.</li><li>Articulação entre ensino universitário e necessidades de saúde.</li><li>Investigação relacionada à educação superior indígena.</li></ul>`,
    context: `<p>O trabalho envolve contextos culturais diversos. Fotografias de comunidades e estudantes devem ter autorização específica.</p>`,
    interview: `<p>A UNEMAT publicou, em março de 2026, uma notícia sobre a participação da pesquisadora numa reportagem da TV Centro América.</p>`,
    questions: `<ul><li>O que significa formar profissionais de saúde num contexto intercultural?</li><li>Como os estudantes participam na construção do curso?</li><li>Quais cuidados éticos são necessários na comunicação científica?</li></ul>`,
    sources: [
      {
        label: 'UNEMAT — reportagem sobre mulheres na ciência',
        url: 'https://unemat.br/noticias/10-3-2026-pesquisadora-da-unemat-e-destaque-em-serie-sobre-mulheres-na-ciencia',
        type: 'Notícia institucional'
      },
      {
        label: 'Portal oficial da UNEMAT',
        url: 'https://unemat.br/',
        type: 'Instituição'
      }
    ]
  },
  {
    id: 'neiva-guedes',
    name: 'Dra. Neiva Guedes',
    shortName: 'Neiva Guedes',
    firstName: 'Neiva',
    initials: 'NG',
    category: 'Ambiente',
    areas: 'Biologia · Conservação · Arara-azul-grande',
    place: 'Instituto Arara Azul · Pantanal regional',
    photo: null,
    photoCredit: 'Solicitar fotografia autorizada ao Instituto Arara Azul.',
    summary: 'Pesquisadora ligada ao estudo e à conservação da arara-azul-grande.',
    trajectory: `<p>Neiva Guedes está ligada ao Instituto Arara Azul e aos estudos de biologia e monitoramento da arara-azul-grande.</p><p>É uma referência regional ligada ao Pantanal e ao Mato Grosso do Sul; não apresentar toda a sua atividade como sediada em Mato Grosso.</p>`,
    research: `<p>Como acompanhar ninhos e populações de araras-azuis? Que fatores afetam a reprodução e a conservação da espécie?</p>`,
    contributions: `<ul><li>Estudos de biologia e monitoramento da arara-azul-grande.</li><li>Ações de conservação.</li><li>Educação ambiental e divulgação científica.</li></ul>`,
    context: `<p>O Pantanal atravessa fronteiras estaduais. O documentário deve indicar corretamente o território dos projetos apresentados.</p>`,
    interview: `<p>O Museu da Pessoa disponibiliza uma história de vida de Neiva Guedes, entrevistada em Campo Grande em 2025.</p>`,
    questions: `<ul><li>Como começou o seu trabalho com as araras-azuis?</li><li>Como são monitorados os ninhos?</li><li>Que resultados de conservação estão documentados?</li></ul>`,
    sources: [
      {
        label: 'Museu da Pessoa — história de vida',
        url: 'https://museudapessoa.org/historia-de-vida/nossas-irmas-azuis/',
        type: 'Entrevista biográfica'
      },
      {
        label: 'Instituto Arara Azul — perfil',
        url: 'https://www.institutoararaazul.org.br/membro/neiva-guedes/',
        type: 'Instituição'
      }
    ]
  },
  {
    id: 'graziela-barroso',
    name: 'Graziela Maciel Barroso',
    shortName: 'Graziela Barroso',
    firstName: 'Graziela',
    initials: 'GB',
    category: 'História',
    areas: 'Botânica · Taxonomia vegetal · Herbários',
    place: 'Nascida em Corumbá, no antigo Mato Grosso',
    photo: null,
    photoCredit: 'Consultar o arquivo do Jardim Botânico do Rio de Janeiro.',
    summary: 'Botânica brasileira de referência, com contribuições à taxonomia vegetal e à formação de pesquisadores.',
    trajectory: `<p>Graziela Maciel Barroso nasceu em Corumbá em 1912, quando a cidade pertencia ao antigo Mato Grosso. Trabalhou durante décadas no Jardim Botânico do Rio de Janeiro.</p><p>Corumbá atualmente pertence a Mato Grosso do Sul.</p>`,
    research: `<p>Como identificar, descrever e classificar espécies vegetais? Como os herbários ajudam a preservar o conhecimento científico?</p>`,
    contributions: `<ul><li>Contribuições à taxonomia vegetal brasileira.</li><li>Publicações de referência em botânica.</li><li>Formação de gerações de pesquisadores.</li></ul>`,
    context: `<p>O Jardim Botânico do Rio de Janeiro conserva informações biográficas e arquivo pessoal da pesquisadora.</p>`,
    interview: `<p>O arquivo do Jardim Botânico reproduz uma entrevista histórica de Graziela publicada originalmente pela revista Ciência Hoje em 1997.</p>`,
    questions: `<ul><li>Que perguntas uma botânica faz ao observar uma planta?</li><li>Como os herbários preservam conhecimento para o futuro?</li><li>Que obstáculos marcou a carreira das mulheres na ciência?</li></ul>`,
    sources: [
      {
        label: 'Jardim Botânico — biografia e arquivo',
        url: 'https://www.gov.br/jbrj/pt-br/assuntos/colecoes/arquivistica/graziela-maciel-barroso',
        type: 'Arquivo histórico'
      },
      {
        label: 'Jardim Botânico — entrevista histórica',
        url: 'https://www.gov.br/jbrj/pt-br/assuntos/colecoes/arquivistica/arquivo-graziela-maciel-barroso/563',
        type: 'Entrevista'
      }
    ]
  },
  {
    id: 'carmen-portinho',
    name: 'Carmen Velasco Portinho',
    shortName: 'Carmen Portinho',
    firstName: 'Carmen',
    initials: 'CP',
    category: 'História',
    areas: 'Engenharia civil · Urbanismo · Direitos das mulheres',
    place: 'Nascida em Corumbá, no antigo Mato Grosso',
    photo: null,
    photoCredit: 'Consultar o Arquivo Nacional e confirmar os direitos de reprodução.',
    summary: 'Engenheira civil e urbanista pioneira, com atuação em habitação e planejamento urbano.',
    trajectory: `<p>Carmen Velasco Portinho nasceu em Corumbá em 1903, quando a cidade pertencia ao antigo Mato Grosso.</p><p>Foi uma pioneira da engenharia civil e do urbanismo brasileiro, além de defensora dos direitos das mulheres.</p>`,
    research: `<p>Como a engenharia e o urbanismo podem transformar as cidades e as condições de vida das pessoas?</p>`,
    contributions: `<ul><li>Pioneirismo na engenharia civil.</li><li>Atuação em urbanismo e habitação.</li><li>Defesa dos direitos das mulheres.</li></ul>`,
    context: `<p>A sua trajetória permite relacionar engenharia, urbanismo e transformação dos espaços públicos.</p>`,
    interview: `<p>O protótipo reúne referências biográficas. Para novas citações, procurar documentos e testemunhos identificados em acervos históricos.</p>`,
    questions: `<ul><li>Que problema urbano cada projeto procurava resolver?</li><li>Que barreiras as mulheres enfrentavam na engenharia?</li><li>Como o urbanismo pode melhorar a vida cotidiana?</li></ul>`,
    sources: [
      {
        label: 'CAU/BR — Carmen Portinho e o urbanismo',
        url: 'https://caubr.gov.br/aprovado-pl-que-declara-carmen-velasco-portinho-patronesse-do-urbanismo/',
        type: 'Biografia institucional'
      },
      {
        label: 'CNPq — Pioneiras da Ciência no Brasil',
        url: 'https://www.gov.br/cnpq/pt-br/acesso-a-informacao/acoes-e-programas/programas/mulher-e-ciencia/pioneiras-da-ciencia-1/pioneiras-2a-edicao',
        type: 'Coleção histórica'
      }
    ]
  },
  {
    id: 'meninas-digitais',
    name: 'Meninas Digitais — Regional Mato Grosso',
    shortName: 'Meninas Digitais MT',
    firstName: 'Meninas Digitais',
    initials: 'MD',
    category: 'Tecnologia',
    areas: 'Computação · Educação · Participação de meninas',
    place: 'UFMT · Sociedade Brasileira de Computação',
    photo: null,
    photoCredit: 'Confirmar autorizações de imagem, especialmente para menores de idade.',
    summary: 'Iniciativa de incentivo à participação de meninas e mulheres em computação e tecnologia.',
    trajectory: `<p>O projeto regional foi criado em 2015 e promove atividades educativas e divulgação de mulheres na computação.</p><p>Confirmar com a coordenação os números mais recentes de alcance.</p>`,
    research: `<p>Como aproximar meninas das áreas de computação? Que atividades ajudam a ampliar o conhecimento das carreiras tecnológicas?</p>`,
    contributions: `<ul><li>Oficinas e atividades educativas.</li><li>Divulgação de mulheres na computação.</li><li>Materiais educativos, incluindo a cartilha Mulheres na Computação.</li></ul>`,
    context: `<p>O projeto permite mostrar oficinas, estudantes, mentoras e atividades de computação. Obter autorizações de imagem e dos responsáveis legais quando necessário.</p>`,
    interview: `<p>O site oficial reúne informações sobre atividades e publicações. A coordenação pode indicar participantes para entrevistas.</p>`,
    questions: `<ul><li>O que faz uma menina imaginar que pode trabalhar com computação?</li><li>Que oficina foi mais significativa?</li><li>Como acompanhar o interesse das alunas pela área?</li></ul>`,
    sources: [
      {
        label: 'Site oficial do Meninas Digitais MT',
        url: 'https://meninasdigitaismt.ic.ufmt.br/',
        type: 'Projeto institucional'
      },
      {
        label: 'Sobre o projeto',
        url: 'https://meninasdigitaismt.ic.ufmt.br/index.php/sobre-o-projeto/',
        type: 'História e objetivos'
      },
      {
        label: 'Publicações do projeto',
        url: 'https://meninasdigitaismt.ic.ufmt.br/index.php/publicacoes/',
        type: 'Materiais educativos'
      }
    ]
  }
];

// Helpers
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

const escapeHTML = (value = '') =>
  String(value).replace(/[&<>"']/g, (char) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  }[char]));

const categories = ['Todas', ...new Set(profiles.map((p) => p.category))];

let activeCategory = 'Todas';
let selectedProfile = profiles[0];
let activeTab = 'trajectory';
let activeNode = 'research';

// Retratos
function fallbackPortrait(profile, extraClass = '') {
  return `<div class="portrait-fallback ${extraClass}" aria-label="Retrato oficial ainda não adicionado">${escapeHTML(profile.initials)}</div>`;
}

function portraitHTML(profile) {
  if (!profile.photo) return fallbackPortrait(profile, 'h-full w-full text-3xl');

  return `<img
    src="${escapeHTML(profile.photo)}"
    alt="Fotografia de ${escapeHTML(profile.name)}"
    loading="lazy"
    class="h-full w-full object-cover"
    data-fallback="${escapeHTML(profile.id)}">`;
}

// Filtros
function renderFilters() {
  $('#filter-buttons').innerHTML = categories.map((category) => `
    <button
      type="button"
      class="filter-chip rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-600"
      data-filter="${escapeHTML(category)}"
      aria-pressed="${category === activeCategory}">
      ${escapeHTML(category)}
    </button>
  `).join('');

  $$('#filter-buttons [data-filter]').forEach((button) => {
    button.addEventListener('click', () => {
      activeCategory = button.dataset.filter;
      renderFilters();
      renderCards();
    });
  });
}

function getVisibleProfiles() {
  const query = ($('#search-input').value || '').trim().toLocaleLowerCase('pt-BR');

  return profiles.filter((profile) => {
    const matchesCategory =
      activeCategory === 'Todas' || profile.category === activeCategory;

    const searchable = `${profile.name} ${profile.areas} ${profile.place} ${profile.summary}`
      .toLocaleLowerCase('pt-BR');

    return matchesCategory && (!query || searchable.includes(query));
  });
}

// Cartões das pesquisadoras
function renderCards() {
  const visibleProfiles = getVisibleProfiles();

  if (!visibleProfiles.length) {
    $('#profile-grid').innerHTML = `
      <div class="col-span-full rounded-2xl bg-white p-8 text-center text-sm text-slate-500">
        Nenhuma trajetória encontrada. Experimente outra pesquisa.
      </div>`;
    return;
  }

  $('#profile-grid').innerHTML = visibleProfiles.map((profile) => `
    <button
      type="button"
      class="profile-card overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-sm"
      data-profile-id="${escapeHTML(profile.id)}"
      aria-pressed="${profile.id === selectedProfile.id}">
      <div class="relative h-44 overflow-hidden bg-gradient-to-br from-lilac via-white to-rose/10">
        ${portraitHTML(profile)}
        <span class="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-plum">
          ${escapeHTML(profile.category)}
        </span>
      </div>
      <div class="p-5">
        <p class="text-xs font-bold text-slate-500">${escapeHTML(profile.place)}</p>
        <h3 class="mt-1 text-lg font-black text-ink">${escapeHTML(profile.name)}</h3>
        <p class="mt-2 text-xs font-bold text-plum">${escapeHTML(profile.areas)}</p>
        <p class="mt-3 text-sm leading-6 text-slate-600">${escapeHTML(profile.summary)}</p>
        <span class="mt-4 inline-flex text-sm font-bold text-rose">Abrir mapa mental ↗</span>
      </div>
    </button>
  `).join('');

  $$('#profile-grid [data-profile-id]').forEach((button) => {
    button.addEventListener('click', () => selectProfile(button.dataset.profileId, true));
  });
}

// Mapa mental
const mapNodes = [
  { id: 'trajectory', label: 'Trajetória', x: 450, y: 58 },
  { id: 'research', label: 'Pesquisa', x: 205, y: 140 },
  { id: 'impact', label: 'Contribuições', x: 695, y: 140 },
  { id: 'context', label: 'Território', x: 205, y: 335 },
  { id: 'archive', label: 'Fontes e relatos', x: 450, y: 412 },
  { id: 'questions', label: 'Perguntas', x: 695, y: 335 }
];

function getNodeContent(profile, nodeId) {
  const content = {
    trajectory: {
      title: 'Trajetória',
      status: 'Biografia de referência',
      body: profile.trajectory
    },
    research: {
      title: 'Perguntas de pesquisa',
      status: 'Área de atuação',
      body: profile.research
    },
    impact: {
      title: 'Contribuições',
      status: 'Resultados e atividades',
      body: profile.contributions
    },
    context: {
      title: 'Território',
      status: 'Contexto histórico e local',
      body: profile.context
    },
    archive: {
      title: 'Fontes e relatos',
      status: `${profile.sources.length} fonte(s) registada(s)`,
      body: profile.interview
    },
    questions: {
      title: 'Perguntas para entrevista',
      status: 'Pauta de investigação',
      body: profile.questions
    }
  };

  return content[nodeId] || content.research;
}

function renderMindMap() {
  const centerX = 450;
  const centerY = 235;
  let svg = '';

  mapNodes.forEach((node) => {
    svg += `<line class="mind-edge" x1="${centerX}" y1="${centerY}" x2="${node.x}" y2="${node.y}"></line>`;
  });

  svg += `<circle class="mind-center" cx="${centerX}" cy="${centerY}" r="67"></circle>`;

  const displayName = selectedProfile.firstName.length > 12
    ? `${selectedProfile.firstName.slice(0, 11)}…`
    : selectedProfile.firstName;

  svg += `
    <text class="mind-center-text" x="${centerX}" y="${centerY - 7}" font-size="16">
      ${escapeHTML(displayName)}
    </text>
    <text class="mind-center-text" x="${centerX}" y="${centerY + 17}" font-size="11">
      ${escapeHTML(selectedProfile.initials)} · PERFIL
    </text>`;

  mapNodes.forEach((node) => {
    svg += `
      <g
        class="mind-node ${node.id === activeNode ? 'selected' : ''}"
        data-map-node="${node.id}"
        role="button"
        tabindex="0"
        aria-label="Ver ${escapeHTML(node.label)}"
        aria-pressed="${node.id === activeNode}">
        <rect class="node-card" x="${node.x - 86}" y="${node.y - 27}" width="172" height="54" rx="17"></rect>
        <text x="${node.x}" y="${node.y + 5}" text-anchor="middle">${escapeHTML(node.label)}</text>
      </g>`;
  });

  $('#mindmap').innerHTML = svg;

  $$('#mindmap [data-map-node]').forEach((node) => {
    const activate = () => {
      activeNode = node.dataset.mapNode;
      renderMindMap();
      renderMapInfo();
    };

    node.addEventListener('click', activate);

    node.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        activate();
      }
    });
  });
}

function renderMapInfo() {
  const content = getNodeContent(selectedProfile, activeNode);

  $('#map-info-kicker').textContent = `${selectedProfile.shortName} · MAPA MENTAL`;
  $('#map-info-title').textContent = content.title;
  $('#map-info-status').textContent = content.status;
  $('#map-info-body').innerHTML = content.body;

  $('#map-info-links').innerHTML = selectedProfile.sources.slice(0, 2).map((source) => `
    <a class="source-link text-xs font-bold"
       href="${escapeHTML(source.url)}"
       target="_blank"
       rel="noopener noreferrer">
      ${escapeHTML(source.label)} ↗
    </a>
  `).join('');
}

// Perfil selecionado
function renderProfileHeader() {
  const profile = selectedProfile;

  $('#detail-category').textContent =
    `${profile.category.toLocaleUpperCase('pt-BR')} · ${profile.areas}`;

  $('#detail-name').textContent = profile.name;
  $('#detail-place').textContent = profile.place;
  $('#detail-summary').textContent = profile.summary;
  $('#detail-photo-credit').textContent = profile.photoCredit;

  $('#detail-photo').classList.add('hidden');
  $('#detail-photo').removeAttribute('src');
  $('#detail-fallback').classList.remove('hidden');
  $('#detail-fallback').textContent = profile.initials;

  if (profile.photo) {
    const image = $('#detail-photo');

    image.onload = () => {
      image.classList.remove('hidden');
      $('#detail-fallback').classList.add('hidden');
    };

    image.onerror = () => {
      image.classList.add('hidden');
      $('#detail-fallback').classList.remove('hidden');
    };

    image.src = profile.photo;
  }

  renderMindMap();
  renderMapInfo();
  renderDetailTab();
}

function renderDetailTab() {
  const panel = $('#detail-panel');

  if (activeTab === 'trajectory') {
    panel.innerHTML = selectedProfile.trajectory;
  } else if (activeTab === 'contributions') {
    panel.innerHTML = selectedProfile.contributions;
  } else {
    panel.innerHTML = `
      <h6 class="font-extrabold text-ink">Entrevistas e materiais</h6>
      ${selectedProfile.interview}
      <ul class="mt-3 space-y-2">
        ${selectedProfile.sources.map((source) => `
          <li>
            <span class="font-bold">${escapeHTML(source.type)}:</span>
            <a class="source-link"
               href="${escapeHTML(source.url)}"
               target="_blank"
               rel="noopener noreferrer">${escapeHTML(source.label)} ↗</a>
          </li>
        `).join('')}
      </ul>
      <p class="mt-3 text-xs text-slate-500">
        Confirme o conteúdo integral da fonte e os direitos de reprodução antes da publicação.
      </p>`;
  }

  $$('.tab-btn').forEach((button) => {
    const selected = button.dataset.tab === activeTab;
    button.setAttribute('aria-selected', String(selected));
    button.classList.toggle('bg-lilac', selected);
  });
}

function selectProfile(profileId, scroll = false) {
  const profile = profiles.find((item) => item.id === profileId);
  if (!profile) return;

  selectedProfile = profile;
  activeNode = 'research';
  activeTab = 'trajectory';

  renderCards();
  renderProfileHeader();

  if (scroll) {
    $('#perfil-detalhe').scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}

// Busca, abas e filtros
$('#search-input').addEventListener('input', renderCards);

$$('.tab-btn').forEach((button) => {
  button.addEventListener('click', () => {
    activeTab = button.dataset.tab;
    renderDetailTab();
  });
});

$('#open-profile-sources').addEventListener('click', () => {
  activeTab = 'sources';
  renderDetailTab();
  $('#detail-panel').scrollIntoView({
    behavior: 'smooth',
    block: 'nearest'
  });
});

// Área Beta 3D — demonstração
const DEMO_BETA_PASSWORD = 'beta-ciencia-2026';
const betaModal = $('#beta-modal');
const betaContent = $('#beta-content');
let objectURL = null;

function openBeta() {
  betaModal.classList.remove('hidden');
  betaModal.classList.add('flex');
  $('#beta-feedback').textContent =
    'Digite a senha beta demonstrativa para abrir o visualizador.';
  $('#beta-password').value = '';
  betaContent.classList.add('hidden');
  $('#beta-password').focus();
}

function closeBeta() {
  betaModal.classList.add('hidden');
  betaModal.classList.remove('flex');
}

['#open-beta-top', '#open-beta-profile', '#open-beta-how'].forEach((selector) => {
  const button = $(selector);
  if (button) button.addEventListener('click', openBeta);
});

$('#close-beta').addEventListener('click', closeBeta);

betaModal.addEventListener('click', (event) => {
  if (event.target === betaModal) closeBeta();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeBeta();
});

$('#beta-form').addEventListener('submit', (event) => {
  event.preventDefault();

  if ($('#beta-password').value === DEMO_BETA_PASSWORD) {
    betaContent.classList.remove('hidden');
    $('#beta-feedback').textContent = 'Acesso demonstrativo liberado.';
    $('#beta-feedback').className =
      'mt-2 min-h-5 text-xs font-bold text-emerald-700';
  } else {
    betaContent.classList.add('hidden');
    $('#beta-feedback').textContent = 'Senha incorreta. Tente novamente.';
    $('#beta-feedback').className =
      'mt-2 min-h-5 text-xs font-bold text-rose-700';
  }
});

$('#model-file').addEventListener('change', (event) => {
  const file = event.target.files && event.target.files[0];
  if (!file) return;

  if (!file.name.toLowerCase().endsWith('.glb')) {
    $('#model-feedback').textContent =
      'Escolha um arquivo .glb para visualizar.';
    event.target.value = '';
    return;
  }

  if (objectURL) URL.revokeObjectURL(objectURL);

  objectURL = URL.createObjectURL(file);
  $('#beta-model').src = objectURL;

  $('#model-feedback').textContent =
    `Modelo carregado localmente: ${file.name}. Não foi enviado a um servidor.`;
});

window.addEventListener('beforeunload', () => {
  if (objectURL) URL.revokeObjectURL(objectURL);
});

// Inicialização
renderFilters();
renderCards();
renderProfileHeader();
