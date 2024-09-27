import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Randomizer from './Randomizer';
import RulesPage from './RulesPage';
import CardPage from './CardPage'; // Import the new CardPage component
import DCgenerator from './DCgenerator'; // Import the new DCgenerator component
import RecommendedKingdoms from './RecommendedKingdoms';
import './App.css';

const App = () => {
    return (
        <Router>
            <div className="App">
                <nav className="centered-nav">
                    <ul>
                        <li>
                            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
                                Dominion Randomizer
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/recommended-kingdom" className={({ isActive }) => (isActive ? 'active' : '')}>
                                Recommended Kingdom
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/rules" className={({ isActive }) => (isActive ? 'active' : '')}>
                                Rules
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/cards" className={({ isActive }) => (isActive ? 'active' : '')}>
                                Cards
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dc-generator" className={({ isActive }) => (isActive ? 'active' : '')}>
                                DC Generator
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={<Randomizer />} />
                    <Route path="/recommended-kingdom" element={<RecommendedKingdoms />} />
                    <Route path="/rules" element={<RulesPage />} />
                    <Route path="/cards" element={<CardPage />} />
                    <Route path="/dc-generator" element={<DCgenerator />} /> {/* New route for DCgenerator */}
                </Routes>
            </div>
        </Router>
    );
};

export default App;