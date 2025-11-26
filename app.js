const state = {
  currentUser: "caissier.nadia",
  patients: [
    {
      id: "PAT-001",
      firstName: "Awa",
      lastName: "Camara",
      birthDate: "1993-04-12",
      gender: "F",
      phone: "+223 66 45 78 90",
      address: "Bamako – ACI 2000",
      createdAt: "2025-11-20T08:12:00Z",
    },
    {
      id: "PAT-002",
      firstName: "Yao",
      lastName: "Koné",
      birthDate: "1987-09-02",
      gender: "M",
      phone: "+223 70 12 55 44",
      address: "Sikasso",
      createdAt: "2025-11-19T15:40:00Z",
    },
  ],
  insurers: [
    { id: "ins-axa", name: "AXA Santé" },
    { id: "ins-cnam", name: "CNAM" },
    { id: "ins-sunu", name: "SUNU Assurances" },
  ],
  planTypes: ["Classique", "Premium", "Entreprise", "Famille"],
  templates: [
    {
      id: "tpl-axa-2025",
      insurerId: "ins-axa",
      name: "Carte standard 2025",
      zones: { numero: "x:12% y:28%", nom: "x:14%", dates: "x:70%" },
    },
    {
      id: "tpl-cnam-classic",
      insurerId: "ins-cnam",
      name: "Modèle violet",
      zones: { numero: "x:10%", nom: "x:32%", dates: "x:60%" },
    },
    {
      id: "tpl-sunu-2024",
      insurerId: "ins-sunu",
      name: "Carte orange 2024",
      zones: { numero: "x:16%", nom: "x:50%", dates: "x:72%" },
    },
  ],
  cards: [
    {
      id: "CARD-001",
      patientId: "PAT-001",
      insurerId: "ins-axa",
      planType: "Premium",
      policyNumber: "AXA-0099-77",
      startDate: "2025-01-01",
      endDate: "2025-12-31",
      templateId: "tpl-axa-2025",
      coverageType: "complete",
      frontPhoto: "https://placehold.co/280x180/0ea5e9/ffffff?text=Recto",
      backPhoto: null,
      createdAt: "2025-11-20T09:00:00Z",
      createdBy: "caissier.nadia",
    },
    {
      id: "CARD-002",
      patientId: "PAT-002",
      insurerId: "ins-cnam",
      planType: "Classique",
      policyNumber: "CNAM-5521",
      startDate: "2024-02-01",
      endDate: "2025-02-01",
      templateId: "tpl-cnam-classic",
      coverageType: "partielle",
      frontPhoto: "https://placehold.co/280x180/1d4ed8/ffffff?text=Recto",
      backPhoto: null,
      createdAt: "2025-11-18T10:24:00Z",
      createdBy: "caissier.issa",
    },
    {
      id: "CARD-003",
      patientId: "PAT-001",
      insurerId: "ins-sunu",
      planType: "Entreprise",
      policyNumber: "SUNU-8842",
      startDate: "2025-06-01",
      endDate: "2026-06-01",
      templateId: "tpl-sunu-2024",
      coverageType: "complete",
      frontPhoto: "https://placehold.co/280x180/10b981/ffffff?text=Recto",
      backPhoto: null,
      createdAt: "2025-11-15T14:20:00Z",
      createdBy: "caissier.nadia",
    },
  ],
  usages: [
    {
      id: "USE-1001",
      cardId: "CARD-001",
      patientId: "PAT-001",
      user: "caissier.nadia",
      photo:
        "https://placehold.co/140x90/facc15/111111?text=Utilisation+24-11",
      createdAt: new Date(new Date().setDate(new Date().getDate() - 1)).toISOString(),
    },
    {
      id: "USE-1002",
      cardId: "CARD-002",
      patientId: "PAT-002",
      user: "caissier.issa",
      photo:
        "https://placehold.co/140x90/f87171/111111?text=Utilisation+18-11",
      createdAt: "2025-11-18T12:30:00Z",
    },
    {
      id: "USE-1003",
      cardId: "CARD-001",
      patientId: "PAT-001",
      user: "caissier.nadia",
      photo: "https://placehold.co/140x90/10b981/ffffff?text=Utilisation+20-11",
      createdAt: new Date(new Date().setDate(new Date().getDate() - 4)).toISOString(),
    },
    {
      id: "USE-1004",
      cardId: "CARD-002",
      patientId: "PAT-002",
      user: "caissier.issa",
      photo: "https://placehold.co/140x90/3b82f6/ffffff?text=Utilisation+15-11",
      createdAt: new Date(new Date().setDate(new Date().getDate() - 9)).toISOString(),
    },
    {
      id: "USE-1005",
      cardId: "CARD-001",
      patientId: "PAT-001",
      user: "caissier.nadia",
      photo: "https://placehold.co/140x90/8b5cf6/ffffff?text=Utilisation+12-11",
      createdAt: new Date(new Date().setDate(new Date().getDate() - 12)).toISOString(),
    },
  ],
  auditLogs: [
    {
      id: "AUD-01",
      timestamp: "2025-11-24T09:01:11Z",
      user: "admin.jules",
      action: "EXPORT",
      target: "Cartes expirées",
      ip: "10.0.12.42",
    },
    {
      id: "AUD-02",
      timestamp: "2025-11-24T08:33:40Z",
      user: "caissier.nadia",
      action: "UTILISATION_CARTE",
      target: "USE-1001",
      ip: "10.0.14.03",
    },
    {
      id: "AUD-03",
      timestamp: "2025-11-23T14:10:05Z",
      user: "caissier.issa",
      action: "CREATION_CARTE",
      target: "CARD-002",
      ip: "10.0.13.22",
    },
  ],
};

