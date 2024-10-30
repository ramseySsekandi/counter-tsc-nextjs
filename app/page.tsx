'use client'
import { useState } from "react";
import Button from "@/components/Button";


export default function Home() {
  const [counter, setCounter] = useState(0);
  
  const addCount = ()=> {
    if (counter < 10){
      setCounter((prev) => (prev + 1)
      )
    }
    }
  const reduceCount = ()=> {
    if(counter > 0) {
      setCounter((prev) => (prev - 1)
      )
    }
  }

  const resetCount = ()=> {
    setCounter(0)
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
    <div className="w-96 py-6 flex justify-center  rounded-lg items-center flex-col gap-10 bg-gray-300">
      <h1 className="text-gray-600 font-semibold text-2xl">Counter App</h1>
      <div className="flex space-x-3 gap-4">
        <Button color = 'bg-red-600' text = '-' addCount={reduceCount} />
        <p className="py-1 px-10 rounded-lg bg-white text-gray-600 font-semibold text-2xl">{counter}</p>
        <Button color = 'bg-green-600' text = '+' addCount={addCount} />
      </div>
      <div>
        <Button color = 'bg-purple-600' text = 'Reset' addCount={resetCount} />
      </div>
    </div>
    </div>
      );


}

  