import axios from 'axios';

export default async function handler(req, res) {
  let body = JSON.parse(req.body?.access_token);

  if (req.method === 'POST' && body?.access_token) {
    axios({
      method: 'GET',
      url: `https://tmforumhubdev.mvine.com/idp/oidc/userinfo`,
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
