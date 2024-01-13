/*
 * Filename: GiphyApiResponse.ts
 * Author: Huy Nguyen
 * Date: December 30, 2023
 * Description: Contains the type implementation of the response that is returned when fetching a gif from Giphy API
 */

import type { GiphyGif } from './GiphyGif';

export type GiphyApiResponse = {
  data?: GiphyGif;
};
