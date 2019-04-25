// ede6286cb5814db0a268dd41e324c499

const url =
  'https://newsapi.org/v2/top-headlines?country=us&apiKey=ede6286cb5814db0a268dd41e324c499';

export async function getNews() {
  const result = await fetch(url).then(response => response.json());
  return result.articles;
}
