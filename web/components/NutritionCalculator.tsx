"use client";

import { useState, useEffect } from "react";
import { GradientButton } from "@/components/ui/GradientButton";

export default function NutritionCalculator() {
  const [age, setAge] = useState(34);
  const [height, setHeight] = useState(168);
  const [weight, setWeight] = useState(70);
  const [activity, setActivity] = useState("light");
  const [meals, setMeals] = useState(4);
  const [goal, setGoal] = useState<"fatloss" | "muscle">("fatloss");
  const [notes, setNotes] = useState("");
  
  const [preferences, setPreferences] = useState({
    vegan: false,
    vegetarian: false,
    glutenFree: false,
    noSeafood: false,
    noDairy: false,
  });

  const [calculations, setCalculations] = useState({
    calories: 0,
    perMeal: 0,
    protein: 0,
    fat: 0,
    carbs: 0,
  });

  const DEFICIT = 20;
  const SURPLUS = 10;

  const bmr = (w: number, h: number, a: number) => 10 * w + 6.25 * h - 5 * a - 161;

  const activityMultiplier = (level: string) => {
    const multipliers: { [key: string]: number } = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      athlete: 1.9,
    };
    return multipliers[level] || 1.375;
  };

  const round = (n: number, decimals = 0) => 
    Math.round(n * Math.pow(10, decimals)) / Math.pow(10, decimals);

  useEffect(() => {
    const _bmr = bmr(weight, height, age);
    const tdee = _bmr * activityMultiplier(activity);
    
    let calories = tdee;
    if (goal === "fatloss") calories = tdee * (1 - DEFICIT / 100);
    if (goal === "muscle") calories = tdee * (1 + SURPLUS / 100);

    const protein = (calories * 0.30) / 4;
    const fat = (calories * 0.30) / 9;
    const carbs = (calories * 0.40) / 4;

    setCalculations({
      calories: round(calories),
      perMeal: round(calories / meals),
      protein: round(protein),
      fat: round(fat),
      carbs: round(carbs),
    });
  }, [age, height, weight, activity, meals, goal]);

  return (
    <div className="nutrition-calculator">
      <div className="rl-wrap">
        <div className="rl-grid">
          {/* Pagrindiniai duomenys */}
          <div className="rl-card">
            <h3>Pagrindiniai duomenys</h3>
            <div className="rl-row">
              <div className="rl-col-12">
                <label>Lytis</label>
                <button className="rl-badge" disabled>
                  Moteris
                </button>
              </div>
              <div>
                <label>Amžius</label>
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(Number(e.target.value))}
                  min="14"
                  max="100"
                />
              </div>
              <div>
                <label>Ūgis (cm)</label>
                <input
                  type="number"
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value))}
                  min="120"
                  max="220"
                />
              </div>
              <div>
                <label>Svoris (kg)</label>
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(Number(e.target.value))}
                  min="35"
                  max="200"
                />
              </div>
              <div>
                <label>Aktyvumas</label>
                <select value={activity} onChange={(e) => setActivity(e.target.value)}>
                  <option value="sedentary">Sėslus</option>
                  <option value="light">Lengvas</option>
                  <option value="moderate">Vidutinis</option>
                  <option value="active">Aktyvus</option>
                  <option value="athlete">Labai aktyvus</option>
                </select>
              </div>
              <div className="rl-col-full">
                <label>Pasirink, ko sieki – aš sudėliosiu tau tinkamą planą</label>
                <div className="rl-goals">
                  <button
                    type="button"
                    className={`rl-pill ${goal === "fatloss" ? "rl-pill--active" : ""}`}
                    onClick={() => setGoal("fatloss")}
                  >
                    Riebalų mažinimas
                  </button>
                  <button
                    type="button"
                    className={`rl-pill ${goal === "muscle" ? "rl-pill--active" : ""}`}
                    onClick={() => setGoal("muscle")}
                  >
                    Raumenų auginimas
                  </button>
                </div>
              </div>
              <div className="rl-col-full">
                <label>Valgymų per dieną</label>
                <select value={meals} onChange={(e) => setMeals(Number(e.target.value))}>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
            </div>
          </div>

          {/* Mitybos nuostatos */}
          <div className="rl-card">
            <h3>Mitybos nuostatos</h3>
            <div className="rl-row rl-prefs">
              <label className="rl-checkbox-label">
                <input
                  type="checkbox"
                  checked={preferences.vegan}
                  onChange={(e) => setPreferences({ ...preferences, vegan: e.target.checked })}
                />
                Veganiška
              </label>
              <label className="rl-checkbox-label">
                <input
                  type="checkbox"
                  checked={preferences.vegetarian}
                  onChange={(e) => setPreferences({ ...preferences, vegetarian: e.target.checked })}
                />
                Vegetariška
              </label>
              <label className="rl-checkbox-label">
                <input
                  type="checkbox"
                  checked={preferences.glutenFree}
                  onChange={(e) => setPreferences({ ...preferences, glutenFree: e.target.checked })}
                />
                Be glitimo
              </label>
              <label className="rl-checkbox-label">
                <input
                  type="checkbox"
                  checked={preferences.noSeafood}
                  onChange={(e) => setPreferences({ ...preferences, noSeafood: e.target.checked })}
                />
                Be žuvies/jūrų g.
              </label>
              <label className="rl-checkbox-label">
                <input
                  type="checkbox"
                  checked={preferences.noDairy}
                  onChange={(e) => setPreferences({ ...preferences, noDairy: e.target.checked })}
                />
                Be pieno produktų
              </label>
              <div className="rl-col-full">
                <label>
                  Papildoma informacija (alergijos, nemėgstami produktai, tvarkaraštis)
                </label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Pvz.: netoleruoju laktozės; vengiu aštraus maisto; dirbu pamainomis..."
                />
              </div>
            </div>

            {/* Skaičiavimai */}
            <div className="rl-box">
              <h4>Skaičiavimai</h4>
              <p className="rl-note">
                Pagal tavo duomenis – toks planas padės tau pasiekti rezultatų jau per kelias savaites.
              </p>
              <div className="rl-line">
                <span>Dienos tikslas:</span>
                <b>{calculations.calories} kcal</b>
              </div>
              <div className="rl-line">
                <span>1 valgymui:</span>
                <b>{calculations.perMeal} kcal</b>
              </div>
              <div className="rl-line">
                <span>Baltymai:</span>
                <b>{calculations.protein} g</b>
              </div>
              <div className="rl-line">
                <span>Riebalai:</span>
                <b>{calculations.fat} g</b>
              </div>
              <div className="rl-line">
                <span>Angliavandeniai:</span>
                <b>{calculations.carbs} g</b>
              </div>
              <GradientButton as="a" href="#" withArrow icon="et-circle-cutout" iconHover="slide-right" className="w-full justify-center">
                Gauti savo planą šiandien už 29 €
              </GradientButton>
              <div className="rl-safe">🔒 Saugus mokėjimas. Planą gausi el. paštu per 24 val.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
