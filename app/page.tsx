import Homes from "@/components/Home/Home";
import { fetchProducts } from "@/utils/actions/actions";
import { productProps } from "@/utils/types";
async function Home({
  searchParams,
}: {
  searchParams: { category?: string; search?: string };
}) {
  const category = searchParams?.category;
  const products: productProps[] = await fetchProducts({
    category,
  });
  console.log(products);
  return <Homes products={products} />;
}

export default Home;
