import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import TypewrittenText from "@/components/TypewrittenText";

import Facilitators from "@/constants/Facilitators";

const FacilitatorsSection = () => {
  return (
    <div className="mt-10 w-full">
      <TypewrittenText
        text="Meet Our Facilitators"
        className="text-2xl sub-heading font-mono"
      />
      <Carousel
        opts={{
          align: "start",
        }}
        className="max-w-xl mx-auto p-2 md:justify-self-center z-50"
      >
        <CarouselPrevious className="hidden sm:flex text-black" />
        <CarouselContent>
          {Facilitators.map((facilitator) => (
            <CarouselItem
              key={facilitator.name}
              className="basis-1/2 md:basis-1/3"
            >
              <Card
                className="w-auto h-full bg-slate-800 border-slate-500"
                aria-label={facilitator.name}
              >
                <CardContent className="p-2 h-full">
                  <div className="flex flex-col h-full">
                    <img
                      src={facilitator.img}
                      className="w-50 m-5 rounded-full hover:scale-110 transition duration-500"
                    />
                    <div className="mt-2 mb-5">
                      <p className="text-white text-center">
                        {facilitator.description}
                      </p>
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

export default FacilitatorsSection;
