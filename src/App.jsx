import React, { useState, useMemo } from 'react';
import { LeaderboardPage, AddPlayerForm } from './Leaderboard';
import './App.css';

const initialCodingChampions = [
  { id: 1, rank: 1, initial: 'CM', name: 'CodeMaster', winRate: 79, played: 156, wins: 124, losses: 32, coins: 3420, colorClass: 'color-blue' },
  { id: 2, rank: 2, initial: 'AE', name: 'AlgoExpert', winRate: 76, played: 142, wins: 108, losses: 34, coins: 2980, colorClass: 'color-green' },
  { id: 3, rank: 3, initial: 'DN', name: 'DevNinja', winRate: 74, played: 128, wins: 95, losses: 33, coins: 2650, colorClass: 'color-purple' },
];

const initialMcqMasters = [
  { id: 1, rank: 1, initial: 'QM', name: 'QuizMaster', winRate: 85, played: 234, wins: 198, losses: 36, coins: 4200, colorClass: 'color-indigo' },
  { id: 2, rank: 2, initial: 'BB', name: 'BrainBox', winRate: 83, played: 210, wins: 175, losses: 35, coins: 3850, colorClass: 'color-pink' },
];

export default function App() {
    const [view, setView] = useState('leaderboard'); // 'leaderboard' or 'form'
    const [codingChampions, setCodingChampions] = useState(initialCodingChampions);
    const [mcqMasters, setMcqMasters] = useState(initialMcqMasters);
    
  
    const processPlayerList = (list) => {
        return list
            .sort((a, b) => b.coins - a.coins) // Sort by coins descending
            .map((player, index) => ({ ...player, rank: index + 1 })); // Re-assign rank
    };

    const sortedCodingChampions = useMemo(() => processPlayerList(codingChampions), [codingChampions]);
    const sortedMcqMasters = useMemo(() => processPlayerList(mcqMasters), [mcqMasters]);

    const handleAddPlayer = (newPlayerData, leaderboardType) => {
        const { name, played, wins } = newPlayerData;
        const losses = played - wins;
        const winRate = played > 0 ? Math.round((wins / played) * 100) : 0;
       
        const coins = wins * 20 + losses * 5; 
        const initial = name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0,2);
        const colors = ['color-red', 'color-yellow', 'color-cyan', 'color-lime', 'color-fuchsia'];
        const colorClass = colors[Math.floor(Math.random() * colors.length)];

        const player = {
            id: Date.now(), 
            name,
            played,
            wins,
            losses,
            winRate,
            coins,
            initial,
            colorClass,
        };

        if (leaderboardType === 'coding') {
            setCodingChampions(prev => [...prev, player]);
        } else {
            setMcqMasters(prev => [...prev, player]);
        }

        setView('leaderboard'); // Switch back to leaderboard view after adding
    };
    
    return (
        <div className="app-container">
            {view === 'leaderboard' ? (
                <LeaderboardPage
                    codingChampions={sortedCodingChampions}
                    mcqMasters={sortedMcqMasters}
                    onNavigateToAddPlayer={() => setView('form')}
                />
            ) : (
                <AddPlayerForm
                    onAddPlayer={handleAddPlayer}
                    onNavigateBack={() => setView('leaderboard')}
                />
            )}
        </div>
    );
}
