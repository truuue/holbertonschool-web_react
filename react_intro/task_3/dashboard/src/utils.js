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

function getLatestNotification() {
  return "<strong>Urgent requirement</strong> - complete by EOD";
}

export { getFooterCopy, getFullYear, getLatestNotification };
