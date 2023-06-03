export const environment = {
  production: true,
  serverUrl: 'http://localhost:8089/api',
  get baseURL(): string {
    const parsedUrl = new URL(window.location.href);
    let baseUrl = parsedUrl.origin;
    return baseUrl;
},
};
 