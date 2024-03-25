const create = async () => {
  // -------->> Insert One
  /* const createOne = await prisma.user.create({
    data: {
      name: "Mohammad Farhad",
      email: "mfarhad4.dev@gmail.com",
    },
  });
  console.log(createOne); */
  // --------->> Insert Many
  /* const createMany = await prisma.user.createMany({
    data: [
      {
        username: "john_doe",
        email: "john.doe@example.com",
        role: "user",
      },
      {
        username: "jane_smith",
        email: "jane.smith@example.com",
        role: "user",
      },
      {
        username: "admin_123",
        email: "admin@example.com",
        role: "admin",
      },
      {
        username: "alice_wonder",
        email: "alice.wonder@example.com",
        role: "user",
      },
    ],
  });
  console.log(createMany); */
};

export default create;
