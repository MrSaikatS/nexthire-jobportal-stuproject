import { FcGoogle } from "react-icons/fc";
import { Button } from "../shadcnui/button";

const SigninWithGoogleButton = () => {
  return (
    <Button
      className="w-full border-blue-500 py-6"
      variant="outline"
      type="button">
      <FcGoogle /> Continue with Google
    </Button>
  );
};

export default SigninWithGoogleButton;
