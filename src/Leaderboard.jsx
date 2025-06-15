import React, { useState } from 'react';
import './App.css';

// --- SVG Icons ---
const CodeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
);

const McqIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const CoinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="icon-coin" viewBox="0 0 20 20" fill="currentColor">
        <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.414-1.414L11 10.586V6z" clipRule="evenodd" />
        <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm-3.536-5.464a1 1 0 10-1.414 1.414 5 5 0 017.07 0 1 1 0 001.414-1.414 7 7 0 00-9.9-0z" clipRule="evenodd" />
    </svg>
);

const PlusIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="icon-plus" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
    </svg>
);

/**
 * PlayerRow Component: Renders a single player's information.
 */
const PlayerRow = ({ player }) => (
    <div className="player-row">
        <div className="player-rank">#{player.rank}</div>
        <div className="player-initials-container">
            <div className={`player-initials ${player.colorClass}`}>
                {player.initial}
            </div>
        </div>
        <div className="player-info">
            <div className="player-name">{player.name}</div>
            <div className="player-win-rate">Win Rate: {player.winRate}%</div>
        </div>
        <div className="player-stats">
            <div>
                <div className="stat-value">{player.played}</div>
                <div className="stat-label">Played</div>
            </div>
            <div>
                <div className="stat-value wins">{player.wins}</div>
                <div className="stat-label">Wins</div>
            </div>
            <div>
                <div className="stat-value losses">{player.losses}</div>
                <div className="stat-label">Losses</div>
            </div>
        </div>
        <div className="player-coins">
            <CoinIcon />
            <span className="coin-value">{player.coins.toLocaleString()}</span>
        </div>
    </div>
);

/**
 * LeaderboardSection Component: Renders a full leaderboard section.
 */
const LeaderboardSection = ({ title, icon, players }) => (
    <div className="leaderboard-section">
        <div className="leaderboard-header">
            <div className="leaderboard-title-group">
                {icon}
                <h2 className="leaderboard-title">{title}</h2>
            </div>
            <a href="#" className="view-all-link">
                View All Rankings
            </a>
        </div>
        <div className="player-list">
            {players.map(player => <PlayerRow key={player.id} player={player} />)}
        </div>
    </div>
);


/**
 * LeaderboardPage Component: The main view showing leaderboards.
 */
export const LeaderboardPage = ({ codingChampions, mcqMasters, onNavigateToAddPlayer }) => (
    <div className="page-container">
        <header className="page-header">
            <div>
                <h1 className="main-title">Leaderboards</h1>
                <p className="subtitle">Compete with the best and climb to the top!</p>
            </div>
            <button onClick={onNavigateToAddPlayer} className="button primary-button">
                <PlusIcon/>
                Add Player
            </button>
        </header>
        <main className="main-content">
            <LeaderboardSection title="Coding Battle Champions" icon={<CodeIcon />} players={codingChampions} />
            <LeaderboardSection title="MCQ Battle Masters" icon={<McqIcon />} players={mcqMasters} />
        </main>
    </div>
);


export const AddPlayerForm = ({ onAddPlayer, onNavigateBack }) => {
    const [name, setName] = useState('');
    const [leaderboard, setLeaderboard] = useState('coding');
    const [played, setPlayed] = useState('');
    const [wins, setWins] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const playedNum = parseInt(played, 10);
        const winsNum = parseInt(wins, 10);
        if (!name || isNaN(playedNum) || isNaN(winsNum) || winsNum > playedNum) {
            alert('Please fill in all fields correctly. Wins cannot be greater than games played.');
            return;
        }

        const newPlayer = {
            name,
            played: playedNum,
            wins: winsNum,
        };
        
        onAddPlayer(newPlayer, leaderboard);
    };
    
    return (
        <div className="page-container-form">
             <header className="page-header">
                <h1 className="main-title">Add New Player</h1>
                <p className="subtitle">Enter the player's details to add them to a leaderboard.</p>
            </header>
            <div className="form-container">
                <form onSubmit={handleSubmit} className="player-form">
                    <div>
                        <label htmlFor="name" className="form-label">Player Name</label>
                        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required className="form-input"/>
                    </div>
                     <div>
                        <label htmlFor="leaderboard" className="form-label">Leaderboard</label>
                        <select id="leaderboard" value={leaderboard} onChange={(e) => setLeaderboard(e.target.value)} className="form-input">
                            <option value="coding">Coding Battle</option>
                            <option value="mcq">MCQ Battle</option>
                        </select>
                    </div>
                    <div className="form-grid">
                         <div>
                            <label htmlFor="played" className="form-label">Games Played</label>
                            <input type="number" id="played" value={played} onChange={(e) => setPlayed(e.target.value)} required min="0" className="form-input"/>
                        </div>
                        <div>
                            <label htmlFor="wins" className="form-label">Games Won</label>
                            <input type="number" id="wins" value={wins} onChange={(e) => setWins(e.target.value)} required min="0" className="form-input"/>
                        </div>
                    </div>
                    <div className="form-actions">
                         <button type="button" onClick={onNavigateBack} className="button secondary-button">
                            Cancel
                        </button>
                        <button type="submit" className="button primary-button">
                            Add Player
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
