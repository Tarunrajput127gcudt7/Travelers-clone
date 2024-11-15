import React from 'react';
import type { Match } from '../types/cricket';

const liveMatches: Match[] = [
  {
    id: '1',
    team1: 'India',
    team2: 'Australia',
    venue: 'MCG, Melbourne',
    date: '2024-03-15',
    time: '19:30',
    format: 'T20',
    status: 'Live',
    score1: '186/4 (18.2)',
    score2: '165/6 (17.0)',
  },
  {
    id: '2',
    team1: 'England',
    team2: 'South Africa',
    venue: 'Lords, London',
    date: '2024-03-15',
    time: '14:00',
    format: 'ODI',
    status: 'Live',
    score1: '245/5 (42.0)',
    score2: '180/3 (35.0)',
  }
];

export default function LiveMatches() {
  return (
    <section id="matches" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Live Matches</h2>
          <div className="mt-2 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
            <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></span>
            Live Now
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {liveMatches.map((match) => (
            <div key={match.id} className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-gray-500">{match.format}</span>
                  <span className="px-2 py-1 rounded text-sm bg-green-100 text-green-800">
                    {match.status}
                  </span>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="font-semibold">{match.team1}</div>
                    <div className="text-lg font-bold">{match.score1}</div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="font-semibold">{match.team2}</div>
                    <div className="text-lg font-bold">{match.score2}</div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>{match.venue}</span>
                    <span>{match.time}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}