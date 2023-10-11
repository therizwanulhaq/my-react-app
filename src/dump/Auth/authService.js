// authService.js
let Authenticated = false;
let Admin = false;

export function login() {
  Authenticated = true;
  // Simulate an admin user
  Admin = true;
}

export function logout() {
  Authenticated = false;
  Admin = false;
}

export function isAuthenticated() {
  return Authenticated;
}

export function isAdmin() {
  return Admin;
}
