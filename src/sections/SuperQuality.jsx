import { arrowRight } from "../assets/icons";
import { shoe8 } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = () => {
  return (
    <div>
      <section
        id="about-us"
        className="flex justify-between items-center max-lg:flex-col g-10 w-full max-container"
      >
        <div className="flex flex-1 flex-col">
          <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
            We Provide
            <br />
            <span className="text-coral-red">Super</span>
            <span className="text-coral-red">Quality</span>Shoes
          </h2>
          <p className="mt-4 lg:max-w-lg info-text">
            Ensuring premium comfort and style, our meticulously crafted
            footwear is designed to elevate your experience, providing you with
            unmatched quality, innovation, and a touch of elegance.
          </p>
          <p className='mt-6 lg:max-w-lg info-text'>
          Our dedication to detail and excellence ensures your satisfaction
        </p>
          <div className="mt-11">
            <Button label="Show now" iconURL={arrowRight}/>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <img
            src={shoe8}
            alt="Shoe8"
            width={572}
            height={522}
            className="object-contain"
          />
        </div>
      </section>
    </div>
  );
};

export default SuperQuality;
