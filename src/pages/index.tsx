import { useTheme } from 'hooks/useTheme'
import Image from 'next/image'

export default function MainPage() {
  const { toggleTheme } = useTheme()

  return (
    <section className="flex flex-col items-center max-w-xs mx-auto pt-3">
      <Image
        alt="Алмаз Калиев"
        className="
          avatar
          rounded-full
          border-4
          border-primary
          cursor-pointer
          transition-all
          duration-500
          [transform-style:preserve-3d]
          group-hover:[transform:rotateY(180deg)]
        "
        height="180"
        onClick={toggleTheme}
        priority
        quality={80}
        src="/photo.webp"
        width="180"
      />
      <h1 className="font-sans font-extrabold text-4xl mt-5">Алмаз Калиев</h1>
      <p className="mt-1 text-hint">Frontend Developer</p>
      <div className="mt-5 flex items-center gap-3">
        <Image alt="TypeScript" height={28} quality={80} src="/ts.webp" width={28} />
        <Image alt="ReactJS" height={28} quality={80} src="/react.webp" width={28} />
      </div>
      <div className="flex items-center gap-3 mt-10">
        <a href="mailto:almaz@kaliyev.dev">email</a>
        <span className="text-hint">|</span>
        <a href="https://t.me/almaz_kaliyev" target="_blank">
          telegram
        </a>
      </div>
    </section>
  )
}
