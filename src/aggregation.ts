const aggregation = async () => {
  // -------> avg aggregate
  /* const avgAge = await prisma.user.aggregate({
    _avg: {
      age: true,
    },
  });
  console.log(avgAge); */
  // ------> count aggregate
  /* const countAge = await prisma.user.aggregate({
    _count: true,
  });
  console.log(countAge); */
  // -------> Sum aggregate
  /* const sumOfAge = await prisma.user.aggregate({
    _sum: {
      age: true,
    },
  });
  console.log(sumOfAge); */
  // -------> Max aggregate
  /* const maxAge = await prisma.user.aggregate({
    _max: {
      age: true,
    },
  });
  console.log(maxAge); */
  // -------> Min aggregate
  /* const minAge = await prisma.user.aggregate({
    _min: {
      age: true,
    },
  });
  console.log(minAge); */
};

export default aggregation;
