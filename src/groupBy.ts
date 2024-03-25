import { prisma } from ".";

const groupBy = async () => {
  const groupPost = await prisma.post.groupBy({
    by: ["authorId"],
    _count: true,
    _sum: {
      like: true,
    },
    _avg: {
      like: true,
    },
  });

  console.log(groupPost);
};

export default groupBy;
