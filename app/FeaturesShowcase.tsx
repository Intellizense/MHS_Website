"use client";

import { useEffect, useRef, useState } from "react";

const featurePanels = [
  {
    eyebrow: "GUIDED SPEAKING",
    title: "Know exactly what to say.",
    body: "Step into guided scenes from real life—the café, the shuk, the clinic. Answer naturally and keep the conversation moving.",
    image: "/assets/feature-speak.jpg",
    alt: "Guided speaking scene in My Hebrew Story with a suggested response and microphone control",
  },
  {
    eyebrow: "KIND AI FEEDBACK",
    title: "Say it your way.",
    body: "You don’t have to repeat a perfect script. If your meaning fits the moment, it counts—and your AI reviewer responds with patient, useful guidance that helps your Hebrew sound more natural.",
    image: "/assets/feature-done-speak.jpg",
    alt: "Supportive AI feedback recognizing a natural Hebrew reply",
  },
  {
    eyebrow: "HEBREW THAT FITS YOU",
    title: "Choose the Hebrew meant for you.",
    body: "Choose Gal or Ron as your main character. Because Hebrew changes with gender, every line helps you practice the forms you’ll actually speak—and hear addressed to you.",
    image: "/assets/feature-settings.jpg",
    alt: "Profile setting for choosing Ron or Gal as the story protagonist",
  },
  {
    eyebrow: "GAL’S STORY",
    title: "Live Gal’s version of the story.",
    body: "Choose Gal and she becomes the newcomer. The illustrations, narration, and dialogue follow her through a year in Israel, using feminine Hebrew throughout.",
    image: "/assets/feature-gal-story.jpg",
    alt: "Lesson one with Gal as the new immigrant and main character",
  },
  {
    eyebrow: "RON’S STORY",
    title: "Or step into Ron’s.",
    body: "Choose Ron and the same story unfolds in an alternate version, with Ron as the new immigrant and masculine Hebrew woven naturally into every scene.",
    image: "/assets/feature-ron-story.jpg",
    alt: "Lesson one with Ron as the new immigrant and main character",
  },
  {
    eyebrow: "CULTURE IN CONTEXT",
    title: "Understand Israel, not just Hebrew.",
    body: "Meet grammar and culture where they matter—in the dialogue you just heard, the neighborhood you are exploring, and the life you are building.",
    image: "/assets/feature-culture.jpg",
    alt: "Cultural note about Yom Kippur and everyday life in Israel",
  },
];

const formatStep = (index: number) => String(index + 1).padStart(2, "0");

export function FeaturesShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const stepRefs = useRef<Array<HTMLElement | null>>([]);

  useEffect(() => {
    featurePanels.forEach(({ image }) => {
      const preload = new Image();
      preload.src = image;
    });

    let animationFrame = 0;

    const updateActiveStep = () => {
      animationFrame = 0;
      const activationLine = window.innerHeight * 0.48;
      let nextIndex = 0;

      stepRefs.current.forEach((step, index) => {
        if (step && step.getBoundingClientRect().top <= activationLine) {
          nextIndex = index;
        }
      });

      setActiveIndex((currentIndex) =>
        currentIndex === nextIndex ? currentIndex : nextIndex,
      );
    };

    const scheduleUpdate = () => {
      if (animationFrame === 0) {
        animationFrame = window.requestAnimationFrame(updateActiveStep);
      }
    };

    updateActiveStep();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      if (animationFrame !== 0) window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <section className="features" aria-labelledby="features-title">
      <div className="section-shell features-heading">
        <p className="eyebrow">WHAT MAKES IT DIFFERENT</p>
        <h2 id="features-title">Your story. Your Hebrew. Every step supported.</h2>
      </div>

      <div className="features-stage section-shell">
        <div className="feature-phone-column" aria-hidden="true">
          <div className="feature-phone-sticky">
            <div className="feature-phone">
              <div className="feature-phone-screen">
                {featurePanels.map((feature, index) => (
                  <img
                    className={index === activeIndex ? "is-active" : ""}
                    src={feature.image}
                    alt=""
                    loading="eager"
                    decoding="async"
                    key={feature.image}
                  />
                ))}
              </div>
            </div>
            <div className="feature-progress">
              <span>{formatStep(activeIndex)}</span>
              <span aria-hidden="true">/</span>
              <span>{formatStep(featurePanels.length - 1)}</span>
            </div>
          </div>
        </div>

        <div className="feature-steps">
          {featurePanels.map((feature, index) => (
            <article
              className={`feature-step${index === activeIndex ? " is-active" : ""}`}
              data-feature-index={index}
              ref={(node) => {
                stepRefs.current[index] = node;
              }}
              key={feature.image}
            >
              <div className="feature-mobile-phone">
                <img src={feature.image} alt={feature.alt} loading="lazy" />
              </div>
              <div className="feature-step-copy">
                <span className="feature-number">{formatStep(index)}</span>
                <p className="eyebrow">{feature.eyebrow}</p>
                <h3>{feature.title}</h3>
                <p>{feature.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
