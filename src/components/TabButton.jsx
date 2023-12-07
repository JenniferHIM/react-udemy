export default function TabButton({ children, onSelect, isSelected }) {
  //{children} === {props.children}

 
  return (
    <li>
      <button className={isSelected ? 'active' : ''} onClick={onSelect}>{children}</button>
    </li>
  );
}
