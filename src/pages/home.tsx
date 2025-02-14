import { Button } from "@/components/ui/button";
import welcomeImage from "@/assets/welcome.svg";

export const Home = ({
  setIsFormPage,
}: {
  setIsFormPage: (bool: boolean) => void;
}) => {
  const handlePage = () => {
    setIsFormPage(true);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-2xl">Welcome to Our CV Builder</h1>
      <img
        src={welcomeImage}
        alt="Welcome"
        className="w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl object-contain "
      />
      <p>Now you can build cv in just moments</p>
      <Button className="w-52 rounded-full mt-4 py-5" onClick={handlePage}>
        Let's Start
      </Button>
    </div>
  );
};
