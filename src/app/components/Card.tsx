// interface CardProps {
//   title: string;
//   description: string;
//   buttonText: string;
//   color: string; 
//   backgroundColor:string
//   buttonTextColor:string
//   textColor:string
// }

// const Card = ({ title, description, buttonText, color, backgroundColor, buttonTextColor, textColor }: CardProps) => {
//   return (
//     <div className={`${backgroundColor} ${ textColor} shadow-sm rounded-sm p-4 `}>
//       <h3 className="text-base font-semibold  mb-2">{title}</h3>
//       <p className="text-sm  mb-8">{description}</p>
//       <button
//         className={`${color} ${buttonTextColor} text-sm  px-4 py-4 rounded-md hover:opacity-90 transition w-full `}
//       >
//         {buttonText}
//       </button>
//     </div>
//   );
// };

// export default Card;


interface CardProps {
  title: string;
  description: string;
  buttonText: string;
  color: string;
  backgroundColor: string;
  buttonTextColor: string;
  textColor: string;
}

const Card = ({
  title,
  description,
  buttonText,
  color,
  backgroundColor,
  buttonTextColor,
  textColor,
}: CardProps) => {
  return (
    <div
      className={`${backgroundColor} ${textColor} shadow-sm rounded-md p-4 sm:p-6 flex flex-col justify-between h-full`}
    >
      <div>
        <h3 className="text-base sm:text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm sm:text-base mb-6">{description}</p>
      </div>
      <button
        className={`${color} ${buttonTextColor} text-sm sm:text-base px-4 py-3 rounded-md hover:opacity-90 transition w-full`}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default Card;
