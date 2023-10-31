export function Item({ item, onDeleteItem, onToggleItems }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        <input
          type="checkbox"
          value={item.packed}
          onChange={() => onToggleItems(item.id)}
        />
        <span
          style={{
            padding: "0 10px",
            margin: "20px",
            borderRadius: "5px",
            backgroundColor: "orange",
          }}
        >
          {item.quantity}
        </span>

        {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
