import type { NextApiRequest, NextApiResponse } from 'next';

const url = 'https://xxx.thomasp3.link';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await fetch(
    // `${process.env.SERVER_BASE_URL}/api/v1/register`,
    `${url}/api/v1/register`,
    {
      method: req.method,
      headers: { 'Content-Type': 'application/json' },
      body: req.body,
    }
  );

  const data = await response.json();
  res.status(response.status).json(data);
}
