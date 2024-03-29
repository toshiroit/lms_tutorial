import { getDashboardCourse } from "@/actions/get-dashboard-course";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { CourseList } from "../search/_components/course-list";
import { CheckCircle, Clock } from "lucide-react";
import { InfoCard } from "./_components/info-card";

export default async function Dashboard() {
  const { userId } = auth();

  if (!userId) {
    redirect("/");
  }

  const { completedCourses, coursesInProgress } = await getDashboardCourse(
    userId
  );
  return (
    <div className="p-6 space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <InfoCard
          icon={Clock}
          label="In progress"
          numberOfItems={coursesInProgress.length}
        />
        <InfoCard
          icon={CheckCircle}
          label="Completed"
          variant="success"
          numberOfItems={completedCourses.length}
        />
      </div>
      <CourseList items={[...coursesInProgress, ...completedCourses]} />
    </div>
  );
}
