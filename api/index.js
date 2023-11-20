export default async (req, res) => {

  // Get the full path from the request
  const path = req.url;

  // Construct redirect URL with path
  const redirectUrl = `https://piratewires.us${path}`;

  res.redirect(301, redirectUrl);
}
