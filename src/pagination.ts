import { prisma } from ".";

const pagination = async () => {
  //--------> offset pagination
  const offsetData = await prisma.user.findMany({
    skip: 5,
    take: 2,
  });
  console.log({ offsetData });

  //--------> cursor pagination
  const cursorData = await prisma.user.findMany({
    cursor: {
      id: 4,
    },
    skip: 5,
    take: 2,
  });
  console.log({ cursorData });
};

export default pagination;
