const TextInput = ({ label, name, type }) => {
  return (
    <div className='space-y-2'>
      <label htmlFor={name}>{label}</label>
      <input
        required
        id={name}
        name={name}
        type={type}
        className='px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400'
      />
    </div>
  );
};

export default TextInput;
