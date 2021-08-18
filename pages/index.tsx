import React from 'react';

import Image from 'next/image';

import js from '@/public/js.png';
import ts from '@/public/ts.png';
import react from '@/public/react.png';
import redux from '@/public/redux.png';

const MainPage: React.FC = () => (
  <section className="flex flex-col items-center max-w-xs mx-auto">
    <h1 className="font-sans font-extrabold text-4xl">Алмаз Калиев</h1>
    <p className="mt-1 opacity-80">Frontend разработчик</p>
    <div className="mt-5 flex items-center gap-3">
      <Image width={36} height={36} src={js} quality={100} alt="JavaScript" />
      <Image width={36} height={36} src={ts} quality={100} alt="JavaScript" />
      <Image width={36} height={36} src={react} quality={100} alt="JavaScript" />
      <Image width={36} height={36} src={redux} quality={100} alt="JavaScript" />
    </div>
    <div className="flex items-center mt-10">
      <a href="mailto:almaz@kaliyev.dev">almaz@kaliyev.dev</a>
    </div>
  </section>
);

export default MainPage;
