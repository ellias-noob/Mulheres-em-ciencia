'use strict';

/*
 * Ciência Delas — Museu Digital
 * Protótipo editorial: confirme fatos, fontes, direitos de imagem e citações antes de publicar.
 * A senha beta abaixo é apenas demonstrativa; não protege conteúdo num site estático.
 */

const profiles = [
  {
    id: 'beatriz-marimon',
    name: 'Dra. Beatriz Schwantes Marimon',
    shortName: 'Beatriz Marimon',
    firstName: 'Beatriz',
    initials: 'BM',
    category: 'Ambiente',
    areas: 'Ecologia vegetal · Cerrado · Transição Amazônia–Cerrado',
    place: 'UNEMAT · Nova Xavantina, MT',
    photo: 'https://www.leeds.ac.uk/images/resized/800x400-0-0-1-80-2.Beatriz_Schwantes_Marimon_800x400.jpg',
    photoCredit: 'Imagem associada à University of Leeds; confirmar crédito e licença antes de reproduzir.',
    summary: 'Pesquisadora de ecologia vegetal que estuda estrutura, diversidade e dinâmica da vegetação, com trabalho relacionado ao Cerrado e à transição Amazônia–Cerrado.',
    trajectory: '<p>Beatriz Schwantes Marimon atua na Universidade do Estado de Mato Grosso (UNEMAT), em pesquisa de ecologia vegetal. Seu trabalho combina observação de campo, análise da vegetação e colaboração científica.</p><p>Para completar esta biografia, confirmar formação, marcos de carreira e datas com a pesquisadora ou em currículo institucional atualizado.</p>',
    research: '<p>Como a vegetação do Cerrado e das zonas de transição responde a mudanças ambientais? Como medir a diversidade e a estrutura das comunidades vegetais? Como experimentos de campo podem ajudar a entender os efeitos da seca?</p>',
    contributions: '<ul><li>Pesquisa sobre estrutura e diversidade da vegetação.</li><li>Estudos de ecossistemas do Cerrado e da transição com a Amazônia.</li><li>Participação em investigações sobre mudanças ambientais e efeitos da seca.</li></ul><p>Ao apresentar números de projeções climáticas, citar o artigo original, o cenário e o período estudado.</p>',
    context: '<p>Nova Xavantina situa parte do trabalho no Cerrado mato-grossense e na região de transição Amazônia–Cerrado. Imagens de campo devem trazer data, local e crédito.</p>',
    interview: '<p>A UNEMAT publicou, em 2023, um perfil em formato de entrevista sobre a trajetória da pesquisadora e seu reconhecimento na área de ecologia e evolução.</p><p>Antes de exibir frases entre aspas, conferir a passagem exata e seu contexto na publicação original.</p>',
    questions: '<ul><li>Qual descoberta mudou sua forma de compreender o Cerrado?</li><li>Como se organiza um experimento de campo de longa duração?</li><li>Que resultado da sua pesquisa pode ser explicado ao público sem perder precisão?</li></ul>',
    sources: [
      {
        label: 'UNEMAT — perfil/entrevista (2023)',
        url: 'https://unemat.br/noticias/27-4-2023-pesquisadora-da-unemat-esta-entre-as-melhores-do-mundo-em-ranking-na-area-de-ecologia-e-evolucao',
        type: 'Entrevista institucional'
      },
      {
        label: 'University of Leeds — experimento sobre seca',
        url: 'https://www.leeds.ac.uk/directory-record/22847/creating-a-drought-to-predict-the-amazon-tipping-point',
        type: 'Pesquisa e imagem'
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
    photoCredit: 'Solicitar retrato oficial à UFMT e confirmar autorização de uso.',
    summary: 'Pesquisadora de fungos de importância médica e de estratégias de diagnóstico de doenças infecciosas, com projetos relacionados à paracoccidioidomicose e à saúde rural.',
    trajectory: '<p>Rosane Christine Hahn está associada a projetos de investigação registados na Universidade Federal de Mato Grosso (UFMT), incluindo trabalhos de micologia médica e diagnóstico.</p><p>Confirmar formação, cargos, datas e trajetória com a pesquisadora e em currículo público oficial antes de fechar a biografia.</p>',
    research: '<p>Como melhorar o diagnóstico da paracoccidioidomicose? Como pesquisas com antígenos podem contribuir para a investigação diagnóstica? Que fatores dificultam o diagnóstico precoce entre trabalhadores rurais?</p>',
    contributions: '<ul><li>Projeto de investigação de antígenos para diagnóstico da paracoccidioidomicose.</li><li>Estudo sobre diagnóstico precoce e saúde de trabalhadores rurais.</li><li>Pesquisa que aproxima laboratório, diagnóstico e saúde pública.</li></ul><p>Registo de projeto não equivale, por si só, a resultado comprovado; conferir artigos e relatórios finais.</p>',
    context: '<p>Os registos da UFMT relacionam a pesquisa à saúde pública e às necessidades de trabalhadores rurais. Entrevistas devem esclarecer alcance, limitações e aplicação dos resultados.</p>',
    interview: '<p>Ainda não foi confirmada neste protótipo uma entrevista audiovisual completa da pesquisadora. Os registos oficiais dos projetos são fontes primárias para preparar o pedido de entrevista.</p><p>Solicitar imagens autorizadas de laboratório sem expor dados identificáveis de pacientes.</p>',
    questions: '<ul><li>Por que esta doença pode ser difícil de diagnosticar?</li><li>Como uma pergunta de laboratório se conecta ao cuidado de trabalhadores rurais?</li><li>Quais resultados já foram publicados e quais continuam em estudo?</li></ul>',
    sources: [
      {
        label: 'UFMT — projeto de diagnóstico (registo institucional)',
        url: 'https://sistemas.ufmt.br/sgpp/Publico/Detalhe/13797',
        type: 'Projeto de pesquisa'
      },
      {
        label: 'UFMT — diagnóstico e saúde rural (registo institucional)',
        url: 'https://sistemas.ufmt.br/sgpp/Publico/Detalhe/15234',
        type: 'Projeto de pesquisa'
      },
      {
        label: 'Portal oficial da UFMT',
        url: 'https://www.ufmt.br/',
        type: 'Instituição'
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
    areas: 'Enfermagem intercultural indígena · Saúde coletiva · Formação',
    place: 'UNEMAT · Mato Grosso',
    photo: null,
    photoCredit: 'Solicitar fotografia oficial à UNEMAT; observar consentimento para imagens comunitárias.',
    summary: 'Professora e pesquisadora ligada à formação em enfermagem intercultural indígena e à articulação entre saúde, educação e contextos socioculturais indígenas.',
    trajectory: '<p>Ana Cláudia Terças Trettel atua na UNEMAT e está associada à coordenação de iniciativas de formação em enfermagem intercultural indígena.</p><p>Validar diretamente com a pesquisadora os dados biográficos e a forma preferida de apresentar seu trabalho.</p>',
    research: '<p>Como formar profissionais de saúde para atuar em contextos interculturais? Como a universidade pode responder a necessidades de saúde sem apagar as diferenças culturais e os conhecimentos das comunidades?</p>',
    contributions: '<ul><li>Participação na formação de profissionais de saúde em contexto intercultural.</li><li>Pesquisa associada ao perfil de estudantes indígenas e à educação superior em saúde.</li><li>Articulação entre formação universitária e necessidades de saúde das comunidades.</li></ul><p>Qualquer descrição de trabalho com comunidades deve respeitar os protocolos de consentimento e validação cultural.</p>',
    context: '<p>A formação intercultural liga a universidade à diversidade de povos e contextos de Mato Grosso. Fotos e vídeos de comunidades, estudantes ou práticas culturais exigem autorização específica e respeito aos protocolos locais.</p>',
    interview: '<p>A UNEMAT publicou, em março de 2026, uma notícia sobre a participação da pesquisadora numa reportagem especial da TV Centro América. Confirmar a publicação original da emissora e as condições de reutilização do vídeo.</p>',
    questions: '<ul><li>O que significa formar profissionais de saúde num contexto intercultural?</li><li>Como os estudantes participam na construção do curso?</li><li>Que cuidados éticos são necessários ao comunicar pesquisas com povos indígenas?</li></ul>',
    sources: [
      {
        label: 'UNEMAT — reportagem sobre mulheres na ciência (2026)',
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
    photoCredit: 'Solicitar foto oficial ao Instituto Arara Azul; confirmar direitos e contexto.',
    summary: 'Pesquisadora ligada ao estudo, monitoramento e conservação da arara-azul-grande e a ações de educação ambiental no Pantanal.',
    trajectory: '<p>Neiva Guedes está ligada ao Instituto Arara Azul e a estudos de biologia e monitoramento da arara-azul-grande desde 1990.</p><p>É uma referência regional importante, associada institucionalmente ao Mato Grosso do Sul e ao Pantanal; não apresentar toda sua atuação como sediada em Mato Grosso.</p>',
    research: '<p>Como monitorar populações e ninhos de araras-azuis? Que fatores afetam a reprodução e a conservação da espécie? Como educação ambiental e pesquisa podem contribuir para a proteção da biodiversidade?</p>',
    contributions: '<ul><li>Estudos de biologia e monitoramento da arara-azul-grande.</li><li>Ações de conservação e educação ambiental.</li><li>Divulgação do conhecimento sobre biodiversidade do Pantanal.</li></ul><p>Confirmar resultados específicos, datas e números nos relatórios e publicações originais do Instituto.</p>',
    context: '<p>O Pantanal é um bioma que atravessa fronteiras estaduais e nacionais. No filme, identificar corretamente o território e diferenciar trabalho regional de pesquisa executada em Mato Grosso.</p>',
    interview: '<p>O Museu da Pessoa disponibiliza uma história de vida de Neiva Guedes, entrevistada em Campo Grande em 2025. O Instituto Arara Azul também mantém conteúdos de imprensa.</p>',
    questions: '<ul><li>Como começou seu envolvimento com as araras-azuis?</li><li>Como uma equipa acompanha ninhos e populações ao longo do tempo?</li><li>Quais mudanças podem ser observadas na conservação da espécie?</li></ul>',
    sources: [
      {
        label: 'Museu da Pessoa — história de vida',
        url: 'https://museudapessoa.org/historia-de-vida/nossas-irmas-azuis/',
        type: 'Entrevista biográfica'
      },
      {
        label: 'Instituto Arara Azul — perfil',
        url: 'https://www.institutoararaazul.org.br/membro/neiva-guedes/',
        type: 'Instituição e biografia'
      },
      {
        label: 'Instituto Arara Azul — conteúdos na mídia',
        url: 'https://www.institutoararaazul.org.br/conteudos/na-midia/',
        type: 'Arquivo de mídia'
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
    place: 'Pioneira nascida em Corumbá, antigo Mato Grosso',
    photo: null,
    photoCredit: 'Procurar fotografia no acervo oficial do Jardim Botânico do Rio de Janeiro.',
    summary: 'Botânica brasileira de referência, reconhecida pela contribuição à taxonomia vegetal, à descrição de espécies e à formação de gerações de pesquisadores.',
    trajectory: '<p>Graziela Maciel Barroso nasceu em Corumbá em 1912, quando a cidade pertencia ao antigo Mato Grosso. Trabalhou durante décadas no Jardim Botânico do Rio de Janeiro e tornou-se uma referência da botânica brasileira.</p><p>Atualmente Corumbá está em Mato Grosso do Sul; a descrição histórica deve preservar essa distinção territorial.</p>',
    research: '<p>Como identificar, descrever e classificar espécies vegetais? Como organizar coleções botânicas e herbários para apoiar pesquisas futuras? Como o conhecimento taxonómico contribui para compreender a diversidade das plantas?</p>',
    contributions: '<ul><li>Contribuições para a taxonomia vegetal brasileira.</li><li>Publicações e obras de referência em botânica.</li><li>Formação de pesquisadores e contribuição para a memória científica institucional.</li></ul>',
    context: '<p>O Jardim Botânico do Rio de Janeiro preserva informações biográficas e arquivo pessoal. A ligação com Corumbá deve ser descrita como nascimento no território do antigo Mato Grosso.</p>',
    interview: '<p>O arquivo do Jardim Botânico reproduz uma entrevista histórica de Graziela publicada originalmente pela revista Ciência Hoje em 1997. Conferir a transcrição e os direitos antes de reutilizar trechos.</p>',
    questions: '<ul><li>Que perguntas uma botânica faz ao observar uma planta?</li><li>Como herbários preservam conhecimento científico por gerações?</li><li>O que sua trajetória revela sobre as condições de carreira das mulheres na ciência?</li></ul>',
    sources: [
      {
        label: 'Jardim Botânico — biografia e arquivo pessoal',
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
    place: 'Pioneira nascida em Corumbá, antigo Mato Grosso',
    photo: null,
    photoCredit: 'Consultar Arquivo Nacional e confirmar os direitos de reprodução.',
    summary: 'Engenheira civil e urbanista pioneira, com atuação em habitação, planejamento urbano e defesa dos direitos das mulheres.',
    trajectory: '<p>Carmen Velasco Portinho nasceu em Corumbá em 1903, quando a cidade pertencia ao antigo Mato Grosso. Tornou-se uma pioneira da engenharia civil e do urbanismo brasileiros.</p><p>Corumbá pertence atualmente a Mato Grosso do Sul. Usar a referência ao antigo Mato Grosso quando se tratar de sua origem histórica.</p>',
    research: '<p>Como engenharia, urbanismo e políticas de habitação podem transformar as cidades? Como projetos e decisões de planeamento influenciam a vida cotidiana e o acesso aos espaços públicos?</p>',
    contributions: '<ul><li>Pioneirismo na engenharia civil e no urbanismo.</li><li>Atuação relacionada a projetos de habitação e planejamento urbano.</li><li>Defesa dos direitos das mulheres e ampliação da presença feminina em áreas técnicas.</li></ul><p>Detalhar projetos específicos com documentação histórica e fontes institucionais.</p>',
    context: '<p>O seu percurso permite relacionar ciência aplicada, desenho urbano e condições de vida. Para imagens de obras e documentos, registar autor, data, acervo e condição de uso.</p>',
    interview: '<p>O protótipo reúne referências biográficas e de arquivo, mas não declara uma entrevista audiovisual própria confirmada. Procurar relatos históricos, testemunhos e documentos em acervos institucionais.</p>',
    questions: '<ul><li>Que problema urbano cada projeto procurava resolver?</li><li>Que barreiras enfrentavam as mulheres na engenharia de sua época?</li><li>Como o urbanismo pode melhorar a vida cotidiana?</li></ul>',
    sources: [
      {
        label: 'CAU/BR — Carmen Portinho e o urbanismo',
        url: 'https://caubr.gov.br/aprovado-pl-que-declara-carmen-velasco-portinho-patronesse-do-urbanismo/',
        type: 'Biografia institucional'
      },
      {
        label: 'Arquivo Nacional — portal oficial',
        url: 'https://www.gov.br/arquivonacional/',
        type: 'Acervo histórico'
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
    photoCredit: 'Usar imagens do projeto somente após confirmar autorização, especialmente para menores de idade.',
    summary: 'Iniciativa de incentivo à participação de meninas e mulheres em computação e tecnologia, ligada à UFMT e ao programa da Sociedade Brasileira de Computação.',
    trajectory: '<p>O projeto regional foi criado em 2015 e promove atividades educativas e de divulgação de mulheres na computação. O site institucional apresenta objetivos e publicações.</p><p>O projeto é uma iniciativa, não uma pessoa individual. Confirmar com a coordenação os dados mais recentes de alcance e atividades.</p>',
    research: '<p>Como fazer com que meninas conheçam carreiras em computação? Que oficinas e referências profissionais ajudam a ampliar horizontes? Como acompanhar a participação das alunas ao longo do tempo?</p>',
    contributions: '<ul><li>Atividades educativas e oficinas de computação.</li><li>Divulgação de trajetórias de mulheres na tecnologia.</li><li>Produção de materiais educativos, incluindo a cartilha Mulheres na Computação.</li></ul><p>O projeto informou mais de mil pessoas atendidas em 13 municípios; confirmar se esses valores seguem atualizados.</p>',
    context: '<p>As iniciativas podem ser mostradas com oficinas, computadores, mentoras, participantes e materiais educativos. Obter autorizações de imagem e de responsáveis legais quando necessário.</p>',
    interview: '<p>O site oficial reúne informações, atividades e publicações. A coordenação pode ajudar a identificar mentoras, docentes e participantes dispostas a conceder entrevistas.</p>',
    questions: '<ul><li>O que faz uma menina imaginar que pode trabalhar com computação?</li><li>Que oficina teve maior significado para as participantes?</li><li>Como avaliar a continuidade do interesse pela área?</li></ul>',
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
        label: 'Publicações',
        url: 'https://meninasdigitaismt.ic.ufmt.br/index.php/publicacoes/',
        type: 'Materiais educativos'
      }
    ]
  }
];

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

const categories = ['Todas', ...new Set(profiles.map((profile) => profile.category))];

let activeCategory = 'Todas';
let selectedProfile = profiles[0];
let activeTab = 'trajectory';
let activeNode = 'research';

function fallbackPortrait(profile, classes = '') {
  return `<div class="portrait-fallback ${classes}" aria-label="Retrato oficial ainda não adicionado">${escapeHTML(profile.initials)}</div>`;
}

function portraitHTML(profile, card = false) {
  const classes = card ? 'h-full w-full text-3xl' : 'h-full w-full text-4xl';

  if (!profile.photo) {
    return fallbackPortrait(profile, classes);
  }

  return `<img
    src="${escapeHTML(profile.photo)}"
    alt="Fotografia de ${escapeHTML(profile.name)}"
    loading="lazy"
    class="h-full w-full object-cover"
    data-fallback="${escapeHTML(profile.id)}">`;
}

function renderFilters() {
  $('#filter-buttons').innerHTML = categories.map((category) => `
    <button
      type="button"
      class="filter-chip rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-600 transition hover:border-plum/40"
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

    const content =
      `${profile.name} ${profile.areas} ${profile.place} ${profile.summary}`
        .toLocaleLowerCase('pt-BR');

    return matchesCategory && (!query || content.includes(query));
  });
}

function renderCards() {
  const visibleProfiles = getVisibleProfiles();

  if (!visibleProfiles.length) {
    $('#profile-grid').innerHTML = `
      <div class="col-span-full rounded-2xl border border-slate-200 bg-white p-8 text-center text-sm text-slate-500">
        Nenhuma trajetória encontrada. Experimente outra pesquisa ou filtro.
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
        ${portraitHTML(profile, true)}
        <span class="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wide text-plum shadow-sm">
          ${escapeHTML(profile.category)}
        </span>
      </div>
      <div class="p-5">
        <p class="text-[11px] font-bold leading-5 text-slate-500">${escapeHTML(profile.place)}</p>
        <h3 class="mt-1 text-lg font-black leading-snug text-ink">${escapeHTML(profile.name)}</h3>
        <p class="mt-2 text-xs font-bold leading-5 text-plum">${escapeHTML(profile.areas)}</p>
        <p class="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">${escapeHTML(profile.summary)}</p>
        <span class="mt-4 inline-flex text-sm font-extrabold text-rose">Abrir mapa mental ↗</span>
      </div>
    </button>
  `).join('');

  $$('#profile-grid [data-profile-id]').forEach((button) => {
    button.addEventListener('click', () => selectProfile(button.dataset.profileId, true));
  });

  $$('#profile-grid img[data-fallback]').forEach((img) => {
    img.addEventListener('error', () => {
      const profile = profiles.find((item) => item.id === img.dataset.fallback);
      const fallback = document.createElement('div');

      fallback.className = 'portrait-fallback h-full w-full text-3xl';
      fallback.textContent = profile ? profile.initials : '✳';
      img.replaceWith(fallback);
    }, { once: true });
  });
}

const mapNodeOrder = [
  { id: 'trajectory', label: 'Trajetória', x: 450, y: 58 },
  { id: 'research', label: 'Pesquisa', x: 205, y: 140 },
  { id: 'impact', label: 'Contribuições', x: 695, y: 140 },
  { id: 'context', label: 'Território', x: 205, y: 335 },
  { id: 'archive', label: 'Fontes e relatos', x: 450, y: 412 },
  { id: 'questions', label: 'Perguntas', x: 695, y: 335 }
];

function getNodeContent(profile, nodeId) {
  const nodes = {
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

  return nodes[nodeId] || nodes.research;
}

function splitNodeLabel(label) {
  if (label.length <= 16) return [label];

  const words = label.split(' ');
  const lines = ['', ''];

  words.forEach((word) => {
    const index = lines[0].length + word.length <= 16 ? 0 : 1;
    lines[index] += `${lines[index] ? ' ' : ''}${word}`;
  });

  return lines.filter(Boolean);
}

function renderMindMap() {
  const centerX = 450;
  const centerY = 235;
  let svg = '';

  mapNodeOrder.forEach((node) => {
    svg += `<line class="mind-edge" x1="${centerX}" y1="${centerY}" x2="${node.x}" y2="${node.y}" />`;
  });

  svg += `<circle class="mind-center" cx="${centerX}" cy="${centerY}" r="67"/>`;

  const displayName = selectedProfile.firstName.length > 12
    ? `${selectedProfile.firstName.slice(0, 11)}…`
    : selectedProfile.firstName;

  svg += `<text class="mind-center-text" x="${centerX}" y="${centerY - 7}" font-size="16">${escapeHTML(displayName)}</text>`;
  svg += `<text class="mind-center-text" x="${centerX}" y="${centerY + 17}" font-size="11" opacity=".8">${escapeHTML(selectedProfile.initials)} · PERFIL</text>`;

  mapNodeOrder.forEach((node) => {
    const lines = splitNodeLabel(node.label);
    const y = lines.length === 1 ? node.y + 5 : node.y - 3;

    svg += `<g
      class="mind-node ${node.id === activeNode ? 'selected' : ''}"
      data-map-node="${node.id}"
      role="button"
      tabindex="0"
      aria-label="Ver ${escapeHTML(node.label)}"
      aria-pressed="${node.id === activeNode}">`;

    svg += `<rect class="node-card" x="${node.x - 86}" y="${node.y - 27}" width="172" height="54" rx="17"/>`;

    lines.forEach((line, index) => {
      svg += `<text x="${node.x}" y="${y + index * 18}" text-anchor="middle">${escapeHTML(line)}</text>`;
    });

    svg += '</g>';
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
  const node = getNodeContent(selectedProfile, activeNode);

  $('#map-info-kicker').textContent = `${selectedProfile.shortName} · MAPA MENTAL`;
  $('#map-info-title').textContent = node.title;
  $('#map-info-status').textContent = node.status;
  $('#map-info-body').innerHTML = node.body;

  $('#map-info-links').innerHTML = selectedProfile.sources.slice(0, 2).map((source) => `
    <a
      class="source-link text-xs font-bold"
      href="${escapeHTML(source.url)}"
      target="_blank"
      rel="noopener noreferrer">
      ${escapeHTML(source.label)} ↗
    </a>
  `).join('');
}

function renderProfileHeader() {
  const profile = selectedProfile;

  $('#detail-category').textContent =
    `${profile.category.toLocaleUpperCase('pt-BR')} · ${profile.areas}`;

  $('#detail-name').textContent = profile.name;
  $('#detail-place').textContent = profile.place;
  $('#detail-summary').textContent = profile.summary;
  $('#detail-photo-credit').textContent =
    profile.photoCredit || 'Imagem e crédito a confirmar.';

  const img = $('#detail-photo');
  const fallback = $('#detail-fallback');

  img.classList.add('hidden');
  img.removeAttribute('src');
  fallback.classList.remove('hidden');
  fallback.textContent = profile.initials;

  if (profile.photo) {
    img.onload = () => {
      img.classList.remove('hidden');
      fallback.classList.add('hidden');
    };

    img.onerror = () => {
      img.classList.add('hidden');
      fallback.classList.remove('hidden');
    };

    img.src = profile.photo;
  }

  renderMindMap();
  renderMapInfo();
  renderDetailTab();
}

function renderDetailTab() {
  const profile = selectedProfile;
  const panel = $('#detail-panel');

  if (activeTab === 'trajectory') {
    panel.innerHTML = profile.trajectory;
  } else if (activeTab === 'contributions') {
    panel.innerHTML = profile.contributions;
  } else {
    panel.innerHTML = `
      <h6 class="font-extrabold text-ink">Entrevistas e materiais</h6>
      ${profile.interview}
      <ul class="mt-3 space-y-2">
        ${profile.sources.map((source) => `
          <li>
            <span class="font-bold text-slate-500">${escapeHTML(source.type)}:</span>
            <a class="source-link" target="_blank" rel="noopener noreferrer" href="${escapeHTML(source.url)}">
              ${escapeHTML(source.label)} ↗
            </a>
          </li>
        `).join('')}
      </ul>
      <p class="mt-3 text-xs text-slate-500">
        Um link registado não substitui a verificação integral da fonte nem a confirmação dos direitos de reprodução.
      </p>`;
  }

  $$('.tab-btn').forEach((button) => {
    const isSelected = button.dataset.tab === activeTab;

    button.setAttribute('aria-selected', String(isSelected));
    button.classList.toggle('bg-lilac', isSelected);
  });
}

function selectProfile(profileId, shouldScroll = false) {
  const profile = profiles.find((item) => item.id === profileId);
  if (!profile) return;

  selectedProfile = profile;
  activeNode = 'research';
  activeTab = 'trajectory';

  renderCards();
  renderProfileHeader();

  if (shouldScroll) {
    $('#perfil-detalhe').scrollIntoView({
      behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
      block: 'start'
    });
  }
}

// Pesquisa, filtros e abas.
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

// Área beta: bloqueio visual de demonstração, não autenticação segura.
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
  $(selector).addEventListener('click', openBeta);
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

    $('#beta-feedback').textContent =
      'Acesso de demonstração liberado neste navegador.';

    $('#beta-feedback').className =
      'mt-2 min-h-5 text-xs font-bold text-emerald-700';
  } else {
    betaContent.classList.add('hidden');

    $('#beta-feedback').textContent =
      'Senha incorreta. Confira beta-ciencia-2026.';

    $('#beta-feedback').className =
      'mt-2 min-h-5 text-xs font-bold text-rose-700';
  }
});

$('#model-file').addEventListener('change', (event) => {
  const file = event.target.files && event.target.files[0];
  if (!file) return;

  if (!file.name.toLowerCase().endsWith('.glb')) {
    $('#model-feedback').textContent =
      'Escolha um arquivo .glb. Este protótipo não processa outros formatos.';

    event.target.value = '';
    return;
  }

  if (objectURL) URL.revokeObjectURL(objectURL);

  objectURL = URL.createObjectURL(file);
  $('#beta-model').src = objectURL;

  $('#model-feedback').textContent =
    `Modelo local carregado: ${file.name}. O arquivo não foi enviado a nenhum servidor.`;
});

window.addEventListener('beforeunload', () => {
  if (objectURL) URL.revokeObjectURL(objectURL);
});

// Inicialização do site.
renderFilters();
renderCards();
renderProfileHeader();
