module.exports = (baseUrl) => (req, res) => {
  const parsedUrl = new URL(req.url, baseUrl);
  const params = {};
  parsedUrl.searchParams.forEach((v, k) => {
    params[k] = v;
  })
  req.pathname = parsedUrl.pathname;
  req.params = params;
}