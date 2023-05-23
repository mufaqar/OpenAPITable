import axios from 'axios';

export default async function handler(req, res) {
  let body = req.body;

  if (typeof body === 'string') {
    body = JSON.parse(body);
  }

  if (req.method === 'POST' && body?.access_token) {
    axios({
      method: 'GET',
      url: `https://tmforumhubdev.mvine.com/idp/oidc/userinfo`,
      headers: {
        Authorization: `Bearer ${body?.access_token}`,
      },
    })
      .then((r) => {
        console.log('r.data: ', r.data);
        res.status(200).json(r.data);
      })
      .catch((err) => {
        console.log(err);
        res.status(400);
      });
  }
}
