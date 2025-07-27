function ListGroup() {
  const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

  const getNoItemsMsg = () => {
    return items.length === 0 && <p>No item found</p>;
  };

  return (
    <>
      <h1>List</h1>
      {getNoItemsMsg(items.length)}
      <ul className="list-group">
        {items.map((item) => (
          <li
            className="list-group-item"
            key={item}
            onClick={() => console.log("clicked " + item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
