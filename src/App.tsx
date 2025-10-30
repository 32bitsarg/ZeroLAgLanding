import { motion } from 'framer-motion'
import { ArrowRight, Gamepad2, Hammer, Server, Swords, Instagram, MessageCircle } from 'lucide-react'
import Logo from './components/Logo'

const Section: React.FC<{ id?: string; className?: string; children: React.ReactNode }> = ({ id, className, children }) => (
  <section id={id} className={`container-base py-16 md:py-24 ${className ?? ''}`.trim()}>
    {children}
  </section>
)

export default function App() {
  return (
    <div className="min-h-dvh" style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-text)' }}>
      {/* Header */}
      <header className="container-base flex items-center justify-between py-4">
        <Logo />
        <nav className="hidden gap-6 md:flex text-base text-white/80">
          <a href="#mu" className="hover:text-white transition">MU</a>
          <a href="#minecraft" className="hover:text-white transition">Minecraft</a>
          <a href="#foro" className="hover:text-white transition">Foro</a>
          <a href="#comunidad" className="hover:text-white transition">Comunidad</a>
        </nav>
      </header>

      {/* Hero */}
      <Section className="pt-24 md:pt-28">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-white/60">ZeroLag ARG</p>
            <h1 className="heading-1">
              Infra de alto rendimiento para tus juegos favoritos
            </h1>
            <p className="body-lg mt-5 max-w-xl text-white/80">
              Estamos preparando experiencias de juego estables y fluidas. Probá nuestra beta de MU Online y seguí el avance del servidor de Minecraft.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#mu" className="btn-accent inline-flex items-center gap-2 rounded-full px-6 py-3 text-white">
                MU ZeroLag
                <ArrowRight size={18} />
              </a>
              <a href="#minecraft" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-white transition hover:bg-white/5">
                Minecraft
              </a>
              <a href="#comunidad" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-white transition hover:bg-white/5">
                Comunidad
              </a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
            <div className="aspect-[4/3] w-full rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] shadow-sm flex items-center justify-center p-8">
              <img src="/assets/logos/logo.svg" alt="ZeroLag ARG" className="w-full max-w-md opacity-90" />
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10" />
          </motion.div>
        </div>
      </Section>

      {/* MU ZeroLag */}
      <Section id="mu" className="bg-white/[0.02]">
        <div className="grid items-start gap-10 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="heading-2">MU ZeroLag — Vuelve la leyenda</h2>
            <p className="mt-3 text-white/70">Servidor privado MU Online, Season 6.</p>
            <ul className="mt-6 grid gap-3 text-white/80">
              <li className="flex items-start gap-3"><Server className="mt-1" size={18} /> Reset al 1000 (el reset borra stats)</li>
              <li className="flex items-start gap-3"><Swords className="mt-1" size={18} /> 300x experiencia dinámica</li>
              <li className="flex items-start gap-3"><Gamepad2 className="mt-1" size={18} /> 40% de drop</li>
              <li className="flex items-start gap-3"><Hammer className="mt-1" size={18} /> Beta muy pronto</li>
            </ul>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="https://mu.zerolagarg.com" target="_blank" className="btn-accent inline-flex items-center gap-2 rounded-full px-6 py-3 text-white">Visitar <ArrowRight size={18} /></a>
              <a href="#comunidad" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-white transition hover:bg-white/5">Unirme a la comunidad</a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Estado</h3>
              <p className="mt-2 text-sm text-white/70">Estamos trabajando para lanzar la beta en breve. El subdominio ya está definido y la página está realizada; falta apuntar el dominio.</p>
              <div className="mt-5 grid grid-cols-2 gap-4 text-sm">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4"><p className="text-white/50">Season</p><p className="font-medium">6</p></div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4"><p className="text-white/50">Reset</p><p className="font-medium">1000 (borra stats)</p></div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4"><p className="text-white/50">Exp</p><p className="font-medium">300x dinámica</p></div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4"><p className="text-white/50">Drop</p><p className="font-medium">40%</p></div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Minecraft */}
      <Section id="minecraft">
        <div className="grid items-start gap-10 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="heading-2">Minecraft — Survival profesional</h2>
            <p className="mt-3 text-white/70">Estamos preparando un servidor Survival con PVP y las mejores opciones. Aún trabajando para una beta decente.</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="https://mine.zerolagarg.com" target="_blank" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-white transition hover:bg-white/5">Visitar</a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Roadmap</h3>
              <ul className="mt-3 space-y-2 text-sm text-white/80">
                <li>• Core Survival balanceado</li>
                <li>• PVP optimizado</li>
                <li>• Sistemas de protección y economía</li>
                <li>• Beta pública próximamente</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Foro */}
      <Section id="foro" className="bg-white/[0.02]">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-sm">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h2 className="heading-3">Foro oficial</h2>
              <p className="mt-2 text-white/70">Noticias, guías y soporte de la comunidad.</p>
            </div>
            <a href="https://foro.zerolagarg.com" target="_blank" className="btn-accent inline-flex items-center gap-2 rounded-full px-6 py-3 text-white">Ir al foro <ArrowRight size={18} /></a>
          </div>
        </motion.div>
      </Section>

      {/* Comunidad */}
      <Section id="comunidad">
        <div className="grid items-start gap-6 md:grid-cols-2">
          <motion.a initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} href="https://www.instagram.com/zerolag.arg" target="_blank" className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm transition hover:bg-white/[0.07]">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-purple-500 text-white">
                <Instagram />
              </div>
              <div>
                <p className="text-sm text-white/50">Instagram</p>
                <p className="font-medium">@zerolag.arg</p>
              </div>
            </div>
            <ArrowRight className="text-white/40 transition group-hover:translate-x-0.5" />
          </motion.a>

          <motion.a initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.05 }} href="https://discord.gg/JR3SgqkC49" target="_blank" className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm transition hover:bg-white/[0.07]">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 text-white">
                <MessageCircle />
              </div>
              <div>
                <p className="text-sm text-white/50">Discord</p>
                <p className="font-medium">Únete a la comunidad</p>
              </div>
            </div>
            <ArrowRight className="text-white/40 transition group-hover:translate-x-0.5" />
          </motion.a>
        </div>
       
      </Section>

      {/* Footer */}
      <footer className="container-base border-t border-white/10 py-8 text-sm text-white/50">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p>© {new Date().getFullYear()} ZeroLag ARG. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <a className="hover:text-white transition" href="#mu">MU</a>
            <a className="hover:text-white transition" href="#minecraft">Minecraft</a>
            <a className="hover:text-white transition" href="#foro">Foro</a>
            <a className="hover:text-white transition" href="#comunidad">Comunidad</a>
          </div>
        </div>
      </footer>
    </div>
  )
}


