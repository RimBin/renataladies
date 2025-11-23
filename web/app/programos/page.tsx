"use client"
import { useState, useMemo } from 'react'
import { GradientButton } from '@/components/ui/GradientButton'
import ProgramCard from '@/components/ProgramCard'
import { PROGRAMS } from '@/lib/programData'

export default function ProgramsPage() {
  const [level, setLevel] = useState<string>('')
  const [showPremiumOnly, setShowPremiumOnly] = useState(false)
  const [form, setForm] = useState({
    vardas: '',
    pavarde: '',
    amzius: '',
    ugis: '',
    svoris: '',
    tikslai: '',
    sveikata: '',
    patirtis: '',
    dienos: '',
    pastabos: ''
  })
  const [errors, setErrors] = useState<{ [k: string]: string }>({})

  const filteredPrograms = useMemo(() => {
    return PROGRAMS.filter((program) => {
      if (level && program.level !== level) return false
      if (showPremiumOnly && !program.isPremium) return false
      return true
    })
  }, [level, showPremiumOnly])

  const handleFormChange = (field: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmitForm = () => {
    const newErrors: { [k: string]: string } = {}
    if (!form.vardas.trim()) newErrors.vardas = 'Privaloma'
    if (!form.pavarde.trim()) newErrors.pavarde = 'Privaloma'
    if (!form.amzius.trim()) newErrors.amzius = 'Privaloma'
    if (!form.ugis.trim()) newErrors.ugis = 'Privaloma'
    if (!form.svoris.trim()) newErrors.svoris = 'Privaloma'
    if (!form.tikslai.trim()) newErrors.tikslai = 'Privaloma'
    if (!form.dienos.trim()) newErrors.dienos = 'Privaloma'

    setErrors(newErrors)
    if (Object.keys(newErrors).length > 0) return

    const bodyLines = [
      `Vardas: ${form.vardas}`,
      `Pavardė: ${form.pavarde}`,
      `Amžius: ${form.amzius}`,
      `Ūgis: ${form.ugis}`,
      `Svoris: ${form.svoris}`,
      `Tikslai: ${form.tikslai}`,
      `Sveikatos rodikliai: ${form.sveikata || '-'}`,
      `Sportinė patirtis: ${form.patirtis || '-'}`,
      `Kelių dienų programa: ${form.dienos}`,
      `Kiti pastebėjimai: ${form.pastabos || '-'}`
    ].join('\n')

    const subject = encodeURIComponent('Individuali sporto programa - užklausa')
    const body = encodeURIComponent(bodyLines)
    window.location.href = `mailto:info@renataladies.com?subject=${subject}&body=${body}`
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-neutral-50 pt-24 md:pt-32 pb-12 sm:pb-16">
        <div className="max-w-[1440px] mx-auto px-4">
          <div className="grid md:grid-cols-[3fr_2fr] gap-8 items-end">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-rlText mb-0">
                Treniruočių <span className="gradient-text">programos</span> – struktūruoti planai tavo tikslams
              </h1>
            </div>
            <div>
              <p className="text-lg text-neutral-600">
                Pasirink programą pagal savo tikslą – sėdmenų formavimas, nugaros stiprinimas ar pilvo raumenų vystymas.
                Kiekviena programa susideda iš kelių video treniruočių.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b">
        <div className="max-w-[1440px] mx-auto px-4 md:px-6 py-3">
          <div className="flex flex-wrap gap-3 items-center">
            <select
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              className="px-3 py-2 rounded-xl border bg-white"
            >
              <option value="">Visi lygiai</option>
              <option value="beginner">Pradedantiems</option>
              <option value="intermediate">Vidutinis</option>
              <option value="advanced">Pažengusiems</option>
            </select>

            <label className="flex items-center gap-2 px-3 py-2 rounded-xl border bg-white cursor-pointer">
              <input
                type="checkbox"
                checked={showPremiumOnly}
                onChange={(e) => setShowPremiumOnly(e.target.checked)}
                className="rounded"
              />
              <span className="text-sm">Tik Premium</span>
            </label>

            <div className="ml-auto text-sm text-neutral-500">{filteredPrograms.length} programa(-os)</div>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-6 py-10">
        {filteredPrograms.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPrograms.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-neutral-500 text-lg mb-4">Nerasta programų pagal pasirinktus filtrus</p>
            <GradientButton
              as="button"
              onClick={() => {
                setLevel('')
                setShowPremiumOnly(false)
              }}
              withArrow
              icon="et-circle-cutout"
              iconHover="slide-right"
            >
              Išvalyti filtrus
            </GradientButton>
          </div>
        )}
      </section>

      {/* Individuali sporto programa */}
      <section className="bg-white border-t">
        <div className="max-w-[1100px] mx-auto px-4 md:px-6 py-14 flex flex-col gap-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-rlText mb-3">
              Individuali <span className="gradient-text">sporto programa</span>
            </h2>
            <p className="text-neutral-700 text-lg">
              Užpildyk formą – pagal pateiktą informaciją parengsiu tau pritaikytą sporto programą.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-1">Vardas *</label>
              <input
                className={`w-full rounded-xl border px-4 py-3 bg-white ${errors.vardas ? 'border-red-400' : 'border-neutral-200'}`}
                value={form.vardas}
                onChange={(e) => handleFormChange('vardas', e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-1">Pavardė *</label>
              <input
                className={`w-full rounded-xl border px-4 py-3 bg-white ${errors.pavarde ? 'border-red-400' : 'border-neutral-200'}`}
                value={form.pavarde}
                onChange={(e) => handleFormChange('pavarde', e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-1">Amžius *</label>
              <input
                className={`w-full rounded-xl border px-4 py-3 bg-white ${errors.amzius ? 'border-red-400' : 'border-neutral-200'}`}
                value={form.amzius}
                onChange={(e) => handleFormChange('amzius', e.target.value)}
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-1">Ūgis (cm) *</label>
                <input
                  className={`w-full rounded-xl border px-4 py-3 bg-white ${errors.ugis ? 'border-red-400' : 'border-neutral-200'}`}
                  value={form.ugis}
                  onChange={(e) => handleFormChange('ugis', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-1">Svoris (kg) *</label>
                <input
                  className={`w-full rounded-xl border px-4 py-3 bg-white ${errors.svoris ? 'border-red-400' : 'border-neutral-200'}`}
                  value={form.svoris}
                  onChange={(e) => handleFormChange('svoris', e.target.value)}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-1">Kokie tikslai? *</label>
              <input
                className={`w-full rounded-xl border px-4 py-3 bg-white ${errors.tikslai ? 'border-red-400' : 'border-neutral-200'}`}
                placeholder="Priaugti / numesti / suformuoti"
                value={form.tikslai}
                onChange={(e) => handleFormChange('tikslai', e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-1">Kokie sveikatos rodikliai?</label>
              <input
                className="w-full rounded-xl border border-neutral-200 px-4 py-3 bg-white"
                placeholder="Pvz., spaudimas, hemoglobinas, skydliaukė ir kt."
                value={form.sveikata}
                onChange={(e) => handleFormChange('sveikata', e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-1">Kokia sportinė patirtis?</label>
              <input
                className="w-full rounded-xl border border-neutral-200 px-4 py-3 bg-white"
                placeholder="Pradedančioji / vidutinė / pažengusi"
                value={form.patirtis}
                onChange={(e) => handleFormChange('patirtis', e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-neutral-700 mb-1">Kelių dienų programa? *</label>
              <input
                className={`w-full rounded-xl border px-4 py-3 bg-white ${errors.dienos ? 'border-red-400' : 'border-neutral-200'}`}
                placeholder="Pvz., 3 d. / 4 d. / 5 d."
                value={form.dienos}
                onChange={(e) => handleFormChange('dienos', e.target.value)}
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-neutral-700 mb-1">Kiti pastebėjimai treneriui?</label>
              <textarea
                className="w-full rounded-xl border border-neutral-200 px-4 py-3 bg-white min-h-[120px]"
                value={form.pastabos}
                onChange={(e) => handleFormChange('pastabos', e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start gap-3">
            <GradientButton
              as="button"
              onClick={handleSubmitForm}
              withArrow
              icon="et-circle-cutout"
              iconHover="slide-right"
              className="px-8 py-4 text-lg"
            >
              Siųsti užklausą
            </GradientButton>
            <p className="text-sm text-neutral-500">Užpildžius atsidarys el. laiškas su tavo atsakymais.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-pink-50 via-purple-50 to-pink-50 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Nori <span className="gradient-text">individualų</span> planą?
          </h2>
          <p className="text-lg text-neutral-700 mb-8">
            Rezervuok konsultaciją ir gaukite treniruočių planą, pritaikytą būtent tau.
          </p>
          <GradientButton
            as="a"
            href="/konsultacijos"
            withArrow
            icon="et-circle-cutout"
            iconHover="slide-right"
            className="text-lg px-8 py-4"
          >
            Rezervuoti konsultaciją
          </GradientButton>
        </div>
      </section>
    </>
  )
}
