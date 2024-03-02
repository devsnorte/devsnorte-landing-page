import { useTranslation } from "react-i18next";

 const Newsletter = () =>  {
  const { t } = useTranslation();
  return (
<div className="mx-auto lg:w-6/12 mb-4 p-4 z-50">
  <div className="flex items-center">
    <div>
      <h2 className="text-3xl font-bold">NewsLetter</h2>
    </div>
    <div className="ml-5 border-l border-gray-600 pl-4">
      <p>{t("stayUpdated")}</p>
    </div>
  </div>

  <div className="pt-4">
    <p className="text-sm">
    {t("exclusiveContent")}
      </p>
  </div>

  <form className="sm:flex items-center sm:mx-auto gap-3 mt-4">
    <input
      id="name"
      type="name"
      className="w-full mb-2 sm:w-auto  bg-neutral-800 px-4 py-2 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-700"
      placeholder={t("fullName")}
    />
    <input
      id="email"
      type="email"
      className="w-full mb-2 sm:w-auto  bg-neutral-800 px-4 py-2 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-700"
      placeholder={t("email")}
    />
    <button
      type="submit"
      className="w-full mb-2 md:w-auto bg-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-700 sm:flex-shrink-0"
    >
      {t("subscribe")}
    </button>
  </form>
</div>

);

}

export default Newsletter
