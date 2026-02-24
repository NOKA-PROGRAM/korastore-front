"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";

const faqItems = [
  {
    question: "Quels sont les délais de livraison ?",
    answer:
      "Nous livrons généralement sous 24 à 48 heures dans les grandes villes.",
  },
  {
    question: "Comment contacter le service client ?",
    answer:
      "Vous pouvez nous contacter par téléphone ou via notre formulaire de contact disponible 24/7.",
  },
];

export default function FAQ() {
  return (
    <section className="w-full bg-[#f8f9fa] py-8 md:py-12">
      <div className="w-full max-w-4xl mx-auto px-4 md:px-6">
        <div className="mb-6 space-y-4">
          <p className="text-[15px] md:text-base text-gray-700 leading-relaxed">
            KORASTORE s'adresse principalement à une clientèle qui recherche de la proximité, de la transparence .
          </p>
          <p className="text-[15px] md:text-base text-red-500 font-medium leading-relaxed">
            Des prix cassés pour chaque saison, chaque fête et chaque fin de mois : commandez sans crainte, payez à l'arrivée !
          </p>
        </div>

        <h2 className="text-lg md:text-xl font-bold mb-2 text-gray-900 mt-8">
          FAQ
        </h2>

        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b-0">
              <AccordionTrigger className="text-[#00B4D8] hover:no-underline py-3 px-0 font-medium text-[15px] md:text-base">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-500 px-0 text-sm md:text-[15px] leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}