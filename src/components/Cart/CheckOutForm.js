const CheckOut = (props) => {
  return (
    <form>
      <div>
        <label htmlFor='name'>Full Name</label>
        <input type='text' id='name' />
      </div>
      <div>
        <label htmlFor='email'>E-mail</label>
        <input type='email' id='email' />
      </div>
      <div>
        <label htmlFor='address'>Address</label>
        <input type='text' id='address' />
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default CheckOut;
