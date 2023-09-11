import { useState } from "react";
import Accordion from "./Accordion";

let faqs = [
  {
    title: "Accordion 1",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, enim rerum ducimus, ullam ipsam dolorum quo voluptatem tenetur laboriosam qui quia odio aspernatur ratione voluptate, adipisci illum saepe itaque. Corporis.",
  },
  {
    title: "Accordion 2",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, enim rerum ducimus, ullam ipsam dolorum quo voluptatem tenetur laboriosam qui quia odio aspernatur ratione voluptate, adipisci illum saepe itaque. Corporis.",
  },
];

// faqs = [];

export default function AccordionList() {
  const [currentOpen, setCurrentOpen] = useState(null);

  function handleCurrentOpen(index) {
    setCurrentOpen((current) => (current === index ? null : index));
  }

  if (faqs.length === 0) {
    return <h2>Non ci sono Faqs</h2>;
  }

  return (
    <div className="accordion-list">
      {faqs.map((elm, index) => (
        <Accordion
          title={elm.title}
          key={index}
          isOpen={index === currentOpen}
          onAccordionClick={() => handleCurrentOpen(index)}
        >
          {elm.content}
        </Accordion>
      ))}
    </div>
  );
}
