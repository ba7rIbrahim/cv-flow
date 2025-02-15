interface FormWrapperProps {
  title: string;
  children: React.ReactNode;
}

export const FormWrapper = ({ title, children }: FormWrapperProps) => {
  return (
    <>
    <div className="border-b">
      <h1 className="p-3 text-lg">{title}</h1>
    </div>
    <div className="p-3">
    {children}
    </div>
  </>
  );
};
