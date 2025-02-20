const allStepsArray = [
  {
    title: "Personal Info",
  },
  {
    title: "Experience Info",
  },
  {
    title: "Project Info",
  },
  {
    title: "Education Info",
  },
  {
    title: "Miscellaneous",
  },
  {
    title: "Color",
  },
  {
    title: "Finish",
  },
];

export const FillStepsForm = ({ currentStep }: { currentStep: number }) => {
  return (
    <div className="hidden lg:flex bg-white justify-center items-center py-4 my-2 rounded-md ">
      {allStepsArray.map((step, id) => {
        return (
          <div key={id} className="flex items-center justify-center gap-2 mx-4">
            <span
              className={`${
                currentStep === id
                  ? "text-white bg-primary border-primary"
                  : currentStep >= id
                  ? "border-primary text-primary"
                  : "border-input text-slate-300"
              } border w-6 h-6 rounded-full flex justify-center items-center p-1`}
            >
              {currentStep <= id ? (
                id + 1
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-check"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              )}
            </span>
            <span
              className={`${
                currentStep === id
                  ? "text-gray-700"
                  : currentStep >= id
                  ? "text-gray-700"
                  : "text-slate-400"
              } text-sm`}
            >
              {step.title}
            </span>
          </div>
        );
      })}
    </div>
  );
};
