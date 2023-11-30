export default function TabButton({ children, onSelect }) {
  //{children} === {props.children}

 
  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}
