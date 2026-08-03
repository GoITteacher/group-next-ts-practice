import { getUserById } from "@/services/users";
import css from "./Page.module.css";
import Link from "next/link";

interface PageProps {
  params: Promise<{ id: string }>;
}

const Page = async ({ params }: PageProps) => {
  const { id } = await params;
  const student = await getUserById(id);

  return (
    <div className={css["page"]}>
      <h1>User Details</h1>

      <h2>
        {student.firstName} {student.lastName}
      </h2>
      <p>{student.cohortYear}</p>
      <p>{student.major}</p>
      <p>{student.gpa}</p>
      <p>{student.enrolled}</p>

      <Link href={`/users/${id}/remove`}>Remove User</Link>
    </div>
  );
};

export default Page;
