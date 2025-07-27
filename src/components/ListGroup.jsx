function ListGroup() {
  const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

  const getNoItemsMsg = () => {
    return items.length === 0 && <p>No item found</p>;
  };

  return (
    <>
      <h1>List</h1>
      {getNoItemsMsg(items.length)}
      <ul class="list-group">
        {items.map((item) => (
          <li class="list-group-item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
