export const fetchUserInfo = async (token) => {
  const response = await fetch(
    `https://tmforumhubdev.mvine.com/idp/oidc/userinfo`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const data = await response.json();
  return data;
};

export const fetchUserInfo2 = async (tmfUser) => {
  let current_url = process.env.BASE_URL;

  if (process.env.NEXT_PUBLIC_VERCEL_URL) {
    current_url = 'https://' + current_url;
  }
  try {
    const res = await fetch(current_url + `/api/user_info`, {
      method: 'POST',
      body: tmfUser,
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
