import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card.tsx";

function Login() {
  return (
    <>
      <Card className="text-center">
        <CardHeader>
          <CardTitle className="text-2xl text-blue-800 mb-2">Let's get started</CardTitle>
          <CardDescription>Sign in to continue</CardDescription>
        </CardHeader>
        <CardContent>
          
        </CardContent>
        <CardFooter>
          <p className="w-full">Card Footer</p>
        </CardFooter>
      </Card>
    </>
  );
}

export default Login;
