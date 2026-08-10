import { getCarById } from "@/services/cars";
import css from "./page.module.css";
import Link from "next/link";

interface PageProps {
  params: Promise<{ id: string }>;
}

const Page = async ({ params }: PageProps) => {
  const { id } = await params;
  const res = await getCarById(id);

  return (
    <div className={css["page"]}>
      <h3>More details:</h3>
      <p>{res.model}</p>
      <p>{res.color}</p>
      <p>{res.make}</p>
      <p>{res.fuelType}</p>
      <p>{res.year}</p>
      <Link href="/cars">Go back</Link>
    </div>
  );
};

export default Page;
