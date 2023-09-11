export default function Accordion({
  title,
  children,
  isOpen,
  onAccordionClick,
}) {
  return (
    <div className="accordion">
      <div className="accordion__title">
        <h3>{title}</h3>
        <button className="accordion__btn" onClick={onAccordionClick}>
          {isOpen ? "-" : "+"}
        </button>
      </div>
      {isOpen && <div>{children}</div>}
    </div>
  );
}
