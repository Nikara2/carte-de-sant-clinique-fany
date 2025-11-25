# Prototype Front-End — Gestion des Cartes d’Assurance

Ce répertoire contient une maquette interactive (HTML/CSS/JS) pour présenter le futur système de gestion des cartes d’assurance de la Clinique Frany. Aucun backend n’est requis : l’ensemble tourne directement dans le navigateur.

## Contenu

- `index.html` – structure de la maquette et navigation par modules
- `styles.css` – design responsive inspiré d’un tableau de bord moderne
- `app.js` – fausses données, interactions (création patient/carte/utilisation) et calcul des statistiques

## Lancer la démonstration

1. Ouvrir le dossier dans l’explorateur.
2. Double-cliquer sur `index.html`.
3. Utiliser les onglets pour parcourir les modules : Tableau de bord, Patients, Cartes, Utilisations, Audit.

> Astuce : sur mobile/tablette, activer l’appareil photo lorsque le navigateur le propose (les champs fichiers utilisent `capture="environment"`).

## Fonctionnalités incluses

- Formulaires patients/cartes avec validations minimales.
- Template OCR sélectionné automatiquement selon l’assureur.
- Timeline des utilisations avec photo et caissier responsable.
- Alertes (cartes expirées / expiration < 30 jours).
- Journal d’audit simulé (non modifiable via l’interface).

Cette base peut être branchée ultérieurement sur une API REST sécurisée lorsque le backend sera prêt.

