export const ErrorMessage = ({ error }: { error: string }) => {
  return (
    <div className="min-h-6">
      {error && <p className="text-sm text-destructive px-2">{error}</p>}
    </div>
  );
};
