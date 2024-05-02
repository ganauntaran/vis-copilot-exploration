import Image from 'next/image'
import Link from 'next/link'
import React, { HTMLProps } from 'react'

const Navigation = (props: HTMLProps<HTMLDivElement>) => (
  <div className="flex flex-col justify-center px-16 w-full bg-blue-800 shadow-sm max-md:px-5 max-md:max-w-full">
    <div className="flex gap-5 justify-between px-8 py-5 mx-5 max-md:flex-wrap max-md:px-5 max-md:mr-2.5 max-md:max-w-full">
      <div className="flex gap-5 justify-between max-md:flex-wrap">
        <div className="flex justify-center items-center my-auto">
          <Image
            loading="lazy"
            src="/Digree White.png"
            alt="Digree"
            width={68}
            height={37}
            className="aspect-[1.85]"
          />
        </div>
        <Link href="/" className="px-4 pt-2.5 pb-3 text-base font-semibold text-center text-white rounded-3xl bg-white bg-opacity-10">
          Pengaturan Akun
        </Link>
        <Link href="/" className="px-4 pt-2.5 pb-3 text-base font-medium text-center rounded-3xl text-white text-opacity-80">
          Pengaturan Server
        </Link>
      </div>
      <div className="flex gap-5 justify-between">
        <div className="flex flex-col my-auto">
          <div className="text-sm font-semibold text-white">Robert Fox</div>
          <div className="text-xs text-white text-opacity-50">Super Admin</div>
        </div>
        <Image
          loading="lazy"
          src="/logout.svg"
          alt="Logout"
          width={40}
          height={40}
          className="shrink-0 aspect-square"
        />
      </div>
    </div>
  </div>
)

export default Navigation
