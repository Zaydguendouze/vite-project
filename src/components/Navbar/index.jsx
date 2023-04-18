export default function Navbar(props) {
  const user = props.usr;
  return <div>{user.firstName}</div>;
}
