/*
 * Filename: GiphyApiResponse.ts
 * Author: Huy Nguyen
 * Date: December 30, 2023
 * Description: Contains the type implementation of the response that is returned when fetching a list of gifs from Giphy API
 */

import type { GiphyGif } from './GiphyGif';

export type GiphyListApiResponse = {
  data?: GiphyGif[];
  pagination: {
    total_count: number;
    count: number;
    offset: number;
  };
  meta: {
    status: number;
    msg: string;
    response_id: string;
  };
};
