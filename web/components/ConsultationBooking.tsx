'use client'

import { useState } from 'react'
import { Calendar, Clock, Check, X, ChevronLeft, ChevronRight, User, Mail, Phone, MessageSquare } from 'lucide-react'
import { CONSULTATIONS } from '@/lib/consultationData'

type BookingStep = 'type' | 'datetime' | 'details' | 'payment'

interface BookingData {
  consultationType: string
  date: Date | null
  timeSlot: string
  name: string
  email: string
  phone: string
  message: string
}

// Available time slots
const TIME_SLOTS = [
  '09:00', '10:00', '11:00', '12:00', '13:00', 
  '14:00', '15:00', '16:00', '17:00', '18:00'
]

// Mock booked slots (replace with real API data)
const BOOKED_SLOTS: Record<string, string[]> = {
  '2025-10-20': ['09:00', '14:00', '15:00'],
  '2025-10-21': ['10:00', '11:00'],
  '2025-10-22': ['16:00', '17:00'],
}

const STEP_ORDER: BookingStep[] = ['type', 'datetime', 'details', 'payment']
const STEP_LABELS = ['Tipas', 'Data & Laikas', 'Duomenys', 'Mokėjimas'] as const

export default function ConsultationBooking() {
  const [step, setStep] = useState<BookingStep>('type')
  const [bookingData, setBookingData] = useState<BookingData>({
    consultationType: '',
    date: null,
    timeSlot: '',
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [errors, setErrors] = useState<Record<string, string>>({})

  // Get selected consultation details
  const selectedConsultation = CONSULTATIONS.find(c => c.id === bookingData.consultationType)

  // Calendar helpers
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()
    
    return { daysInMonth, startingDayOfWeek }
  }

  const isDateAvailable = (date: Date) => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    
    // Can't book past dates or today
    if (date < today) return false
    
    // Can't book Sundays
    if (date.getDay() === 0) return false
    
    return true
  }

  const isTimeSlotAvailable = (date: Date, time: string) => {
    const dateStr = date.toISOString().split('T')[0]
    const bookedTimes = BOOKED_SLOTS[dateStr] || []
    return !bookedTimes.includes(time)
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('lt-LT', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))
  }

  const prevMonth = () => {
    const today = new Date()
    const newMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1)
    if (newMonth >= new Date(today.getFullYear(), today.getMonth())) {
      setCurrentMonth(newMonth)
    }
  }

  const validateDetails = () => {
    const newErrors: Record<string, string> = {}
    
    if (!bookingData.name.trim()) newErrors.name = 'Vardas privalomas'
    if (!bookingData.email.trim()) newErrors.email = 'El. paštas privalomas'
    if (!/\S+@\S+\.\S+/.test(bookingData.email)) newErrors.email = 'Netinkamas el. pašto formatas'
    if (!bookingData.phone.trim()) newErrors.phone = 'Telefono numeris privalomas'
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNextStep = () => {
    if (step === 'type' && !bookingData.consultationType) {
      alert('Pasirink konsultacijos tipą')
      return
    }
    if (step === 'datetime' && (!bookingData.date || !bookingData.timeSlot)) {
      alert('Pasirink datą ir laiką')
      return
    }
    if (step === 'details' && !validateDetails()) {
      return
    }
    
    const currentIndex = STEP_ORDER.indexOf(step)
    if (currentIndex < STEP_ORDER.length - 1) {
      setStep(STEP_ORDER[currentIndex + 1])
    }
  }

  const handlePrevStep = () => {
    const currentIndex = STEP_ORDER.indexOf(step)
    if (currentIndex > 0) {
      setStep(STEP_ORDER[currentIndex - 1])
    }
  }

  const handleSubmit = async () => {
    // TODO: Send to API endpoint
    const response = await fetch('/api/consultations/book', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bookingData),
    })
    
    if (response.ok) {
      // Redirect to payment or confirmation
      window.location.href = `/api/checkout?consultation=${bookingData.consultationType}&date=${bookingData.date?.toISOString()}&time=${bookingData.timeSlot}`
    }
  }

  const currentStepIndex = STEP_ORDER.indexOf(step)

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex items-start justify-between relative">
          {/* Connecting lines behind circles */}
          <div className="absolute top-5 left-0 right-0 flex items-center px-5">
            <div className="flex-1 flex">
              {STEP_ORDER.map((s, idx) => (
                idx < STEP_ORDER.length - 1 && (
                  <div
                    key={idx}
                    className={`flex-1 h-1 transition ${currentStepIndex > idx ? 'bg-green-500' : 'bg-neutral-200'}`}
                  />
                )
              ))}
            </div>
          </div>

          {/* Step circles with labels */}
          {STEP_ORDER.map((s, idx) => {
            const isActive = step === s
            const isCompleted = currentStepIndex > idx
            
            return (
              <div key={s} className="flex flex-col items-center flex-1 relative z-10">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition ${
                    isActive
                      ? 'bg-gradient-to-r from-[#F28ACD] to-[#AB57F4] text-white'
                      : isCompleted
                      ? 'bg-green-500 text-white'
                      : 'bg-neutral-200 text-neutral-500'
                  }`}
                >
                  {isCompleted ? <Check className="w-5 h-5" /> : idx + 1}
                </div>
                <span className="mt-2 text-xs text-neutral-600 text-center">{STEP_LABELS[idx]}</span>
              </div>
            )
          })}
        </div>
      </div>

      {/* Step Content */}
      <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8">
        
        {/* Step 1: Consultation Type */}
        {step === 'type' && (
          <div>
            <h2 className="text-2xl font-bold text-[#28262C] mb-6">
              Pasirink konsultacijos <span className="gradient-text">tipą</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {CONSULTATIONS.map((consultation) => (
                <button
                  key={consultation.id}
                  onClick={() => setBookingData({ ...bookingData, consultationType: consultation.id })}
                  className={`text-left p-6 rounded-xl border-2 transition hover:border-[#F28ACD] ${
                    bookingData.consultationType === consultation.id
                      ? 'border-[#F28ACD] bg-pink-50'
                      : 'border-neutral-200'
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="text-3xl">{consultation.icon}</div>
                    {bookingData.consultationType === consultation.id && (
                      <Check className="w-6 h-6 text-[#F28ACD]" />
                    )}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{consultation.title}</h3>
                  <p className="text-sm text-neutral-600 mb-3">{consultation.description}</p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {consultation.duration} min
                    </span>
                    <span className="font-bold text-[#F28ACD]">{consultation.price} €</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Date & Time Selection */}
        {step === 'datetime' && (
          <div>
            <h2 className="text-2xl font-bold text-[#28262C] mb-6">
              Pasirink <span className="gradient-text">datą ir laiką</span>
            </h2>
            
            {/* Calendar */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-lg">
                  {currentMonth.toLocaleDateString('lt-LT', { month: 'long', year: 'numeric' })}
                </h3>
                <div className="flex gap-2">
                  <button
                    onClick={prevMonth}
                    className="p-2 rounded-full hover:bg-neutral-100"
                    aria-label="Ankstesnis mėnuo"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextMonth}
                    className="p-2 rounded-full hover:bg-neutral-100"
                    aria-label="Kitas mėnuo"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-2">
                {['P', 'A', 'T', 'K', 'Pn', 'Š', 'S'].map((day) => (
                  <div key={day} className="text-center text-sm font-semibold text-neutral-600 p-2">
                    {day}
                  </div>
                ))}
                
                {(() => {
                  const { daysInMonth, startingDayOfWeek } = getDaysInMonth(currentMonth)
                  const days = []
                  
                  // Empty cells before first day
                  for (let i = 0; i < (startingDayOfWeek === 0 ? 6 : startingDayOfWeek - 1); i++) {
                    days.push(<div key={`empty-${i}`} />)
                  }
                  
                  // Days of month
                  for (let day = 1; day <= daysInMonth; day++) {
                    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day)
                    const isAvailable = isDateAvailable(date)
                    const isSelected = bookingData.date?.toDateString() === date.toDateString()
                    
                    days.push(
                      <button
                        key={day}
                        onClick={() => isAvailable && setBookingData({ ...bookingData, date, timeSlot: '' })}
                        disabled={!isAvailable}
                        className={`aspect-square p-2 rounded-lg text-sm font-medium transition ${
                          isSelected
                            ? 'bg-gradient-to-r from-[#F28ACD] to-[#AB57F4] text-white'
                            : isAvailable
                            ? 'hover:bg-pink-50 hover:text-[#F28ACD]'
                            : 'text-neutral-300 cursor-not-allowed'
                        }`}
                      >
                        {day}
                      </button>
                    )
                  }
                  
                  return days
                })()}
              </div>
            </div>

            {/* Time Slots */}
            {bookingData.date && (
              <div>
                <h3 className="font-semibold mb-3">
                  Pasirink laiką ({formatDate(bookingData.date)})
                </h3>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                  {TIME_SLOTS.map((time) => {
                    const isAvailable = isTimeSlotAvailable(bookingData.date!, time)
                    const isSelected = bookingData.timeSlot === time
                    
                    return (
                      <button
                        key={time}
                        onClick={() => isAvailable && setBookingData({ ...bookingData, timeSlot: time })}
                        disabled={!isAvailable}
                        className={`p-3 rounded-lg font-medium transition ${
                          isSelected
                            ? 'bg-gradient-to-r from-[#F28ACD] to-[#AB57F4] text-white'
                            : isAvailable
                            ? 'border-2 border-neutral-200 hover:border-[#F28ACD] hover:bg-pink-50'
                            : 'border-2 border-neutral-100 text-neutral-300 cursor-not-allowed'
                        }`}
                      >
                        {time}
                      </button>
                    )
                  })}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Step 3: Personal Details */}
        {step === 'details' && (
          <div>
            <h2 className="text-2xl font-bold text-[#28262C] mb-6">
              Tavo <span className="gradient-text">kontaktiniai duomenys</span>
            </h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  <User className="w-4 h-4 inline mr-1" />
                  Vardas ir pavardė *
                </label>
                <input
                  type="text"
                  value={bookingData.name}
                  onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:border-[#F28ACD] transition ${
                    errors.name ? 'border-red-500' : 'border-neutral-200'
                  }`}
                  placeholder="Vardenis Pavardenis"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  <Mail className="w-4 h-4 inline mr-1" />
                  El. paštas *
                </label>
                <input
                  type="email"
                  value={bookingData.email}
                  onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:border-[#F28ACD] transition ${
                    errors.email ? 'border-red-500' : 'border-neutral-200'
                  }`}
                  placeholder="vardas@example.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  <Phone className="w-4 h-4 inline mr-1" />
                  Telefono numeris *
                </label>
                <input
                  type="tel"
                  value={bookingData.phone}
                  onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                  className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:border-[#F28ACD] transition ${
                    errors.phone ? 'border-red-500' : 'border-neutral-200'
                  }`}
                  placeholder="+370 600 00000"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  <MessageSquare className="w-4 h-4 inline mr-1" />
                  Papildoma žinutė (nebūtina)
                </label>
                <textarea
                  value={bookingData.message}
                  onChange={(e) => setBookingData({ ...bookingData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border-2 border-neutral-200 focus:outline-none focus:border-[#F28ACD] transition"
                  placeholder="Aprašyk savo tikslus, lūkesčius ar klausimus..."
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Payment Summary */}
        {step === 'payment' && selectedConsultation && (
          <div>
            <h2 className="text-2xl font-bold text-[#28262C] mb-6">
              Užsakymo <span className="gradient-text">santrauka</span>
            </h2>
            
            <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-6 mb-6">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm text-neutral-600">Konsultacija</p>
                    <p className="font-semibold">{selectedConsultation.title}</p>
                  </div>
                  <p className="font-bold text-lg">{selectedConsultation.price} €</p>
                </div>
                
                <div className="border-t border-neutral-200 pt-4">
                  <div className="flex items-center gap-2 text-sm text-neutral-600 mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>{bookingData.date && formatDate(bookingData.date)}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-neutral-600 mb-2">
                    <Clock className="w-4 h-4" />
                    <span>{bookingData.timeSlot} val. ({selectedConsultation.duration} min)</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-neutral-600">
                    <User className="w-4 h-4" />
                    <span>{bookingData.name}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
              <p className="text-sm text-neutral-700">
                <strong>Svarbu:</strong> Po mokėjimo patvirtinimo gausi el. laišką su Zoom/Google Meet nuoroda ir paruošimo klausimyną.
              </p>
            </div>

            <div className="flex justify-between items-center p-4 bg-neutral-50 rounded-xl">
              <span className="font-semibold text-lg">Viso mokėti:</span>
              <span className="font-bold text-2xl text-[#F28ACD]">{selectedConsultation.price} €</span>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex gap-3 mt-8">
          {step !== 'type' && (
            <button
              onClick={handlePrevStep}
              className="flex-1 px-6 py-3 rounded-full border-2 border-neutral-300 font-semibold hover:bg-neutral-50 transition"
            >
              Atgal
            </button>
          )}
          
          {step !== 'payment' ? (
            <button
              onClick={handleNextStep}
              className="flex-1 px-6 py-3 rounded-full bg-gradient-to-r from-[#F28ACD] to-[#AB57F4] text-white font-semibold hover:opacity-90 transition"
            >
              Toliau
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="flex-1 px-6 py-3 rounded-full bg-gradient-to-r from-[#F28ACD] to-[#AB57F4] text-white font-semibold hover:opacity-90 transition"
            >
              Pereiti prie mokėjimo
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

