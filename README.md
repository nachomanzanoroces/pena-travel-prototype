# PeñaViajes Oviedo - Web Prototype for Real Oviedo Fan Clubs

A premium Single Page Application (SPA) web prototype designed for Spanish football fan clubs (*peñas*), with a focus on **Real Oviedo's 2025 La Liga away matches**. It enables *peñas* to manage away travel, publish match tickets allocated to their members (*socios*), and request detailed travel budgets from local agencies.

---

## 🚀 Key Features

1. **Away Outings Calendar**: Filterable database of Real Oviedo's 19 away games in 2025, detailing city, stadium, distance, and direct flight availability.
2. **Fan Club Registry**: Custom registry tool to record new *peñas* (tracking president, foundation year, contact, and members).
3. **Ticket Publishing Portal**: Authorized *peña* presidents can publish available guest allocations to the portal.
4. **Member Ticket Shop**: Members (*socios*) can search their *peña*'s allocations, complete simulated secure purchases (via Visa/Bizum), and receive a highly stylized digital boarding-pass ticket voucher with embedded QR codes.
5. **Smart Budget Calculator**: Computes detailed costs per person for Car sharing, Bus rentals, or Flights based on Oviedo-specific travel guidelines:
   - **Plane Option Recommendation**: Activated and highlighted **ONLY** if the destination is $\ge 400\text{ km}$ away from Oviedo **AND** direct flight connections are available from the local Asturias Airport (OVD) (e.g. Madrid, Barcelona, Sevilla, Malaga, Mallorca, etc.).
   - Includes fallback triggers and warning banners when flight thresholds are not met.
6. **Oviedo Travel Agency Connection**: Mock gateway simulating API communication (loading stages) to request official group quotes from local Oviedo agencies (e.g. *AsturViajes*, *Halcón Viajes*), saving requests in a persistent history log.

---

## 📁 Project Structure

All files are structured cleanly in the project directory:

- [index.html](file:///C:/Users/nacho/.gemini/antigravity/scratch/pena-travel-prototype/index.html): Semantic HTML5 layout structure, navigation hubs, inline SVGs, purchase modals, and boarding pass templates.
- [styles.css](file:///C:/Users/nacho/.gemini/antigravity/scratch/pena-travel-prototype/styles.css): Custom CSS styles featuring the Real Oviedo color scheme (deep royal blue, bright gold, white), modern dark-theme gradients, backdrop-blur glassmorphic overlays, card states, checkout layouts, and progress animations.
- [app.js](file:///C:/Users/nacho/.gemini/antigravity/scratch/pena-travel-prototype/app.js): Application engine coordinating data models, state persistence, ticket transactions, interactive card formats, boarding pass voucher generators, and calculation algorithms.

---

## ✈ Smart Flight & Distance Logic (Asturias Airport OVD)

The application applies the following rules:
- **Madrid (Real Madrid / Atletico / Getafe / Leganes / Rayo Vallecano)**: 450 km. Flight Connection: **Yes (OVD to MAD)**.
- **Barcelona (FC Barcelona / RCD Espanyol)**: 900 km. Flight Connection: **Yes (OVD to BCN)**.
- **Sevilla (Sevilla FC / Real Betis)**: 800 km. Flight Connection: **Yes (OVD to SVQ)**.
- **Valencia (Valencia CF)**: 850 km. Flight Connection: **Yes (OVD to VLC)**.
- **Mallorca (RCD Mallorca)**: 1000 km. Flight Connection: **Yes (OVD to PMI)**.
- **Las Palmas (UD Las Palmas)**: 2000 km. Flight Connection: **Yes (OVD to LPA)**.
- **Bilbao / San Sebastian / Vigo / Valladolid / Pamplona**: Distance $< 400\text{ km}$ or no direct flight connection. Flagged as **Plane Unavailable / Not Recommended**; recommends **Coche Compartido / Autobús**.

---

## 💻 Local Testing & Usage

Since the prototype is built with pure, high-performance vanilla web technologies, there are no build steps or dependencies to install. 

### How to Run:
1. Open the [index.html](file:///C:/Users/nacho/.gemini/antigravity/scratch/pena-travel-prototype/index.html) file directly in any modern web browser (Edge, Chrome, Firefox, Safari).
2. Alternatively, run a lightweight static web server in the directory:
   ```bash
   npx http-server ./
   ```
   Or using Python:
   ```bash
   python -m http.server 8000
   ```
   Then open `http://localhost:8000` in your web browser.
