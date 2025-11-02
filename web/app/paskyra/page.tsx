"use client"
import { useState, useRef } from 'react'
import { signOut, useSession } from 'next-auth/react'
import { User, Mail, Phone, Calendar, CreditCard, Download, MessageCircle, Shield, Settings, Database, TrendingDown, Camera, Target, Award, Upload, X, ShoppingBag, FileDown, MessagesSquare, Lock, Bell } from 'lucide-react'

// Demo data - replace with real API calls
const demoUser = {
  name: 'Kristina Petraitytė',
  email: 'kristina@example.com',
  phone: '+370 600 12345',
  avatar: 'https://placehold.co/200x200/F28ACD/FFFFFF?text=KP',
  memberSince: '2024-01-15',
  emailVerified: true,
}

const demoSubscription = {
  plan: 'Premium VIP',
  status: 'active',
  renewalDate: '2025-11-15',
  amount: '99.00',
  paymentMethod: 'Visa •••• 4242',
}

const demoOrders = [
  { id: 'ORD-001', date: '2024-10-01', items: 'Mitybos planas Premium', total: '49.00', status: 'Apmokėta' },
  { id: 'ORD-002', date: '2024-09-15', items: 'Treniruočių video paketas', total: '29.00', status: 'Apmokėta' },
]

const demoDownloads = [
  { id: 1, title: 'Mitybos planas - Spalio mėn.', type: 'PDF', size: '2.4 MB', lastAccessed: '2024-10-10' },
  { id: 2, title: 'Treniruočių programa 12 sav.', type: 'PDF', size: '3.1 MB', lastAccessed: '2024-09-20' },
]

const demoConsultations = [
  { id: 1, date: '2024-10-20', time: '18:00', type: 'VIP konsultacija', status: 'Patvirtinta', zoomLink: 'https://zoom.us/j/123456' },
  { id: 2, date: '2024-10-27', time: '18:00', type: 'Savaitinis check-in', status: 'Patvirtinta', zoomLink: '' },
]

const demoProgress = {
  startWeight: 72.5,
  currentWeight: 68.2,
  goalWeight: 65.0,
  startDate: '2024-08-01',
  weeklyCheckins: [
    { week: 1, weight: 72.5, date: '2024-08-01', notes: 'Pradžia! Jaučiuosi motyvuota 💪' },
    { week: 2, weight: 71.8, date: '2024-08-08', notes: 'Pirmoji savaitė sekėsi gerai' },
    { week: 3, weight: 71.2, date: '2024-08-15', notes: 'Treniruotės tampa lengvesnės' },
    { week: 4, weight: 70.5, date: '2024-08-22', notes: 'Pastebiu pokyčius' },
    { week: 5, weight: 70.1, date: '2024-08-29', notes: 'Energijos daugiau!' },
    { week: 6, weight: 69.6, date: '2024-09-05', notes: 'Drabužiai laisvesni' },
    { week: 7, weight: 69.0, date: '2024-09-12', notes: 'Puikus progresas' },
    { week: 8, weight: 68.2, date: '2024-09-19', notes: 'Jaučiuosi puikiai! 🎉' },
  ],
  measurements: {
    chest: { start: 92, current: 88, goal: 85 },
    waist: { start: 78, current: 72, goal: 68 },
    hips: { start: 102, current: 98, goal: 95 },
  },
  progressPhotos: [
    // Pradinis masyvas tuščias - vartotojas įkels savo nuotraukas
  ],
}

