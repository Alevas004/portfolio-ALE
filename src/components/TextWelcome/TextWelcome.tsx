

const TextWelcome = () => {

  return (
    <div className="flex flex-col items-center justify-center w-full text-white">
      <h2 id="heading" className="text-center text-4xl md:text-6xl hover:text-black transition-colors duration-200">
        I don’t have all the answers <span className="uppercase text-[var(--color-texto)]"> (yet), </span> but I know how to find them.😉
      </h2>
      <p id="subheading" className="">
        #opentowork
      </p>
    </div>
  );
};

export default TextWelcome;