const dom = {
  tabs: document.querySelectorAll(".tab-btn"),
  sections: document.querySelectorAll(".module-view"),
  statCards: document.getElementById("statCards"),
  statUsageWeek: document.getElementById("statUsageWeek"),
  statExpired: document.getElementById("statExpired"),
  statAudit: document.getElementById("statAudit"),
  staffMetrics: document.getElementById("staffMetrics"),
  alertList: document.getElementById("alertList"),
  patientList: document.getElementById("patientList"),
  patientSearch: document.getElementById("patientSearch"),
  registerForm: document.getElementById("registerForm"),
  registerInsurerSelect: document.getElementById("registerInsurerSelect"),
  registerPlanSelect: document.getElementById("registerPlanSelect"),
  registerTemplateSelect: document.getElementById("registerTemplateSelect"),
  cardList: document.getElementById("cardList"),
  reportFilters: document.getElementById("reportFilters"),
  reportPeriod: document.getElementById("reportPeriod"),
  reportDateFrom: document.getElementById("reportDateFrom"),
  reportDateTo: document.getElementById("reportDateTo"),
  reportDateFromLabel: document.getElementById("dateFromLabel"),
  reportDateToLabel: document.getElementById("dateToLabel"),
  reportInsurer: document.getElementById("reportInsurer"),
  reportCoverage: document.getElementById("reportCoverage"),
  reportPlanType: document.getElementById("reportPlanType"),
  reportTableBody: document.getElementById("reportTableBody"),
  reportSummary: document.getElementById("reportSummary"),
  reportStats: document.getElementById("reportStats"),
  auditTableBody: document.getElementById("auditTableBody"),
};

let charts = {
  usageChart: null,
  insurerChart: null,
  coverageChart: null,
};

const formatDate = (date) =>
  new Intl.DateTimeFormat("fr-FR", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(date));

const genId = (prefix) => `${prefix}-${Math.random().toString(36).slice(2, 7)}`;

function initTabs() {
  dom.tabs.forEach((btn) => {
    btn.addEventListener("click", () => {
      dom.tabs.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const target = btn.dataset.tab;
      dom.sections.forEach((section) => {
        section.classList.toggle("active", section.dataset.section === target);
      });
      if (target === "dashboard") {
        setTimeout(() => {
          updateCharts();
        }, 100);
      }
    });
  });
}

