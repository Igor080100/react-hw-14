import { FC } from "react";

interface IDisplayProps {
   count: number;
   mode: boolean;
   autoClick: boolean;
   handlerChangeCount: () => void;
   handleStartAutoClick: () => void;
   handleStopAutoClick: () => void;
}

export const Display: FC<IDisplayProps> = (props) => {
   const { count, handlerChangeCount, autoClick, handleStartAutoClick, handleStopAutoClick, } = props



   return (
      <div>
         <h1>[{count}]</h1>
         <button onClick={handlerChangeCount} disabled={autoClick}>Лічилка</button>
         <button onClick={handleStartAutoClick} disabled={autoClick}>Старт</button>
         <button onClick={handleStopAutoClick}>Стоп</button>
      </div>
   );



   // return (
   //    <div>
   //       <h1>{count}</h1>
   //       <button onClick={handlerChangeCount}>{mode ? "Додати" : "Відняти"}</button>
   //    </div >
   // );
};