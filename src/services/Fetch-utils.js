import { client } from './client';

export async function getMovies() {
  const response = await client
    .from('movies_table')
    .select('*');

  return response.body;
}

export async function getCandies() {
  const response = await client
    .from('candies_table')
    .select('*');
  
  return response.body;
}

export async function getPopcorns() {
  const response = await client
    .from('popcorn_table')
    .select('*');
  
  return response.body;
}

export async function getDrinks() {
  const response = await client
    .from('drinks_table')
    .select('*');
  
  return response.body;
}