function animateValue(element, start, end, duration = 1000) {
  const range = end - start;
  const increment = range / (duration / 16);
  let current = start;
  const timer = setInterval(() => {
    current += increment;
    if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
      element.textContent = Math.round(end);
      clearInterval(timer);
    } else {
      element.textContent = Math.round(current);
    }
  }, 16);
}

function populateStaticSelects() {
  const insurerOptions = state.insurers
    .map((ins) => `<option value="${ins.id}">${ins.name}</option>`)
    .join("");

  dom.registerInsurerSelect.innerHTML =
    '<option value="">Choisir l\'assureur</option>' + insurerOptions;

  dom.reportInsurer.innerHTML =
    '<option value="">Tous les assureurs</option>' + insurerOptions;

  const planOptions = state.planTypes
    .map((plan) => `<option value="${plan}">${plan}</option>`)
    .join("");

  dom.registerPlanSelect.innerHTML =
    '<option value="">Choisir le plan</option>' + planOptions;

  dom.reportPlanType.innerHTML =
    '<option value="">Tous les plans</option>' + planOptions;
}

function filterTemplatesByInsurer(insurerId) {
  const filtered = state.templates.filter((tpl) => tpl.insurerId === insurerId);
  dom.registerTemplateSelect.innerHTML =
    '<option value="">Choisir un template</option>' +
    filtered.map((tpl) => `<option value="${tpl.id}">${tpl.name}</option>`).join("");
}

function renderPatients(filter = "") {
  const query = filter.trim().toLowerCase();
  const items = state.patients.filter((p) => {
    if (!query) return true;
    return (
      p.id.toLowerCase().includes(query) ||
      p.lastName.toLowerCase().includes(query) ||
      p.firstName.toLowerCase().includes(query) ||
      p.phone.includes(filter)
    );
  });

  dom.patientList.innerHTML =
    items
      .map(
        (p) => `
      <li class="item-card">
        <div>
          <strong>${p.lastName.toUpperCase()} ${p.firstName}</strong>
          <p>${p.phone}</p>
          <small>ID ${p.id} · Né(e) le ${formatDate(p.birthDate)}</small>
        </div>
        <span class="pill info">${p.gender === "F" ? "F" : "M"}</span>
      </li>`
      )
      .join("") || "<p>Aucun patient pour cette recherche.</p>";
}

function renderCards() {
  dom.cardList.innerHTML =
    state.cards
      .map((card) => {
        const insurer = state.insurers.find((i) => i.id === card.insurerId)?.name ?? "";
        const patient = state.patients.find((p) => p.id === card.patientId);
        const isExpired =
          card.endDate && new Date(card.endDate).getTime() < Date.now();
        const coverageLabel = card.coverageType === "complete" ? "Complète" : "Partielle";
        return `
        <li class="card-badge">
          <strong>${insurer}</strong>
          <span>${card.policyNumber}</span>
          <small>${patient?.lastName ?? ""} ${patient?.firstName ?? ""}</small>
          <small>Validité : ${card.startDate || "—"} → ${card.endDate || "—"}</small>
          <small>Couverture : ${coverageLabel}</small>
          <span class="pill ${isExpired ? "warning" : "success"}">${
          isExpired ? "Expirée" : "Active"
        }</span>
          ${
            card.frontPhoto
              ? `<img src="${card.frontPhoto}" alt="recto carte" class="card-photo" />`
              : ""
          }
        </li>`;
      })
      .join("") || "<p>Aucune carte enregistrée.</p>";
}

