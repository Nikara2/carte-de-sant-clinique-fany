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
      frontPhoto: "https://placehold.co/280x180/1d4ed8/ffffff?text=Recto",
      backPhoto: null,
      createdAt: "2025-11-18T10:24:00Z",
      createdBy: "caissier.issa",
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
  usageTimeline: document.getElementById("usageTimeline"),
  patientForm: document.getElementById("patientForm"),
  patientList: document.getElementById("patientList"),
  patientSearch: document.getElementById("patientSearch"),
  cardForm: document.getElementById("cardForm"),
  cardPatientSelect: document.getElementById("cardPatientSelect"),
  cardList: document.getElementById("cardList"),
  templateSelect: document.getElementById("templateSelect"),
  usageForm: document.getElementById("usageForm"),
  usageTableBody: document.getElementById("usageTableBody"),
  usagePatientSelect: document.getElementById("usagePatientSelect"),
  usageCardSelect: document.getElementById("usageCardSelect"),
  auditTableBody: document.getElementById("auditTableBody"),
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
    });
  });
}

function populateStaticSelects() {
  const insurerSelect = dom.cardForm.elements.insurer;
  insurerSelect.innerHTML =
    '<option value="">Choisir l\'assureur</option>' +
    state.insurers
      .map((ins) => `<option value="${ins.id}">${ins.name}</option>`)
      .join("");

  const planSelect = dom.cardForm.elements.planType;
  planSelect.innerHTML =
    '<option value="">Choisir le plan</option>' +
    state.planTypes.map((plan) => `<option value="${plan}">${plan}</option>`).join("");

  const patientOptions = state.patients
    .map(
      (p) => `<option value="${p.id}">${p.lastName.toUpperCase()} ${p.firstName}</option>`
    )
    .join("");

  dom.cardPatientSelect.innerHTML = `<option value="">Sélectionner</option>${patientOptions}`;
  dom.usagePatientSelect.innerHTML = `<option value="">Sélectionner</option>${patientOptions}`;
}

function filterTemplatesByInsurer(insurerId) {
  const filtered = state.templates.filter((tpl) => tpl.insurerId === insurerId);
  dom.templateSelect.innerHTML =
    '<option value="">Choisir un template</option>' +
    filtered.map((tpl) => `<option value="${tpl.id}">${tpl.name}</option>`).join("");
}

function updateUsageCardOptions(patientId) {
  const cards = state.cards.filter((card) => card.patientId === patientId);
  dom.usageCardSelect.innerHTML =
    '<option value="">Carte du patient</option>' +
    cards
      .map(
        (card) =>
          `<option value="${card.id}">${card.policyNumber} · ${
            state.insurers.find((i) => i.id === card.insurerId)?.name ?? "Assureur"
          }</option>`
      )
      .join("");
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
        return `
        <li class="card-badge">
          <strong>${insurer}</strong>
          <span>${card.policyNumber}</span>
          <small>${patient?.lastName ?? ""} ${patient?.firstName ?? ""}</small>
          <small>Validité : ${card.startDate || "—"} → ${card.endDate || "—"}</small>
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

function renderUsageTable() {
  dom.usageTableBody.innerHTML =
    state.usages
      .map((usage) => {
        const patient = state.patients.find((p) => p.id === usage.patientId);
        const card = state.cards.find((c) => c.id === usage.cardId);
        return `
      <tr>
        <td>${formatDate(usage.createdAt)}</td>
        <td>${patient?.lastName ?? ""} ${patient?.firstName ?? ""}</td>
        <td>${card?.policyNumber ?? ""}</td>
        <td>${usage.user}</td>
        <td>${usage.photo ? `<img src="${usage.photo}" alt="preuve" width="90" />` : "—"}</td>
      </tr>`;
      })
      .join("") || "<tr><td colspan='5'>Aucune utilisation encore.</td></tr>";

  dom.usageTimeline.innerHTML =
    state.usages
      .slice()
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      .map((usage) => {
        const patient = state.patients.find((p) => p.id === usage.patientId);
        return `
        <li>
          <strong>${patient?.lastName ?? ""} ${patient?.firstName ?? ""}</strong>
          <p>Utilisation enregistrée par ${usage.user}</p>
          <small>${formatDate(usage.createdAt)}</small>
        </li>`;
      })
      .join("") || "<p>Pas encore de timeline.</p>";
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

  dom.statCards.textContent = state.cards.length;
  dom.statUsageWeek.textContent = usageWeek;
  dom.statExpired.textContent = expiredCards;
  dom.statAudit.textContent = state.auditLogs.length;

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

function renderAll() {
  populateStaticSelects();
  renderPatients();
  renderCards();
  renderUsageTable();
  renderDashboardStats();
  renderAlerts();
  renderAuditLog();
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

function handlePatientForm(evt) {
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
  evt.target.reset();
  renderAll();
}

async function handleCardForm(evt) {
  evt.preventDefault();
  const data = new FormData(evt.target);
  const insurerId = data.get("insurer");
  if (!insurerId) return;
  const card = {
    id: genId("CARD"),
    patientId: data.get("patientId"),
    insurerId,
    planType: data.get("planType"),
    policyNumber: data.get("policyNumber"),
    startDate: data.get("startDate"),
    endDate: data.get("endDate"),
    templateId: data.get("templateId"),
    frontPhoto: await fileToDataUrl(data.get("frontPhoto")),
    backPhoto: await fileToDataUrl(data.get("backPhoto")),
    createdAt: new Date().toISOString(),
    createdBy: state.currentUser,
  };
  state.cards.push(card);
  pushAudit("CREATION_CARTE", card.id);
  evt.target.reset();
  renderAll();
}

async function handleUsageForm(evt) {
  evt.preventDefault();
  const data = new FormData(evt.target);
  const usage = {
    id: genId("USE"),
    cardId: data.get("cardId"),
    patientId: data.get("patientId"),
    user: state.currentUser,
    photo: await fileToDataUrl(data.get("usagePhoto")),
    createdAt: new Date().toISOString(),
  };
  state.usages.unshift(usage);
  pushAudit("UTILISATION_CARTE", usage.id);
  evt.target.reset();
  renderUsageTable();
  renderDashboardStats();
  renderAlerts();
  renderAuditLog();
}

function bindEvents() {
  dom.patientForm.addEventListener("submit", handlePatientForm);
  dom.patientSearch.addEventListener("input", (evt) => renderPatients(evt.target.value));
  dom.cardForm.elements.insurer.addEventListener("change", (evt) => {
    filterTemplatesByInsurer(evt.target.value);
  });
  dom.cardForm.addEventListener("submit", handleCardForm);
  dom.usagePatientSelect.addEventListener("change", (evt) =>
    updateUsageCardOptions(evt.target.value)
  );
  dom.usageForm.addEventListener("submit", handleUsageForm);
}

initTabs();
renderAll();
bindEvents();
filterTemplatesByInsurer(dom.cardForm.elements.insurer.value);

