'use client';

import { useState } from "react";
import { Tab, TabsList } from "@/components/ui/tabs";

const qualities = ["360p", "480p", "720p", "1080p", "Best"];

export function QualitySelector() {
  const [quality, setQuality] = useState("1080p");

  return (
    <div>
      <TabsList>
        {qualities.map((item) => (
          <Tab key={item} active={quality === item} onClick={() => setQuality(item)}>
            {item}
          </Tab>
        ))}
      </TabsList>
      <p className="mt-3 text-sm text-text-muted">Selected quality: {quality}</p>
    </div>
  );
}
