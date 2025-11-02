import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Reveal from "@/components/ui/Reveal";

const faqItems = [
  {
    question: "Ar programos tinka pradedančiosioms?",
    answer: "Taip! Visos programos yra pritaikytos bet kokio lygio moterims – nuo visiškai pradedančiųjų iki pažengusių. Mitybos planai yra paprasti ir lengvai suprantami, o treniruočių programos turi skirtingus intensyvumo lygius, kad galėtumėte pradėti nuo sau tinkamo tempo ir pamažu progresuoti.",
  },
  {
    question: "Kiek laiko galioja mitybos planas?",
    answer: "Mitybos planas yra jūsų visam laikui! Po įsigijimo gausite PDF formatą, kurį galėsite naudoti kaip tik norite. Tačiau rekomenduojame laikytis plano bent 8-12 savaičių, kad pamatytumėte tikrus rezultatus. Vėliau galite pritaikyti planą pagal savo poreikius arba pasikonsultuoti dėl atnaujintos versijos.",
  },
  {
    question: "Ar galiu sportuoti be įrangos?",
    answer: "Taip! Treniruočių programos yra pritaikytos tiek namų, tiek sporto salės sąlygoms. Namų treniruotėms nereikia jokios specialios įrangos – galėsite naudoti savo kūno svorį arba paprastus daiktus (pvz., vandens butelius). Jei turite sporto salės narystę, gausite ir pažangesnių pratimų variantus su įranga.",
  },
  {
    question: "Kaip vyksta vienkartinė konsultacija?",
    answer: "Vienkartinė konsultacija vyksta nuotoliniu būdu per Zoom platformą. Susitinkame jums patogiu laiku (konsultacija trunka apie 45-60 minučių). Prieš susitikimą gasite klausimyną, kurį užpildę padėsite man geriau suprasti jūsų tikslus ir poreikius. Konsultacijos metu aptarsime mitybą, treniruotes, jūsų iššūkius ir sudarysime aiškų veiksmų planą.",
  },
  {
    question: "Kuo skiriasi asmeninė priežiūra nuo vienkartinės konsultacijos?",
    answer: "Vienkartinė konsultacija – tai vienas susitikimas, kurio metu gausite rekomendacijas ir atsakymus į klausimus. Asmeninė priežiūra (VIP) – tai nuolatinis, ilgalaikis palydėjimas: kas savaitę tikriname progresą, koreguojame planą, atsakome į klausimus ir palaikome jūsų motyvaciją. Tai tarsi turėti asmeninę trenerę ir mitybos specialistę šalia visą laiką.",
  },
  {
    question: "Kiek laiko reikia pamatyti pirmuosius rezultatus?",
    answer: "Pirmieji energijos ir savijautos pokyčiai jaučiami jau per pirmąsias 1-2 savaites. Vizualūs kūno pokyčiai (svorio kritimas, raumų tonas) tampa pastebimi po 3-4 savaičių nuoseklaus darbo. Didžiausią transformaciją mato tos moterys, kurios laikosi plano 8-12 savaičių ir ilgiau. Svarbu suprasti, kad tai ne greitoji dieta – tai naujas, ilgalaikis gyvenimo būdas.",
  },
  {
    question: "Ar yra pinigų grąžinimo garantija?",
    answer: "Kadangi produktai yra skaitmeniniai (PDF planai, prieiga prie medžiagos), pinigų grąžinimas netaikomas po jų atsisiuntimo. Tačiau aš 100% užtikrinu kokybę ir esu visada pasirengusi atsakyti į jūsų klausimus bei padėti pritaikyti planą. Jei turite abejonių prieš perkant, parašykite man – mielai patariu, kuris variantas jums tinkamiausias!",
  },
];

export default function FAQ() {
  return (
    <div className="rl-section">
      <Reveal>
        <div className="rl-section-header">
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-rlText leading-tight rl-section-title">
              Dažniausiai užduodami <br />
              <span className="gradient-text">klausimai</span>
            </h2>
          </div>
          <div>
            <p className="rl-section-copy">
              Atsakymai į viską, kas jums gali rūpėti prieš pradedant.
            </p>
          </div>
        </div>
      </Reveal>
      <Reveal delay={0.2}>
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b">
              <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline py-4">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-neutral-700 pt-2 pb-4">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </div>
  );
}