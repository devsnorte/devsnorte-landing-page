"use client"

import { useTranslation } from 'react-i18next';
import LoadingIcon from '/public/icons/loading.svg'
import { useEffect, useState } from 'react';

export const EventLoader = () => {
  const { t } = useTranslation();
  const [ isClient, setIsClient ] = useState(false)

  useEffect(() => setIsClient(true), [])

  return (
    <div className='flex gap-2 m-auto items-center'>
      <p className='text-white text-lg'>{isClient && t("loading")}</p>
      <LoadingIcon className="text-white w-8 h-8 animate-spin" />
    </div>
  )
}