const relationalQueries = async () => {
  // fluent api
  /* const fluentData = await prisma.user
    .findUnique({
      where: {
        id: 2,
      },
    })
    .post();

  console.log(fluentData); */
  // population data
  /* const populateData = await prisma.user.findUnique({
    where: {
      id: 2,
    },
    include: {
      profile: true,
      post: {
        include: {
          postCategory: {
            include: {
              category: true,
            },
          },
        },
      },
    },
  });
  console.dir(populateData, { depth: Infinity }); */
};

export default relationalQueries;
