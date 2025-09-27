import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import About from "./About";
import FAQs from "./Faq";
import Contact from "./Contact";

export default function Home() {
  const images=["/Image/balance.jpg", "/Image/data.jpg", "/Image/digital.jpg", "/Image/financial.jpg"]
  return (
    <div>
      <main className="w-full flex flex-col lg:flex-row gap-10 pt-12">
        <section className="w-full lg:w-[70%] p-4 lg:p-24">
          <h1 className="text-3xl lg:text-5xl font-bold">
            Tired of Accounting Confusions?
          </h1>
          <p className="py-8 w-[80%] text-justify">
            Your one step solution to resolve all accounting problems and
            resolution of all traditional ladger based confusions and records
            keeping of sales .
          </p>
          <button className="border-2 border-black rounded-xl px-4 py-2 mt-24 text-lg">
            Get Started
          </button>
        </section>
        <section className="w-full lg:w-[30%] lg:pr-12">
          <img src="/image/Hero_section.jpg" alt="" />
        </section>
      </main>
      {/* marquee  tag  for text sliding */}
      <div className="w-full text-3xl font-bold">
        <marquee
          behavior="scroll"
          direction="left"
          scrollamount="10"
          className="text-black"
        >
          ......We Made Accounting Easy.......We Made Accounting Easy.......We Made Accounting Easy.......We Made Accounting Easy.......We Made Accounting Easy.......
        </marquee>
      </div>
      {/* swiper tag for scroll the images */}
      <div className="w-full mx-auto mt-12 pb-5">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
         navigation={true}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
        }}
        >
         {images.map(image => <SwiperSlide>
            {" "}
            <img src={image} alt="logo1" className="h-72 " />
          </SwiperSlide>)}
            
        </Swiper>
      </div>
      <About/>
      <FAQs/>
      <Contact/>
    </div>
  );
}
