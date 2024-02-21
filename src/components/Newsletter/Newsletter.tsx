 
import Section from "../Section"

const Newsletter = () =>  {
  return (

<>

 

<div className="mx-auto lg:w-6/12 mb-4 p-4 z-50">
  <div className="flex items-center">
    <div>
      <h2 className="text-3xl font-bold">NewsLetter</h2>
    </div>
    <div className="ml-5 border-l border-gray-600 pl-4">
      <p>Fique por dentro das novidades</p>
    </div>
  </div>

  <div className="pt-4">
    <p className="text-sm">
    Receba conteúdos exclusivos diretamente na sua caixa de entrada! Assine nossa newsletter e mantenha-se atualizado(a) sobre as novidades da comunidade. Cadastre-se agora mesmo!
      </p>
  </div>

  <form className="sm:flex items-center sm:mx-auto gap-3 mt-4">
    <input
      id="name"
      type="name"
      className="w-full mb-2 sm:w-auto  bg-neutral-800 px-4 py-2 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-700"
      placeholder="Nome completo"
    />
    <input
      id="email"
      type="email"
      className="w-full mb-2 sm:w-auto  bg-neutral-800 px-4 py-2 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-700"
      placeholder="Email"
    />
    <button
      type="submit"
      className="w-full mb-2 md:w-auto bg-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-700 sm:flex-shrink-0"
    >
      Inscrever-se
    </button>
  </form>
</div>


</>


);

}

export default Newsletter
