import React from 'react';
import Eye from '../../../assets/icons/eye.svg';

// const Input1 = React.forwardRef((props, ref) => {
//   const { type, name, placeholder, icon, onChange } = props;
//   return (
//     <div className="relative drop-shadow-sm py-2">
//       {icon && (
//         <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
//           <img src={icon} alt="shop online at ekohub" className="w-6 h-5 object-contain" />
//         </div>
//       )}
//       <input
//         ref={ref}
//         type={type}
//         id={name || 'name-icon'}
//         className="bg-white border-gray-50 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full pl-12 p-4  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
//         placeholder={placeholder}
//         onChange={onChange}
//       />
//       {type === 'password' && (
//         <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
//           <img src={Eye} className="w-5 h-4 mr-2 -ml-1 object-contain" alt="shop online at ekohub" />
//         </div>
//       )}
//     </div>
//   );
// });

const Input1 = React.forwardRef(
  (
    {
      type,
      placeholder,
      icon,
      passIcon,
      onChange,
      required,
      onToggle,
      ...props
    },
    ref,
  ) => {
    return (
      <div className="relative drop-shadow-sm py-2">
        {icon && (
          <span className="absolute inset-y-0 left-0 flex items-center pl-2 pr-6 cursor-pointer">
            <img src={icon} alt="shop online at ekohub" className="w-6 h-5 object-contain" />
          </span>
        )}
        <input
          ref={ref}
          type={type}
          className=" block bg-white w-full border border-gray-50 text-gray-900 rounded-lg py-3 pl-9 pr-3 shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 focus:ring-1 sm:text-sm"
          placeholder={placeholder}
          onChange={onChange}
          required={required}
          {...props}
        />
        {passIcon && (
          <div
            onClick={onToggle}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
          >
            <img
              src={passIcon}
              className="w-5 h-4 mr-2 -ml-1 object-contain"
              alt="shop online at ekohub"
            />
          </div>
        )}
      </div>
    );
  },
);

const Input1M = React.forwardRef(
  ({ type, placeholder, icon, onChange, required, ...props }, ref) => {
    return (
      <div className="relative drop-shadow-sm mx-2">
        {icon && (
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <img src={icon} alt="shop online at ekohub" className="w-6 h-5 object-contain" />
          </span>
        )}
        <input
          ref={ref}
          type={type}
          className="block w-full border border-gray-100 text-gray-900 text-sm rounded-lg shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 focus:ring-1 sm:text-sm"
          placeholder={placeholder}
          onChange={onChange}
          required={required}
          {...props}
        />
        {type === 'password' && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
            <img
              src={Eye}
              className="w-5 h-4 mr-2 -ml-1 object-contain"
              alt="shop online at ekohub"
            />
          </div>
        )}
      </div>
    );
  },
);

function Input2({ icon, type, placeholder, onChange, className, ...props }) {
  return (
    <div className="w-80 w-full relative mr-3 md:mr-0 md:block">
      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
        <img src={icon} alt="shop online at ekohub" className="w-6 h-5 object-contain" />
      </span>
      <input
        type={type}
        id="email-adress-icon"
        className={
          className ||
          'block py-2.5 pl-9 pr-3 w-full text-gray-900 bg-gray-50 rounded-xl border border-gray-300 sm:text-sm focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
        }
        placeholder={placeholder}
        onChange={onChange}
        {...props}
      />
    </div>
  );
}

function InputM({ icon, type, placeholder, onChange, className, ...props }) {
  return (
    <div className="w-full relative mr-3 md:mr-0 md:block">
      <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
        {icon && (
          <img src={icon} alt="shop online at ekohub" className="w-6 h-5 mb-2 object-contain" />
        )}
      </div>
      <input
        type={type}
        id="email-adress-icon"
        className={
          className ||
          'block p-2.5 pl-12 w-full text-gray-900 bg-gray-50 rounded-xl border border-gray-300 sm:text-sm focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500'
        }
        placeholder={placeholder}
        onChange={onChange}
        {...props}
      />
    </div>
  );
}

const InputSelect = ({
  id,
  placeholder,
  data = [],
  onChange,
  name,
  ...props
}) => {
  return (
    <div className="py-2">
      <select
        id={id}
        className="block bg-white w-full border border-gray-50 text-gray-900 rounded-lg py-3 pl-3  shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 focus:ring-1 sm:text-sm"
        {...props}
        onChange={onChange}
        name={name}
      >
        <option value="">{placeholder}</option>
        {data.map((index, i) => {
          return (
            <option key={i} value={index?.id || index?.value}>
              {index?.name || index?.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

const InputTextArea = ({
  id,
  placeholder,
  name,
  onChange,
  required,
  rows,
  ...props
}) => {
  return (
    <div className="py-2">
      <textarea
        name={name}
        id={id}
        rows={rows}
        className="boxsizingBorder bg-white p-2 border-none rounded-2xl focus:border-red-500 "
        placeholder={placeholder}
        required={required}
        onChange={onChange}
        {...props}
      ></textarea>
    </div>
  );
};

export { Input1, Input2, InputM, InputSelect, InputTextArea, Input1M };
