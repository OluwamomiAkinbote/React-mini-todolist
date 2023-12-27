import React, { useState } from "react";
import "./Accordion.css";

function AccordionComponent() {
  const accordionData = [
    {
      title: "What is the purpose of an accordion in web design?",
      content:
        "An accordion in web design is a user interface (UI) element that allows content to be presented in a collapsible and expandable manner. It helps organize information by displaying only the essential details initially and revealing additional content when the user chooses to expand a particular section.",
    },
    {
      title: "How can I create an accordion using HTML, CSS, and JavaScript?",
      content:
        "To create an accordion, you can use HTML for the structure, CSS for styling, and JavaScript for interactivity. The HTML will define the sections you want to collapse/expand, the CSS will handle the styling, and JavaScript will manage the toggling functionality. ",
    },
    {
      title:
        "What are some accessibility considerations when implementing accordions?",
      content:
        "When implementing accordions, it's crucial to consider accessibility for all users. Here are some key considerations like keyboard navigation, screen reader compatibilty, focus management.",
    },
  ];
  // UseState
  const [openSection, setOpenSection] = useState(null);
  const toggleSection = (index) => {
    const prevIndex = openSection === index ? null : index;
    setOpenSection(prevIndex);
  };
  return (
    <div className="accordion-container">
      <h2>React Accordion Component.</h2>
      {accordionData.map((section, index) => (
        <div key={index} className="accordion-section">
          <div
            className={`accordion-header ${
              openSection === index ? "open" : ""
            }`}
            onClick={() => toggleSection(index)}
          >
            {section.title}
            <span className="icon">{openSection === index ? "-" : "+"}</span>
          </div>
          {openSection === index && (
            <div className="accordion-content">{section.content}</div>
          )}
        </div>
      ))}
    </div>
  );
}

export default AccordionComponent;
