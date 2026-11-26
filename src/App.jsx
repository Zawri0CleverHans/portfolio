import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Award,
  Check,
  Copy,
  FileText,
  Github,
  Globe,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from 'lucide-react';
import { useState } from 'react';
import CaseStudyModal from './components/CaseStudyModal';
import Navbar from './components/Navbar';
import {
  caseStudies,
  certifications,
  experiences,
  heroHighlights,
  leadershipOrganizations,
  profile,
  skillGroups,
} from './data/portfolioData';

const categories = ['All', 'ML Engineering', 'Empirical Research', 'Impact & Strategy'];

export default function App() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedStudy, setSelectedStudy] = useState(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const filteredStudies =
    activeCategory === 'All'
      ? caseStudies
      : caseStudies.filter((item) => item.category === activeCategory);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#18181B]">
      <Navbar />

      <main>
        {/* Hero Section (Gloria Lo warmth + narrative clarity) */}
        <section className="mx-auto max-w-5xl px-6 pt-16 pb-14 md:pt-24 md:pb-20">
          <div className="animate-fade-up max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#E7E4DC] bg-white px-3.5 py-1.5 text-xs font-medium text-[#57534E] shadow-2xs">
              <MapPin className="h-3.5 w-3.5 text-[#6B1D1D]" />
              <span>{profile.location}</span>
              <span className="text-[#D6D1C7]">•</span>
              <span className="text-[#6B1D1D]">{profile.role}</span>
            </div>

            <h1 className="font-editorial mt-6 text-4xl leading-[1.12] font-medium tracking-tight text-[#18181B] sm:text-5xl md:text-[3.4rem]">
              Engineer &amp; <span className="italic text-[#6B1D1D]">Researcher</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#57534E]">
              {profile.tagline}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-full bg-[#6B1D1D] px-5 py-2.5 text-sm font-medium text-white shadow-xs transition-all hover:bg-[#521414]"
              >
                Explore Case Studies
                <ArrowDown className="h-4 w-4" />
              </a>

              <a
                href={profile.resumePath}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#D6D1C7] bg-white px-5 py-2.5 text-sm font-medium text-[#18181B] transition-all hover:border-[#6B1D1D] hover:text-[#6B1D1D]"
              >
                <FileText className="h-4 w-4 text-[#6B1D1D]" />
                Read Resume (PDF)
              </a>

              <div className="flex items-center gap-2 sm:ml-2">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="inline-flex items-center gap-1.5 rounded-full border border-[#E7E4DC] bg-white px-3.5 py-2 text-xs font-medium text-[#44403C] transition-colors hover:border-[#18181B] hover:text-[#18181B]"
                >
                  <Github className="h-3.5 w-3.5" />
                  GitHub
                </a>
                <a
                  href={profile.xUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="X profile"
                  className="inline-flex items-center gap-1.5 rounded-full border border-[#E7E4DC] bg-white px-3.5 py-2 text-xs font-medium text-[#44403C] transition-colors hover:border-[#18181B] hover:text-[#18181B]"
                >
                  <span className="font-semibold">𝕏</span>
                  {profile.xHandle}
                </a>
              </div>
            </div>
          </div>

          {/* 3-column editorial quick-facts strip */}
          <div className="mt-14 grid grid-cols-1 gap-4 border-t border-[#E7E4DC] pt-8 md:grid-cols-3">
            {heroHighlights.map((item) => (
              <div key={item.label} className="space-y-1">
                <div className="font-mono text-xs tracking-wider text-[#78716C] uppercase">
                  {item.label}
                </div>
                <div className="text-base font-semibold text-[#18181B]">{item.value}</div>
                <div className="text-sm text-[#57534E]">{item.detail}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Selected Work / Case Studies (Nicole Roberts Context -> Approach -> Impact) */}
        <section id="work" className="border-t border-[#E7E4DC] bg-[#F5F2EB]/60 py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-6">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="font-mono text-xs font-medium tracking-wider text-[#6B1D1D] uppercase">
                  Selected Case Studies
                </p>
                <h2 className="font-editorial mt-2 text-3xl font-medium tracking-tight text-[#18181B] md:text-4xl">
                  Engineering, Research &amp; Impact
                </h2>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-[#57534E] md:text-base">
                  Each project is framed by the problem context, technical methodology, and
                  measurable outcome. Select any card for the full breakdown.
                </p>
              </div>

              {/* Filter Pills */}
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => {
                  const active = activeCategory === cat;
                  return (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setActiveCategory(cat)}
                      className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-all ${
                        active
                          ? 'bg-[#18181B] text-white shadow-2xs'
                          : 'border border-[#E7E4DC] bg-white text-[#57534E] hover:border-[#6B1D1D] hover:text-[#18181B]'
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-10 space-y-6">
              {filteredStudies.map((study, index) => (
                <article
                  key={study.id}
                  className="group rounded-2xl border border-[#E7E4DC] bg-white p-6 transition-all hover:border-[#C7BFB1] hover:shadow-md md:p-8"
                >
                  <div className="flex flex-col justify-between gap-4 border-b border-[#F2EFE9] pb-5 md:flex-row md:items-start">
                    <div>
                      <div className="flex flex-wrap items-center gap-2.5 text-xs">
                        <span className="font-mono text-[#A8A29E]">
                          0{index + 1}
                        </span>
                        <span className="rounded-full bg-[#6B1D1D]/10 px-2.5 py-0.5 font-medium text-[#6B1D1D]">
                          {study.category}
                        </span>
                        <span className="font-mono text-[#78716C]">{study.timeframe}</span>
                        <span className="text-[#D6D1C7]">•</span>
                        <span className="text-[#57534E]">{study.role}</span>
                      </div>
                      <h3 className="font-editorial mt-3 text-2xl font-medium tracking-tight text-[#18181B] group-hover:text-[#6B1D1D] transition-colors">
                        {study.title}
                      </h3>
                      <p className="mt-1.5 text-base text-[#57534E]">{study.subtitle}</p>
                    </div>

                    <div className="flex shrink-0 flex-wrap gap-2">
                      {study.metrics.slice(0, 2).map((metric) => (
                        <div
                          key={metric.label}
                          className="rounded-xl border border-[#E7E4DC] bg-[#FAF9F6] px-3.5 py-2 text-left"
                        >
                          <div className="text-[11px] font-medium text-[#78716C] uppercase">
                            {metric.label}
                          </div>
                          <div className="font-mono text-sm font-medium text-[#18181B]">
                            {metric.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Context -> Approach -> Impact 3-col editorial grid */}
                  <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
                    <div>
                      <div className="font-mono text-[11px] font-medium tracking-wider text-[#6B1D1D] uppercase">
                        Context
                      </div>
                      <p className="mt-1.5 text-sm leading-relaxed text-[#44403C]">
                        {study.context}
                      </p>
                    </div>
                    <div>
                      <div className="font-mono text-[11px] font-medium tracking-wider text-[#6B1D1D] uppercase">
                        Approach
                      </div>
                      <p className="mt-1.5 text-sm leading-relaxed text-[#44403C]">
                        {study.approach}
                      </p>
                    </div>
                    <div>
                      <div className="font-mono text-[11px] font-medium tracking-wider text-[#6B1D1D] uppercase">
                        Impact
                      </div>
                      <p className="mt-1.5 text-sm leading-relaxed text-[#44403C]">
                        {study.impact}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[#F2EFE9] pt-5">
                    <div className="flex flex-wrap gap-1.5">
                      {study.tech.map((t) => (
                        <span
                          key={t}
                          className="font-mono rounded-full bg-[#FAF9F6] px-2.5 py-1 text-xs text-[#57534E] ring-1 ring-[#E7E4DC]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => setSelectedStudy(study)}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#6B1D1D] transition-transform group-hover:translate-x-0.5 hover:underline"
                    >
                      Read Case Study
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Experience & Strategic Framing */}
        <section id="experience" className="border-t border-[#E7E4DC] py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-6">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="font-mono text-xs font-medium tracking-wider text-[#6B1D1D] uppercase">
                  Career &amp; Strategy
                </p>
                <h2 className="font-editorial mt-2 text-3xl font-medium tracking-tight text-[#18181B]">
                  From commercial scoping to production ML
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[#57534E]">
                  Before moving full-time into ML engineering, I worked directly with founders and
                  C-suite leaders of US SMEs—giving me a sharp eye for solutions that ship cleanly
                  and matter commercially.
                </p>

                <div className="mt-6 rounded-2xl border border-[#E7E4DC] bg-white p-5">
                  <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-[#6B1D1D] uppercase">
                    <GraduationCap className="h-4 w-4" />
                    Education
                  </div>
                  <div className="mt-2 font-semibold text-[#18181B]">
                    {profile.education.institution}
                  </div>
                  <div className="text-sm text-[#57534E]">{profile.education.degree}</div>
                  <div className="mt-1 text-xs text-[#78716C]">{profile.education.location}</div>
                </div>
              </div>

              <div className="space-y-6 lg:col-span-8">
                {experiences.map((exp) => (
                  <div
                    key={exp.company}
                    className="rounded-2xl border border-[#E7E4DC] bg-white p-6 md:p-7"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <span className="font-mono text-xs font-medium text-[#6B1D1D]">
                          {exp.focus}
                        </span>
                        <h3 className="font-editorial mt-1 text-2xl font-medium text-[#18181B]">
                          {exp.role}{' '}
                          <span className="text-[#57534E]">· {exp.company}</span>
                        </h3>
                      </div>
                      <div className="text-right">
                        <div className="font-mono text-xs font-medium text-[#18181B]">
                          {exp.period}
                        </div>
                        <div className="text-xs text-[#78716C]">{exp.location}</div>
                      </div>
                    </div>

                    <p className="mt-3 text-sm leading-relaxed text-[#57534E]">{exp.summary}</p>

                    <ul className="mt-4 space-y-2.5 border-t border-[#F2EFE9] pt-4">
                      {exp.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-start gap-2.5 text-sm leading-relaxed text-[#3F3F46]"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#6B1D1D]" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Board Governance & Community Leadership */}
        <section
          id="leadership"
          className="border-t border-[#E7E4DC] bg-[#F5F2EB]/60 py-16 md:py-24"
        >
          <div className="mx-auto max-w-5xl px-6">
            <div className="max-w-2xl">
              <p className="font-mono text-xs font-medium tracking-wider text-[#6B1D1D] uppercase">
                Leadership &amp; Governance
              </p>
              <h2 className="font-editorial mt-2 text-3xl font-medium tracking-tight text-[#18181B]">
                Organizations &amp; Community Impact
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[#57534E] md:text-base">
                Beyond software and models, I serve on non-profit governance and work with regional
                development and labor organizations expanding education and digital opportunity.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
              {leadershipOrganizations.map((org) => (
                <div
                  key={org.name}
                  className="flex flex-col justify-between rounded-2xl border border-[#E7E4DC] bg-white p-6 transition-all hover:border-[#C7BFB1]"
                >
                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <span className="inline-flex items-center gap-1 rounded-full bg-[#6B1D1D]/10 px-2.5 py-0.5 text-xs font-medium text-[#6B1D1D]">
                          {org.role}
                        </span>
                        <h3 className="font-editorial mt-3 text-xl font-medium text-[#18181B]">
                          {org.name}
                        </h3>
                        <p className="text-xs font-medium text-[#78716C]">{org.subtitle}</p>
                      </div>
                      {org.url && (
                        <a
                          href={org.url}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Visit ${org.name}`}
                          className="inline-flex items-center gap-1 rounded-full border border-[#E7E4DC] px-2.5 py-1 text-xs font-medium text-[#44403C] transition-colors hover:border-[#6B1D1D] hover:text-[#6B1D1D]"
                        >
                          <Globe className="h-3 w-3" />
                          Site
                          <ArrowUpRight className="h-3 w-3" />
                        </a>
                      )}
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-[#44403C]">
                      {org.description}
                    </p>
                  </div>
                  <div className="mt-4 border-t border-[#F2EFE9] pt-3 text-xs text-[#78716C]">
                    {org.location}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Stack & Verified Certifications */}
        <section id="credentials" className="border-t border-[#E7E4DC] py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-6">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
              {/* Skills */}
              <div className="lg:col-span-5">
                <p className="font-mono text-xs font-medium tracking-wider text-[#6B1D1D] uppercase">
                  Capabilities
                </p>
                <h2 className="font-editorial mt-2 text-3xl font-medium tracking-tight text-[#18181B]">
                  Technical Stack
                </h2>
                <div className="mt-6 space-y-5">
                  {skillGroups.map((group) => (
                    <div key={group.title} className="border-b border-[#E7E4DC] pb-4 last:border-0">
                      <h3 className="text-sm font-semibold text-[#18181B]">{group.title}</h3>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {group.items.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-md bg-white px-2.5 py-1 text-xs text-[#44403C] ring-1 ring-[#E7E4DC]"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className="lg:col-span-7">
                <p className="font-mono text-xs font-medium tracking-wider text-[#6B1D1D] uppercase">
                  Verified Credentials
                </p>
                <h2 className="font-editorial mt-2 text-3xl font-medium tracking-tight text-[#18181B]">
                  Certifications
                </h2>

                <div className="mt-6 space-y-5">
                  {certifications.map((cert) => (
                    <div
                      key={cert.credentialId}
                      className="rounded-2xl border border-[#E7E4DC] bg-white p-6"
                    >
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <div>
                          <div className="flex items-center gap-2 text-xs font-medium text-[#6B1D1D]">
                            <Award className="h-4 w-4" />
                            <span>{cert.issuer}</span>
                          </div>
                          <h3 className="font-editorial mt-1.5 text-xl font-medium text-[#18181B]">
                            {cert.title}
                          </h3>
                          <p className="font-mono mt-1 text-xs text-[#78716C]">
                            {cert.date} · ID: {cert.credentialId}
                          </p>
                        </div>

                        {cert.verifyUrl && (
                          <a
                            href={cert.verifyUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 rounded-full border border-[#D6D1C7] px-3 py-1 text-xs font-medium text-[#18181B] transition-colors hover:border-[#6B1D1D] hover:text-[#6B1D1D]"
                          >
                            Verify
                            <ArrowUpRight className="h-3.5 w-3.5" />
                          </a>
                        )}
                      </div>

                      {cert.courses && (
                        <div className="mt-4 space-y-2 border-t border-[#F2EFE9] pt-4">
                          {cert.courses.map((course) => (
                            <div
                              key={course.name}
                              className="flex flex-wrap items-center justify-between gap-2 text-xs"
                            >
                              <span className="text-[#3F3F46]">{course.name}</span>
                              <a
                                href={course.url}
                                target="_blank"
                                rel="noreferrer"
                                className="font-mono inline-flex items-center gap-1 text-[#6B1D1D] hover:underline"
                              >
                                {course.date}
                                <ArrowUpRight className="h-3 w-3" />
                              </a>
                            </div>
                          ))}
                        </div>
                      )}

                      {cert.imagePath && (
                        <div className="mt-4 flex flex-col gap-4 border-t border-[#F2EFE9] pt-4 sm:flex-row sm:items-center">
                          <img
                            src={cert.imagePath}
                            alt={cert.title}
                            className="h-24 w-36 rounded-lg border border-[#E7E4DC] object-cover"
                          />
                          <p className="text-xs leading-relaxed text-[#57534E]">
                            {cert.description}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact & Personal Banner Footer */}
        <section
          id="contact"
          className="border-t border-[#E7E4DC] bg-[#F5F2EB]/80 py-16 md:py-20"
        >
          <div className="mx-auto max-w-5xl px-6">
            <div className="overflow-hidden rounded-2xl border border-[#E7E4DC] bg-white shadow-xs">
              <img
                src={profile.bannerPath}
                alt="Let's Build Something Great Together!"
                className="block h-auto w-full border-b border-[#E7E4DC]"
              />

              <div className="grid grid-cols-1 gap-8 p-7 md:grid-cols-12 md:p-10">
                <div className="md:col-span-7">
                  <div className="inline-flex items-center gap-1.5 text-xs font-medium text-[#6B1D1D]">
                    <Sparkles className="h-3.5 w-3.5" />
                    Open to impactful ML engineering &amp; advisory collaborations
                  </div>
                  <h2 className="font-editorial mt-2 text-3xl font-medium tracking-tight text-[#18181B]">
                    Let’s build something technically sound and genuinely useful.
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-[#57534E]">
                    Whether you’re scaling an NLP/LLM pipeline, modeling empirical survey data, or
                    looking for a builder who understands both product strategy and PyTorch, reach
                    out directly.
                  </p>
                </div>

                <div className="flex flex-col justify-center gap-3 md:col-span-5">
                  <div className="flex items-center gap-2">
                    <a
                      href={`mailto:${profile.email}`}
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#6B1D1D] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#521414]"
                    >
                      <Mail className="h-4 w-4" />
                      {profile.email}
                    </a>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      aria-label="Copy email address"
                      className="inline-flex items-center justify-center rounded-full border border-[#D6D1C7] bg-white p-2.5 text-[#44403C] transition-colors hover:border-[#6B1D1D] hover:text-[#6B1D1D]"
                    >
                      {copiedEmail ? (
                        <Check className="h-4 w-4 text-emerald-700" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </button>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-xs text-[#57534E]">
                    <span className="inline-flex items-center gap-1.5">
                      <Phone className="h-3.5 w-3.5 text-[#6B1D1D]" />
                      {profile.phone}
                    </span>
                    <div className="flex items-center gap-3 font-medium">
                      <a
                        href={profile.github}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-[#6B1D1D]"
                      >
                        GitHub ↗
                      </a>
                      <a
                        href={profile.xUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-[#6B1D1D]"
                      >
                        X ↗
                      </a>
                      <a
                        href={profile.resumePath}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-[#6B1D1D]"
                      >
                        Resume ↗
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <footer className="mt-8 flex flex-col items-center justify-between gap-2 text-xs text-[#78716C] sm:flex-row">
              <span>© {new Date().getFullYear()} {profile.name}. Built with React, Vite &amp; Tailwind CSS.</span>
              <span>Lahore, Pakistan</span>
            </footer>
          </div>
        </section>
      </main>

      <CaseStudyModal study={selectedStudy} onClose={() => setSelectedStudy(null)} />
    </div>
  );
}
