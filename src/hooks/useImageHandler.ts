// export const useImageHandler = (onChange: (value: string) => void) => {
//   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file && file.type.startsWith("image/")) {
//       const fileReader = new FileReader();
//       fileReader.onloadend = () => {
//         try {
//           onChange(fileReader.result as string)
//         } catch {
//           console.error("Not Valid Image!");
//         }
//       };
//       fileReader.readAsDataURL(file);
//     }
//   }


//   return {
//     handleImageChange
//   }
// }


import { useCallback } from "react";

export const useImageHandler = () => {
  const handleImageChange = useCallback(
    (
      e: React.ChangeEvent<HTMLInputElement>,
      onChange: (value: string | null) => void
    ) => {
      const file = e.target.files?.[0];
      if (!file) return;

      if (!file.type.startsWith("image/")) {
        console.error("Invalid file type");
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => onChange(reader.result as string);
      reader.readAsDataURL(file);
    },
    []
  );

  return { handleImageChange };
};