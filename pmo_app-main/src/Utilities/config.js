function resolveApiBaseUrl() {
  let raw = String(import.meta?.env?.VITE_BACKEND_URL || 'http://backend.thetadynamics.io/api').trim();
  raw = raw.replace(/\/+$/, '');
  if (!/\/api$/i.test(raw)) {
    raw = `${raw}/api`;
  }
  return raw;
}

export const PYTHON_BASE_URL = resolveApiBaseUrl();
export const API_BASE_URL = PYTHON_BASE_URL;