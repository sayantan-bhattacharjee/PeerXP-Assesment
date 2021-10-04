export const BASE_URL = process.env.REACT_APP_BASE_URL;

const key = '8196190b08906dda0ebf6e6f5d';

const joiner = '/ghost/api/v3/content';

// PUBLIC ENDPOINTS

export const posts = BASE_URL + joiner + '/posts?key=' + key;

export const pages = BASE_URL + joiner + '/pages?key=' + key;

export const authors = BASE_URL + joiner + '/authors?key=' + key;

export const tags = BASE_URL + joiner + '/tags?key=' + key;
