import { FC, ChangeEvent } from "react";

interface IOptionsProps {
   step: number;
   mode: boolean;
   setStep: (step: number) => void;
   setMode: (isAddMode: boolean) => void;
}

export const Options: FC<IOptionsProps> = (props) => {
   const { step, setStep, mode, setMode } = props;

   const handleStepChange = (e: ChangeEvent<HTMLInputElement>) => {
      const updateStep = +(e.target.value);
      setStep(updateStep);
   };

   const handleModeChange = () => {
      setMode(!mode);
   };

   return (
      <>
         <input type="number" value={step} onChange={handleStepChange}
         />
         <button onClick={handleModeChange}>{mode ? "Додати" : "Відняти"}</button>
      </>
   );
};