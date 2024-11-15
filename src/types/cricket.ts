export interface Match {
  id: string;
  team1: string;
  team2: string;
  venue: string;
  date: string;
  time: string;
  format: 'T20' | 'ODI' | 'Test';
  status: 'Upcoming' | 'Live' | 'Completed';
  score1?: string;
  score2?: string;
  result?: string;
}

export interface Player {
  id: string;
  name: string;
  image: string;
  team: string;
  role: string;
  battingStyle: string;
  bowlingStyle: string;
  matches: number;
  runs: number;
  wickets: number;
  average: number;
}

export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  image: string;
  date: string;
  category: string;
}