export function getToken() {
  if (typeof window === 'undefined' || typeof localStorage === 'undefined') {
    return null;
  }

  return localStorage.getItem('token');
}
