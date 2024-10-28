import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <Button>Click me</Button>


      <UserButton/>
    </div>
  );
}
