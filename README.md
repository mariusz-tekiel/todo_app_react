# React + Vite

Prosta aplikacja ToDo stworzona w React.js z wykorzystaniem Vite.
Pozwala na dodawanie, oznaczanie jako ukończone oraz usuwanie zadań w eleganckim, ciemnym motywie.

🚀 Funkcje

➕ Dodawanie nowych zadań

✅ Oznaczanie zadań jako ukończone (checkbox)

🗑️ Usuwanie pojedynczych zadań

🧹 Usuwanie wszystkich ukończonych jednym kliknięciem

🌙 Nowoczesny ciemny motyw

🛠️ Technologie

React 18+

Vite

CSS (własne style / Tailwind)

📂 Struktura projektu
my-todo-app/
│── node_modules/
│── public/
│    └── vite.svg
│── src/
│── .gitignore
│── eslint.config.js
│── index.html
│── package.json
│── package-lock.json
│── README.md
│── vite.config.js

Instalacja i uruchomienie

Sklonuj repozytorium:
git clone https://github.com/<twoje-konto>/my-todo-app.git
cd my-todo-app

Zainstaluj zależności:
npm install

Uruchom w trybie deweloperskim:
npm run dev

Domyślnie aplikacja będzie dostępna pod adresem:
-> http://localhost:5173

Zbuduj wersję produkcyjną:
npm run build

Funkcjonalnosci:
 Edycja istniejących zadań
 Filtrowanie: wszystkie / aktywne / ukończone
 Zapisywanie zadań w localStorage
 Wielojęzyczność (PL/EN)
 Tryb jasny i ciemny

📜 Licencja
Projekt dostępny na licencji MIT – możesz go używać, modyfikować i udostępniać.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