function renderDashboardStats() {
  const now = Date.now();
  const sevenDaysAgo = now - 7 * 24 * 60 * 60 * 1000;
  const usageWeek = state.usages.filter(
    (use) => new Date(use.createdAt).getTime() >= sevenDaysAgo
  ).length;
  const expiredCards = state.cards.filter(
    (card) => card.endDate && new Date(card.endDate).getTime() < now
  ).length;

  animateValue(dom.statCards, 0, state.cards.length);
  animateValue(dom.statUsageWeek, 0, usageWeek);
  animateValue(dom.statExpired, 0, expiredCards);
  animateValue(dom.statAudit, 0, state.auditLogs.length);

  const staffUsage = {};
  state.cards.forEach((card) => {
    if (!staffUsage[card.createdBy]) staffUsage[card.createdBy] = { cards: 0, usage: 0 };
    staffUsage[card.createdBy].cards += 1;
  });
  state.usages.forEach((usage) => {
    if (!staffUsage[usage.user]) staffUsage[usage.user] = { cards: 0, usage: 0 };
    staffUsage[usage.user].usage += 1;
  });

  dom.staffMetrics.innerHTML = Object.entries(staffUsage)
    .map(([user, metrics]) => {
      const total = metrics.cards + metrics.usage || 1;
      const usagePct = Math.round((metrics.usage / total) * 100);
      return `
      <div class="metric-item">
        <span>${user}</span>
        <div class="progress-track">
          <div class="progress-fill" style="width:${usagePct}%"></div>
        </div>
        <small>${metrics.cards} cartes · ${metrics.usage} utilisations</small>
      </div>`;
    })
    .join("") || "<p>Pas encore de données.</p>";
}

function updateCharts() {
  updateUsageChart();
  updateInsurerChart();
  updateCoverageChart();
}

function updateUsageChart() {
  const ctx = document.getElementById("usageChart");
  if (!ctx) return;

  const now = Date.now();
  const days = 30;
  const labels = [];
  const data = [];

  for (let i = days - 1; i >= 0; i--) {
    const date = new Date(now - i * 24 * 60 * 60 * 1000);
    labels.push(
      new Intl.DateTimeFormat("fr-FR", { day: "2-digit", month: "2-digit" }).format(date)
    );
    const dayStart = new Date(date.setHours(0, 0, 0, 0)).getTime();
    const dayEnd = dayStart + 24 * 60 * 60 * 1000;
    const count = state.usages.filter((u) => {
      const ts = new Date(u.createdAt).getTime();
      return ts >= dayStart && ts < dayEnd;
    }).length;
    data.push(count);
  }

  if (charts.usageChart) {
    charts.usageChart.destroy();
  }

  charts.usageChart = new Chart(ctx, {
    type: "line",
    data: {
      labels,
      datasets: [
        {
          label: "Utilisations",
          data,
          borderColor: "#0067ff",
          backgroundColor: "rgba(0, 103, 255, 0.1)",
          tension: 0.4,
          fill: true,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: { display: false },
      },
      scales: {
        y: { beginAtZero: true, ticks: { stepSize: 1 } },
      },
    },
  });
}

function updateInsurerChart() {
  const ctx = document.getElementById("insurerChart");
  if (!ctx) return;

  const counts = {};
  state.cards.forEach((card) => {
    const insurer = state.insurers.find((i) => i.id === card.insurerId)?.name ?? "Inconnu";
    counts[insurer] = (counts[insurer] || 0) + 1;
  });

  const labels = Object.keys(counts);
  const data = Object.values(counts);
  const colors = ["#0067ff", "#0d9488", "#f97316", "#3b82f6", "#8b5cf6"];

  if (charts.insurerChart) {
    charts.insurerChart.destroy();
  }

  charts.insurerChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels,
      datasets: [
        {
          data,
          backgroundColor: colors.slice(0, labels.length),
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: { position: "bottom" },
      },
    },
  });
}

function updateCoverageChart() {
  const ctx = document.getElementById("coverageChart");
  if (!ctx) return;

  const complete = state.cards.filter((c) => c.coverageType === "complete").length;
  const partielle = state.cards.filter((c) => c.coverageType === "partielle").length;

  if (charts.coverageChart) {
    charts.coverageChart.destroy();
  }

  charts.coverageChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Couverture complète", "Couverture partielle"],
      datasets: [
        {
          label: "Nombre de patients",
          data: [complete, partielle],
          backgroundColor: ["#0d9488", "#f97316"],
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: { display: false },
      },
      scales: {
        y: { beginAtZero: true, ticks: { stepSize: 1 } },
      },
    },
  });
}

