/*
 * Filename: GifDetailQuery.ts
 * Author: Huy Nguyen
 * Date: January 01, 2024
 * Description: Contains the type implementation of the Gif detail query that is used to fetch gif data when user clicks on a gif
 */

import type { Rating } from './Rating';

export type GifDetailQuery = {
  rating: Rating;
};
