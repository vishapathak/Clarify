import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
export default function Home() {
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
      {/* marquee  tag */}
      <div className="w-full text-3xl font-bold">
        <marquee
          behavior="scroll"
          direction="left"
          scrollamount="10"
          className="text-black"
        >
          .......Our Vision is to make Accounting Easy.......Our Vision is to make Accounting Easy.......Our
          vision is to Make Accounting Easy.......We Vision is to Make Accounting Easy.......Our Vision is make
          Accounting Easy.......
        </marquee>
      </div>
      <div className=" w-[600px] mx-auto mt-12">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          navigation={true}
          loop={true}
        >
          <SwiperSlide>
            {" "}
            <img src="/Image/balance.jpg" alt="logo1" className="h-40 " />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/Image/data.jpg" alt="logo1" className="h-40 " />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src="/Image/financial.jpg" alt="logo1" className="h-40" />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="Image/alessio-zaccaria-MplUOXqEUK0-unsplash.jpg"
              alt="logo1"
              className="h-40 "
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
