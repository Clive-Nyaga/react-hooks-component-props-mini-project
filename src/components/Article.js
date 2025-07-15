import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  // Function to generate reading time emojis
  const getReadTime = (min) => {
    let emoji = "";
    if (min < 30) {
      const cups = Math.ceil(min / 5);
      emoji = "☕️".repeat(cups);
    } else {
      const bentos = Math.ceil(min / 10);
      emoji = "🍱".repeat(bentos);
    }
    return `${emoji} ${min} min read`;
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{getReadTime(minutes)} | {date}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
