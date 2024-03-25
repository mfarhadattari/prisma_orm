const filtering = async () => {
  // relational filtering
  /* const userPublishedPost = await prisma.user.findMany({
    include: {
      post: {
        where: {
          published: true,
        },
      },
    },
  });
  console.dir(userPublishedPost, { depth: Infinity }); */
  // and filtering
  /* const andFiltering = await prisma.post.findMany({
    where: {
      AND: [
        {
          title: {
            contains: "Post",
          },
        },
        {
          published: true,
        },
      ],
    },
  });
  console.log(andFiltering); */
  // or filtering
  /* const orFiltering = await prisma.post.findMany({
    where: {
      OR: [
        {
          title: {
            contains: "Post",
          },
        },
        {
          published: {
            equals: true,
          },
        },
        {
          content: {
            startsWith: "Lorem",
          },
        },
        {
          content: {
            endsWith: "4",
          },
        },
      ],
    },
  });
  console.log(orFiltering); */
  // not filtering
  /* const notFiltering = await prisma.post.findMany({
    where: {
      NOT: [
        {
          title: {
            contains: "Post",
          },
        },
      ],
    },
  });
  console.log(notFiltering); */
  // in operator
  /* const inFiltering = await prisma.user.findMany({
    where: {
      username: {
        in: ["john_doe", "admin_123"],
      },
    },
  });
  console.log(inFiltering); */
};

export default filtering;
