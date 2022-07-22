import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { Learn } from '../Learn/Learn';

export const RoutedApp = (): JSX.Element => (
  <Routes>
    <Route path="/" element={<Learn/>}/>
    <Route path="/learn" element={<Learn/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
  </Routes>
);

export function Home() {
  return (
    <div data-testid={'home'}>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/learn">Learn</Link></li>
        </ul>
      </nav>
    </div>
  );
}

function About() {
  return (
    <div data-testid={'about'}>
      <main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>
      <nav>
        <Link to="/home">Home</Link>
      </nav>
    </div>
  );
}