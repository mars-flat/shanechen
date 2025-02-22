'use client'

import { useState } from "react";

export default function Copyright() {
  const [year, setYear] = useState(new Date().getFullYear());

  return (
    <div className="w-full text-gray-400 text-center">
      Copyright © {year} Shane Chen
    </div>
  );
}