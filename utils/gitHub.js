import axios from 'axios';

export const api = axios.create({ baseURL: "https://api.github.com/repos", timeout: 5000, headers: { Accept: "application/vnd.github+json", Authorization: `Bearer ${process.env.GITHUB_TOKEN}`, "X-GitHub-Api-Version": "2022-11-28", }, });
