const items = ["one", "two", "three"];
function CardList() {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index} style={{ border: "1px solid #ccc", 
        padding: "8px", margin: "4px 0" }}>
          {item}
        </li>
      ))}
    </ul>
  );
}
export default CardList;
