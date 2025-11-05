'use client'

import { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { GradientButton } from './ui/GradientButton'

type QuizAnswer = 'programos' | 'mityba' | 'vip' | 'konsultacija' | 'premium'

interface QuizModalProps {
  trigger?: React.ReactNode
}

const questions = [
  {
    id: 1,
    question: 'Koks tavo pagrindinis tikslas?',
    options: [
      { value: 'premium' as QuizAnswer, label: 'Visiška transformacija – ir treniruotės, ir mityba' },
      { value: 'programos' as QuizAnswer, label: 'Numesti svorį / sutvirtėti (treniruočių programa)' },
      { value: 'mityba' as QuizAnswer, label: 'Pagerinti mitybos įpročius (mitybos planas)' },
      { value: 'vip' as QuizAnswer, label: 'Reikia nuolatinio palaikymo (asmeninė priežiūra)' },
      { value: 'konsultacija' as QuizAnswer, label: 'Vienkartinis patarimas (konsultacija 1:1)' },
    ],
  },
  {
    id: 2,
    question: 'Kiek laiko gali skirti per savaitę?',
    options: [
      { value: 'premium' as QuizAnswer, label: 'Noriu tvarkyti ir mitybą, ir treniruotis' },
      { value: 'programos' as QuizAnswer, label: '3–5 treniruotės (programa tinka)' },
      { value: 'mityba' as QuizAnswer, label: 'Nedaug laiko – noriu tvarkyti mitybą' },
      { value: 'vip' as QuizAnswer, label: 'Noriu plano ir savaitinių patikrinimų' },
      { value: 'konsultacija' as QuizAnswer, label: 'Vienas susitikimas – to pakaktų' },
    ],
  },
  {
    id: 3,
    question: 'Kaip sportuosi?',
    options: [
      { value: 'premium' as QuizAnswer, label: 'Noriu prieigos prie visų video ir mitybos plano' },
      { value: 'programos' as QuizAnswer, label: 'Namuose / salėje pagal video programą' },
      { value: 'mityba' as QuizAnswer, label: 'Daugiau dėmesio mitybai nei sportui' },
      { value: 'vip' as QuizAnswer, label: 'Reikia individualaus plano ir kontrolės' },
      { value: 'konsultacija' as QuizAnswer, label: 'Noriu tik korekcijų ir gairių' },
    ],
  },
  {
    id: 4,
    question: 'Kas tau svarbiausia?',
    options: [
      { value: 'premium' as QuizAnswer, label: 'Visi įrankiai vienoje vietoje + nuolaidos' },
      { value: 'programos' as QuizAnswer, label: 'Aiškios treniruotės su video' },
      { value: 'mityba' as QuizAnswer, label: 'Lengvi receptai ir pirkinių sąrašai' },
      { value: 'vip' as QuizAnswer, label: 'Nuolatinis palaikymas ir motyvacija' },
      { value: 'konsultacija' as QuizAnswer, label: 'Greiti atsakymai vieno skambučio metu' },
    ],
  },
]

const results = {
  premium: {
    title: 'Premium narystė',
    text: 'Tau labiausiai tinka Premium narystė – gausi viską: visus video, mitybos planus su atnaujinimais, nuolaidas papildams, prioritetinę pagalbą ir daugiau. Kompleksinis sprendimas tavo transformacijai!',
    primaryLink: '/#premium-plans',
    primaryText: 'Rinktis Premium',
    secondaryLink: '/programos',
    secondaryText: 'Peržiūrėti programas',
  },
  programos: {
    title: 'Treniruočių programos',
    text: 'Tau labiausiai tinka treniruočių programos – aiškūs video, struktūra ir progresas.',
    primaryLink: '/programos',
    primaryText: 'Rinktis programą',
    secondaryLink: '/#premium-plans',
    secondaryText: 'Arba rinktis Premium',
  },
  mityba: {
    title: 'Mitybos planas',
    text: 'Rekomenduoju mitybos planą – skanūs receptai ir aiškus dienos rėžimas.',
    primaryLink: '/mitybos-planai',
    primaryText: 'Rinktis mitybos planą',
    secondaryLink: '/#premium-plans',
    secondaryText: 'Arba rinktis Premium',
  },
  vip: {
    title: 'Asmeninė priežiūra (VIP)',
    text: 'Geriausias pasirinkimas – asmeninė priežiūra (VIP). Nuolatinis palaikymas ir savaitinės korekcijos.',
    primaryLink: '/vip',
    primaryText: 'Rezervuoti VIP',
    secondaryLink: '/#premium-plans',
    secondaryText: 'Arba rinktis Premium',
  },
  konsultacija: {
    title: 'Konsultacija 1:1',
    text: 'Siūlau pradėti nuo vienkartinės konsultacijos – gausi konkrečius atsakymus ir veiksmų planą.',
    primaryLink: '/konsultacijos',
    primaryText: 'Užsisakyti konsultaciją',
    secondaryLink: '/#premium-plans',
    secondaryText: 'Arba rinktis Premium',
  },
}

export default function QuizModal({ trigger }: QuizModalProps) {
  const [open, setOpen] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<QuizAnswer[]>([])
  const [showResult, setShowResult] = useState(false)
  const [result, setResult] = useState<QuizAnswer | null>(null)

  const handleAnswer = (answer: QuizAnswer) => {
    const newAnswers = [...answers]
    newAnswers[currentStep] = answer
    setAnswers(newAnswers)
  }

  const handleNext = () => {
    if (!answers[currentStep]) {
      alert('Pasirink vieną atsakymą 🙂')
      return
    }

    if (currentStep === questions.length - 1) {
      // Calculate result
      const scores: Record<QuizAnswer, number> = {
        premium: 0,
        programos: 0,
        mityba: 0,
        vip: 0,
        konsultacija: 0,
      }

      answers.forEach((answer) => {
        scores[answer]++
      })

      const order: QuizAnswer[] = ['premium', 'vip', 'programos', 'mityba', 'konsultacija']
      let best: QuizAnswer = 'programos'
      let bestScore = -1

      order.forEach((key) => {
        if (scores[key] > bestScore) {
          best = key
          bestScore = scores[key]
        }
      })

      setResult(best)
      setShowResult(true)
    } else {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrev = () => {
    setCurrentStep(currentStep - 1)
  }

  const handleReset = () => {
    setCurrentStep(0)
    setAnswers([])
    setShowResult(false)
    setResult(null)
  }

  const handleClose = () => {
    setOpen(false)
    setTimeout(handleReset, 300) // Reset after animation
  }

  const progress = ((currentStep + 1) / questions.length) * 100

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        {trigger || (
          <button className="text-sm text-neutral-600 hover:text-[#AB57F4] underline">
            ❓ Nežinai nuo ko pradėti? Atlik trumpą testą
          </button>
        )}
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 max-h-[90vh] w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-2xl bg-white p-6 md:p-8 shadow-2xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]">
          <Dialog.Close className="absolute right-4 top-4 rounded-full p-2 text-neutral-400 hover:text-neutral-600 hover:bg-neutral-100">
            <X className="h-5 w-5" />
            <span className="sr-only">Uždaryti</span>
          </Dialog.Close>

          {!showResult ? (
            <>
              <Dialog.Title className="text-3xl font-bold text-rlText mb-2">
                Nežinai nuo ko pradėti? 👇
              </Dialog.Title>
              <Dialog.Description className="text-neutral-600 mb-6">
                Atsakyk į 4 trumpus klausimus – parodysiu geriausią kryptį.
              </Dialog.Description>

              {/* Progress bar */}
              <div className="h-2 bg-neutral-100 rounded-full overflow-hidden mb-6">
                <div
                  className="h-full bg-[linear-gradient(90deg,#F28ACD,#AB57F4)] transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Question */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-rlText mb-4">
                  {questions[currentStep].question}
                </h3>
                <div className="space-y-3">
                  {questions[currentStep].options.map((option) => (
                    <label
                      key={option.value}
                      className={`flex items-start p-4 border-2 rounded-xl cursor-pointer transition-all ${
                        answers[currentStep] === option.value
                          ? 'border-[#AB57F4] bg-purple-50/50'
                          : 'border-neutral-200 hover:border-[#AB57F4]/50'
                      }`}
                    >
                      <input
                        type="radio"
                        name={`q${currentStep}`}
                        value={option.value}
                        checked={answers[currentStep] === option.value}
                        onChange={() => handleAnswer(option.value)}
                        className="mt-1 mr-3"
                      />
                      <span className="text-neutral-700">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-between gap-4">
                <button
                  type="button"
                  onClick={handlePrev}
                  disabled={currentStep === 0}
                  className="px-6 py-3 rounded-full font-semibold border-2 border-neutral-200 text-neutral-700 hover:border-[#AB57F4] hover:text-[#AB57F4] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  Atgal
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-6 py-3 rounded-full font-semibold text-white bg-[linear-gradient(90deg,#AB57F4,#F28ACD)] hover:opacity-90 transition-all"
                >
                  {currentStep === questions.length - 1 ? 'Gauti rekomendaciją' : 'Toliau'}
                </button>
              </div>
            </>
          ) : (
            <>
              <Dialog.Title className="text-3xl font-bold text-rlText mb-4">
                Rekomendacija tau
              </Dialog.Title>

              {result && (
                <div>
                  <h4 className="text-2xl font-bold mb-4 gradient-text">
                    {results[result].title}
                  </h4>
                  <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
                    {results[result].text}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 mb-6">
                    <GradientButton
                      as="a"
                      href={results[result].primaryLink}
                      onClick={handleClose}
                      withArrow
                      icon="et-circle-cutout"
                      iconHover="slide-right"
                    >
                      {results[result].primaryText}
                    </GradientButton>
                    <a
                      href={results[result].secondaryLink}
                      onClick={handleClose}
                      className="inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold border-2 border-neutral-200 text-neutral-700 hover:border-[#AB57F4] hover:text-[#AB57F4] transition-all"
                    >
                      {results[result].secondaryText}
                    </a>
                  </div>

                  <p className="text-sm text-neutral-600">
                    💌 Nori gauti mano patarimų el. paštu?{' '}
                    <a href="#newsletter" className="text-[#AB57F4] hover:underline">
                      Prenumeruok naujienas
                    </a>
                    .
                  </p>
                </div>
              )}
            </>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
