import React from "react";

// --- ICONS ---
// Simple SVG icons to keep the main code clean

import ContactSection from "./components/contact";
import Header from "./components/header";
const CheckIcon = () => (
  <svg
    className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0 mt-1"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 13l4 4L19 7"
    />
  </svg>
);

const SocialIcon = () => (
  <svg
    className="h-8 w-8 text-teal-600 mb-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
    />
  </svg>
);

const DocIcon = () => (
  <svg
    className="h-8 w-8 text-teal-600 mb-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    />
  </svg>
);

const StrategyIcon = () => (
  <svg
    className="h-8 w-8 text-teal-600 mb-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
    />
  </svg>
);

// --- SECTIONS ---

const HeroSection: React.FC = () => (
  <section className="relative bg-teal-50 overflow-hidden">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center">
      {/* LEFT CONTENT */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-20">
        <span className="inline-block py-1 px-3 rounded-full bg-teal-100 text-teal-700 text-xs font-bold tracking-wider uppercase mb-4">
          Registered Dietician (Kenya)
        </span>

        <h2 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block xl:inline">Simplifying Health</span>{" "}
          <span className="block text-teal-600 xl:inline">& Nutrition</span>
        </h2>

        <p className="mt-4 text-base text-gray-500 sm:text-lg max-w-xl">
          10+ years in nutrition education, public health communication, and
          content strategy.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a
            href="#services"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg text-white bg-teal-600 hover:bg-teal-700 md:py-4 md:text-lg shadow-lg transition"
          >
            View Services
          </a>

          <a
            href="#samples"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg text-teal-700 bg-white border border-teal-200 hover:bg-teal-50 md:py-4 md:text-lg shadow-sm transition"
          >
            See Portfolio
          </a>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="flex justify-center px-6 py-12">
        <img
          src="./one.jpg"
          alt="Nutritionist working with healthy food"
          className="
            w-full 
            max-w-md 
            max-h-[420px]
            object-cover 
            rounded-2xl 
            shadow-xl
          "
        />
      </div>
    </div>
  </section>
);

const AboutMeSection: React.FC = () => (
  <section id="about" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
        {/* About Image */}
        <div className="relative">
          <div className="absolute top-4 left-4 w-full h-full bg-teal-100 rounded-2xl -z-10"></div>
          {/*  */}
          <img
            className="rounded-2xl shadow-xl w-full object-cover h-[500px]"
            src="./two.jpg"
            alt="Mary Adhiambo Professional Shot"
          />
        </div>

        <div className="mt-10 lg:mt-0">
          <h3 className="text-lg text-teal-600 font-bold tracking-wide uppercase mb-2">
            About Me
          </h3>
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">
            I aim to make health information easy, compassionate, and useful.
          </h2>
          <div className="prose text-gray-600 text-lg leading-relaxed space-y-6">
            <p>
              I'm a Registered Dietician with 8 years of experience in clinical
              and community nutrition, and 3 years of experience in health
              communication and digital content.
            </p>
            <p>
              I’ve worked with the FAO, Kenya’s Ministry of Health, hospitals,
              and schools, giving me a solid understanding of both patient needs
              and public health systems.
            </p>

            <div className="bg-teal-50 border-l-4 border-teal-500 p-6 rounded-r-lg">
              <p className="italic text-teal-800 font-medium">
                "My strengths lie in simplifying complex nutrition and medical
                information into clear, practical messages: whether that's
                patient explainers, parent guides, or digital content for health
                brands."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const KeyServicesSection: React.FC = () => {
  const services = [
    {
      title: "Social Media & Website Content Management",
      desc: "Clear, evidence-based digital communication for health and nutrition brands.",
      Icon: SocialIcon,
      points: [
        "Social media strategy",
        "Content creation (captions, scripts, posts, infographics) ",
        "Content calendars",
        "Website copy and updates",
        "Digital storytelling for health programs",
        "Brand messaging for health and wellness businesses",
      ],
    },
    {
      title: "Patient Education & Clinical Communication Materials",
      desc: "Transforming complex medical and nutrition information into simple, patient-friendly materials.",
      Icon: DocIcon,
      points: [
        "Hospital procedure explainers",
        "Patient reference guides",
        "Discharge nutrition instructions",
        "Condition-specific education sheets",
        "Treatment and medication explainers",
        "Visual infographics and handouts",
        "Evidence-based materials designed for readability and comprehension",
        "Compliance with Medical & Religious Dietary Restrictions ",
      ],
    },
    {
      title: "Compliance with Medical &Religious Dietary Restrictions ",
      desc: "Communication support for hospitals, schools, NGOs, and wellness programs.",
      Icon: StrategyIcon,
      points: [
        "Behaviour change communication",
        "Health messaging frameworks",
        "Campaign and program communication planning",
        "Nutrition curriculum development",
        "Menu reviews and nutrition advisory for institutions",
        "Advocacy and community education materials",
      ],
    },
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-teal-600 font-bold tracking-wide uppercase">
            Key Services
          </h3>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            How I Can Help You
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow border border-gray-100"
            >
              <service.Icon />
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h4>
              <p className="text-gray-600 mb-6">{service.desc}</p>
              <ul className="space-y-3">
                {service.points.map((point, i) => (
                  <li key={i} className="flex text-sm text-gray-700">
                    <CheckIcon /> {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// New Component for Chicken Leg Nutrition
const ChickenLegSample: React.FC = () => (
  <div className="group relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
    <div className="h-48 bg-orange-100 flex items-center justify-center overflow-hidden">
      <img
        src="https://plus.unsplash.com/premium_photo-1661419883163-bb4df1c10109?q=80&w=1200&dpr=2&auto=format&fit=crop&ixlib=rb-4.1.0"
        alt="Cooked Chicken Leg"
        className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
      />
    </div>
    <div className="p-8">
      <h4 className="text-xl font-bold text-gray-900 mb-2">
        Chicken Leg Nutrition
      </h4>
      <p className="text-gray-600 text-sm mb-4">
        A simple, easily digestible breakdown of a popular food item.
      </p>
      <div className="grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg text-sm text-gray-700 border-l-4 border-orange-500">
        <p className="font-semibold col-span-2 text-orange-800">
          One leg (70g) contains:
        </p>
        <ul className="space-y-1 col-span-1">
          <li>
            <strong>135</strong> calories
          </li>
          <li>
            <strong>16.9g</strong> protein
          </li>
        </ul>
        <ul className="space-y-1 col-span-1">
          <li>
            <strong>7.5g</strong> fat
          </li>
          <li>
            <strong>0g</strong> carbs / fiber
          </li>
        </ul>
        <p className="col-span-2 text-xs text-gray-600 mt-2 italic border-t pt-2">
          Tip: Removing the skin, as well as roasting/baking or boiling chicken
          will further reduce the fat and calorie count.
        </p>
      </div>
    </div>
  </div>
);

const CaseStudyCard = ({
  title,
  sections,
}: {
  title: string;
  sections: { heading: string; content: string | string[] }[];
}) => (
  <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
    <h3 className="text-2xl font-extrabold text-gray-900">{title}</h3>

    {sections.map((section, idx) => (
      <div key={idx} className="space-y-2">
        <h4 className="text-teal-600 font-semibold uppercase tracking-wide text-sm">
          {section.heading}
        </h4>
        {Array.isArray(section.content) ? (
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {section.content.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-700 leading-relaxed">{section.content}</p>
        )}
      </div>
    ))}
  </div>
);

const CaseStudiesSection: React.FC = () => {
  return (
    <section id="case-studies" className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-teal-600 font-bold uppercase tracking-wide">
            Case Studies
          </h3>
          <h2 className="text-3xl font-extrabold text-gray-900 mt-2">
            Real Work. Real Impact.
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            A snapshot of how thoughtful communication and strategy improve
            patient understanding, engagement, and outcomes.
          </p>
        </div>

        <div className="grid gap-10">
          {/* CASE STUDY 1 */}
          <CaseStudyCard
            title="Case Study 1: Patient-Centred Diabetes Communication"
            sections={[
              {
                heading: "What I Created",
                content: [
                  "Edited and simplified discharge notes",
                  "Rewritten take-home patient reference materials",
                  "A clear, easy-to-understand diabetes education brochure",
                  "Improved structure, layout, and tone across all documents",
                  "Materials aligned with health literacy best practices",
                ],
              },
              {
                heading: "Outcome",
                content:
                  "The hospital gained its first set of patient-centred communication materials. Patients were better able to understand their conditions and follow care instructions at home. Clinical staff reported fewer repeated questions during follow-up visits and an improved overall patient experience.",
              },
            ]}
          />

          {/* CASE STUDY 2 */}
          <CaseStudyCard
            title="Case Study 2: Helping a Camera-Shy Nutritionist Reach a Younger Audience"
            sections={[
              {
                heading: "Client",
                content: "Independent Nutritionist",
              },
              {
                heading: "Focus",
                content: "Social media content strategy and execution",
              },
              {
                heading: "Platform",
                content: "TikTok",
              },
              {
                heading: "Context & Challenge",
                content:
                  "The client was a qualified nutritionist who wanted to reach a younger audience on TikTok but felt deeply uncomfortable appearing on camera.",
              },
              {
                heading: "Approach",
                content:
                  "I developed a content approach that removed the pressure of being on camera while still allowing her personality and expertise to shine. Using Adobe Express, we created a simple avatar paired with her own voice as a voice-over, ensuring the content felt authentic and human. To build consistency and audience retention, I recommended themed content series instead of random posts.",
              },
            ]}
          />
        </div>
      </div>
    </section>
  );
};

const SamplesSection: React.FC = () => (
  <section id="samples" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h3 className="text-teal-600 font-bold tracking-wide uppercase text-center mb-2">
        Portfolio Samples
      </h3>
      <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-16">
        Simplifying Complex Information for Impact
      </h2>

      <div className="grid md:grid-cols-3 gap-10">
        {/* Sample 1: Eat Vegetables (Social Media) */}
        <div className="group relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="h-48 bg-teal-100 flex items-center justify-center overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Vegetables"
              className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-8">
            <h4 className="text-xl font-bold text-gray-900 mb-2">
              The Best Way to Eat Vegetables
            </h4>
            <p className="text-gray-600 text-sm mb-4">
              A sample social media post focusing on actionable, simple tips for
              daily intake.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg text-sm text-gray-700 border-l-4 border-teal-500">
              <ul className="list-disc ml-4 space-y-1">
                <li>Vary the color of your vegetables</li>
                <li>Eat vegetables at 2 meals or more per day</li>
                <li>Eat fresh not canned vegetables</li>
                <li>
                  Eat at least 1 cup cooked (200grams) or 2 cups (400grams) raw
                  vegetable per meal
                </li>
                <li>Lightly roast or steam your veggies</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Sample 2: Type 2 Diabetes (Patient Education) */}
        <div className="group relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="h-48 bg-blue-100 flex items-center justify-center overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              alt="Diabetes Planning"
              className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="p-8">
            <h4 className="text-xl font-bold text-gray-900 mb-2">
              Eating Well with Type 2 Diabetes
            </h4>
            <p className="text-gray-600 text-sm mb-4">
              A simple guide for getting started after diagnosis, emphasizing
              small changes.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg text-sm text-gray-700 border-l-4 border-blue-500">
              <p className="font-semibold mb-2">The Plate Method:</p>
              <ul className="space-y-1">
                <li>
                  <span className="text-blue-500 font-bold">1/2 plate:</span>{" "}
                  Non-starchy vegetables (Spinach, broccoli)
                </li>
                <li>
                  <span className="text-blue-500 font-bold">1/4 plate:</span>{" "}
                  Protein (Eggs, meat, legumes)
                </li>
                <li>
                  <span className="text-blue-500 font-bold">1/4 plate:</span>{" "}
                  Whole grains or starch (Brown rice, oats)
                </li>
              </ul>
            </div>
            <p className="mt-4 text-xs italic text-gray-500">
              Foods to Limit (Not Avoid Forever): Sugary drinks, white bread,
              processed snacks, and sweets.
            </p>
          </div>
        </div>

        {/* Sample 3: Chicken Leg Nutrition (New sample) */}
        <ChickenLegSample />
      </div>

      <div className="mt-16 text-center">
        <h4 className="text-2xl font-bold text-gray-900 mb-4">
          Meal Prepping Tips for Beginners: Start Here
        </h4>
        <div className="max-w-xl mx-auto text-lg text-gray-600 border border-gray-300 p-6 rounded-lg bg-gray-50">
          <p className="mb-4 font-medium">
            If you're overwhelmed, just do one of these:
          </p>
          <ul className="list-disc list-inside space-y-2 text-left">
            <li>Add vegetables to at least 2 meals a day</li>
            <li>Swap soda/juice for water or flavored sparkling water</li>
            <li>Use whole grains instead of white refined ones</li>
            <li>Include protein (egg, fish, beans) at each meal</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 py-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-gray-400 text-sm font-medium">
          &copy; {new Date().getFullYear()} Mary Adhiambo
        </p>
      </div>
    </footer>
  );
};

const PortfolioWebsite: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Header />
      <main>
        <HeroSection />
        <AboutMeSection />
        <KeyServicesSection />
        <CaseStudiesSection />
        <SamplesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default PortfolioWebsite;
