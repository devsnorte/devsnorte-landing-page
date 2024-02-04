import ImageHero from "../ImageHero"
import css from './style.module.css'

const Hero = () => {
    return <div className="px-6">
        <div className="w-[80%] mx-auto my-96 relative">
            <hr className={`w-20 absolute right-0 -top-10 ${css.line}`} />
            <ImageHero />
            <p className={css.text}>A maior comunidade do norte do Brasil</p>
            <hr className={`w-40 absolute right-0 ${css.line}`} />
        </div>
    </div>
}

export default Hero