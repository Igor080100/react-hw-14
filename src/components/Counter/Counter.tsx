import React, { FC, useEffect, useState } from "react";
import { Display } from "../Display/Display";
import { Options } from "../Options/Options";

export const Counter: FC = () => {
   const [count, setCount] = useState(0);
   const [step, setStep] = useState(0);
   const [mode, setMode] = useState(true);
   const [autoClick, setAutoClick] = useState(false);

   const handleStartAutoClick = () => {
      if (!autoClick) {
         setAutoClick(true);
      }
   };

   const handleStopAutoClick = () => {
      setAutoClick(false);
   };

   useEffect(() => {
      if (autoClick === true) {
         setInterval(() => {
            setCount(num => num + step);
         }, 1000);
      }
   }, [autoClick, step]);


   const handlerChangeCount = () => {
      mode ? setCount(count + step) : setCount(count - step);
   };



   return (
      <div>
         <Display
            count={count}
            handlerChangeCount={handlerChangeCount}
            autoClick={autoClick}
            handleStartAutoClick={handleStartAutoClick}
            handleStopAutoClick={handleStopAutoClick}
            mode={mode}
         />
         <Options
            step={step}
            setStep={setStep}
            mode={mode}
            setMode={setMode}
         />
      </div>
   );

   // return (
   //    <div>
   //       <Display count={count} handlerChangeCount={handlerChangeCount} mode={mode} />
   //       <Options step={step} setStep={setStep} mode={mode} setMode={setMode}
   //       />
   //    </div>
   // );
};

