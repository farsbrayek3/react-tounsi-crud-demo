# React Tounsi CRUD Demo 🇹🇳

> CRUD (Create, Read, Update, Delete) demo application using React, Zustand, Axios, JSON Server, react-hook-form, and Zod, with a Tunisian flavor!

## 📝 Description

This project is a simple yet complete CRUD app, built for learning and sharing how to do modern React CRUD with a fake backend (JSON Server) and a fun Tunisian twist!  
It features:

- React (Vite) frontend
- Zustand for global state (user)
- Forms with [react-hook-form](https://react-hook-form.com/) & [Zod](https://zod.dev/) validation
- API calls with [Axios](https://axios-http.com/)
- Fake REST API with [JSON Server](https://github.com/typicode/json-server)
- Tailwind CSS for styling
- UI and comments in Tunisian/French

---

## 🚀 Quick Start

### 1. Clone the repo

```bash
git clone https://github.com/farsbrayek3/react-tounsi-crud-demo.git
cd react-tounsi-crud-demo
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the fake backend (JSON Server)

```bash
npx json-server --watch db.json --port 3001
```

### 4. Start the React app

```bash
npm run dev
```

---

## 📂 Project Structure

```
src/
  pages/
    CrudAppDocumentation.jsx   # Main CRUD & documentation page
    Home.jsx                  # Home page with Zustand user state
  store/
    userStore.js              # Zustand store
  db.json                     # Fake database for JSON Server
  ...
```

---

## ℹ️ Features

- Add, edit, delete users with live update
- Increment "vue" counter for users
- Form validation in real time
- Global user state with Zustand
- Tunisian French comments and UI texts

---

## 🤝 Contributions

Pull Requests, Issues, and forks are welcome!  
If you want to add features, improve code, or Tunisianize the UI even more, go ahead!

---

## 🟢 Credits

- Fares Brayek (faresbrayek3)
- React, Zustand, Axios, JSON Server, react-hook-form, Zod
- Tunisian dev community 🇹🇳

---

## 📜 License

MIT

---

**Barcha succès! 🐪**
