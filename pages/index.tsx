import Image from 'next/image';

import ts from '@/public/ts.png';
import react from '@/public/react.png';

export default function MainPage() {
  return (
    <section className="flex flex-col items-center max-w-xs mx-auto">
      <h1 className="font-sans font-extrabold text-4xl">Алмаз Калиев</h1>
      <p className="mt-1 opacity-80">Frontend разработчик</p>
      <div className="mt-5 flex items-center gap-3">
        <Image width={36} height={36} src={ts} quality={100} alt="TypeScript" />
        <Image width={36} height={36} src={react} quality={100} alt="ReactJS" />
      </div>
      <div className="flex items-center mt-10">
        <a href="mailto:almaz@kaliyev.dev">almaz@kaliyev.dev</a>
      </div>
    </section>
  );
};
