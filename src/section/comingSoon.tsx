export default function ComingSoon() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center font-bagel bg-[#4f46e5] text-white  w-full">
      <div className="flex flex-col justify-center gap-4 items-center container mx-auto">
        <video
          autoPlay
          loop
          muted
          className="size-56 md:size-96 object-cover"
        >
          <source src="/sweven.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>{" "}
        <h1 className="text-4xl md:text-6xl font-black">Coming Soon...</h1>
        <p className=" tracking-wider md:tracking-[8px] font-montserrat">Under Construction</p>
      </div>
    </section>
  );
}
