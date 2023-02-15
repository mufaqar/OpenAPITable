export const scrollToTable = () => {
  const search = document?.getElementById(`search`);
  if (!search) return;
  search.scrollIntoView({
    behavior: 'smooth',
  });
};
