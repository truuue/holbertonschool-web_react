function getFullYear() {
  return new Date().getFullYear();
}

function getFooterCopy(isIndex) {
  isIndex = true;

  if (isIndex) {
    return "Holberton School";
  }
  return "Holberton School main dashboard";
}

export { getFooterCopy, getFullYear };
