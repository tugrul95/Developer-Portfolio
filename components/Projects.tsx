import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects = () => {
  return (
    <section id="projects">
      <h1 className="text-white font-semibold text-center text-6xl pt-[35px]">
        PROJECTS
      </h1>
      <p className="tracking-[0.5em] text-center text-transparent font-light pb-5 bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500 text-1xl">
        EXPLORE NOW
      </p>
      <div className="container mx-auto 2xl">
        <div className="flex-col flex md:flex-row mt-7">
          {/* Scribble School App */}
          <Link
            href="https://scribble-school.netlify.app/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/scribble-school.png"
                height={150}
                width={150}
                alt="WebHR Project"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">Scribble School App</p>
              </div>
            </div>
          </Link>

          {/* VIP Clinic */}
          <Link
            href="https://vip-clinic.netlify.app/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/vip-clinic.png"
                height={150}
                width={150}
                alt="HireSide"
              />
              <div className="p-3 ml-3">
                <p className="text-white font-semibold text-xl">VIP Clinic</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="flex-col flex md:flex-row mt-7"> {/* Moved down */}
          {/* Animals of Africa */}
          <Link
            href="https://github.com/tugrul95/SwiftUI-Animals-of-Africa"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/animals-of-africa.png"
                height={150}
                width={150}
                alt="VergeSystems"
              />
              <div className="p-3 ml-3">
                <p className="text-white font-semibold text-xl">
                  Animals of Africa
                </p>
              </div>
            </div>
          </Link>

          {/* Crypto-App */}
          <Link
            href="https://github.com/tugrul95/Crypto-App"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5" style={{ marginLeft: '17px' }}>
              <Image
                src="/crypto-app.png"
                height={150}
                width={150}
                alt="VergeSystems"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">
                  Crypto App 
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex-col flex md:flex-row mt-7"> {/* Moved down */}
          {/* SwiftUI-Weather-App */}
          <Link
            href="https://github.com/tugrul95/SwiftUI-Weather-App"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/weather-app.png"
                height={150}
                width={150}
                alt="VergeSystems"
              />
              <div className="p-3 ml-3">
                <p className="text-white font-semibold text-xl">
                  Weather-App
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="https://bikers-corner.netlify.app/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5" style={{ marginLeft: '53px' }}>
              <Image
                src="/bikers-corner.png"
                height={150}
                width={150}
                alt="VergeSystems"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">
                  Bikers Corner 
                </p>
              </div>
            </div>
          </Link>

          {/* E-commerce app */}
          <Link
            href="https://my-store-ecommerce.netlify.app/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5" style={{ marginLeft: '53px' }}>
              <Image
                src="/my-store.png"
                height={150}
                width={150}
                alt="VergeSystems"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">
                  E-commerce app  
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;