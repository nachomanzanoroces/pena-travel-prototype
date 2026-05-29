/* ==========================================================================
   PEÑAS VIAJES OVIEDO - CORE JAVASCRIPT APPLICATION ENGINE
   ========================================================================== */

// --- 1. MOCK DATABASE INITIALIZATION ---

// Real Oviedo 2025 Season - Away matches in Spanish First Division
const MATCHES_2025 = [
  {
    id: "match-01",
    opponent: "Real Madrid",
    stadium: "Santiago Bernabéu",
    city: "Madrid",
    airportCode: "MAD",
    distance: 450,
    hasFlight: true,
    date: "15 Ene 2025",
    baseTicketPrice: 30
  },
  {
    id: "match-02",
    opponent: "Athletic Club",
    stadium: "San Mamés",
    city: "Bilbao",
    airportCode: "BIO",
    distance: 270,
    hasFlight: false,
    date: "28 Ene 2025",
    baseTicketPrice: 25
  },
  {
    id: "match-03",
    opponent: "FC Barcelona",
    stadium: "Spotify Camp Nou",
    city: "Barcelona",
    airportCode: "BCN",
    distance: 900,
    hasFlight: true,
    date: "12 Feb 2025",
    baseTicketPrice: 35
  },
  {
    id: "match-04",
    opponent: "Celta de Vigo",
    stadium: "Abanca-Balaídos",
    city: "Vigo",
    airportCode: "VGO",
    distance: 350,
    hasFlight: false,
    date: "02 Mar 2025",
    baseTicketPrice: 25
  },
  {
    id: "match-05",
    opponent: "Sevilla FC",
    stadium: "Ramón Sánchez-Pizjuán",
    city: "Sevilla",
    airportCode: "SVQ",
    distance: 800,
    hasFlight: true,
    date: "16 Mar 2025",
    baseTicketPrice: 30
  },
  {
    id: "match-06",
    opponent: "Real Sociedad",
    stadium: "Reale Arena",
    city: "San Sebastián",
    airportCode: "EAS",
    distance: 370,
    hasFlight: false,
    date: "06 Abr 2025",
    baseTicketPrice: 25
  },
  {
    id: "match-07",
    opponent: "Atletico de Madrid",
    stadium: "Cívitas Metropolitano",
    city: "Madrid",
    airportCode: "MAD",
    distance: 450,
    hasFlight: true,
    date: "20 Abr 2025",
    baseTicketPrice: 30
  },
  {
    id: "match-08",
    opponent: "Valencia CF",
    stadium: "Mestalla",
    city: "Valencia",
    airportCode: "VLC",
    distance: 850,
    hasFlight: true,
    date: "04 May 2025",
    baseTicketPrice: 30
  },
  {
    id: "match-09",
    opponent: "Real Betis",
    stadium: "Benito Villamarín",
    city: "Sevilla",
    airportCode: "SVQ",
    distance: 800,
    hasFlight: true,
    date: "18 May 2025",
    baseTicketPrice: 30
  },
  {
    id: "match-10",
    opponent: "CA Osasuna",
    stadium: "El Sadar",
    city: "Pamplona",
    airportCode: "PNA",
    distance: 410,
    hasFlight: false, // Distance > 400 km but no direct connection from OVD
    date: "01 Jun 2025",
    baseTicketPrice: 25
  },
  {
    id: "match-11",
    opponent: "RCD Mallorca",
    stadium: "Son Moix",
    city: "Palma de Mallorca",
    airportCode: "PMI",
    distance: 1000,
    hasFlight: true, // Island, Direct Flight available
    date: "14 Sep 2025",
    baseTicketPrice: 35
  },
  {
    id: "match-12",
    opponent: "UD Las Palmas",
    stadium: "Estadio de Gran Canaria",
    city: "Las Palmas",
    airportCode: "LPA",
    distance: 2000,
    hasFlight: true, // Island, Direct Flight available
    date: "28 Sep 2025",
    baseTicketPrice: 35
  },
  {
    id: "match-13",
    opponent: "Girona FC",
    stadium: "Montilivi",
    city: "Girona",
    airportCode: "GRO",
    distance: 950,
    hasFlight: true, // Flight available (BCN or Girona seasonal)
    date: "05 Oct 2025",
    baseTicketPrice: 30
  },
  {
    id: "match-14",
    opponent: "Villarreal CF",
    stadium: "Estadio de la Cerámica",
    city: "Villarreal",
    airportCode: "CDT",
    distance: 800,
    hasFlight: false, // Must fly to VLC, direct is No
    date: "26 Oct 2025",
    baseTicketPrice: 30
  },
  {
    id: "match-15",
    opponent: "Getafe CF",
    stadium: "Coliseum",
    city: "Getafe",
    airportCode: "MAD",
    distance: 460,
    hasFlight: true, // Flight to MAD
    date: "09 Nov 2025",
    baseTicketPrice: 30
  },
  {
    id: "match-16",
    opponent: "CD Leganés",
    stadium: "Butarque",
    city: "Leganés",
    airportCode: "MAD",
    distance: 460,
    hasFlight: true,
    date: "23 Nov 2025",
    baseTicketPrice: 30
  },
  {
    id: "match-17",
    opponent: "Rayo Vallecano",
    stadium: "Estadio de Vallecas",
    city: "Madrid",
    airportCode: "MAD",
    distance: 450,
    hasFlight: true,
    date: "07 Dic 2025",
    baseTicketPrice: 30
  },
  {
    id: "match-18",
    opponent: "RCD Espanyol",
    stadium: "Stage Front Stadium",
    city: "Barcelona",
    airportCode: "BCN",
    distance: 900,
    hasFlight: true,
    date: "14 Dic 2025",
    baseTicketPrice: 30
  },
  {
    id: "match-19",
    opponent: "Real Valladolid",
    stadium: "José Zorrilla",
    city: "Valladolid",
    airportCode: "VLL",
    distance: 250,
    hasFlight: false,
    date: "21 Dic 2025",
    baseTicketPrice: 25
  }
];

