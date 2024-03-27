import { auth } from "@clerk/nextjs";

const CourseIdPage = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { courseId: string };
}) => {
  const { userId } = auth();
  return <div>Watch the course</div>;
};
export default CourseIdPage;
