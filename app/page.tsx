export default function Home() {
  const faqs = [
    {
      q: 'How does thread monitoring work?',
      a: 'We connect to your Slack workspace via OAuth and use the Events API to track thread activity in channels you choose. When a thread goes quiet past your threshold, we post a configurable bump message automatically.'
    },
    {
      q: 'What counts as an \'important\' thread?',
      a: 'You define the rules: minimum reaction count, specific emoji reactions, keywords in the original message, or threads started by certain users. Mix and match conditions to match your team\'s workflow.'
    },
    {
      q: 'Will it spam my channels?',
      a: 'No. Each thread is bumped at most once per configurable cooldown period. You set the inactivity window (e.g. 24 h) and the max bumps per thread. You stay in full control.'
    }
  ]

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-semibold bg-[#161b22] border border-[#30363d] text-[#58a6ff] uppercase tracking-widest">
          Slack Productivity
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Auto-bump important Slack threads<br />
          <span className="text-[#58a6ff]">before they die</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Slack Thread Resurrector monitors your channels and automatically revives critical discussions the moment they go quiet — so nothing important gets buried.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-base hover:bg-[#79b8ff] transition-colors"
        >
          Get started — $15/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. Works with any Slack workspace.</p>

        {/* Feature pills */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {['Slack OAuth', 'Events API', 'Custom rules', 'Background jobs', 'Webhook-driven', 'Instant setup'].map(f => (
            <span key={f} className="px-3 py-1 rounded-full text-sm bg-[#161b22] border border-[#30363d] text-[#c9d1d9]">{f}</span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="rounded-2xl border border-[#30363d] bg-[#161b22] p-8 text-center">
          <p className="text-sm font-semibold text-[#58a6ff] uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-extrabold text-white mb-1">$15</p>
          <p className="text-[#8b949e] mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              'Unlimited channels monitored',
              'Configurable importance rules',
              'Custom bump messages',
              'Inactivity threshold control',
              'Per-thread bump limits',
              'Real-time Slack webhooks',
              'Background job scheduler'
            ].map(item => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold hover:bg-[#79b8ff] transition-colors"
          >
            Start for $15/mo
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently asked questions</h2>
        <div className="space-y-6">
          {faqs.map(({ q, a }) => (
            <div key={q} className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center pb-10 text-xs text-[#484f58]">
        © {new Date().getFullYear()} Slack Thread Resurrector. Not affiliated with Slack Technologies.
      </footer>
    </main>
  )
}
