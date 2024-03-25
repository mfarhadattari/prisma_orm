import { prisma } from ".";

const interactiveTransaction = async () => {
  const result = await prisma.$transaction(async (transactionClient) => {
    const createUser = await transactionClient.user.create({
      data: {
        username: "shanta",
        email: "shanta@gmail.com",
        age: 18,
      },
    });

    const createProfile = await transactionClient.profile.create({
      data: {
        bio: "Hello this is shanta",
        userId: createUser.id,
      },
    });

    return {
      createProfile,
      createUser,
    };
  });

  console.log(result);
};

export default interactiveTransaction;
