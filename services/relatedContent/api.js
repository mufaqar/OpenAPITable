export const fetchRelatedContent = async (filter) => {
  const data = {
    query: 'Open APIs',
    page: 1,
    pageSize: 10,
    topics: [],
    companies: [],
    authors: [],
    sources: [],
    content_types: filter ? [filter] : [],
    inform: true,
    tmf_org: false,
  };

  try {
    const res = await fetch('https://search.labs.tmforum.org/search/', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};
