function Button1({ title, type, onClick, disabled, btnstyle }) {
  return (
    <button
      style={btnstyle}
      type={type || 'button'}
      onClick={onClick}
      disabled={disabled}
      className="w-full md:mr-0 md:block focus:outline-none text-white bg-red-600 hover:bg-red-600 focus:ring-4 focus:ring-red-300 font-medium rounded-xl text-sm py-4 my-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
    >
      {title}
    </button>
  );
}

function Button2({ title, onClick, disabled, icon, classes, btnstyle }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type="button"
      className={classes}
      style={btnstyle}
    >
      <img src={icon} className="w-10 h-6 mr-2 -ml-1 object-contain" alt="shop online at Ekohub" />
      {title}
    </button>
  );
}

export { Button1, Button2 };
