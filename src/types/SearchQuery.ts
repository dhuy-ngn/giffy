/*
 * Filename: SearchQuery.ts
 * Author: Huy Nguyen
 * Date: December 25, 2023
 * Description: Contains the types of the search query params for Giphy API
 */

import type { Rating } from './Rating';

/**
 * Represents the search query of Giphy API
 */
export type SearchQuery = {
  searchType: SearchType;
  q: string;
  limit?: number;
  rating?: Rating;
  offset?: number;
  lang?: 'en';
};

/** This is used as a Giphy API endpoint */
export type SearchType = 'search' | 'trending';
