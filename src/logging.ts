import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log: [
    {
      emit: "event",
      level: "query",
    },
  ],
});

prisma.$on("query", (e) => {
  console.log(e);
});

const logging = async () => {
  const result = await prisma.user.findUnique({
    where: {
      id: 2,
    },
  });
};

export default logging;
