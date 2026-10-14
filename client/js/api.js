/* Small API helper for future page modules. */
window.AphmaxAPI = {
  async request(path, options) {
    const response = await fetch(path, options || {});
    if (!response.ok) throw new Error(`Request failed (${response.status})`);
    const type = response.headers.get('content-type') || '';
    return type.includes('application/json') ? response.json() : response.text();
  }
};
