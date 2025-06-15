import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [activeTab, setActiveTab] = useState('coding');

  const codingBattleData = [
    {
      rank: 1,
      username: 'CodeMaster',
      initials: 'CM',
      winRate: '79%',
      played: 156,
      wins: 124,
      losses: 32,
      coins: 3420,
      trophy: '🏆'
    },
    {
      rank: 2,
      username: 'AlgoExpert',
      initials: 'AE',
      winRate: '76%',
      played: 142,
      wins: 108,
      losses: 34,
      coins: 2980,
      trophy: '🏆'
    },
    {
      rank: 3,
      username: 'DevNinja',
      initials: 'DN',
      winRate: '74%',
      played: 128,
      wins: 95,
      losses: 33,
      coins: 2650,
      trophy: '🏆'
    },
    {
      rank: 4,
      username: 'CodeWarrior',
      initials: 'CW',
      winRate: '73%',
      played: 98,
      wins: 72,
      losses: 26,
      coins: 2100,
      trophy: '🏆'
    },
    {
      rank: 5,
      username: 'You',
      initials: 'YU',
      winRate: '67%',
      played: 42,
      wins: 28,
      losses: 14,
      coins: 1250,
      trophy: '🏆',
      isCurrentUser: true
    }
  ];

  const mcqBattleData = [
    {
      rank: 1,
      username: 'QuizMaster',
      initials: 'QM',
      winRate: '84%',
      played: 234,
      wins: 198,
      losses: 36,
      coins: 4200,
      trophy: '🏆'
    },
    {
      rank: 2,
      username: 'BrainBox',
      initials: 'BB',
      winRate: '83%',
      played: 210,
      wins: 175,
      losses: 35,
      coins: 3850,
      trophy: '🏆'
    },
    {
      rank: 3,
      username: 'ThinkFast',
      initials: 'TF',
      winRate: '80%',
      played: 189,
      wins: 152,
      losses: 37,
      coins: 3300,
      trophy: '🏆'
    },
    {
      rank: 4,
      username: 'LogicLord',
      initials: 'LL',
      winRate: '78%',
      played: 165,
      wins: 128,
      losses: 37,
      coins: 2800,
      trophy: '🏆'
    }
  ];

  return (
    <div className="app-container">
      {/* Header - No section styling */}
      <div className="header">
        <h1>Leaderboards</h1>
        <p>Compete with the best and climb to the top!</p>
      </div>

      {/* Tab Navigation - No section styling */}
      <div className="tab-navigation">
        <button 
          className={`tab ${activeTab === 'coding' ? 'active' : ''}`}
          onClick={() => setActiveTab('coding')}
        >
          <span className="tab-icon">⚔️</span>
          Coding Battles
        </button>
        <button 
          className={`tab ${activeTab === 'mcq' ? 'active' : ''}`}
          onClick={() => setActiveTab('mcq')}
        >
          <span className="tab-icon">🏆</span>
          MCQ Battles
        </button>
      </div>

      {/* Coding Battle Section - With section styling */}
      {activeTab === 'coding' && (
        <div className="battle-section">
          <div className="section-header">
            <span className="section-icon">⚔️</span>
            <h2>Coding Battle Champions</h2>
          </div>
          <div className="leaderboard-list">
            {codingBattleData.map((player, index) => (
              <div 
                key={index} 
                className={`player-row ${player.isCurrentUser ? 'current-user' : ''}`}
              >
                <div className="rank-section">
                  <span className="trophy">{player.trophy}</span>
                  <span className="rank">#{player.rank}</span>
                  <div className="avatar">
                    <span className="initials">{player.initials}</span>
                  </div>
                </div>

                <div className="player-info">
                  <div className="username">
                    {player.username}
                    {player.isCurrentUser && <span className="you-badge">You</span>}
                  </div>
                  <div className="win-rate">Win Rate: {player.winRate}</div>
                </div>

                <div className="stats">
                  <div className="stat">
                    <div className="stat-icon played">👥</div>
                    <div className="stat-value played">{player.played}</div>
                    <div className="stat-label">Played</div>
                  </div>
                  <div className="stat">
                    <div className="stat-icon wins">🏆</div>
                    <div className="stat-value wins">{player.wins}</div>
                    <div className="stat-label">Wins</div>
                  </div>
                  <div className="stat">
                    <div className="stat-icon losses">⚔️</div>
                    <div className="stat-value losses">{player.losses}</div>
                    <div className="stat-label">Losses</div>
                  </div>
                  <div className="stat">
                    <div className="stat-icon coins">🪙</div>
                    <div className="stat-value coins">{player.coins}</div>
                    <div className="stat-label">Coins</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* MCQ Battle Section - With section styling */}
      {activeTab === 'mcq' && (
        <div className="battle-section">
          <div className="section-header">
            <span className="section-icon">🏆</span>
            <h2>MCQ Battle Masters</h2>
          </div>
          <div className="leaderboard-list">
            {mcqBattleData.map((player, index) => (
              <div 
                key={index} 
                className={`player-row ${player.isCurrentUser ? 'current-user' : ''}`}
              >
                <div className="rank-section">
                  <span className="trophy">{player.trophy}</span>
                  <span className="rank">#{player.rank}</span>
                  <div className="avatar">
                    <span className="initials">{player.initials}</span>
                  </div>
                </div>

                <div className="player-info">
                  <div className="username">
                    {player.username}
                    {player.isCurrentUser && <span className="you-badge">You</span>}
                  </div>
                  <div className="win-rate">Win Rate: {player.winRate}</div>
                </div>

                <div className="stats">
                  <div className="stat">
                    <div className="stat-icon played">👥</div>
                    <div className="stat-value played">{player.played}</div>
                    <div className="stat-label">Played</div>
                  </div>
                  <div className="stat">
                    <div className="stat-icon wins">🏆</div>
                    <div className="stat-value wins">{player.wins}</div>
                    <div className="stat-label">Wins</div>
                  </div>
                  <div className="stat">
                    <div className="stat-icon losses">⚔️</div>
                    <div className="stat-value losses">{player.losses}</div>
                    <div className="stat-label">Losses</div>
                  </div>
                  <div className="stat">
                    <div className="stat-icon coins">🪙</div>
                    <div className="stat-value coins">{player.coins}</div>
                    <div className="stat-label">Coins</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* View All Button - No section styling */}
      <div className="view-all">
        <button className="view-all-btn">
          <span className="view-all-icon">⚙️</span>
          View All Rankings
        </button>
      </div>
    </div>
  );
};

export default App;