function renderAlerts() {
  const alerts = [];
  const today = Date.now();
  const in30 = today + 30 * 24 * 60 * 60 * 1000;
  state.cards.forEach((card) => {
    if (!card.endDate) return;
    const expiry = new Date(card.endDate).getTime();
    const patient = state.patients.find((p) => p.id === card.patientId);
    if (expiry < today) {
      alerts.push({
        label: "Carte expirée",
        detail: `${patient?.lastName ?? ""} ${patient?.firstName ?? ""} – ${card.policyNumber}`,
      });
    } else if (expiry < in30) {
      alerts.push({
        label: "Expiration < 30 jours",
        detail: `${patient?.lastName ?? ""} ${patient?.firstName ?? ""} – ${formatDate(
          card.endDate
        )}`,
      });
    }
  });

  dom.alertList.innerHTML =
    alerts
      .map(
        (alert) => `
      <li class="alert-item">
        <strong>${alert.label}</strong>
        <span>${alert.detail}</span>
      </li>`
      )
      .join("") || "<p>Aucune alerte.</p>";
}

function renderAuditLog() {
  dom.auditTableBody.innerHTML =
    state.auditLogs
      .map(
        (log) => `
      <tr>
        <td>${formatDate(log.timestamp)}</td>
        <td>${log.user}</td>
        <td>${log.action}</td>
        <td>${log.target}</td>
        <td>${log.ip}</td>
      </tr>`
      )
      .join("") || "<tr><td colspan='5'>Journal vide.</td></tr>";
}

function generateReport(filters) {
  let filteredUsages = [...state.usages];

  const period = parseInt(filters.period) || 30;
  const now = Date.now();
  let startDate, endDate;

  if (filters.period === "custom") {
    startDate = filters.dateFrom ? new Date(filters.dateFrom).getTime() : null;
    endDate = filters.dateTo ? new Date(filters.dateTo).getTime() + 24 * 60 * 60 * 1000 : null;
  } else {
    startDate = now - period * 24 * 60 * 60 * 1000;
    endDate = now;
  }

  filteredUsages = filteredUsages.filter((usage) => {
    const usageTime = new Date(usage.createdAt).getTime();
    if (startDate && usageTime < startDate) return false;
    if (endDate && usageTime >= endDate) return false;
    return true;
  });

  if (filters.insurer) {
    filteredUsages = filteredUsages.filter((usage) => {
      const card = state.cards.find((c) => c.id === usage.cardId);
      return card && card.insurerId === filters.insurer;
    });
  }

  if (filters.coverageType) {
    filteredUsages = filteredUsages.filter((usage) => {
      const card = state.cards.find((c) => c.id === usage.cardId);
      return card && card.coverageType === filters.coverageType;
    });
  }

  if (filters.planType) {
    filteredUsages = filteredUsages.filter((usage) => {
      const card = state.cards.find((c) => c.id === usage.cardId);
      return card && card.planType === filters.planType;
    });
  }

  const uniquePatients = new Set(filteredUsages.map((u) => u.patientId));
  const uniqueCards = new Set(filteredUsages.map((u) => u.cardId));

  dom.reportStats.innerHTML = `
    <div class="stat-card animated">
      <div class="stat-icon">👥</div>
      <p>Patients concernés</p>
      <strong>${uniquePatients.size}</strong>
    </div>
    <div class="stat-card animated">
      <div class="stat-icon">💳</div>
      <p>Cartes utilisées</p>
      <strong>${uniqueCards.size}</strong>
    </div>
    <div class="stat-card animated">
      <div class="stat-icon">📊</div>
      <p>Total utilisations</p>
      <strong>${filteredUsages.length}</strong>
    </div>
  `;

  dom.reportSummary.textContent = `Rapport généré : ${filteredUsages.length} utilisation(s) trouvée(s)`;

  dom.reportTableBody.innerHTML =
    filteredUsages
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      .map((usage) => {
        const patient = state.patients.find((p) => p.id === usage.patientId);
        const card = state.cards.find((c) => c.id === usage.cardId);
        const insurer = state.insurers.find((i) => i.id === card?.insurerId)?.name ?? "—";
        const coverageLabel =
          card?.coverageType === "complete" ? "Complète" : card?.coverageType === "partielle" ? "Partielle" : "—";
        return `
      <tr>
        <td>${formatDate(usage.createdAt)}</td>
        <td>${patient?.lastName ?? ""} ${patient?.firstName ?? ""}</td>
        <td>${insurer}</td>
        <td>${coverageLabel}</td>
        <td>${card?.policyNumber ?? "—"}</td>
        <td>${usage.user}</td>
        <td>${usage.photo ? `<img src="${usage.photo}" alt="preuve" width="90" />` : "—"}</td>
      </tr>`;
      })
      .join("") || "<tr><td colspan='7'>Aucune donnée pour ces filtres.</td></tr>";
}

