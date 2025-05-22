import React, { useEffect, useState } from "react";
import styles from "./notes.module.css";

const Notes = () => {
  const [items, setItems] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const AddItems = [
    {
      title: "JavaScript Basics",
      content: "Learn variables, functions, and loops in JavaScript.",
    },
    {
      title: "React.js Overview",
      content: "Understand components, state, and props in React.",
    },
    {
      title: "Node.js",
      content: "Basics of server-side development with Node.js.",
    },
    {
      title: "Full-Stack Development",
      content: "Build full-stack apps with React and Node.js.",
    },
  ];
  useEffect(() => {
    setItems(AddItems);
  }, []);
  if (items.length === 0)
    return (
      <div className={styles.loaderContainer}>
        <div className={styles.loader}></div>
        <p>No item available</p>
      </div>
    );

  return (
    <div className={styles.accordion}>
      {items.map((item, i) => (
        <div key={i} className={styles.accordionItem}>
          <div className={styles.accordionTitle}>
            <p>{item.title}</p>
            <div className={styles.buttons}>
              <button
                onClick={() => {
                  if (activeIndex === i) {
                    return setActiveIndex(null);
                  }
                  setActiveIndex(i);
                }}
              >
                View
              </button>
              <button>Update</button>
              <button>Delete</button>
            </div>
          </div>
          {activeIndex === i && (
            <div className={styles.accordionContent}>{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Notes;
