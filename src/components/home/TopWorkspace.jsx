import Heading from "../common/cards/Heading";

const TopWorkspace = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="flex flex-col md:gap-[60px] gap-[30px] font-inter py-[30px] md:py-[60px]  ">
            <Heading
              title={"Top Featured Workspaces"}
              cMain={"max-w-[895px] w-full mx-auto"}
              pagragraph={"Handpicked workspaces loved by remote professionals and teams."}
              cParagraph={" md:w-[507px] w-[232px]"}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default TopWorkspace;
