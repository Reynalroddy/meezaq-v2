import Product from "@/components/products/Product";
import { fetchProductDetails } from "@/utils/actions/actions";
import { productProps } from "@/utils/types";
import { redirect } from "next/navigation";

async function page({ params }: { params: { id: string } }) {
  const product: productProps | null = await fetchProductDetails(params.id);
  if (!product) redirect("/");
  return <Product product={product} />;
}

export default page;
