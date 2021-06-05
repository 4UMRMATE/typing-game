function Blocks(props) {
  let { title, value } = props;
  return (
    <div className="Blocks">
      <h1>{title}</h1>
      <h4>{value}</h4>
    </div>
  );
}

export default Blocks;
