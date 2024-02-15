import ImageHero from "../ImageHero"
import Detail from "./detail";
import css from './style.module.css'

const Hero = () => {
    return (
      <div className="px-6">
        <div className="mx-auto my-64 relative max-w-screen-md">
          <hr className={`w-20 absolute right-1 -top-10 ${css.line}`} />
          <ImageHero />
          <p className={`mt-5 text-base ${css.text} lg:text-3xl`}>
            A maior comunidade do norte do Brasil
          </p>
          <hr className={`w-40 absolute right-0 ${css.line}`} />
        </div>
        <Detail />
      </div>
      
    );
}

export default Hero