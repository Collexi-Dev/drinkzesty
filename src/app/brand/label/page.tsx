'use client';

import { useState } from 'react';
import { GingerDrawing } from '@/components/GingerIcon';

export default function LabelDesigner() {
  const [showArchive, setShowArchive] = useState(false);

  return (
    <div className="w-full">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[var(--text)] mb-2">Label designer</h1>
        <p className="text-gray-500">
          Final label design. Use as reference for Nano Banana product shots.
          <br />
          <span className="text-xs">Real label ~12cm × 8cm. Shown at 1080×520px.</span>
        </p>
      </div>

      {/* ================================================================ */}
      {/*  FINAL LABEL                                                     */}
      {/* ================================================================ */}
      <div className="bg-white rounded-2xl p-16 border border-gray-200 mb-8">
        <div className="text-xs text-gray-400 uppercase tracking-[3px] mb-2">Final label</div>
        <div className="text-sm text-gray-500 mb-8">Modern minimal: amber bars, pill badge, numbered steps</div>

        <div
          style={{
            width: '1080px',
            height: '520px',
            fontFamily: "'Quicksand', sans-serif",
            display: 'flex',
            background: '#FFFDF7',
            overflow: 'hidden',
            margin: '0 auto',
          }}
        >
          <div style={{ width: '7px', background: '#F2A922', flexShrink: 0 }} />

          {/* FRONT 53% */}
          <div
            style={{
              width: '53%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              padding: '20px 36px',
            }}
          >
            {/* Dot grid */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                opacity: 0.05,
                backgroundImage: 'radial-gradient(circle, #8a8070 1px, transparent 1px)',
                backgroundSize: '14px 14px',
                pointerEvents: 'none',
              }}
            />

            <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
              <div style={{ position: 'relative', display: 'inline-block' }}>
                <span style={{ fontSize: '86px', fontWeight: 700, color: '#F2A922', letterSpacing: '3px', lineHeight: 0.85 }}>
                  zesty
                </span>
                <div style={{ position: 'absolute', top: '-48px', right: '-80px' }}>
                  <GingerDrawing size={120} color="#6B8F5E" />
                </div>
              </div>

              <div style={{ width: '50px', height: '3px', background: '#F2A922', margin: '14px auto 12px auto', borderRadius: '2px' }} />

              <div style={{ fontSize: '18px', fontWeight: 600, color: '#2D2D2D', letterSpacing: '2px', textTransform: 'uppercase' as const }}>
                ginger + turmeric shot
              </div>

              <div
                style={{
                  display: 'inline-block',
                  marginTop: '16px',
                  padding: '7px 24px',
                  background: '#2D2D2D',
                  borderRadius: '50px',
                  fontSize: '15px',
                  fontWeight: 700,
                  color: '#FFFDF7',
                  letterSpacing: '1px',
                  textTransform: 'uppercase' as const,
                }}
              >
                10g creatine
              </div>

              <div style={{ fontSize: '14px', fontWeight: 600, color: '#6B8F5E', marginTop: '10px', letterSpacing: '1px' }}>
                brain • muscle • energy
              </div>

              <div style={{ fontSize: '10px', color: '#2D2D2D', marginTop: '14px', opacity: 0.6, letterSpacing: '0.5px' }}>
                creatine sealed fresh in the cap
              </div>
            </div>

            <div style={{ position: 'absolute', bottom: '14px', left: '24px', fontSize: '13px', fontWeight: 600, color: '#2D2D2D', opacity: 0.6 }}>
              90 ml
            </div>
            <div style={{ position: 'absolute', bottom: '14px', right: '24px', fontSize: '12px', fontWeight: 700, color: '#F2A922' }}>
              drinkzesty.be
            </div>
          </div>

          <div style={{ width: '1px', background: '#e8e0d4', flexShrink: 0 }} />

          {/* BACK 47% */}
          <div
            style={{
              flex: 1,
              background: '#FAF7F2',
              padding: '28px 28px 20px 28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ fontSize: '16px', fontWeight: 700, color: '#F2A922', marginBottom: '12px', letterSpacing: '1px', textTransform: 'uppercase' as const }}>
                how it works
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[
                  'twist the cap to release the lock',
                  'press down to release the creatine',
                  'shake well until mixed & enjoy!',
                ].map((step, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div
                      style={{
                        width: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        background: '#F2A922',
                        color: '#fff',
                        fontSize: '12px',
                        fontWeight: 700,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      {i + 1}
                    </div>
                    <span style={{ fontSize: '14px', color: '#2D2D2D', fontWeight: 500 }}>{step}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div style={{ fontSize: '18px', fontWeight: 700, color: '#6B8F5E', marginBottom: '6px' }}>
                the shot <span style={{ fontSize: '12px', fontWeight: 500, color: '#2D2D2D', opacity: 0.6 }}>(90 ml)</span>
              </div>
              <div style={{ fontSize: '12.5px', color: '#2D2D2D', lineHeight: 1.85 }}>
                Ginger juice (30 ml) · Turmeric juice (10 ml)<br />
                Lemon juice (15 ml) · Pineapple juice (15 ml)<br />
                Orange juice (15 ml) · Water (5 ml)<br />
                Black pepper extract (10 mg piperine)<br />
                <span style={{ opacity: 0.55 }}>No added sugar · No preservatives</span>
              </div>
            </div>

            <div>
              <div style={{ fontSize: '18px', fontWeight: 700, color: '#6B8F5E', marginBottom: '6px' }}>the cap</div>
              <div style={{ fontSize: '12.5px', color: '#2D2D2D', lineHeight: 1.85 }}>
                Creatine monohydrate 10g (clinical dose)<br />
                <span style={{ opacity: 0.55 }}>Sealed. Zero fillers. Zero additives.</span>
              </div>
            </div>

            <div>
              <div
                style={{
                  fontSize: '9px',
                  color: '#a09888',
                  lineHeight: 1.65,
                  borderTop: '1px solid #e0d9ce',
                  paddingTop: '8px',
                }}
              >
                Food supplement. Do not exceed the recommended daily dose.
                Not a substitute for a varied diet. Keep out of reach of children.
                Store cool &amp; dry. Best before: see cap. Made in the EU.
                Lot: [BATCH]. Net vol: 90 ml. zesty · Belgium · drinkzesty.be
              </div>
            </div>
          </div>

          <div style={{ width: '7px', background: '#F2A922', flexShrink: 0 }} />
        </div>
      </div>

      {/* ================================================================ */}
      {/*  ARCHIVED: VARIATION A                                           */}
      {/* ================================================================ */}
      <div className="border border-gray-200 rounded-2xl mb-8 overflow-hidden">
        <button
          onClick={() => setShowArchive(!showArchive)}
          className="w-full px-16 py-5 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer text-left"
        >
          <div>
            <span className="text-xs text-gray-400 uppercase tracking-[3px]">archived — variation a</span>
            <span className="text-sm text-gray-400 ml-4">Dot grid, top/bottom stripes, vertical back panel</span>
          </div>
          <span className="text-gray-400 text-xl">{showArchive ? '−' : '+'}</span>
        </button>

        {showArchive && (
          <div className="bg-white p-16">
            <div
              style={{
                width: '1080px',
                height: '520px',
                fontFamily: "'Quicksand', sans-serif",
                display: 'flex',
                background: '#FFFDF7',
                overflow: 'hidden',
                margin: '0 auto',
              }}
            >
              {/* FRONT 55% */}
              <div style={{ width: '55%', position: 'relative', display: 'flex', flexDirection: 'column' }}>
                <div style={{ height: '6px', background: '#F2A922', flexShrink: 0 }} />
                <div
                  style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    padding: '16px 36px',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      opacity: 0.035,
                      backgroundImage: 'radial-gradient(circle, #8a8070 1px, transparent 1px)',
                      backgroundSize: '14px 14px',
                      pointerEvents: 'none',
                    }}
                  />

                  <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                    <div style={{ position: 'relative', display: 'inline-block' }}>
                      <div style={{ fontSize: '80px', fontWeight: 700, color: '#F2A922', letterSpacing: '2px', lineHeight: 0.9 }}>
                        zesty
                      </div>
                      <div style={{ position: 'absolute', top: '-24px', right: '-48px' }}>
                        <GingerDrawing size={60} color="#6B8F5E" />
                      </div>
                    </div>

                    <div style={{ fontSize: '20px', fontWeight: 500, color: '#2D2D2D', marginTop: '10px', letterSpacing: '0.3px' }}>
                      ginger + turmeric shot
                    </div>

                    <div
                      style={{
                        display: 'inline-block',
                        marginTop: '14px',
                        padding: '6px 20px',
                        border: '2.5px solid #2D2D2D',
                        borderRadius: '8px',
                        fontSize: '17px',
                        fontWeight: 700,
                        color: '#2D2D2D',
                      }}
                    >
                      with 10g creatine
                    </div>

                    <div style={{ fontSize: '13px', fontWeight: 600, color: '#6B8F5E', marginTop: '10px', letterSpacing: '0.5px' }}>
                      supports brain, muscle &amp; energy
                    </div>

                    <div style={{ fontSize: '11px', color: '#2D2D2D', marginTop: '12px', opacity: 0.5, letterSpacing: '0.3px' }}>
                      creatine sealed fresh in the cap
                    </div>
                  </div>

                  <div style={{ position: 'absolute', bottom: '12px', right: '20px', fontSize: '14px', fontWeight: 600, color: '#2D2D2D', zIndex: 1 }}>
                    90 ml
                  </div>
                </div>
                <div style={{ height: '6px', background: '#F2A922', flexShrink: 0 }} />
              </div>

              {/* BACK 45% */}
              <div
                style={{
                  width: '45%',
                  background: '#F8F4ED',
                  padding: '28px 30px 20px 30px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderLeft: '1px dashed #ddd5c8',
                }}
              >
                <div>
                  <div style={{ fontSize: '20px', fontWeight: 700, color: '#2D2D2D', marginBottom: '10px' }}>how it works</div>
                  <div style={{ fontSize: '14px', color: '#2D2D2D', lineHeight: 1.9 }}>
                    1. twist the cap to release the lock<br />
                    2. press down to release the creatine<br />
                    3. shake well until mixed &amp; enjoy!
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '18px', fontWeight: 700, color: '#6B8F5E', marginBottom: '6px' }}>
                    the shot <span style={{ fontSize: '12px', fontWeight: 500, color: '#2D2D2D', opacity: 0.6 }}>(90 ml)</span>
                  </div>
                  <div style={{ fontSize: '12.5px', color: '#2D2D2D', lineHeight: 1.85 }}>
                    Ginger juice (30 ml) · Turmeric juice (10 ml)<br />
                    Lemon juice (15 ml) · Pineapple juice (15 ml)<br />
                    Orange juice (15 ml) · Water (5 ml)<br />
                    Black pepper extract (10 mg piperine)<br />
                    <span style={{ opacity: 0.55 }}>No added sugar · No preservatives</span>
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '18px', fontWeight: 700, color: '#6B8F5E', marginBottom: '6px' }}>the cap</div>
                  <div style={{ fontSize: '12.5px', color: '#2D2D2D', lineHeight: 1.85 }}>
                    Creatine monohydrate 10g (clinical dose)<br />
                    <span style={{ opacity: 0.55 }}>Sealed. Zero fillers. Zero additives.</span>
                  </div>
                </div>

                <div>
                  <div
                    style={{
                      fontSize: '9px',
                      color: '#a09888',
                      lineHeight: 1.65,
                      borderTop: '1px solid #ddd5c8',
                      paddingTop: '8px',
                    }}
                  >
                    Food supplement. Do not exceed the recommended daily dose.<br />
                    Not a substitute for a varied diet. Keep out of reach of children.<br />
                    Store cool &amp; dry. Best before: see cap. Made in the EU.<br />
                    Lot: [BATCH]. Net vol: 90 ml.
                  </div>
                  <div style={{ fontSize: '15px', fontWeight: 700, color: '#2D2D2D', marginTop: '6px' }}>drinkzesty.be</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
