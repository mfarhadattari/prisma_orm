import { prisma } from ".";

const batchTransaction = async () => {
  const createUser = prisma.user.create({
    data: {
      username: "shanto",
      email: "shanto@gmail.com",
      age: 25,
    },
  });

  const createProfile = prisma.profile.create({
    data: {
      bio: "Hello this is my bio",
      userId: 14,
    },
  });

  const data = await prisma.$transaction([createUser, createProfile]);
  console.log(data);
};

export default batchTransaction;
