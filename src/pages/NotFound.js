const style = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
};

const NotFound = () => {
  return (
    <div style={style}>
      <h1>404</h1>
      <p>page not found </p>
    </div>
  );
};

export default NotFound;
