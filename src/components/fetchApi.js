export const fetchFromServer = async () => {
  return new Promise((response, reject) => {
    setTimeout(response, 5000);
  });
}