import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Calories = () => {
  return (
    <Card className="w-[350px] my-8">
      <CardHeader>
        <CardTitle>Breakfast</CardTitle>
        <CardDescription>
          Track your calories spent on breakfast
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">

            

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="dish">Dish</Label>
              <Input id="dish" placeholder="Name of the dish" />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="calories">Calories</Label>
              <Input id="calories" placeholder="Amount of calories" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  );
};

export default Calories;
