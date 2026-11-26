import { CheckCircle2, X } from 'lucide-react';
import { useEffect } from 'react';

export default function CaseStudyModal({ study, onClose }) {
  useEffect(() => {
    if (!study) return;
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [study, onClose]);

  if (!study) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 p-4 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      onClick={onClose}
    >
      <div
        className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-[#E7E4DC] bg-[#FAF9F6] p-6 shadow-2xl md:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-[#E7E4DC] pb-6">
          <div>
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium tracking-wide uppercase">
              <span className="rounded-full bg-[#6B1D1D]/10 px-2.5 py-1 text-[#6B1D1D]">
                {study.category}
              </span>
              <span className="font-mono text-[#78716C]">{study.timeframe}</span>
              <span className="text-[#A8A29E]">•</span>
              <span className="text-[#57534E]">{study.role}</span>
            </div>
            <h3
              id="case-study-title"
              className="font-editorial mt-3 text-2xl font-medium tracking-tight text-[#18181B] md:text-3xl"
            >
              {study.title}
            </h3>
            <p className="mt-2 text-base text-[#57534E]">{study.subtitle}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close case study"
            className="rounded-full border border-[#E7E4DC] bg-white p-2 text-[#57534E] transition-colors hover:border-[#18181B] hover:text-[#18181B]"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Key Metrics */}
        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {study.metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-xl border border-[#E7E4DC] bg-white p-4"
            >
              <div className="text-xs font-medium tracking-wide text-[#78716C] uppercase">
                {metric.label}
              </div>
              <div className="font-mono mt-1 text-lg font-medium text-[#6B1D1D]">
                {metric.value}
              </div>
            </div>
          ))}
        </div>

        {/* Context -> Approach -> Impact */}
        <div className="mt-8 space-y-6">
          <div>
            <h4 className="font-mono text-xs font-medium tracking-wider text-[#6B1D1D] uppercase">
              01 / Context
            </h4>
            <p className="mt-2 leading-relaxed text-[#27272A]">{study.context}</p>
          </div>

          <div>
            <h4 className="font-mono text-xs font-medium tracking-wider text-[#6B1D1D] uppercase">
              02 / Technical Approach
            </h4>
            <p className="mt-2 leading-relaxed text-[#27272A]">{study.approach}</p>
          </div>

          <div>
            <h4 className="font-mono text-xs font-medium tracking-wider text-[#6B1D1D] uppercase">
              03 / Impact &amp; Outcomes
            </h4>
            <p className="mt-2 leading-relaxed text-[#27272A]">{study.impact}</p>
          </div>
        </div>

        {/* Optional SHAP visual breakdown for research */}
        {study.shapBreakdown && (
          <div className="mt-8 rounded-xl border border-[#E7E4DC] bg-white p-5">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h4 className="font-editorial text-lg font-medium text-[#18181B]">
                Grouped Macro-Block Relative SHAP (Main Cohort, N = 29,694)
              </h4>
              <span className="font-mono text-xs text-[#78716C]">
                Total = 100.00% (59 features)
              </span>
            </div>
            <div className="mt-4 space-y-3">
              {study.shapBreakdown.map((item) => (
                <div key={item.rank}>
                  <div className="flex items-center justify-between text-xs md:text-sm">
                    <span className="font-medium text-[#27272A]">
                      #{item.rank} {item.block}{' '}
                      <span className="text-[#78716C]">({item.vars} vars)</span>
                    </span>
                    <span className="font-mono font-medium text-[#6B1D1D]">
                      {item.main.toFixed(2)}%
                    </span>
                  </div>
                  <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-[#F2EFE9]">
                    <div
                      className="h-full rounded-full bg-[#6B1D1D]"
                      style={{ width: `${Math.min(100, item.main * 2.4)}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Highlights */}
        {study.highlights && (
          <div className="mt-8">
            <h4 className="font-mono text-xs font-medium tracking-wider text-[#78716C] uppercase">
              Key Engineering &amp; Methodological Highlights
            </h4>
            <ul className="mt-3 space-y-2.5">
              {study.highlights.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2.5 text-sm text-[#3F3F46]">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#6B1D1D]" />
                  <span className="leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Stack */}
        <div className="mt-8 border-t border-[#E7E4DC] pt-5">
          <div className="flex flex-wrap gap-2">
            {study.tech.map((tag) => (
              <span
                key={tag}
                className="font-mono rounded-full border border-[#E7E4DC] bg-white px-3 py-1 text-xs text-[#44403C]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
