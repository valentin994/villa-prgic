export default async function handler(req, res) {
  const { id } = req.query;
  const apiKey = process.env.apikey;
  const url = process.env.url;
  const response =  await fetch(`${url}${id}`, {headers:{"x-api-key": `${apiKey}`}})
  const data = await response.json();
  res.status(200).json(data);
}
