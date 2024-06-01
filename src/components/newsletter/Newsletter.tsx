'use client'

import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

export function Newsletter() {
  const { t } = useTranslation()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div className='mx-auto lg:w-6/12 mb-4 p-4 z-50'>
      <div className='flex items-center'>
        <div>
          <h2 className='text-3xl font-bold'>NewsLetter</h2>
        </div>
        <div className='ml-5 border-l border-gray-600 pl-4'>{isClient ? <p>{t('stayUpdated')}</p> : null}</div>
      </div>

      <div className='pt-4'>
        <p className='text-sm'>{isClient ? t('exclusiveContent') : null}</p>
      </div>

      <form className='sm:flex items-center sm:mx-auto gap-3 mt-4'>
        <input
          className='w-full mb-2 sm:w-auto bg-neutral-800 px-4 py-2 placeholder-gray-500 
          focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-700'
          id='name'
          placeholder={isClient ? t('fullName') : ''}
          type='name'
        />
        <input
          className='w-full mb-2 sm:w-auto  bg-neutral-800 px-4 py-2 placeholder-gray-500 focus:outline-none focus:ring-2
        focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-700'
          id='email'
          placeholder={isClient ? t('email') : ''}
          type='email'
        />
        <button className='w-full mb-2 md:w-auto px-4 py-2 min-w-max text-white bg-black dark:bg-gray-300 dark:text-gray-700 dark:hover:bg-gray-400' type='submit'>
          {isClient ? t('subscribe') : null}
        </button>
      </form>
    </div>
  )
}
