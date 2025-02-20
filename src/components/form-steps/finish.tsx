import { FormWrapper } from "@/layouts/formWrapper";

export const Finish = () => {
  return (
    <FormWrapper title="Finish">
      <div className="flex flex-col justify-center items-center mt-4">
        <h3 className="text-xl mb-5 text-primary">Congrats your cv is ready</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="#198754"
          stroke="3"
          className="lucide lucide-circle-check h-20 w-20"
        >
          <circle cx="12" cy="12" r="10" fill="#198754" />
          <path
            d="m9 12 2 2 4-4"
            stroke="#ffffff"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </FormWrapper>
  );
};
