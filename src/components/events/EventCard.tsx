import { Event } from '@/types/components/eventsTypes'
import Image from 'next/image'
import Link from 'next/link'

export function EventCard({ event }: { event: Event }) {
  return (
    <Link className='flex w-[256px] h-[300px] ml-2' href={event.url}>
      <article className='w-[256px] h-[300px] rounded-lg bg-white'>
        <div className='bg-cover bg-no-repeat'>
          <Image alt='Imagem do Evento' className='rounded-t-lg' height={600} priority={false} src={event.images.original} width={800} />
        </div>
        <div className='p-6'>
          <div className='mb-2'>
            <h5 className='text-brand font-bold text-xl'>{event.name}</h5>
            <address className='text-gray-700 text-sm font-semibold'>{event.location.city}</address>
          </div>
          <div className='flex items-center'>
            <p className='text-gray-600'>{event.end_date_formats.pt}</p>
          </div>
        </div>
      </article>
    </Link>
  )
}
