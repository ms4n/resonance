"use client";

import { Progress } from "@/components/ui/progress";

import Calories from "@/components/calorie-card";
import DateAndDay from "@/components/date";

import { useEffect, useState } from "react";

const Home = () => {
  const [progress, setProgress] = useState(33);

  return (
    <div className="container py-10">
      <nav>
        <h1 className="font-semibold text-3xl mb-10">resonance.</h1>
      </nav>

      <div className="flex justify-between items-center">
        <p className="mb-2">Total Calories</p>
        <DateAndDay />
      </div>

      <div>
        <Progress className="" value={progress} />

        <div className="flex justify-between items-center">
          <p className="text-gray-800">{progress}</p>
          <p className="text-gray-300">{100 - progress}</p>
        </div>
      </div>

      <Calories />
    </div>
  );
};

export default Home;
