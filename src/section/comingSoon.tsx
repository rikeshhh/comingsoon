export default function ComingSoon() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center font-bagel bg-[#4f46e5] text-white  w-full">
      <div className="flex flex-col justify-center gap-6 items-center container mx-auto text-center -mt-[149px] md:mt-0">
        <video
          autoPlay
          loop
          muted
          className="size-56 md:size-96 object-cover"
        >
          <source src="/sweven.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>{" "}
       <div className="flex flex-col justify-center items-center -mt-12 gap-2">
       <h1 className="text-3xl md:text-6xl font-black ">Website Coming Soon...</h1>
       <p className=" tracking-wider max-md:text-xs font-montserrat">Still figuring things out, Isn’t that life? 😄 </p>
       </div>
      </div>
    </section>
  );
}
