import "./Table.css";

const Item = ({ name, quantity }) => {
  return (
    <div>
      <div className="horizontal-line"></div>
      <div className="item">
        <p>
          {quantity}
          {name}
        </p>
        <button className="delete-button">Delete</button>
      </div>
    </div>
  );
};

export default Item;
