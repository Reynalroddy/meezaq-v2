import { Button } from "./ui/button";
import Link from "next/link";

function EmptyList({
  heading = "No items in the list.",
  message = "Keep exploring other products category.",
  btnText = "back home",
}: {
  heading?: string;
  message?: string;
  btnText?: string;
}) {
  return (
    <div className="py-28 container mx-auto">
      <h2 className="text-xl font-bold ">{heading}</h2>
      <p className="text-lg">{message}</p>
      <Button asChild className="mt-4 capitalize" size="lg">
        <Link href="/">{btnText}</Link>
      </Button>
    </div>
  );
}
export default EmptyList;
