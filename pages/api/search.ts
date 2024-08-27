import { NextApiRequest, NextApiResponse } from 'next';

const data = [
  { title: 'Inferno Canto 1', url: '/canto1' },
  { title: 'Inferno Canto 2', url: '/canto2' },
  { title: 'Inferno Canto 3', url: '/canto3' },
  { title: 'Inferno Canto 4', url: '/canto4' },
  { title: 'Inferno Canto 5', url: '/canto5' },
  { title: 'Inferno Canto 6', url: '/canto6' },
  { title: 'Inferno Canto 7', url: '/canto7' },
  { title: 'Inferno Canto 8', url: '/canto8' },
  { title: 'Inferno Canto 9', url: '/canto9' },
  { title: 'Inferno Canto 10', url: '/canto10' },
  { title: 'Inferno Canto 11', url: '/canto11' },
  { title: 'Inferno Canto 12', url: '/canto12' },
  { title: 'Inferno Canto 13', url: '/canto13' },
  { title: 'Inferno Canto 14', url: '/canto14' },
  { title: 'Inferno Canto 15', url: '/canto15' },
  { title: 'Inferno Canto 16', url: '/canto16' },
  { title: 'Inferno Canto 17', url: '/canto17' },
  // Add more canto pages as needed
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { query } = req.query;

  if (typeof query !== 'string') {
    return res.status(400).json({ message: 'Invalid query' });
  }

  const results = data.filter(item =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  res.status(200).json(results);
}
