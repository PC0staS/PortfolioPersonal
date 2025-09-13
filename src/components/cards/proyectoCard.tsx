'use client'
import { CldImage } from "next-cloudinary";
import Image from "next/image";
import Link from "next/link";

export default function ProyectoCards({ route,  title, photo, repo, demolink }: {route: string; title: string; photo: string; repo: string; demolink: string; }) {
    const decodedTitle = decodeURIComponent(title);
    return (
        <Link href={`/proyectos/${route}`} onClick={e => e.stopPropagation()} className="flex flex-col mt-3 w-fit border-2 border-black items-center justify-center rounded-xl cursor-pointer hover:border-2 hover:border-white transition-all bg-[#2e2e2e]">
            <CldImage src={photo} alt={decodedTitle} width={1000} height={1000} className="w-[450px] h-[250px] object-cover rounded-t-xl" style={{ viewTransitionName: `proyecto-hero-${photo}` }}  />
            <div className="flex flex-row items-center justify-between w-full px-2 py-1">
                <div>
                    <h3 className="text-lg font-semibold pt-2">{decodedTitle}</h3>
                </div>
                <div className="flex items-center">
                    <button onClick={() => window.open(repo, '_blank')} className="cursor-pointer hover:scale-105 transition-all"><Image src="/svg/github-mark.png" alt="GitHub" width={24} height={24} /></button>
                    {demolink && (
                        <button onClick={() => window.open(demolink, '_blank')} className="cursor-pointer hover:scale-105 transition-all"><Image src="/svg/hyperlink.png" alt="Demo" width={30} height={30} /></button>
                    )}
                </div>
            </div>
        </Link>
    );
}