// Initial default registered Peñas (fan clubs)
const DEFAULT_PEÑAS = [
  {
    id: "pena-vetusta",
    name: "Peña Azul Vetusta",
    avatar: "V",
    year: 2003,
    sede: "Sidrería El Desarme, Oviedo",
    president: "Nacho Fernández",
    members: 150,
    email: "vetusta@oviedistas.com"
  },
  {
    id: "pena-grado",
    name: "Peña Azul Grado",
    avatar: "G",
    year: 1995,
    sede: "Restaurante El Patio, Grado",
    president: "Carmen Peláez",
    members: 85,
    email: "grado@oviedistas.com"
  },
  {
    id: "pena-desarme",
    name: "Peña El Desarme",
    avatar: "D",
    year: 2012,
    sede: "Cafetería La Catedral, Oviedo",
    president: "Javier Prendes",
    members: 110,
    email: "desarme@oviedistas.com"
  }
];

// Initial active ticket listings for socios to see immediately
const DEFAULT_LISTINGS = [
  {
    id: "list-01",
    penaId: "pena-vetusta",
    matchId: "match-03", // FC Barcelona
    totalTickets: 40,
    sold: 12,
    price: 35,
    deadline: "2025-02-05",
    instructions: "Recogida de entradas de forma física en la sede a partir del 8 de Febrero portando carnet de peñista."
  },
  {
    id: "list-02",
    penaId: "pena-desarme",
    matchId: "match-01", // Real Madrid
    totalTickets: 25,
    sold: 5,
    price: 30,
    deadline: "2025-01-10",
    instructions: "Se enviarán en formato digital PDF el lunes previo al encuentro al correo electrónico del socio."
  },
  {
    id: "list-03",
    penaId: "pena-grado",
    matchId: "match-02", // Athletic Club
    totalTickets: 30,
    sold: 28,
    price: 25,
    deadline: "2025-01-20",
    instructions: "Las plazas para el viaje en autobús de la peña se reservan por separado contactando directamente con Carmen."
  }
];


// --- 2. THE APPLICATION CORE CLASS ---

class PenaTravelApp {
  constructor() {
    this.peñas = [];
    this.listings = [];
    this.bookings = [];
    this.agencyRequests = [];
    this.currentTab = "dashboard";
    this.selectedTransportMode = "car"; // default
    this.selectedAvatarChar = "V";      // default new peña avatar character
    this.activeListingForPayment = null; // listing object user is purchasing
  }

