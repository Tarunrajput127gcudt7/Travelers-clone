import React from 'react';
import type { NewsItem } from '../types/cricket';

const newsItems: NewsItem[] = [
  {
    id: '1',
    title: 'ICC Announces New T20 World Cup Format',
    summary: 'The International Cricket Council has revealed a new format for the upcoming T20 World Cup, featuring more teams and matches.',
    image: 'https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    date: '2024-03-14',
    category: 'Tournament'
  },
  {
    id: '2',
    title: 'Record-Breaking Partnership in Test Cricket',
    summary: 'Two batsmen create history with the highest partnership in Test cricket history.',
    image: 'https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    date: '2024-03-13',
    category: 'Records'
  }
];

export default function News() {
  return (
    <section id="news" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Latest Cricket News</h2>
          <p className="mt-4 text-gray-600">Stay updated with the latest cricket news and updates</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {newsItems.map((item) => (
            <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-md">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    {item.category}
                  </span>
                  <span className="ml-4 text-sm text-gray-500">{item.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.summary}</p>
                <button className="mt-4 text-green-600 font-medium hover:text-green-700">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}