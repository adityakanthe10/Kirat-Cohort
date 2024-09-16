import React, { useState, useMemo } from "react";

// Generate random sentences from the words array
const words = ["hi", "my", "name", "is", "for", "to", "random", "word"];
const TOTAL_LINES = 1000;
const ALL_WORDS = [];
for (let i = 0; i < TOTAL_LINES; i++) {
  let sentence = "";
  for (let j = 0; j < words.length; j++) {
    sentence += words[Math.floor(words.length * Math.random())] + " ";
  }
  ALL_WORDS.push(sentence.trim());  // Trim extra space at the end
}

export function Assignment2() {
  const [filter, setFilter] = useState("");

  // Memoize the filtered sentences to optimize the recalculation
  const filteredSentences = useMemo(() => {
    return ALL_WORDS.filter((sentence) =>
      sentence.toLowerCase().includes(filter.toLowerCase())  // Case-insensitive filtering
    );
  }, [filter]);

  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Filter sentences"
      />
      <div>
        {filteredSentences.map((sentence, index) => (
          <div key={index}>{sentence}</div>
        ))}
      </div>
    </div>
  );
}
