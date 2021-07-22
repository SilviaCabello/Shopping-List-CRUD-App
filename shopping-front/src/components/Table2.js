import Item from "./Item";

const Table2 = ({ data, deleteItems, editItems }) => {
  return (
    <div>
      
      {data.map((item) => (
        <Item key={data.id} id={item.id} name={item.name} quantity={item.quantity} deleteItems={deleteItems} editItems={editItems}/>
      ))}
      <div className="horizontal-line"></div>
    </div>
  );
};

export default Table2;
