function checkUserName(userName) {
  userName = userName.toString();
  if (userName.length < 6 || userName.length > 10) return false;
  return true;
}

function checkPassword(password) {
  password = password.trim();
  if (password.length < 8 || password.length > 10) return false;
  return true;
}

export { checkPassword, checkUserName };
