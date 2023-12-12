export default function TabButton({ children, isSelected, ...props }) {
  //{children} === {props.children}

 
  return (
    <li>
      <button className={isSelected ? 'active' : ''} {...props}>{children}</button>
    </li>
  );
}
