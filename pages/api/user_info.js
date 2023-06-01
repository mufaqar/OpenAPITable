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
        res.setHeader('Access-Control-Allow-Credentials', true);
        res.setHeader('Access-Control-Allow-Origin', '*');
        // another common pattern
        // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
        res.setHeader(
          'Access-Control-Allow-Methods',
          'GET,OPTIONS,PATCH,DELETE,POST,PUT'
        );
        res.setHeader(
          'Access-Control-Allow-Headers',
          'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
        );
        res.status(200).json(r.data);
      })
      .catch((err) => {
        console.log(err);
        res.status(400);
      });
  }
}
