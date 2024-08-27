import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Image from 'next/image';

// Define the SearchResult type
interface SearchResult {
  title: string;
  url: string;
}

const SearchPage = () => {
  const router = useRouter();
  const { query } = router.query;
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  useEffect(() => {
    if (query) {
      fetchSearchResults(query as string);
    }
  }, [query]);

  const fetchSearchResults = async (searchQuery: string) => {
    const results: SearchResult[] = await fetch(`/api/search?query=${encodeURIComponent(searchQuery)}`)
      .then((res) => res.json())
      .catch((err) => {
        console.error('Error fetching search results:', err);
        return [];
      });

    setSearchResults(results);
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center"
      style={{
        background: 'radial-gradient(circle, #1a1a1a, #000000)',
      }}
    >
      <h1 className="text-3xl font-bold mb-4 text-center text-white">Search Results for "{query}"</h1>
      {searchResults.length > 0 ? (
        <ul className="w-full max-w-2xl">
          {searchResults.map((result, index) => (
            <li key={index} className="mb-2 text-center">
              <a href={result.url} className="text-blue-600 hover:underline">
                {result.title}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <div className="flex flex-col items-center">
          <Image
            src="/images/search-message.png"
            alt="Navigating Hell"
            width={600}
            height={200}
            className="mb-8"
          />
          <p className="text-center text-xl text-white">
            is a dirty bu&rsquo;sin&rsquo;ess...we are working on it 👿
          </p>
        </div>
      )}
    </div>
  );
};

export default SearchPage;
