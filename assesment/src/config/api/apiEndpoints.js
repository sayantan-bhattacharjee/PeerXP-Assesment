export const BASE_URL = process.env.REACT_APP_BASE_URL;

const key = '8196190b08906dda0ebf6e6f5d';

const joiner = '/ghost/api/v3/content';

// PUBLIC ENDPOINTS

export const dashboard = BASE_URL + joiner + '/posts?key=' + key;
