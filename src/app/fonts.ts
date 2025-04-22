import localFont from 'next/font/local'

export const aileron = localFont({
  src: [
    {
      path: '../../public/fonts/Aileron-Regular.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-aileron',
})