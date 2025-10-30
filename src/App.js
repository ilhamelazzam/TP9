// src/App.js
import React from 'react';
import CompteForm from './components/CompteForm';
import CompteList from './components/CompteList';

function App() {
  return (
    <div className="container py-4">
      <header className="mb-4">
        <h1 className="text-center text-primary">Gestion des Comptes</h1>
        <p className="text-center text-muted mb-0">
          Ajoutez un compte puis visualisez la liste en dessous.
        </p>
      </header>

      <section className="mb-4">
        <CompteForm />
      </section>

      <hr />

      <section className="mb-5">
        <CompteList />
      </section>
    </div>
  );
}

export default App;
