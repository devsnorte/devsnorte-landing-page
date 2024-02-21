import css from "./style.module.css";
import DevsNorte from "/public/icons/devsnorte-hero.svg";
import Star from "/public/icons/star.svg";

const ImageHero = () => {
  return (
    <div className="relative">
      <DevsNorte className={css["devsnorte-svg"]} />
      <Star className={css.star} />
    </div>
  );
};

export default ImageHero;
