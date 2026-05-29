# Security Policy for PeñaViajes Oviedo

We take the security of our community and the fan clubs (*peñas*) very seriously. This document outlines our policy regarding security updates and how to report vulnerabilities securely when publishing this codebase to GitHub.

---

## Supported Versions

Only the latest version of the prototype is actively supported for security updates:

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |
| < 1.0.0 | :x:                |

---

## Reporting a Vulnerability

**Please do not report security vulnerabilities via public GitHub issues.** 

If you discover a security vulnerability in this prototype (such as potential local storage leaks, input validation issues, or server script exposures), please report it securely:

1. Send an email to the official security contact of the Federation of Peñas (e.g., `seguridad@peñashipoviedo.com`).
2. Provide a detailed description of the vulnerability, including step-by-step instructions to reproduce it (proof of concept).
3. We will acknowledge receipt of your report within 48 hours and work with you to coordinate a secure patch release.

---

## Secure Implementation Highlights in This Prototype

This prototype is built from the ground up with secure practices:
* **Zero Hardcoded Secrets**: All data models and API behaviors are mocked client-side or use relative local server paths. No API keys, credentials, or personal database connection strings exist in the repository.
* **No Database Exposures**: Utilizes standard, isolated browser-native `localStorage` for data persistence, ensuring that user data remains private to their local browser sandboxes.
* **Dynamic Python Host Binding**: The local host script (`run_server.py`) binds strictly to a dynamic port on `localhost` (127.0.0.1) and prevents external network exposure unless explicitly configured.
* **Pure Client-Side Processing**: Credit card checkouts and Bizum transitions are strictly visual simulations and do not transmit payment parameters or real credentials over the internet.
