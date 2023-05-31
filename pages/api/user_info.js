import axios from 'axios';

export default async function handler(req, res) {
  let body = req.body;

  if (typeof body === 'string') {
    body = JSON.parse(body);
  }

  if (req.method === 'POST' && body?.access_token) {
    axios({
      method: 'GET',
      url: `${process.env.NEXT_PUBLIC_AUTHORITY}/idp/oidc/userinfo`,
      headers: {
        Authorization: `Bearer ${body?.access_token}`,
      },
    })
      .then((r) => {
        res.status(200).json(r.data);
      })
      .catch((err) => {
        console.log(err);
        res.status(400);
      });
  }
}
