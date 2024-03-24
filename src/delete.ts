const deleteOperation = async () => {
  // ---> Delete One
  /* const deleteOne = await prisma.user.delete({
    where: {
      id: 24,
    },
  });
  console.log(deleteOne); */
  // ----> Delete Many
  /* const deleteMany = await prisma.user.deleteMany({
    where: {
      name: {
        contains: "E",
      },
    },
  });
  console.log(deleteMany); */
  // -----> Delete All
  /* const deleteAll = await prisma.user.deleteMany();
  console.log(deleteAll); */
};

export default deleteOperation;
