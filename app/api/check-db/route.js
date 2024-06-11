export default (req, res) => {
  const dbUrl = process.env.POSTGRES_URL;
  res.status(200).json({ dbUrl });
};
