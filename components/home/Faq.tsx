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
      "Nous livrons généralement sous 24 à 48 heures dans les grandes villes et 2 à 5 jours dans les zones reculées.",
  },
  {
    question: "Comment contacter le service client ?",
    answer:
      "Vous pouvez nous contacter par téléphone ou via notre formulaire de contact disponible 24/7, ou directement sur WhatsApp.",
  },
  {
    question: "Comment retourner un article ?",
    answer:
      "Vous disposez de 7 jours après réception pour retourner un article qui ne vous convient pas. Le remboursement est effectué sous 48h.",
  },
];

export default function FAQ() {
  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-12">

      {/* Titre */}
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
        Questions fréquentes
      </h2>

      {/* Accordion */}
      <Accordion type="single" collapsible className="w-full mb-12">
        {faqItems.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {/* Section Marketing ajoutée proprement */}
      <div className="bg-orange-50 rounded-2xl p-6 md:p-8 text-justify">
        <p className="text-sm md:text-base text-gray-700 mb-4 leading-relaxed">
          KORASTORE s'adresse principalement à une clientèle qui recherche de la proximité, de la transparence et de la qualité sans compromis.
        </p>
        <p className="text-sm md:text-base text-[#FB8500] font-bold leading-relaxed">
          Des prix cassés pour chaque saison, chaque fête et chaque fin de mois : commandez sans crainte, payez à l'arrivée!
        </p>
      </div>

    </section>
  );
}