import React from "react";
import Marquee from "react-fast-marquee";
import worker from "../../../public/worker.jpeg";
import HorizontalAccordion from "./HorizontalAccor";
import Accordion from "./Accordion";

const Section1 = () => {
  return (
    <div className="  border-t border-t-[#434345] w-full flex flex-col items-end justify-center">
      <div className="w-[90%] flex px-5 pt-32 pb-10  border-l border-[#434345] flex-col gap-5">
        <h3 className="text-white text-[32px]">
          With 20+ years of providing software development services for
          technological enterprises, successful startups, and AI-empowered
          companies worldwide, our developers demonstrate exceptional efficiency
          and expertise.
        </h3>
        <p className="text-white text-right">
          On average, Vention clients benefit £475k from annual savings as a
          result of <br /> our collaboration.
        </p>
      </div>
      <div className="w-[90%] px-5 pr-10 py-5 flex border-t border-l border-[#434345] flex-col">
        <div className="flex items-start justify-between">
          <h2 className="text-[24px] text-[#ff6947]">Key stats</h2>
          <div className="flex gap-32">
            <div>
              <h1 className="text-[#ff6947] text-[68px]">500+</h1>
              <p className="text-white text-[18px]">award-winning clients</p>
            </div>
            <div>
              <h1 className="text-[#ff6947] text-[68px]">$15B+</h1>
              <p className="text-white text-[18px]">in client acquisitions</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between pt-24">
          {[
            { stat: "36", label: "month average engagement" },
            { stat: "20+", label: "client IPOs supported" },
            { stat: "20+", label: "years of experience" },
            { stat: "3K+", label: "world-class engineers" },
          ].map(({ stat, label }) => (
            <div key={stat}>
              <h1 className="text-[#ff6947] text-[68px]">{stat}</h1>
              <p className="text-white text-[18px]">{label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-[90%] px-5 pr-10 py-5 pt-32 flex border-t border-l border-[#434345] flex-col">
        <h3 className="text-white text-[40px]">Trusted by the best</h3>
        <p className="text-white text-[16px]">
          Companies ranging from early-stage startups to Fortune 500 enterprises
          partner with us to develop game-changing growth solutions.
        </p>
      </div>
      <div className="w-[90%] -z-10 px-5 pr-10 py-10   flex border-t border-l border-[#434345] flex-col">
        <Marquee>
          <div className="mx-[60px] text-white text-[40px]">CocaCola</div>
          <div className="mx-[60px] text-white text-[40px]">Costa</div>
          <div className="mx-[60px] text-white text-[40px]">ClassPass</div>
          <div className="mx-[60px] text-white text-[40px]">BeVi</div>
          <div className="mx-[60px] text-white text-[40px]">EY</div>
          <div className="mx-[60px] text-white text-[40px]">POSTman</div>
          <div className="mx-[60px] text-white text-[40px]">PayPal</div>
        </Marquee>
      </div>
      <div className="w-[90%] flex border border-[#434345]">
        <div className="flex w-[45%] h-[400px] object-fit">
          <img src={worker} alt="" />
        </div>
        <div className="flex items-end justify-start">
          <h2 className="pl-8 pb-4 text-white text-[80px]">How we work</h2>
        </div>
      </div>
      <HorizontalAccordion />
      <div className="w-[90%] px-5  py-10 pt-32 flex items-center justify-end border-t border-l border-[#434345]">
        <div className="w-[50%] flex flex-col gap-4">
          <span className="text-[22px] text-[#ff6947]">
            We speak your language
          </span>
          <h1 className="text-white text-[32px]">
            Wondering how well we know your industry? Curious which tech stacks
            we support?
          </h1>
          <p className="text-white text-[16px]">
            Spanning 30+ verticals and 25+ technologies, our team has designed
            and implemented innovative solutions to suit even the most unique
            needs.
          </p>
        </div>
      </div>
      <div className="w-[90%] p-5 flex items-start justify-between border-t border-l border-[#434345]">
        <p className="text-[22px]  w-[50%] text-[#ff6947]">Expertise</p>
        <div className="w-[50%] flex items-center justify-between">
          <ul id="modalList2">
            <li>Software development</li>
            <li>Web development</li>
            <li>Mobile development</li>
            <li>Startup services</li>
            <li>Cloud services</li>
          </ul>
          <ul id="modalList2">
            <li>Blockchain</li>
            <li>AR/VR</li>
            <li>Salesforce</li>
            <li>Artificial intelligence</li>
            <li>Internet of things</li>
          </ul>
        </div>
      </div>
      <div className="w-[90%] p-5 flex items-start justify-between border-t border-l border-[#434345]">
        <p className="text-[22px]  w-[50%] text-[#ff6947]">Industries</p>
        <div className="w-[50%] flex items-center justify-between">
          <ul id="modalList2">
            <li>Software development</li>
            <li>Web development</li>
            <li>Mobile development</li>
          </ul>
          <ul id="modalList2">
            <li>Blockchain</li>
            <li>AR/VR</li>
            <li>Salesforce</li>
          </ul>
        </div>
      </div>
      <div className="w-[90%] px-5  py-6 pt-32 flex items-center justify-end border-t border-l border-[#434345]">
        <div className="w-[50%] flex flex-col gap-4">
          <h1 className="text-white text-[32px]">Discover Vention in action</h1>
          <p className="text-white text-[16px]">
            See firsthand what sets us apart — and how our approach has
            translated into exponential growth for our clients worldwide. Hit
            play to begin your journey with us.
          </p>
        </div>
      </div>
      <div className="w-[90%] py-8  px-10  flex items-center justify-end border-t border-l border-[#434345]">
        <iframe
          width="1040"
          height="500"
          src="https://www.youtube.com/embed/CpO-2w7KjpE?si=ZeyI_7YkRSsb6Hyt"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <div className="w-[90%] px-5 pr-10 py-5 pt-32 flex border-t border-l border-[#434345] flex-col">
        <h3 className="text-white text-[40px]">Partnerships</h3>
        <p className="text-white text-[16px]">
          Our network includes the world’s top tech leaders, ensuring that our
          developers always have access to cutting-edge technologies and
          products.
        </p>
      </div>
      <div className="w-[90%] -z-10 px-5 pr-10 py-10   flex border-t border-l border-[#434345] flex-col">
        <Marquee>
          <div className="mx-[60px] text-white text-[40px]">CocaCola</div>
          <div className="mx-[60px] text-white text-[40px]">Costa</div>
          <div className="mx-[60px] text-white text-[40px]">ClassPass</div>
          <div className="mx-[60px] text-white text-[40px]">BeVi</div>
          <div className="mx-[60px] text-white text-[40px]">EY</div>
          <div className="mx-[60px] text-white text-[40px]">POSTman</div>
          <div className="mx-[60px] text-white text-[40px]">PayPal</div>
        </Marquee>
      </div>
      <div className="w-[90%]  px-5  pb-4 pt-28   flex justify-center items-end border-t border-l border-[#434345]">
        <h2 className="text-white text-[40px]">Our work</h2>
      </div>
      <div className="w-[90%]      flex justify-center items-end border-t border-l border-[#434345]">
        <Accordion />
      </div>
      <div className="w-[90%] px-5 pr-10 py-5 pt-32 flex border-t border-l border-[#434345] flex-col">
        <h3 className="text-white text-[40px]">
          Recognized as a leader by those in the know
        </h3>
        <p className="text-white text-[16px]">
          Year after year, Vention has been counted among best-in-class
          companies by the industry’s most respected institutions.
        </p>
      </div>
      <div className="w-[90%] -z-10 px-5 pr-10 py-10   flex border-t border-l border-[#434345] flex-col">
        <div className="flex">
          <div className="mx-[30px] text-white text-[40px]">CocaCola</div>
          <div className="mx-[30px] text-white text-[40px]">Costa</div>
          <div className="mx-[30px] text-white text-[40px]">ClassPass</div>
          <div className="mx-[30px] text-white text-[40px]">BeVi</div>
          <div className="mx-[30px] text-white text-[40px]">EY</div>
          <div className="mx-[30px] text-white text-[40px]">POSTman</div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
