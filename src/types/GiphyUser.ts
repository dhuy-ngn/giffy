/*
 * Filename: GiphyApiResponse.ts
 * Author: Huy Nguyen
 * Date: December 27, 2023
 * Description: Contains the schema of a User object returned from Giphy API
 */

export type GiphyUser = {
  avatar_url: string;
  banner_url: string;
  profile_url: string;
  username: string;
  display_name: string;
};