export default function AccountPage() {
  const { data: session, status } = useSession()
  const [activeTab, setActiveTab] = useState('profilis')
  const [newPhotos, setNewPhotos] = useState<{ id: string; url: string; file: File }[]>([])
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null)
  const [showGoalEditor, setShowGoalEditor] = useState(false)
  const [showCheckInForm, setShowCheckInForm] = useState(false)
  const [showRescheduleModal, setShowRescheduleModal] = useState(false)
  const [selectedConsultationId, setSelectedConsultationId] = useState<number | null>(null)
  const [rescheduleData, setRescheduleData] = useState({
    date: '',
    time: ''
  })
  const [checkInData, setCheckInData] = useState({
    weight: '',
    notes: ''
  })
  const [goals, setGoals] = useState({
    weight: demoProgress.goalWeight,
    targetDate: '2025-12-31',
    measurements: { ...demoProgress.measurements }
  })
  const photoInputRef = useRef<HTMLInputElement>(null)
  const avatarInputRef = useRef<HTMLInputElement>(null)

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files) return

    Array.from(files).forEach((file) => {
      const reader = new FileReader()
      reader.onloadend = () => {
        setNewPhotos(prev => [...prev, {
          id: Math.random().toString(36),
          url: reader.result as string,
          file
        }])
      }
      reader.readAsDataURL(file)
    })
  }

  const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onloadend = () => {
      setAvatarPreview(reader.result as string)
    }
    reader.readAsDataURL(file)
  }

  const removeNewPhoto = (id: string) => {
    setNewPhotos(prev => prev.filter(p => p.id !== id))
  }

  const uploadPhotos = async () => {
    // TODO: Implement actual upload to server/storage
    console.log('Uploading photos:', newPhotos)
    alert(`Įkeliamos ${newPhotos.length} nuotraukos...`)
    // After successful upload, clear the newPhotos
    setNewPhotos([])
  }

  const saveAvatar = async () => {
    if (!avatarPreview) return
    // TODO: Implement actual avatar upload
    console.log('Saving avatar')
    alert('Avataro nuotrauka išsaugota!')
  }

  const saveGoals = async () => {
    // TODO: Implement actual goal save to API
    console.log('Saving goals:', goals)
    alert('Tikslai išsaugoti!')
    setShowGoalEditor(false)
  }

  const handleRescheduleClick = (consultId: number) => {
    setSelectedConsultationId(consultId)
    setShowRescheduleModal(true)
  }

  const saveReschedule = async () => {
    if (!rescheduleData.date || !rescheduleData.time) {
      alert('Prašome pasirinkti datą ir laiką')
      return
    }
    
    // TODO: Implement actual reschedule API call
    console.log('Rescheduling consultation:', selectedConsultationId, rescheduleData)
    alert(`Konsultacijos laikas pakeistas!\nNauja data: ${rescheduleData.date}\nLaikas: ${rescheduleData.time}`)
    
    // Reset and close
    setShowRescheduleModal(false)
    setRescheduleData({ date: '', time: '' })
    setSelectedConsultationId(null)
  }

  const saveCheckIn = async () => {
    if (!checkInData.weight) {
      alert('Prašome įvesti svorį')
      return
    }
    
    // TODO: Implement actual check-in save to API
    const newCheckIn = {
      week: demoProgress.weeklyCheckins.length + 1,
      weight: parseFloat(checkInData.weight),
      date: new Date().toISOString().split('T')[0],
      notes: checkInData.notes || 'Check-in įrašytas'
    }
    
    console.log('Saving check-in:', newCheckIn)
    alert(`Savaitinis check-in išsaugotas!\nSvoris: ${checkInData.weight} kg`)
    
    // Reset form
    setCheckInData({ weight: '', notes: '' })
    setShowCheckInForm(false)
  }

  return (
    <>
    <section className="w-[92%] max-w-[1440px] mx-auto px-4 md:px-6 pt-24 md:pt-32 pb-16 sm:pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8 items-end mb-12">
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-rlText mb-0">
            Mano <span className="gradient-text">paskyra</span>
          </h1>
        </div>
        <div className="flex flex-col items-start md:items-end">
          <p className="text-lg text-neutral-600">
            Valdykite savo profilį, prenumeratas, užsakymus, saugumą ir pranešimus. Čia – visi jūsų nustatymai ir istorija.
          </p>
          {status === 'authenticated' && (
            <div className="mt-4 block lg:hidden">
              <button
                onClick={() => {
                  if (confirm('Ar tikrai norite atsijungti?')) signOut({ redirect: false })
                }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-neutral-200 hover:bg-neutral-50 text-sm font-medium"
              >
                Atsijungti
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="mb-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
          {[
            { id: 'profilis', label: 'Profilis', icon: User },
            { id: 'tikslai', label: 'Tikslai', icon: Target },
            { id: 'prenumeratos', label: 'Prenumeratos', icon: CreditCard },
            { id: 'uzsakymai', label: 'Užsakymai', icon: ShoppingBag },
            { id: 'parsisiuntimai', label: 'Parsisiuntimai', icon: FileDown },
            { id: 'konsultacijos', label: 'Konsultacijos', icon: Calendar },
            { id: 'zinutes', label: 'Žinutės', icon: MessagesSquare },
            { id: 'saugumas', label: 'Saugumas', icon: Lock },
            { id: 'nustatymai', label: 'Nustatymai', icon: Bell },
            { id: 'privatumas', label: 'GDPR', icon: Database },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-2.5 rounded-xl text-sm font-medium transition flex flex-col sm:flex-row items-center justify-center gap-2 ${
                activeTab === tab.id
                  ? 'bg-[linear-gradient(90deg,#F28ACD,#AB57F4)] text-white shadow-md'
                  : 'bg-white text-neutral-700 hover:bg-neutral-50 shadow-sm'
              }`}
            >
              <tab.icon className="w-4 h-4 flex-shrink-0" />
              <span className="text-center leading-tight">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="bg-white rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] p-6 md:p-8">
        {activeTab === 'profilis' && (
          <div>
            <h2 className="text-2xl font-bold text-rlText mb-6">Profilis</h2>
            <div className="grid md:grid-cols-[200px_1fr] gap-8">
              {/* Avatar */}
              <div>
                <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-lg group">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={avatarPreview || demoUser.avatar} 
                    alt={demoUser.name} 
                    className="w-full h-full object-cover" 
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Upload className="w-8 h-8 text-white" />
                  </div>
                </div>
                <input
                  ref={avatarInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleAvatarUpload}
                  className="hidden"
                />
                <button 
                  onClick={() => avatarInputRef.current?.click()}
                  className="mt-4 w-48 px-4 py-2 rounded-full bg-neutral-100 hover:bg-neutral-200 text-sm font-medium transition"
                >
                  Keisti nuotrauką
                </button>
                {avatarPreview && (
                  <button 
                    onClick={saveAvatar}
                    className="mt-2 w-48 px-4 py-2 rounded-full bg-[linear-gradient(90deg,#F28ACD,#AB57F4)] text-white text-sm font-medium hover:opacity-90 transition"
                  >
                    Išsaugoti avatarą
                  </button>
                )}
              </div>

              {/* Profile Info */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Vardas, pavardė</label>
                  <input
                    type="text"
                    defaultValue={demoUser.name}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-[#AB57F4] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">El. paštas</label>
                  <div className="flex items-center gap-2">
                    <input
                      type="email"
                      defaultValue={demoUser.email}
                      className="flex-1 px-4 py-3 rounded-xl border border-neutral-200 focus:border-[#AB57F4] focus:outline-none"
                    />
                    {demoUser.emailVerified && (
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                        Patvirtintas
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Telefonas</label>
                  <input
                    type="tel"
                    defaultValue={demoUser.phone}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-[#AB57F4] focus:outline-none"
                  />
                </div>

                <div className="pt-4">
                  <button className="px-6 py-3 rounded-full bg-[linear-gradient(90deg,#F28ACD,#AB57F4)] text-white font-semibold hover:opacity-90 transition">
                    Išsaugoti pakeitimus
                  </button>
                </div>

                <div className="text-sm text-neutral-500">
                  Narė nuo: {new Date(demoUser.memberSince).toLocaleDateString('lt-LT')}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'tikslai' && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-rlText">Tikslai ir progresas</h2>
            </div>
            
            {/* Stats Overview */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingDown className="w-5 h-5 text-[#F28ACD]" />
                  <span className="text-sm font-medium text-neutral-600">Numesta</span>
                </div>
                <div className="text-3xl font-bold text-rlText">
                  {(demoProgress.startWeight - demoProgress.currentWeight).toFixed(1)} kg
                </div>
                <div className="text-xs text-neutral-500 mt-1">
                  nuo {new Date(demoProgress.startDate).toLocaleDateString('lt-LT')}
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-medium text-neutral-600">Liko iki tikslo</span>
                </div>
                <div className="text-3xl font-bold text-rlText">
                  {(demoProgress.currentWeight - demoProgress.goalWeight).toFixed(1)} kg
                </div>
                <div className="text-xs text-neutral-500 mt-1">
                  Tikslas: {demoProgress.goalWeight} kg
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-medium text-neutral-600">Savaitės iš eilės</span>
                </div>
                <div className="text-3xl font-bold text-rlText">
                  {demoProgress.weeklyCheckins.length}
                </div>
                <div className="text-xs text-neutral-500 mt-1">
                  Nuoseklumas - raktas!
                </div>
              </div>
            </div>

            {/* Weight Progress Chart */}
            <div className="bg-white rounded-xl border border-neutral-200 p-6 mb-8">
              <h3 className="font-bold text-lg mb-4">Svorio pokytis</h3>
              <div className="relative h-64">
                {/* Simple line chart visualization */}
                <div className="absolute inset-0 flex items-end justify-between gap-1">
                  {demoProgress.weeklyCheckins.map((checkin, idx) => {
                    const maxWeight = Math.max(...demoProgress.weeklyCheckins.map(c => c.weight))
                    const minWeight = Math.min(...demoProgress.weeklyCheckins.map(c => c.weight))
                    const range = maxWeight - minWeight
                    const heightPercent = ((checkin.weight - minWeight) / range) * 80 + 10
                    
                    return (
                      <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                        <div className="relative group cursor-pointer">
                          <div 
                            className="w-full bg-gradient-to-t from-[#F28ACD] to-[#AB57F4] rounded-t-lg transition-all hover:opacity-80"
                            style={{ height: `${heightPercent}%` }}
                          />
                          {/* Tooltip */}
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                            <div className="bg-black text-white text-xs rounded-lg px-2 py-1 whitespace-nowrap">
                              {checkin.weight} kg
                            </div>
                          </div>
                        </div>
                        <span className="text-xs text-neutral-500">S{checkin.week}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className="flex justify-between text-xs text-neutral-500 mt-4">
                <span>Pradžia: {demoProgress.startWeight} kg</span>
                <span className="font-semibold text-[#AB57F4]">Dabar: {demoProgress.currentWeight} kg</span>
                <span>Tikslas: {demoProgress.goalWeight} kg</span>
              </div>
            </div>

            {/* Measurements */}
            <div className="bg-white rounded-xl border border-neutral-200 p-6 mb-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-lg">Matavimai (cm)</h3>
                <button
                  onClick={() => setShowGoalEditor(!showGoalEditor)}
                  className="px-4 py-2 rounded-full border-2 border-[#AB57F4] text-[#AB57F4] hover:bg-purple-50 text-sm font-medium transition"
                >
                  {showGoalEditor ? 'Atšaukti' : '✏️ Redaguoti tikslus'}
                </button>
              </div>

              {/* Goal Editor */}
              {showGoalEditor && (
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 mb-6 border-2 border-[#AB57F4]">
                  <h4 className="font-bold text-lg mb-4">Nustatyti tikslus</h4>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Weight Goal */}
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        Tikslinis svoris (kg)
                      </label>
                      <input
                        type="number"
                        step="0.1"
                        value={goals.weight}
                        onChange={(e) => setGoals({ ...goals, weight: parseFloat(e.target.value) })}
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-[#AB57F4] focus:outline-none"
                      />
                    </div>

                    {/* Target Date */}
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        Planuojama data pasiekti tikslą
                      </label>
                      <input
                        type="date"
                        value={goals.targetDate}
                        onChange={(e) => setGoals({ ...goals, targetDate: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-[#AB57F4] focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Measurement Goals */}
                  <div className="mt-6">
                    <h5 className="font-semibold mb-4">Tikslai matavimams (cm)</h5>
                    <div className="grid md:grid-cols-3 gap-4">
                      {Object.entries(goals.measurements).map(([key, data]) => {
                        const labels = { chest: 'Krūtinė', waist: 'Juosmuo', hips: 'Klubai' }
                        return (
                          <div key={key}>
                            <label className="block text-sm font-medium text-neutral-700 mb-2">
                              {labels[key as keyof typeof labels]}
                            </label>
                            <input
                              type="number"
                              step="0.1"
                              value={data.goal}
                              onChange={(e) => setGoals({
                                ...goals,
                                measurements: {
                                  ...goals.measurements,
                                  [key]: { ...data, goal: parseFloat(e.target.value) }
                                }
                              })}
                              className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-[#AB57F4] focus:outline-none"
                              placeholder={`Tikslas (cm)`}
                            />
                            <p className="text-xs text-neutral-500 mt-1">
                              Dabartinis: {data.current} cm
                            </p>
                          </div>
                        )
                      })}
                    </div>
                  </div>

                  <div className="flex gap-3 mt-6">
                    <button
                      onClick={saveGoals}
                      className="px-6 py-3 rounded-full bg-[linear-gradient(90deg,#F28ACD,#AB57F4)] text-white font-semibold hover:opacity-90 transition"
                    >
                      Išsaugoti tikslus
                    </button>
                    <button
                      onClick={() => setShowGoalEditor(false)}
                      className="px-6 py-3 rounded-full bg-white border border-neutral-200 text-neutral-700 font-semibold hover:bg-neutral-50 transition"
                    >
                      Atšaukti
                    </button>
                  </div>
                </div>
              )}

              <div className="space-y-4">
                {Object.entries(demoProgress.measurements).map(([key, data]) => {
                  const labels = { chest: 'Krūtinė', waist: 'Juosmuo', hips: 'Klubai' }
                  const progress = ((data.start - data.current) / (data.start - data.goal)) * 100
                  
                  return (
                    <div key={key}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{labels[key as keyof typeof labels]}</span>
                        <span className="text-sm text-neutral-600">
                          {data.start} → <strong className="text-[#AB57F4]">{data.current}</strong> → {data.goal} cm
                        </span>
                      </div>
                      <div className="h-2 bg-neutral-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-[#F28ACD] to-[#AB57F4] rounded-full transition-all"
                          style={{ width: `${Math.min(progress, 100)}%` }}
                        />
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Progress Photos */}
            <div className="bg-white rounded-xl border border-neutral-200 p-6 mb-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-lg">Progreso nuotraukos</h3>
              </div>

              <input
                ref={photoInputRef}
                type="file"
                accept="image/*"
                multiple
                onChange={handlePhotoUpload}
                className="hidden"
              />

              {/* Progress Photos Grid - Always 3 columns with + card */}
              <div className="grid grid-cols-3 gap-4">
                {/* Add Photo Card - Always first */}
                <button
                  onClick={() => photoInputRef.current?.click()}
                  className="aspect-[3/4] rounded-xl border-2 border-dashed border-[#AB57F4] bg-purple-50 hover:bg-purple-100 transition flex flex-col items-center justify-center gap-2 text-[#AB57F4]"
                >
                  <Camera className="w-8 h-8" />
                  <span className="text-sm font-medium">Įkelti naują</span>
                </button>
                
                {/* New uploaded photos */}
                {newPhotos.map((photo) => (
                  <div key={photo.id} className="relative group">
                    <div className="aspect-[3/4] rounded-xl overflow-hidden bg-neutral-100 ring-2 ring-[#AB57F4]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img 
                        src={photo.url} 
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <button
                      onClick={() => removeNewPhoto(photo.id)}
                      className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10"
                    >
                      <X className="w-4 h-4" />
                    </button>
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-purple-600/90 to-transparent p-3 rounded-b-xl">
                      <p className="text-white text-sm font-medium">Nauja nuotrauka</p>
                      <p className="text-white/80 text-xs">{new Date().toLocaleDateString('lt-LT')}</p>
                    </div>
                  </div>
                ))}
                
                {/* Existing photos */}
                {demoProgress.progressPhotos.map((photo) => (
                  <div key={photo.id} className="relative group">
                    <div className="aspect-[3/4] rounded-xl overflow-hidden bg-neutral-100">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img 
                        src={photo.url} 
                        alt={photo.label}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 rounded-b-xl">
                      <p className="text-white text-sm font-medium">{photo.label}</p>
                      <p className="text-white/80 text-xs">{new Date(photo.date).toLocaleDateString('lt-LT')}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Weekly Check-ins - MOVED HERE */}
            <div className="bg-white rounded-xl border border-neutral-200 p-6">
              <h3 className="font-bold text-lg mb-4">Savaitiniai check-in</h3>
              
              {/* Add Check-in Button - MOVED TO TOP */}
              <button 
                onClick={() => setShowCheckInForm(!showCheckInForm)}
                className="mb-4 w-full px-4 py-3 rounded-xl border-2 border-dashed border-[#AB57F4] text-[#AB57F4] font-semibold hover:bg-purple-50 transition"
              >
                {showCheckInForm ? '− Uždaryti formą' : '+ Pridėti šios savaitės check-in'}
              </button>

              {/* Check-in Form */}
              {showCheckInForm && (
                <div className="mb-6 p-4 bg-purple-50 rounded-xl border-2 border-[#AB57F4]">
                  <h4 className="font-semibold text-rlText mb-3">Naujas check-in</h4>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1">
                        Svoris (kg) *
                      </label>
                      <input
                        type="number"
                        step="0.1"
                        value={checkInData.weight}
                        onChange={(e) => setCheckInData(prev => ({ ...prev, weight: e.target.value }))}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AB57F4]"
                        placeholder="68.5"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-1">
                        Savaitės įspūdžiai
                      </label>
                      <textarea
                        value={checkInData.notes}
                        onChange={(e) => setCheckInData(prev => ({ ...prev, notes: e.target.value }))}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AB57F4] resize-none"
                        rows={3}
                        placeholder="Kaip sekėsi šią savaitę?"
                      />
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={saveCheckIn}
                        className="flex-1 px-4 py-2 rounded-lg bg-[linear-gradient(90deg,#F28ACD,#AB57F4)] text-white font-semibold hover:opacity-90 transition"
                      >
                        Išsaugoti
                      </button>
                      <button
                        onClick={() => {
                          setShowCheckInForm(false)
                          setCheckInData({ weight: '', notes: '' })
                        }}
                        className="px-4 py-2 rounded-lg border text-neutral-700 font-semibold hover:bg-neutral-50 transition"
                      >
                        Atšaukti
                      </button>
                    </div>
                  </div>
                </div>
              )}

              <div className="space-y-3">
                {demoProgress.weeklyCheckins.slice().reverse().map((checkin) => (
                  <div key={checkin.week} className="flex items-start gap-4 p-4 bg-neutral-50 rounded-xl hover:bg-neutral-100 transition">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#F28ACD] to-[#AB57F4] flex items-center justify-center text-white font-bold">
                      {checkin.week}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-rlText">{checkin.weight} kg</span>
                        <span className="text-xs text-neutral-500">{new Date(checkin.date).toLocaleDateString('lt-LT')}</span>
                      </div>
                      <p className="text-sm text-neutral-600">{checkin.notes}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'prenumeratos' && (
          <div>
            <h2 className="text-2xl font-bold text-rlText mb-6">Prenumeratos ir mokėjimai</h2>
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-6 mb-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-rlText">{demoSubscription.plan}</h3>
                  <span className="inline-block mt-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                    {demoSubscription.status === 'active' ? 'Aktyvi' : 'Neaktyvi'}
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-rlText">{demoSubscription.amount} €</div>
                  <div className="text-sm text-neutral-600">/ mėn.</div>
                </div>
              </div>
              <div className="space-y-2 text-sm text-neutral-700">
                <p><strong>Atsinaujinimas:</strong> {new Date(demoSubscription.renewalDate).toLocaleDateString('lt-LT')}</p>
                <p><strong>Mokėjimo būdas:</strong> {demoSubscription.paymentMethod}</p>
              </div>
              <div className="mt-6 flex gap-3">
                <button className="px-4 py-2 rounded-full bg-white hover:bg-neutral-50 text-sm font-medium transition shadow-sm">
                  Keisti planą
                </button>
                <button className="px-4 py-2 rounded-full bg-white hover:bg-neutral-50 text-sm font-medium transition shadow-sm">
                  Atšaukti prenumeratą
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'uzsakymai' && (
          <div>
            <h2 className="text-2xl font-bold text-rlText mb-6">Užsakymai ir sąskaitos</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-neutral-200">
                    <th className="text-left py-3 px-4 text-sm font-semibold text-neutral-700">Užsakymas</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-neutral-700">Data</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-neutral-700">Prekės</th>
                    <th className="text-right py-3 px-4 text-sm font-semibold text-neutral-700">Suma</th>
                    <th className="text-right py-3 px-4 text-sm font-semibold text-neutral-700">Veiksmai</th>
                  </tr>
                </thead>
                <tbody>
                  {demoOrders.map((order) => (
                    <tr key={order.id} className="border-b border-neutral-100">
                      <td className="py-4 px-4 font-medium">{order.id}</td>
                      <td className="py-4 px-4 text-neutral-600">{new Date(order.date).toLocaleDateString('lt-LT')}</td>
                      <td className="py-4 px-4 text-neutral-600">{order.items}</td>
                      <td className="py-4 px-4 text-right font-semibold">{order.total} €</td>
                      <td className="py-4 px-4 text-right">
                        <button className="text-[#AB57F4] hover:text-[#F28ACD] text-sm font-medium">
                          Sąskaita PDF
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'parsisiuntimai' && (
          <div>
            <h2 className="text-2xl font-bold text-rlText mb-6">Parsisiuntimai</h2>
            <div className="grid gap-4">
              {demoDownloads.map((file) => (
                <div key={file.id} className="flex items-center justify-between p-4 bg-neutral-50 rounded-xl hover:bg-neutral-100 transition">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center">
                      <Download className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-rlText">{file.title}</h3>
                      <p className="text-sm text-neutral-600">{file.size} • Paskutinį kartą atidaryta: {new Date(file.lastAccessed).toLocaleDateString('lt-LT')}</p>
                    </div>
                  </div>
                  <button className="px-4 py-2 rounded-full bg-[linear-gradient(90deg,#F28ACD,#AB57F4)] text-white text-sm font-medium hover:opacity-90 transition">
                    Atsisiųsti
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'konsultacijos' && (
          <div>
            <h2 className="text-2xl font-bold text-rlText mb-6">Konsultacijos</h2>
            <div className="space-y-4">
              {demoConsultations.map((consult) => (
                <div key={consult.id} className="p-6 bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-bold text-lg text-rlText">{consult.type}</h3>
                      <p className="text-neutral-600 mt-1">
                        {new Date(consult.date).toLocaleDateString('lt-LT')} • {consult.time}
                      </p>
                    </div>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                      {consult.status}
                    </span>
                  </div>
                  <div className="flex gap-3 mt-4">
                    {consult.zoomLink && (
                      <a
                        href={consult.zoomLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-full bg-[linear-gradient(90deg,#F28ACD,#AB57F4)] text-white text-sm font-medium hover:opacity-90 transition"
                      >
                        Prisijungti prie Zoom
                      </a>
                    )}
                    <button 
                      onClick={() => handleRescheduleClick(consult.id)}
                      className="px-4 py-2 rounded-full bg-white hover:bg-neutral-50 text-sm font-medium transition shadow-sm"
                    >
                      Perkelti laiką
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'zinutes' && (
          <div>
            <h2 className="text-2xl font-bold text-rlText mb-6">Žinutės</h2>
            <p className="text-neutral-600 mb-4">Bendravimas su trenere/komanda.</p>
            <div className="p-6 bg-neutral-50 rounded-xl text-center text-neutral-500">
              Šiuo metu žinučių nėra.
            </div>
          </div>
        )}

        {activeTab === 'saugumas' && (
          <div>
            <h2 className="text-2xl font-bold text-rlText mb-6">Saugumas</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-3">Slaptažodžio keitimas</h3>
                <div className="space-y-3">
                  <input type="password" placeholder="Dabartinis slaptažodis" className="w-full px-4 py-3 rounded-xl border border-neutral-200" />
                  <input type="password" placeholder="Naujas slaptažodis" className="w-full px-4 py-3 rounded-xl border border-neutral-200" />
                  <input type="password" placeholder="Pakartoti naują slaptažodį" className="w-full px-4 py-3 rounded-xl border border-neutral-200" />
                  <button className="px-6 py-3 rounded-full bg-[linear-gradient(90deg,#F28ACD,#AB57F4)] text-white font-semibold hover:opacity-90 transition">
                    Pakeisti slaptažodį
                  </button>
                </div>
              </div>

              <div className="pt-6 border-t border-neutral-200">
                <h3 className="font-semibold text-lg mb-3">Dviejų faktorių autentifikacija (2FA)</h3>
                <p className="text-sm text-neutral-600 mb-4">Papildomas saugumo sluoksnis jūsų paskyrai.</p>
                <button className="px-4 py-2 rounded-full bg-neutral-100 hover:bg-neutral-200 text-sm font-medium transition">
                  Įjungti 2FA
                </button>
              </div>

              <div className="pt-6 border-t border-neutral-200">
                <h3 className="font-semibold text-lg mb-3">Aktyvūs įrenginiai</h3>
                <div className="space-y-2">
                  <div className="p-4 bg-neutral-50 rounded-xl">
                    <p className="font-medium">Chrome • Windows</p>
                    <p className="text-sm text-neutral-600">Paskutinis prisijungimas: Šiandien, 14:23</p>
                  </div>
                </div>
                <div className="flex gap-3 items-center mt-3">
                  {status === 'authenticated' && (
                    <button
                      onClick={() => {
                        if (confirm('Ar tikrai norite atsijungti?')) signOut({ redirect: false })
                      }}
                      className="px-4 py-2 rounded-full bg-white hover:bg-neutral-50 text-sm font-medium transition shadow-sm"
                    >
                      Atsijungti
                    </button>
                  )}

                  <button className="text-red-600 hover:text-red-700 text-sm font-medium">
                    Atsijungti visur
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'nustatymai' && (
          <div>
            <h2 className="text-2xl font-bold text-rlText mb-6">Nustatymai ir pranešimai</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-4">El. laiškų pranešimai</h3>
                <div className="space-y-3">
                  {[
                    { label: 'Naujienlaiškis', desc: 'Naujienos, straipsniai ir pasiūlymai' },
                    { label: 'Savaitiniai check-in priminim ai', desc: 'Kas savaitę, sekmadieniais' },
                    { label: 'Prenumeratos atnaujinimas', desc: 'Priminimai prieš apmokėjimą' },
                  ].map((item) => (
                    <label key={item.label} className="flex items-center justify-between p-4 bg-neutral-50 rounded-xl cursor-pointer hover:bg-neutral-100">
                      <div>
                        <div className="font-medium">{item.label}</div>
                        <div className="text-sm text-neutral-600">{item.desc}</div>
                      </div>
                      <input type="checkbox" defaultChecked className="w-5 h-5 text-[#AB57F4] rounded" />
                    </label>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-neutral-200">
                <h3 className="font-semibold text-lg mb-3">Kalba</h3>
                <select className="px-4 py-3 rounded-xl border border-neutral-200 focus:border-[#AB57F4] focus:outline-none">
                  <option value="lt">Lietuvių</option>
                  <option value="en">English</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'privatumas' && (
          <div>
            <h2 className="text-2xl font-bold text-rlText mb-6">Privatumas (GDPR)</h2>
            <div className="space-y-6">
              <div className="p-6 bg-blue-50 rounded-xl">
                <h3 className="font-semibold text-lg mb-2">Duomenų eksportas</h3>
                <p className="text-sm text-neutral-600 mb-4">
                  Atsisiųskite visus savo duomenis vienu ZIP failu (profilis, užsakymai, žinutės).
                </p>
                <button className="px-4 py-2 rounded-full bg-white hover:bg-neutral-50 text-sm font-medium transition shadow-sm">
                  Eksportuoti duomenis
                </button>
              </div>

              <div className="p-6 bg-red-50 rounded-xl border-2 border-red-200">
                <h3 className="font-semibold text-lg mb-2 text-red-900">Paskyros ištrynimas</h3>
                <p className="text-sm text-neutral-700 mb-4">
                  Veiksmas negrįžtamas. Bus ištrinti visi jūsų duomenys, prenumeratos ir prieigos.
                </p>
                <button className="px-4 py-2 rounded-full bg-red-600 hover:bg-red-700 text-white text-sm font-medium transition">
                  Ištrinti paskyrą
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
    
    {/* Desktop logout button - fixed bottom left */}
    <div className="hidden lg:flex fixed left-6 bottom-6 z-[9999]">
      <button
        onClick={() => {
          if (confirm('Ar tikrai norite atsijungti?')) signOut({ redirect: false })
        }}
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[linear-gradient(90deg,#F28ACD,#AB57F4)] text-white hover:opacity-90 text-sm font-medium shadow-xl transition-opacity"
      >
        Atsijungti
      </button>
    </div>

    {/* Reschedule Modal */}
    {showRescheduleModal && (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl max-w-md w-full p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-rlText">Perkelti konsultacijos laiką</h3>
            <button
              onClick={() => {
                setShowRescheduleModal(false)
                setRescheduleData({ date: '', time: '' })
              }}
              className="w-8 h-8 rounded-full hover:bg-neutral-100 flex items-center justify-center transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <p className="text-sm text-neutral-600 mb-6">
            Pasirinkite naują datą ir laiką konsultacijai.
          </p>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Data
              </label>
              <input
                type="date"
                value={rescheduleData.date}
                onChange={(e) => setRescheduleData({ ...rescheduleData, date: e.target.value })}
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#AB57F4]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-2">
                Laikas
              </label>
              <select
                value={rescheduleData.time}
                onChange={(e) => setRescheduleData({ ...rescheduleData, time: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-[#AB57F4]"
              >
                <option value="">Pasirinkite laiką</option>
                <option value="09:00">09:00</option>
                <option value="10:00">10:00</option>
                <option value="11:00">11:00</option>
                <option value="12:00">12:00</option>
                <option value="13:00">13:00</option>
                <option value="14:00">14:00</option>
                <option value="15:00">15:00</option>
                <option value="16:00">16:00</option>
                <option value="17:00">17:00</option>
                <option value="18:00">18:00</option>
                <option value="19:00">19:00</option>
                <option value="20:00">20:00</option>
              </select>
            </div>
          </div>

          <div className="flex gap-3 mt-6">
            <button
              onClick={() => {
                setShowRescheduleModal(false)
                setRescheduleData({ date: '', time: '' })
              }}
              className="flex-1 px-4 py-3 rounded-full bg-neutral-100 hover:bg-neutral-200 text-sm font-medium transition"
            >
              Atšaukti
            </button>
            <button
              onClick={saveReschedule}
              className="flex-1 px-4 py-3 rounded-full bg-[linear-gradient(90deg,#F28ACD,#AB57F4)] text-white text-sm font-medium hover:opacity-90 transition"
            >
              Patvirtinti
            </button>
          </div>
        </div>
      </div>
    )}
    </>
  )
}
