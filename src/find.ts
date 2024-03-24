const find = async () => {
  // ----> find many
  /* const findMany = await prisma.user.findMany({
    select: {
      name: true,
      email: true,
    },
  });
  console.log(findMany); */
  // -------> find first
  /* const findFirst = await prisma.user.findFirst({
    where: {
      isActive: true,
    },
  });
  console.log(findFirst); */
  // ------> find first or throw error
  /* const findFirstAndError = await prisma.user.findFirstOrThrow({
    where: {
      email: "hello@gmail.com",
    },
  });
  console.log(findFirstAndError); */
  // -----> find unique
  /*  const findUnique = await prisma.user.findUnique({
    where: {
      id: 1,
    },
  });
  console.log(findUnique); */
  // --------> find unique and throw error
  /* const findUniqueOrError = await prisma.user.findUniqueOrThrow({
    where: {
      id: 4,
    },
  });
  console.log(findUniqueOrError); */
};

export default find;
