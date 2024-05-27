import { useTranslation } from 'react-i18next';
import LoadingIcon from '/public/icons/loading.svg'

export const EventLoader = ({isClient}: {isClient: boolean}) => {
  const { t } = useTranslation();
  return (
    <div className='flex gap-2 m-auto items-center'>
      <p className='text-white text-lg'>{isClient && t("loading")}</p>
      <LoadingIcon className="text-white w-8 h-8 animate-spin" />
    </div>
  )
}