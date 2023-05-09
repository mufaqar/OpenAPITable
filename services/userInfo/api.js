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
  try {
    const res = await fetch(`${process.env.BASE_URL}/api/user_info`, {
      method: 'POST',
      body: tmfUser,
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
