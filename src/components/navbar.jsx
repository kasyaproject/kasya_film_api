const navbar = () => {
  return (
    <nav className="bg-transparent border-gray-200">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="./kasya_film.png" className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Kasya Film
          </span>
        </a>
      </div>
    </nav>
  );
};

export default navbar;
