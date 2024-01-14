# Cercetări in Știință integrat cu Mendeley

## Despre Proiect

Acest proiect vizează dezvoltarea unei aplicații web care integrează funcționalități legate de cercetare științifică și utilizează serviciile sau API-ul Mendeley. Scopul este de a gestiona și a partaja lucrări de cercetare și pentru a genera bibliografii pentru articolele academice.

## Caracteristici Tehnice

### Backend

- **Tehnologie:** Node.js cu Express.
- **Bază de Date:** MySQL/HeidiSQL.
- **ORM:** Sequelize/TypeORM.
- **Entități:**
  - **Lucrare** (părinte): Informații despre autor, data lansarii, locul unde a fost publicata.
  - **Aplicație Cercetari** (copil): Detalii despre scopul cercetarii.
- **Autentificare:** JWT.

### Frontend

- **Tehnologie:** React.js/Angular 2.0.
- **Tip:** Single Page Application (SPA).

### Integrare Serviciu Extern

- **API Mendeley:** Importul datelor pentru articolele academice.

### Stil și Calitatea Codului

- **Standarde de Codare:** CamelCase, indentare clară.
- **Testare:** Jest/Mocha.
- **Documentație:** Comentarii în cod.

## Structura Git

- **Repository:** GitHub.
- **Branch-uri:** Funcționalități separate.
- **Commit-uri:** Descriptive și regulate.
- **Pull Requests și Code Review:** Pentru menținerea calității.
- **CI/CD:** GitHub Actions/Jenkins.

## Plan de Lucru

1. **Planificare și Design**
2. **Dezvoltare Backend și Frontend**
3. **Integrare cu API-ul Mendeley**
4. **Testare**
5. **Lansare și Mentenanță**
6. **Documentație**

## Livrabile

- **Codul Sursă:** Disponibil pe GitHub.
- **Documentație:** Ghid de utilizare și documentație tehnică.
- **Demo Aplicație:** Versiune live pentru demonstrație.