  /**
   * Initializes application state and sets up event listeners.
   */
  init() {
    // 1. Load data from LocalStorage or seed defaults
    this.loadState();

    // 2. Setup navigation tab event listeners
    const tabs = document.querySelectorAll(".nav-tab");
    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        this.switchTab(tab.dataset.tab);
      });
    });

    // 3. Setup filters & listeners for calendar
    const searchInput = document.getElementById("calendarSearchInput");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        this.searchCalendar(e.target.value);
      });
    }

    // 4. Setup new Peña avatar selection
    const avatarOptions = document.querySelectorAll(".avatar-option");
    avatarOptions.forEach(opt => {
      opt.addEventListener("click", () => {
        avatarOptions.forEach(o => o.classList.remove("selected"));
        opt.classList.add("selected");
        this.selectedAvatarChar = opt.dataset.char;
      });
    });

    // 5. Pre-populate selectors in forms
    this.populateSelectors();

    // 6. Draw the default views
    this.renderDashboard();
    this.renderCalendarTable(MATCHES_2025);
    this.renderShopListings();
    this.renderBookings();
    this.calculateDynamicBudget();
    this.renderAgencyRequestsLog();
  }

  /**
   * Syncs arrays with local storage.
   */
  loadState() {
    // Peñas
    if (localStorage.getItem("OVIEDO_PEÑAS")) {
      this.peñas = JSON.parse(localStorage.getItem("OVIEDO_PEÑAS"));
    } else {
      this.peñas = [...DEFAULT_PEÑAS];
      localStorage.setItem("OVIEDO_PEÑAS", JSON.stringify(this.peñas));
    }

    // Listings
    if (localStorage.getItem("OVIEDO_LISTINGS")) {
      this.listings = JSON.parse(localStorage.getItem("OVIEDO_LISTINGS"));
    } else {
      this.listings = [...DEFAULT_LISTINGS];
      localStorage.setItem("OVIEDO_LISTINGS", JSON.stringify(this.listings));
    }

    // Bookings (purchased tickets by socios)
    if (localStorage.getItem("OVIEDO_BOOKINGS")) {
      this.bookings = JSON.parse(localStorage.getItem("OVIEDO_BOOKINGS"));
    } else {
      this.bookings = [];
      localStorage.setItem("OVIEDO_BOOKINGS", JSON.stringify(this.bookings));
    }

    // Agency quote requests
    if (localStorage.getItem("OVIEDO_AGENCY_REQUESTS")) {
      this.agencyRequests = JSON.parse(localStorage.getItem("OVIEDO_AGENCY_REQUESTS"));
    } else {
      this.agencyRequests = [];
      localStorage.setItem("OVIEDO_AGENCY_REQUESTS", JSON.stringify(this.agencyRequests));
    }
  }

  saveState(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  /**
   * Toggles the visible section of the Single Page Application.
   */
  switchTab(tabId) {
    this.currentTab = tabId;
    
    // Toggle active classes in Header Tabs
    const tabs = document.querySelectorAll(".nav-tab");
    tabs.forEach(tab => {
      if (tab.dataset.tab === tabId) {
        tab.classList.add("active");
      } else {
        tab.classList.remove("active");
      }
    });

    // Toggle active view blocks
    const views = document.querySelectorAll(".view-section");
    views.forEach(view => {
      if (view.id === `${tabId}View`) {
        view.classList.add("active");
      } else {
        view.classList.remove("active");
      }
    });

    // Re-draw or reset elements depending on tab
    if (tabId === "dashboard") {
      this.renderDashboard();
    } else if (tabId === "shop") {
      this.renderShopListings();
      this.renderBookings();
    } else if (tabId === "agency") {
      this.calculateDynamicBudget();
      this.renderAgencyRequestsLog();
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /**
   * Fills form dropdowns dynamically.
   */
  populateSelectors() {
    // 1. Publish Selector (Peña)
    const pubPeñaSel = document.getElementById("publishPeñaSelector");
    const shopPeñaFil = document.getElementById("shopPeñaFilter");
    
    if (pubPeñaSel) {
      pubPeñaSel.innerHTML = this.peñas.map(p => `<option value="${p.id}">${p.name} (Pres: ${p.president})</option>`).join("");
    }

    if (shopPeñaFil) {
      shopPeñaFil.innerHTML = `<option value="all">Todas las Peñas</option>` + 
        this.peñas.map(p => `<option value="${p.id}">${p.name}</option>`).join("");
    }

    // 2. Publish Selector (Match)
    const pubMatchSel = document.getElementById("publishMatchSelector");
    if (pubMatchSel) {
      pubMatchSel.innerHTML = MATCHES_2025.map(m => `<option value="${m.id}">${m.opponent} (${m.city}) - ${m.date}</option>`).join("");
      this.updatePublishPriceSuggest();
    }

    // 3. Budget Selector (Match)
    const budMatchSel = document.getElementById("budgetMatchSelector");
    if (budMatchSel) {
      budMatchSel.innerHTML = MATCHES_2025.map(m => `<option value="${m.id}">${m.opponent} (${m.city}) — ${m.distance} km</option>`).join("");
    }
  }

  /**
   * Updates suggested ticket price based on selected match in publishing form.
   */
  updatePublishPriceSuggest() {
    const selector = document.getElementById("publishMatchSelector");
    const priceInput = document.getElementById("publishTicketPrice");
    if (selector && priceInput) {
      const matchId = selector.value;
      const match = MATCHES_2025.find(m => m.id === matchId);
      if (match) {
        priceInput.value = match.baseTicketPrice;
      }
    }
  }

  // ==========================================================================
  // --- RENDERING ROUTINES ---
  // ==========================================================================

  /**
   * Draws stats and the next away match highlights card in the Dashboard.
   */
  renderDashboard() {
    // Count stats
    document.getElementById("statPeñasCount").textContent = this.peñas.length;
    
    const activeTicketsCount = this.listings.reduce((sum, item) => sum + (item.totalTickets - item.sold), 0);
    document.getElementById("statActiveTickets").textContent = activeTicketsCount;

    const totalSales = this.bookings.reduce((sum, item) => sum + item.ticketsBought, 0);
    document.getElementById("statPurchases").textContent = totalSales;

    // Find next away trip based on current simulated date (e.g. today is late May 2026, let's just pick the first available match in MATCHES_2025 for prototype purposes)
    const nextMatch = MATCHES_2025[0]; // Real Madrid
    document.getElementById("statNextDistance").textContent = `${nextMatch.distance}`;

    // Fill Next Outing Card
    document.getElementById("nextMatchOpponentLogo").textContent = nextMatch.opponent.substring(0, 2).toUpperCase();
    document.getElementById("nextMatchOpponentName").textContent = nextMatch.opponent;
    document.getElementById("nextMatchLocation").textContent = `${nextMatch.stadium}, ${nextMatch.city}`;
    document.getElementById("nextMatchDate").textContent = nextMatch.date;
    
    const flightStatusStr = nextMatch.hasFlight 
      ? `Conexión Aérea Directa desde Asturias` 
      : `Sin conexión directa de vuelo`;
    document.getElementById("nextMatchTravelSummary").textContent = `${nextMatch.distance} km / ${flightStatusStr}`;

    // Recommend Transport mode based on rules
    let recommendationStr = "";
    if (nextMatch.distance >= 400 && nextMatch.hasFlight) {
      recommendationStr = "✈ Vuelo Directo desde OVD Altamente Recomendado";
    } else if (nextMatch.distance < 400) {
      recommendationStr = "🚗 Coche Compartido / Autobús de la Peña (Cercano)";
    } else {
      recommendationStr = "🚌 Autobús de la Peña / Vehículo Propio (Sin vuelo directo)";
    }
    document.getElementById("nextMatchRecom").textContent = recommendationStr;

    // Button event binds
    document.getElementById("btnNextTripBudget").onclick = () => {
      const budgetSel = document.getElementById("budgetMatchSelector");
      if (budgetSel) {
        budgetSel.value = nextMatch.id;
      }
      this.switchTab("agency");
    };

    document.getElementById("btnNextTripTickets").onclick = () => {
      this.switchTab("shop");
    };

    // Draw active Peñas list on side panel
    const penaListContainer = document.getElementById("dashboardActivePeñasList");
    if (penaListContainer) {
      penaListContainer.innerHTML = this.peñas.map(p => `
        <div class="pena-list-item">
          <div class="pena-info">
            <div class="pena-avatar">${p.avatar}</div>
            <div class="pena-details">
              <h4>${p.name}</h4>
              <span>Fundada: ${p.year} • Pres: ${p.president}</span>
            </div>
          </div>
          <span class="badge badge-blue">${p.members} Socios</span>
        </div>
      `).join("");
    }
  }

  /**
   * Draws the calendar table.
   */
  renderCalendarTable(matches) {
    const tbody = document.getElementById("calendarTableBody");
    if (!tbody) return;

    if (matches.length === 0) {
      tbody.innerHTML = `<tr><td colspan="6" style="text-align: center; color: var(--color-text-muted); padding: 2rem;">No se encontraron desplazamientos con este filtro.</td></tr>`;
      return;
    }

    tbody.innerHTML = matches.map(m => {
      // Direct Flight badge
      let flightBadge = "";
      if (m.distance >= 400 && m.hasFlight) {
        flightBadge = `<span class="badge badge-gold" title="Distancia mayor de 400km y vuelo directo Asturias - ${m.city}">✈ Vuelo Recomendado</span>`;
      } else if (m.distance >= 400 && !m.hasFlight) {
        flightBadge = `<span class="badge badge-warning" title="Distancia mayor de 400km pero sin vuelos directos desde OVD">🚌 Autobús Largo</span>`;
      } else {
        flightBadge = `<span class="badge badge-blue">🚗 Desplazamiento Corto</span>`;
      }

      return `
        <tr>
          <td>
            <div class="calendar-opponent">
              <div class="calendar-team-logo">${m.opponent.substring(0,2).toUpperCase()}</div>
              <div>
                <strong>${m.opponent}</strong>
              </div>
            </div>
          </td>
          <td>
            <div class="calendar-date">
              <strong>${m.date}</strong>
              <span>Liga 2025</span>
            </div>
          </td>
          <td>${m.stadium} (${m.city})</td>
          <td><strong>${m.distance} km</strong></td>
          <td>${flightBadge}</td>
          <td>
            <button class="btn btn-secondary" style="font-size: 0.8rem; padding: 0.4rem 0.8rem;" onclick="app.preLoadBudgetMatch('${m.id}')">
              Planear Viaje
            </button>
          </td>
        </tr>
      `;
    }).join("");
  }

  /**
   * Triggered when clicking "Planear Viaje" in Calendar table.
   */
  preLoadBudgetMatch(matchId) {
    const selectElement = document.getElementById("budgetMatchSelector");
    if (selectElement) {
      selectElement.value = matchId;
    }
    this.switchTab("agency");
  }

  /**
   * Filters calendar table based on badges.
   */
  filterCalendar(filterType) {
    // Highlight active filter button
    const buttons = ["btnFilterAll", "btnFilterNear", "btnFilterFar", "btnFilterFlight"];
    buttons.forEach(btnId => {
      const btn = document.getElementById(btnId);
      if (btn) btn.classList.remove("active");
    });

    const activeBtnMap = {
      'all': 'btnFilterAll',
      'near': 'btnFilterNear',
      'far': 'btnFilterFar',
      'flight': 'btnFilterFlight'
    };
    
    const activeBtn = document.getElementById(activeBtnMap[filterType]);
    if (activeBtn) activeBtn.classList.add("active");

    // Filter logic
    let filtered = [];
    if (filterType === "all") {
      filtered = MATCHES_2025;
    } else if (filterType === "near") {
      filtered = MATCHES_2025.filter(m => m.distance < 400);
    } else if (filterType === "far") {
      filtered = MATCHES_2025.filter(m => m.distance >= 400);
    } else if (filterType === "flight") {
      filtered = MATCHES_2025.filter(m => m.distance >= 400 && m.hasFlight);
    }

    this.renderCalendarTable(filtered);
  }

  /**
   * Filter table by user text.
   */
  searchCalendar(query) {
    const q = query.toLowerCase().trim();
    if (!q) {
      this.filterCalendar('all');
      return;
    }

    const filtered = MATCHES_2025.filter(m => 
      m.opponent.toLowerCase().includes(q) || 
      m.city.toLowerCase().includes(q) || 
      m.stadium.toLowerCase().includes(q)
    );

    this.renderCalendarTable(filtered);
  }

  // ==========================================================================
  // --- FORM SUBMISSIONS & LOGIC ---
  // ==========================================================================

  /**
   * Peña Official registry.
   */
  handlePeñaRegistration(event) {
    event.preventDefault();

    const name = document.getElementById("peñaName").value.trim();
    const year = parseInt(document.getElementById("peñaYear").value);
    const sede = document.getElementById("peñaSede").value.trim();
    const president = document.getElementById("peñaPresident").value.trim();
    const members = parseInt(document.getElementById("peñaMembers").value);
    const email = document.getElementById("peñaEmail").value.trim();
    
    // Create new object
    const newPeña = {
      id: "pena-" + Date.now(),
      name,
      avatar: this.selectedAvatarChar,
      year,
      sede,
      president,
      members,
      email
    };

    // Save to list
    this.peñas.push(newPeña);
    this.saveState("OVIEDO_PEÑAS", this.peñas);

    // Reset Form
    document.getElementById("newPeñaForm").reset();
    
    // Trigger selector updates
    this.populateSelectors();

    // Notify user with brief dynamic modal / alert
    alert(`¡Peña "${name}" registrada con éxito!\nYa puedes publicar entradas y calcular presupuestos.`);

    // Switch view
    this.switchTab("dashboard");
  }

  /**
   * Peña publishes available match tickets.
   */
  handleTicketPublish(event) {
    event.preventDefault();

    const penaId = document.getElementById("publishPeñaSelector").value;
    const matchId = document.getElementById("publishMatchSelector").value;
    const totalTickets = parseInt(document.getElementById("publishTicketCount").value);
    const price = parseInt(document.getElementById("publishTicketPrice").value);
    const deadline = document.getElementById("publishDeadline").value;
    const instructions = document.getElementById("publishInstructions").value.trim();

    const newListing = {
      id: "list-" + Date.now(),
      penaId,
      matchId,
      totalTickets,
      sold: 0,
      price,
      deadline,
      instructions
    };

    this.listings.push(newListing);
    this.saveState("OVIEDO_LISTINGS", this.listings);

    document.getElementById("publishTicketsForm").reset();
    this.updatePublishPriceSuggest();

    alert("¡Entradas publicadas con éxito en el Portal de Socios!");
    this.switchTab("shop");
  }

  /**
   * Renders the ticket listings cards in the Socio portal view.
   */
  renderShopListings() {
    const shopGrid = document.getElementById("shopGrid");
    const filterPenaId = document.getElementById("shopPeñaFilter").value;
    const countBadge = document.getElementById("activeListingsCount");

    if (!shopGrid) return;

    // Filter listings
    let filteredListings = this.listings;
    if (filterPenaId !== "all") {
      filteredListings = this.listings.filter(l => l.penaId === filterPenaId);
    }

    // Update count badge
    countBadge.textContent = `${filteredListings.length} Listados Activos`;

    if (filteredListings.length === 0) {
      shopGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: var(--color-text-muted); background: var(--glass-bg); border-radius: var(--border-radius-md); border: 1px dashed var(--glass-border);">
          <p style="font-size: 1.1rem; margin-bottom: 0.5rem;">No hay asignaciones de entradas publicadas actualmente.</p>
          <small>Elige otra peña en el filtro o publica entradas en la pestaña "Publicar Entradas".</small>
        </div>
      `;
      return;
    }

    shopGrid.innerHTML = filteredListings.map(l => {
      const peña = this.peñas.find(p => p.id === l.penaId) || { name: "Peña Desconocida" };
      const match = MATCHES_2025.find(m => m.id === l.matchId) || { opponent: "Rival", city: "Ciudad", date: "Fecha" };
      const remaining = l.totalTickets - l.sold;
      
      const isSoldOut = remaining <= 0;
      const statusBadge = isSoldOut 
        ? `<span class="badge badge-danger">Agotado</span>` 
        : `<span class="badge badge-success">${remaining} Libres</span>`;

      return `
        <div class="ticket-card">
          <div class="ticket-header">
            <div>
              <h4>${match.opponent}</h4>
              <p>${match.city} • ${match.date}</p>
            </div>
            ${statusBadge}
          </div>
          
          <div class="ticket-details">
            <div class="ticket-detail-row">
              <span>Publicado por:</span>
              <span>${peña.name}</span>
            </div>
            <div class="ticket-detail-row">
              <span>Límite Reserva:</span>
              <span style="color: var(--color-warning);">${l.deadline}</span>
            </div>
            <div class="ticket-detail-row" style="margin-top: 0.5rem; flex-direction: column;">
              <span style="font-size: 0.75rem;">Instrucciones:</span>
              <span style="font-weight: normal; font-size: 0.75rem; color: var(--color-text-muted); line-height: 1.2; margin-top: 0.15rem;">
                ${l.instructions || 'Sin instrucciones especiales.'}
              </span>
            </div>
          </div>

          <div class="ticket-price-box">
            <div class="ticket-price">
              ${l.price} € <span>/ ud.</span>
            </div>
            <button class="btn btn-primary" style="padding: 0.5rem 1rem; font-size: 0.85rem;" 
              ${isSoldOut ? 'disabled' : ''} onclick="app.openPaymentModal('${l.id}')">
              ${isSoldOut ? 'Agotado' : 'Comprar Entrada'}
            </button>
          </div>
        </div>
      `;
    }).join("");
  }

  // ==========================================================================
  // --- MOCK CHECKOUT PAYMENT TRANSACTION ---
  // ==========================================================================

  openPaymentModal(listingId) {
    const listing = this.listings.find(l => l.id === listingId);
    if (!listing) return;

    this.activeListingForPayment = listing;
    
    // Set totals default
    document.getElementById("paymentTicketCount").value = 1;
    this.updatePaymentTotals();

    // Show modal
    document.getElementById("paymentModal").style.display = "flex";

    // Setup input formats
    this.setPaymentMethod("card");
    this.resetCreditCardVisualText();
  }

  closePaymentModal() {
    document.getElementById("paymentModal").style.display = "none";
    this.activeListingForPayment = null;
  }

  updatePaymentTotals() {
    if (!this.activeListingForPayment) return;
    
    const countInput = document.getElementById("paymentTicketCount");
    let count = parseInt(countInput.value);
    
    const remaining = this.activeListingForPayment.totalTickets - this.activeListingForPayment.sold;
    if (count > remaining) {
      alert(`Lo sentimos, solo quedan ${remaining} entradas disponibles.`);
      count = remaining;
      countInput.value = remaining;
    }
    if (count < 1 || isNaN(count)) {
      count = 1;
      countInput.value = 1;
    }

    const total = count * this.activeListingForPayment.price;
    document.getElementById("paymentTotalDisplay").textContent = `${total.toFixed(2)} €`;
  }

  setPaymentMethod(method) {
    const btnCard = document.getElementById("btnPayCard");
    const btnBizum = document.getElementById("btnPayBizum");
    const cardSection = document.getElementById("cardPaymentDetails");
    const bizumSection = document.getElementById("bizumPaymentDetails");

    // Inputs
    const cardInputs = cardSection.querySelectorAll("input");
    const bizumInputs = bizumSection.querySelectorAll("input");

    if (method === "card") {
      btnCard.classList.add("active");
      btnBizum.classList.remove("active");
      cardSection.style.display = "block";
      bizumSection.style.display = "none";
      
      // Enable card validation, disable bizum
      cardInputs.forEach(i => i.required = true);
      bizumInputs.forEach(i => i.required = false);
    } else {
      btnCard.classList.remove("active");
      btnBizum.classList.add("active");
      cardSection.style.display = "none";
      bizumSection.style.display = "block";
      
      // Disable card validation, enable bizum phone
      cardInputs.forEach(i => i.required = false);
      bizumInputs.forEach(i => i.required = true);
    }
  }

  // --- Visual Card Live Sync ---
  resetCreditCardVisualText() {
    document.getElementById("visualCardNumDisplay").textContent = "•••• •••• •••• ••••";
    document.getElementById("visualCardHolderDisplay").textContent = "NOMBRE DEL SOCIO";
    document.getElementById("visualCardExpDisplay").textContent = "MM/AA";
    document.getElementById("billingName").value = "";
    document.getElementById("cardNum").value = "";
    document.getElementById("cardExpiry").value = "";
    document.getElementById("cardCvv").value = "";
  }

  updateVisualCardHolder(name) {
    document.getElementById("visualCardHolderDisplay").textContent = name.toUpperCase() || "NOMBRE DEL SOCIO";
  }

  updateVisualCardExp(exp) {
    document.getElementById("visualCardExpDisplay").textContent = exp || "MM/AA";
  }

  formatAndShowCardNumber(input) {
    let value = input.value.replace(/\D/g, '');
    let formatted = "";
    
    for (let i = 0; i < value.length; i++) {
      if (i > 0 && i % 4 === 0) formatted += " ";
      formatted += value[i];
    }
    
    input.value = formatted;
    document.getElementById("visualCardNumDisplay").textContent = formatted || "•••• •••• •••• ••••";
  }

  /**
   * Core checkout processing simulation.
   */
  processPayment(event) {
    event.preventDefault();

    if (!this.activeListingForPayment) return;

    const socioName = document.getElementById("billingName").value.trim();
    const socioId = document.getElementById("billingMemberId").value.trim();
    const count = parseInt(document.getElementById("paymentTicketCount").value);
    
    const listing = this.listings.find(l => l.id === this.activeListingForPayment.id);
    const match = MATCHES_2025.find(m => m.id === listing.matchId);
    const peña = this.peñas.find(p => p.id === listing.penaId);

    // 1. Subtract tickets from inventory
    listing.sold += count;
    this.saveState("OVIEDO_LISTINGS", this.listings);

    // 2. Generate new booking record
    const totalCost = count * listing.price;
    const bookingCode = "RO-" + Math.floor(1000 + Math.random() * 9000);
    
    const newBooking = {
      code: bookingCode,
      socioName,
      socioId,
      penaName: peña.name,
      matchOpponent: match.opponent,
      matchDate: match.date,
      ticketsBought: count,
      totalPaid: totalCost,
      destinationCode: match.airportCode,
      destinationCity: match.city,
      distance: match.distance,
      hasFlight: match.hasFlight,
      timestamp: new Date().toLocaleString("es-ES")
    };

    this.bookings.push(newBooking);
    this.saveState("OVIEDO_BOOKINGS", this.bookings);

    // 3. Reset and Close Modal
    this.closePaymentModal();

    // 4. Update listings shop view
    this.renderShopListings();
    this.renderBookings();

    // 5. Open dynamic Voucher Boarding Pass
    this.openVoucherModal(newBooking);
  }

  /**
   * Pre-fills and shows the dynamic digital Boarding Pass style ticket receipt.
   */
  openVoucherModal(booking) {
    document.getElementById("boardingVoucherCode").textContent = booking.code;
    document.getElementById("boardingDestCode").textContent = booking.destinationCode;
    document.getElementById("boardingDestCity").textContent = booking.destinationCity;
    document.getElementById("boardingSocioName").textContent = booking.socioName;
    document.getElementById("boardingPeñaName").textContent = booking.penaName;
    document.getElementById("boardingMatchName").textContent = `${booking.matchOpponent} vs Real Oviedo`;
    document.getElementById("boardingMatchDate").textContent = booking.matchDate;
    document.getElementById("boardingTicketCount").textContent = `${booking.ticketsBought} Entrada${booking.ticketsBought > 1 ? 's' : ''}`;

    // Travel Recommendation calculation
    let advice = "";
    if (booking.distance >= 400 && booking.hasFlight) {
      advice = "✈ Vuelo Directo";
      document.getElementById("boardingPassIcon").textContent = "✈";
    } else if (booking.distance < 400) {
      advice = "🚗 Coche / Bus";
      document.getElementById("boardingPassIcon").textContent = "🚗";
    } else {
      advice = "🚌 Autobús Largo";
      document.getElementById("boardingPassIcon").textContent = "🚌";
    }
    document.getElementById("boardingTravelRecom").textContent = advice;

    // Show voucher modal
    document.getElementById("voucherModal").style.display = "flex";
  }

  closeVoucherModal() {
    document.getElementById("voucherModal").style.display = "none";
  }

  /**
   * Renders Purchased ticket transactions inside Socio View.
   */
  renderBookings() {
    const tbody = document.getElementById("bookingsTableBody");
    if (!tbody) return;

    if (this.bookings.length === 0) {
      tbody.innerHTML = `<tr><td colspan="7" style="text-align: center; color: var(--color-text-muted); padding: 1.5rem;">Aún no has adquirido ninguna entrada en este dispositivo.</td></tr>`;
      return;
    }

    tbody.innerHTML = this.bookings.map(b => `
      <tr>
        <td><strong style="color: var(--color-accent);">${b.code}</strong></td>
        <td>
          <div style="display:flex; flex-direction:column;">
            <span>${b.socioName}</span>
            <span style="font-size:0.75rem; color:var(--color-text-muted);">Socio ID: ${b.socioId}</span>
          </div>
        </td>
        <td>${b.penaName}</td>
        <td>
          <div style="display:flex; flex-direction:column;">
            <strong>${b.matchOpponent}</strong>
            <span style="font-size:0.75rem; color:var(--color-text-muted);">${b.matchDate}</span>
          </div>
        </td>
        <td>${b.ticketsBought} ud.</td>
        <td><strong>${b.totalPaid} €</strong></td>
        <td>
          <button class="btn btn-secondary" style="font-size: 0.75rem; padding: 0.3rem 0.6rem;" onclick="app.rePrintBookingVoucher('${b.code}')">
            Ver Voucher
          </button>
        </td>
      </tr>
    `).join("");
  }

  /**
   * Allows Reprinting an already bought ticket boarding pass.
   */
  rePrintBookingVoucher(code) {
    const booking = this.bookings.find(b => b.code === code);
    if (booking) {
      this.openVoucherModal(booking);
    }
  }

  // ==========================================================================
  // --- TRAVEL AGENCY CALCULATOR LOGIC (OVIEDO FLIGHT CONNECTION RULES) ---
  // ==========================================================================

  setTransportMode(mode) {
    this.selectedTransportMode = mode;
    
    // Toggle active buttons
    document.getElementById("btnTransportCar").classList.remove("active");
    document.getElementById("btnTransportBus").classList.remove("active");
    document.getElementById("btnTransportPlane").classList.remove("active");
    
    const activeBtnMap = {
      'car': 'btnTransportCar',
      'bus': 'btnTransportBus',
      'plane': 'btnTransportPlane'
    };
    
    document.getElementById(activeBtnMap[mode]).classList.add("active");
    
    this.calculateDynamicBudget();
  }

  /**
   * Core logic calculating transport budgets applying the Oviedo Rules.
   */
  calculateDynamicBudget() {
    const matchId = document.getElementById("budgetMatchSelector").value;
    const travelers = parseInt(document.getElementById("budgetTravelers").value) || 4;
    const includeHotel = document.getElementById("budgetIncludeHotel").checked;
    
    const match = MATCHES_2025.find(m => m.id === matchId);
    if (!match) return;

    // 1. Evaluate Oviedo Airport Direct Connection & 400km Flight rules
    const banner = document.getElementById("flightBanner");
    const planeBtn = document.getElementById("btnTransportPlane");
    let isFlightEligible = false;

    if (match.distance >= 400 && match.hasFlight) {
      isFlightEligible = true;
      if (banner) {
        banner.className = "flight-eligibility-banner active";
        banner.innerHTML = `
          <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
          </svg>
          <div>
            <strong>✈ ¡Vuelo Directo Asturias (OVD) Habilitado!</strong>
            <p>Este desplazamiento supera los 400 km (${match.distance} km) y existe una ruta aérea directa operada en el Aeropuerto de Asturias hacia ${match.city}. ¡Es el transporte recomendado!</p>
          </div>
        `;
      }
      if (planeBtn) planeBtn.disabled = false;
    } else {
      isFlightEligible = false;
      let warningText = "";
      if (match.distance < 400) {
        warningText = `Este viaje es corto (${match.distance} km). No existen vuelos directos desde Oviedo/Asturias por estar por debajo del umbral de 400 km. Autobús o Coche son las opciones ideales.`;
      } else {
        warningText = `Aunque supera los 400 km (${match.distance} km), **no hay conexión directa** regular desde el Aeropuerto de Asturias (OVD) a ${match.city} en esta fecha. Vuelo comercial ordinario no recomendado.`;
      }

      if (banner) {
        banner.className = "flight-eligibility-banner";
        banner.innerHTML = `
          <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
          </svg>
          <div>
            <strong>⚠️ Avión No Recomendado / Sin Vuelo Directo</strong>
            <p>${warningText}</p>
          </div>
        `;
      }
      
      // If user had plane selected but it is not eligible, auto-fallback to car to prevent error
      if (this.selectedTransportMode === "plane") {
        this.selectedTransportMode = "car";
        document.getElementById("btnTransportCar").classList.add("active");
        document.getElementById("btnTransportPlane").classList.remove("active");
      }
      
      if (planeBtn) {
        planeBtn.disabled = true;
      }
    }

    // 2. Perform Cost Calculations per traveler based on distances
    const hotelCost = includeHotel ? 45 : 0;

    // A. Shared Car Cost
    // Fuel: 0.15€ per km, divided by travelers, plus tolls (estimated 10€ flat)
    const carFuelAndTolls = (match.distance * 0.15) + 10;
    const carTotal = (carFuelAndTolls / travelers) + hotelCost;

    // B. Bus cost
    // Flat 25€ ticket + (distance * 0.04€ per km) per traveler
    const busTotal = 25 + (match.distance * 0.04) + hotelCost;

    // C. Plane cost (only calculated if flight exists and >= 400km, otherwise marked as N/A)
    let planeTotal = 0;
    if (isFlightEligible) {
      // 65€ base fare + (distance * 0.10€ per km) + 20€ airport taxes
      planeTotal = 65 + (match.distance * 0.10) + 20 + hotelCost;
    }

    // 3. Render Comparison Rows
    const widget = document.getElementById("comparisonWidget");
    if (widget) {
      
      // Highlight the "best" option
      let recCar = false;
      let recBus = false;
      let recPlane = false;

      if (isFlightEligible && this.selectedTransportMode === "plane") {
        recPlane = true;
      } else if (match.distance < 400 && this.selectedTransportMode === "car") {
        recCar = true;
      } else if (this.selectedTransportMode === "bus") {
        recBus = true;
      } else {
        // Fallback default recommendation highlight
        if (isFlightEligible) recPlane = true;
        else if (match.distance < 400) recCar = true;
        else recBus = true;
      }

      widget.innerHTML = `
        <!-- CAR COMPARISON -->
        <div class="compare-row ${recCar ? 'recommended' : ''}">
          <div class="compare-left">
            <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"></path>
              <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H11.05a2.5 2.5 0 014.9 0H17a1 1 0 001-1V9.414a1 1 0 00-.293-.707l-3.414-3.414A1 1 0 0013.586 5H3zm9 3.5a.5.5 0 01.5-.5h2a.5.5 0 01.5.5V9a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5V7.5zM4 8a1 1 0 011-1h4a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V8z"></path>
            </svg>
          </div>
          <div class="compare-right">
            <div class="compare-details">
              <h4>Coche Compartido</h4>
              <p>Basado en combustible, peajes y dividiendo gastos entre ${travelers} socios.</p>
              ${recCar ? '<span class="badge badge-gold" style="font-size:0.65rem; margin-top:0.25rem;">✔ Recomendado para Cercanos</span>' : ''}
            </div>
            <div class="compare-price-section">
              <div class="compare-price">${carTotal.toFixed(2)} € <span>/ socio</span></div>
              <small style="color:var(--color-text-muted); font-size:0.75rem;">Total coche: ${(carTotal * travelers).toFixed(0)}€</small>
            </div>
          </div>
        </div>

        <!-- BUS COMPARISON -->
        <div class="compare-row ${recBus ? 'recommended' : ''}">
          <div class="compare-left">
            <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 3a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd"></path>
            </svg>
          </div>
          <div class="compare-right">
            <div class="compare-details">
              <h4>Autobús de la Peña</h4>
              <p>Plaza individual en el autocar alquilado por la Federación de Peñas en Oviedo.</p>
              ${recBus ? '<span class="badge badge-blue" style="font-size:0.65rem; margin-top:0.25rem;">✔ Mejor Opción Terrestre Grupal</span>' : ''}
            </div>
            <div class="compare-price-section">
              <div class="compare-price">${busTotal.toFixed(2)} € <span>/ socio</span></div>
              <small style="color:var(--color-text-muted); font-size:0.75rem;">Total plazas: ${(busTotal * travelers).toFixed(0)}€</small>
            </div>
          </div>
        </div>

        <!-- PLANE COMPARISON -->
        <div class="compare-row ${recPlane ? 'recommended' : ''}" style="${!isFlightEligible ? 'opacity: 0.35;' : ''}">
          <div class="compare-left">
            <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
            </svg>
          </div>
          <div class="compare-right">
            <div class="compare-details">
              <h4>Avión (Ruta Directa Asturias OVD)</h4>
              <p>Recomendado si supera los 400 km y hay vuelo regular directo.</p>
              ${recPlane ? '<span class="badge badge-gold" style="font-size:0.65rem; margin-top:0.25rem;">✨ Directo Más Rápido</span>' : ''}
            </div>
            <div class="compare-price-section">
              <div class="compare-price">
                ${isFlightEligible ? `${planeTotal.toFixed(2)} € <span>/ socio</span>` : 'N/D'}
              </div>
              <small style="color:var(--color-text-muted); font-size:0.75rem;">
                ${isFlightEligible ? `Total pasajes: ${(planeTotal * travelers).toFixed(0)}€` : 'Umbral / Vuelo No Apto'}
              </small>
            </div>
          </div>
        </div>
      `;
    }
  }

  /**
   * Mock request transmission to Oviedo Travel agencies.
   */
  sendAgencyBudgetRequest(agencyName) {
    const matchId = document.getElementById("budgetMatchSelector").value;
    const travelers = parseInt(document.getElementById("budgetTravelers").value) || 4;
    const includeHotel = document.getElementById("budgetIncludeHotel").checked;

    const match = MATCHES_2025.find(m => m.id === matchId);
    if (!match) return;

    // Calculate simulated price
    const hotelCost = includeHotel ? 45 : 0;
    let transportCost = 0;
    
    if (this.selectedTransportMode === "car") {
      transportCost = ((match.distance * 0.15) + 10) / travelers;
    } else if (this.selectedTransportMode === "bus") {
      transportCost = 25 + (match.distance * 0.04);
    } else {
      transportCost = 65 + (match.distance * 0.10) + 20;
    }

    const pricePerSocio = transportCost + hotelCost;
    const totalEstimated = pricePerSocio * travelers;

    // Show dynamic progress animation widget
    const progressWidget = document.getElementById("agencyProgressWidget");
    if (progressWidget) progressWidget.style.display = "flex";

    // Dynamic steps manipulation
    const step1 = document.getElementById("step1");
    const step2 = document.getElementById("step2");
    const step3 = document.getElementById("step3");
    const step4 = document.getElementById("step4");
    const statusText = document.getElementById("progressCurrentStatus");

    // Reset steps
    step1.className = "progress-step active";
    step2.className = "progress-step";
    step3.className = "progress-step";
    step4.className = "progress-step";

    statusText.textContent = "Conectando de forma segura con la API local de " + agencyName + "...";

    // Timeline simulation
    setTimeout(() => {
      step1.className = "progress-step done";
      step2.className = "progress-step active";
      statusText.textContent = "Verificando itinerario de peaje y combustible de Oviedo a " + match.city + "...";
      
      setTimeout(() => {
        step2.className = "progress-step done";
        step3.className = "progress-step active";
        statusText.textContent = "Compilando desglose formal del presupuesto de " + travelers + " socios...";

        setTimeout(() => {
          step3.className = "progress-step done";
          step4.className = "progress-step active";
          statusText.textContent = "Registrando cotización de grupo y confirmando recepción...";

          setTimeout(() => {
            step4.className = "progress-step done";
            progressWidget.style.display = "none";
            
            // Record agency request
            const newRequest = {
              timestamp: new Date().toLocaleString("es-ES"),
              agency: agencyName,
              matchOpponent: match.opponent,
              city: match.city,
              travelers,
              mode: this.selectedTransportMode.toUpperCase(),
              estimatedTotal: totalEstimated.toFixed(2)
            };

            this.agencyRequests.unshift(newRequest); // Add to top
            this.saveState("OVIEDO_AGENCY_REQUESTS", this.agencyRequests);

            alert(`¡Solicitud enviada con éxito a ${agencyName}!\nLa agencia enviará la cotización definitiva de autobús/avión a tu correo oficial.`);
            
            this.renderAgencyRequestsLog();
          }, 1000);
        }, 1000);
      }, 1000);
    }, 800);
  }

  /**
   * Renders the local history list of requested agency quotes.
   */
  renderAgencyRequestsLog() {
    const card = document.getElementById("agencyRequestsLogCard");
    const tbody = document.getElementById("agencyRequestsLogBody");
    
    if (!card || !tbody) return;

    if (this.agencyRequests.length === 0) {
      card.style.display = "none";
      return;
    }

    card.style.display = "block";
    tbody.innerHTML = this.agencyRequests.map(r => `
      <tr>
        <td>${r.timestamp}</td>
        <td><strong>${r.agency}</strong></td>
        <td>${r.matchOpponent} (${r.city})</td>
        <td>${r.travelers} socios</td>
        <td>
          <span class="badge ${r.mode === 'PLANE' ? 'badge-gold' : (r.mode === 'BUS' ? 'badge-blue' : 'badge-success')}">
            ${r.mode === 'PLANE' ? '✈ Avión' : (r.mode === 'BUS' ? '🚌 Autobús' : '🚗 Coche')}
          </span>
        </td>
        <td><strong>${r.estimatedTotal} €</strong></td>
        <td><span class="badge badge-warning">En Trámite</span></td>
      </tr>
    `).join("");
  }
}

// --- 3. RUN APPLICATION INITIALIZATION ON WINDOW LOAD ---

let app;
window.addEventListener("DOMContentLoaded", () => {
  app = new PenaTravelApp();
  app.init();
});
