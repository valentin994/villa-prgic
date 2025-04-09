export default async function handler(req: any, res: any) {
  console.log(req);
  // const { id } = req.query;
  const id = 1;
  const apikey = process.env.REACT_APP_API_KEY;
  const url = process.env.REACT_APP_API_URL;
  console.log(apikey);
  console.log(url);
  const response =  await fetch(`${url}${id}`, {headers:{"x-api-key": `${apikey}`}})
  console.log(response);
  const data = await response.json();
  res.status(200).json(data);
}
