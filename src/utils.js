const paginate = (followers) => {
  const itemsPerPage = 12;
  const pages = Math.ceil(followers.length / itemsPerPage);

  // const newFollowers = Array.from({length: pages}, (_, index) => {
  //   const start = index * itemsPerPage;
  //   return followers.slice(start, start + itemsPerPage)
  // });

  const newFollowers = [];
  for (let i = 0; i < pages; i++) {
    const element = followers.slice(itemsPerPage * i, itemsPerPage * (i + 1));
    newFollowers.push(element);
  }

return newFollowers;
}

export default paginate
