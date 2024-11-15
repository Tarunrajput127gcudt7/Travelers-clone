import React from 'react';
import type { Player } from '../types/cricket';

const featuredPlayers: Player[] = [
  {
    id: '1',
    name: 'Virat Kohli',
    image: 'https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    team: 'India',
    role: 'Batsman',
    battingStyle: 'Right Handed',
    bowlingStyle: 'Right-arm medium',
    matches: 492,
    runs: 25385,
    wickets: 4,
    average: 53.4
  },
  {
    id: '2',
    name: 'Steve Smith',
    image: 'https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    team: 'Australia',
    role: 'Batsman',
    battingStyle: 'Right Handed',
    bowlingStyle: 'Right-arm leg spin',
    matches: 384,
    runs: 18465,
    wickets: 17,
    average: 49.8
  }
];

export default function PlayerStats() {
  return (
    <section id="players" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Player Statistics</h2>
          <p className="mt-4 text-gray-600">Top performers in international cricket</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {featuredPlayers.map((player) => (
            <div key={player.id} className="bg-gray-50 rounded-xl p-6 shadow-sm">
              <div className="flex items-center space-x-6">
                <img
                  src={player.image}
                  alt={player.name}
                  className="w-24 h-24 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{player.name}</h3>
                  <p className="text-green-600">{player.team} - {player.role}</p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-sm text-gray-500">Matches</div>
                  <div className="text-2xl font-bold text-gray-900">{player.matches}</div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-sm text-gray-500">Runs</div>
                  <div className="text-2xl font-bold text-gray-900">{player.runs}</div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-sm text-gray-500">Average</div>
                  <div className="text-2xl font-bold text-gray-900">{player.average}</div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="text-sm text-gray-500">Wickets</div>
                  <div className="text-2xl font-bold text-gray-900">{player.wickets}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}