import TypeIt from "typeit-react";

const intro = () => {
  return (
    <div className="w-full px-4 mt-8 text-center dark:text-white">
      <TypeIt
        className="text-2xl sm:text-4xl font-bold text-center uppercase [text-shadow:_0_2px_4px_rgb(99_102_241_/_0.8)]"
        options={{
          speed: 75,
          waitUntilVisible: true,
        }}
        getBeforeInit={(instance) => {
          return instance
            .type("Noton", { delay: 300 })
            .move(-1)
            .delete(1)
            .type("ont")
            .move(null, { to: "END" })
            .type(" Film Haya")
            .pause(300)
            .delete(2)
            .type("hanya di")
            .move(null, { to: "END" })
            .type(" <em>kasya film</em>.")
            .pause(500)
            .break({ delay: 500 })
            .type("Jagonya soal Fim !!!")
            .pause(300)
            .move(-2, { delay: 150 })
            .delete(2)
            .pause(300)
            .type(" Film")
            .move(10)
            .go();
        }}
      />
      <hr className="h-px mx-auto mt-8 bg-gray-200 border-0 [text-shadow:_0_2px_4px_rgb(99_102_241_/_0.8)] dark:bg-gray-700"></hr>
    </div>
  );
};

export default intro;
