/*
 * Filename: GiphyApiResponse.ts
 * Author: Huy Nguyen
 * Date: December 27, 2023
 * Description: Contains the schema of a Gif object returned from Giphy API
 */

import type { GiphyUser } from './GiphyUser';
import type { Rating } from './Rating';

export type GiphyGif = {
  type: string;
  id: string;
  url: string;
  username: string;
  slug: string;
  bitly_gif_url: string;
  bitly_url: string;
  embed_url: string;
  user: GiphyUser;
  source: string;
  title: string;
  rating: Rating;
  content_url: string;
  source_tld: string;
  source_post_url: string;
  is_sticker: number;
  import_datetime: string;
  trending_datetime: string;
  images: {
    original: {
      url: string;
      width: string;
      height: string;
      size: string;
      frames: string;
      mp4: string;
      mp4_size: string;
      webp: string;
      webp_size: string;
    };
    fixed_height: {
      url: string;
      width: string;
      height: string;
      size: string;
      frames: string;
      mp4: string;
      mp4_size: string;
      webp: string;
      webp_size: string;
    };
    fixed_width: {
      url: string;
      width: string;
      height: string;
      size: string;
      frames: string;
      mp4: string;
      mp4_size: string;
      webp: string;
      webp_size: string;
    };
  };
};
