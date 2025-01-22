import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Download } from "lucide-react";

import repoIcon from "../../assets/images/icon-repo.svg";

import TypewrittenText from "../TypewrittenText";

import Repos from "../../constants/Repos";

const CarouselSection = () => {
  return (
    <div className="mt-10 w-full">
      <TypewrittenText
        text="Browse our course content below:"
        className="sub-heading font-mono px-10"
      />
      <Carousel
        opts={{
          align: "start",
        }}
        className="max-w-xl mx-auto p-2 md:justify-self-center z-50"
      >
        <CarouselPrevious className="hidden sm:flex text-black" />
        <CarouselContent>
          {Repos.map((repo) => (
            <CarouselItem key={repo.name} className="basis-1/2 md:basis-1/3">
              <Card
                className="w-auto h-full bg-slate-800 border-slate-500"
                aria-label={repo.name}
              >
                <CardContent className="p-2 h-full">
                  <div className="flex flex-col h-full">
                    <div className="flex h-1/3 items-center">
                      <img
                        src={repoIcon}
                        className="w-1/6 mr-3"
                        aria-hidden="true"
                      />
                      <h2 className="font-semibold text-blue-400">
                        {repo.name}
                      </h2>
                    </div>
                    <div className="mt-2 h-1/3">
                      <p className="text-sm text-white">{repo.description}</p>
                      {typeof repo.languages === "string" ? (
                        <div className="flex items-center mt-3">
                          <div
                            className={`rounded-full ${repo.colors} w-3 h-3`}
                            aria-hidden="true"
                          ></div>
                          <p className="ml-2 text-white">{repo.languages}</p>
                        </div>
                      ) : (
                        <div className="flex flex-wrap gap-x-4 mt-4">
                          {repo.languages.map((language, index) => (
                            <div
                              key={language}
                              className="flex items-center mt-1"
                            >
                              <div
                                className={`rounded-full ${repo.colors[index]} w-3 h-3`}
                                aria-hidden="true"
                              ></div>
                              <p className="ml-2 text-white">{language}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="flex items-center h-1/3 mt-16 justify-self-end">
                      {repo.link === "Coming Soon!" ? (
                        <p className="text-yellow-300 font-light">
                          {repo.link}
                        </p>
                      ) : (
                        <a
                          href={repo.link}
                          target="_blank"
                          className="text-sm text-white flex items-center"
                        >
                          <Download
                            className="mr-2 text-white"
                            aria-hidden="true"
                          />
                          Download Content
                        </a>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext className="hidden sm:flex text-black" />
      </Carousel>
    </div>
  );
};

export default CarouselSection;
