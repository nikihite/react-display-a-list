import { client } from './client';

export async function getMovies() {
  const response = await client
    .from('movies_table')
    .select('*');

  return response.body;
}