function renderAll() {
  populateStaticSelects();
  renderPatients();
  renderCards();
  renderDashboardStats();
  renderAlerts();
  renderAuditLog();
  setTimeout(() => {
    updateCharts();
  }, 200);
}

async function fileToDataUrl(file) {
  if (!file) return null;
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.readAsDataURL(file);
  });
}

function pushAudit(action, target) {
  state.auditLogs.unshift({
    id: genId("AUD"),
    timestamp: new Date().toISOString(),
    user: state.currentUser,
    action,
    target,
    ip: "10.0.14.55",
  });
}

async function handleRegisterForm(evt) {
  evt.preventDefault();
  const data = new FormData(evt.target);
  
  const patient = {
    id: `PAT-${String(state.patients.length + 1).padStart(3, "0")}`,
    firstName: data.get("firstName"),
    lastName: data.get("lastName"),
    birthDate: data.get("birthDate"),
    gender: data.get("gender"),
    phone: data.get("phone"),
    address: data.get("address"),
    createdAt: new Date().toISOString(),
  };
  state.patients.push(patient);
  pushAudit("CREATION_PATIENT", patient.id);

  const insurerId = data.get("insurer");
  if (insurerId) {
    const card = {
      id: genId("CARD"),
      patientId: patient.id,
      insurerId,
      planType: data.get("planType"),
      policyNumber: data.get("policyNumber"),
      startDate: data.get("startDate"),
      endDate: data.get("endDate"),
      templateId: data.get("templateId"),
      coverageType: data.get("coverageType"),
      frontPhoto: await fileToDataUrl(data.get("frontPhoto")),
      backPhoto: await fileToDataUrl(data.get("backPhoto")),
      createdAt: new Date().toISOString(),
      createdBy: state.currentUser,
    };
    state.cards.push(card);
    pushAudit("CREATION_CARTE", card.id);
  }

  evt.target.reset();
  renderAll();
}

function bindEvents() {
  dom.patientSearch.addEventListener("input", (evt) => renderPatients(evt.target.value));
  
  dom.registerForm.addEventListener("submit", handleRegisterForm);
  
  dom.registerInsurerSelect.addEventListener("change", (evt) => {
    filterTemplatesByInsurer(evt.target.value);
  });

  dom.reportPeriod.addEventListener("change", (evt) => {
    const isCustom = evt.target.value === "custom";
    dom.reportDateFromLabel.style.display = isCustom ? "block" : "none";
    dom.reportDateToLabel.style.display = isCustom ? "block" : "none";
  });

  dom.reportFilters.addEventListener("submit", (evt) => {
    evt.preventDefault();
    const data = new FormData(evt.target);
    generateReport({
      period: data.get("period"),
      dateFrom: data.get("dateFrom"),
      dateTo: data.get("dateTo"),
      insurer: data.get("insurer"),
      coverageType: data.get("coverageType"),
      planType: data.get("planType"),
    });
  });

  // Générer un rapport par défaut au chargement
  setTimeout(() => {
    if (dom.reportFilters) {
      generateReport({
        period: "30",
        dateFrom: "",
        dateTo: "",
        insurer: "",
        coverageType: "",
        planType: "",
      });
    }
  }, 300);
}

initTabs();
renderAll();
bindEvents();
