type TitleProps = {
  title: string;
};

export default function Title({ title }: TitleProps) {
  return (
    <>
      <div className="h-28 mb-8 p-4 content-center">
        <div className="relative w-fit h-10 flex items-center justify-center">
          <div className="triangle absolute top-[-100%] right-[0%] translate-x-[0%] -translate-y-[0%]" />
          <h1 className="text-5xl ">{title}</h1>
          <div className="triangle2 absolute top-[100%] left-[0%] -translate-y-[-20%] rotate-90" />
        </div>
      </div>
    </>
  );
}
