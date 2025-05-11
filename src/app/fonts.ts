import localFont from 'next/font/local'

export const aileron = localFont({
  src: [
    {
      path: '../../public/fonts/Aileron-Regular.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-aileron'
})

export const cartograph = localFont({
  src: [
    {
      path: '../../public/fonts/cartograph-mono-cf-regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/cartograph-mono-cf-bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-cartograph'
})