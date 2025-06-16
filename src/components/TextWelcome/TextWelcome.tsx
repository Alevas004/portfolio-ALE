

const TextWelcome = () => {

  return (
    <div className="flex flex-col items-center justify-center h-full w-full text-white">
      <h2 id="heading" className="text-center text-7xl hover:text-black transition-colors duration-300">
        Junior <span className="uppercase text-[var(--color-texto)]"> but not </span> too much 😉
      </h2>
      <p id="subheading" className="">
        #opentowork
      </p>
    </div>
  );
};

export default TextWelcome;
