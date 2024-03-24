import { prisma } from ".";

const sorting = async () => {
  // ---> Ascending sorting
  const ascendingSort = await prisma.user.findMany({
    orderBy: {
      name: "asc",
    },
  });
  console.log({ ascendingSort });
  // ---> Ascending sorting
  const descendingSort = await prisma.user.findMany({
    orderBy: {
      name: "desc",
    },
  });
  console.log({ descendingSort });
};

export default sorting;
