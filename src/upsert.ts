import { prisma } from ".";

const upsert = async () => {
  const upsertData = await prisma.user.upsert({
    where: {
      email: "mfarhad@example.com",
    },
    update: {
      isActive: false,
    },
    create: {
      name: "Mohammad Farhad",
      email: "mfarhad@example.com",
      isActive: true,
    },
  });
  console.log(upsertData);
};

export default upsert;
