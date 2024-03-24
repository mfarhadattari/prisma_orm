const update = async () => {
  // ------> Update One
  /* const updateOne = await prisma.user.update({
    where: {
      id: 30,
    },
    data: {
      name: "Brown Bob",
      isActive: true,
    },
  });
  console.log({ updateOne }); */
  // ------> Update One
  /* const updateMany = await prisma.user.updateMany({
    where: {
      name: {
        contains: "J",
      },
    },
    data: {
      isActive: true,
    },
  });
  console.log({ updateMany }); */
};

export default update;
