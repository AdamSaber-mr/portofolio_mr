import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Briefcase, GraduationCap, ShoppingBag } from 'lucide-react';

export function Experience() {
  const [ref, isInView] = useInView();

  return (
    <section id="experience" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
            Mijn{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Ervaring
            </span>
          </h2>
          <p className="text-center text-slate-600 dark:text-slate-400 mb-16 max-w-2xl mx-auto">
            Praktijkervaring opgedaan door studie en werk
          </p>
        </motion.div>

        <div className="space-y-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <div className="p-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-white">Software Development</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">Grafische Lyceum Rotterdam</p>
                  </div>
                  <span className="text-slate-500 dark:text-slate-400 text-sm mt-2 md:mt-0">2023 - Heden (Jaar 2)</span>
                </div>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Volledige MBO opleiding in Software Development, met focus op zowel front-end als backend
                  ontwikkeling. Bezig met het opbouwen van een breed fundament in programmeren en
                  softwareontwikkeling.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                    Jaar 1: Front-End (HTML, CSS, JS, PHP)
                  </span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                    Jaar 2: Backend & Databases
                  </span>
                  <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm">
                    Huidige focus: AI/ML & Python
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <div className="p-4 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl">
                  <ShoppingBag className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-white">Verkoopmedewerker</h3>
                    <p className="text-green-600 dark:text-green-400 font-medium">Van Haren (Schoenenwinkel)</p>
                  </div>
                  <span className="text-slate-500 dark:text-slate-400 text-sm mt-2 md:mt-0">1 jaar</span>
                </div>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Werkzaam als verkoopmedewerker waarbij ik waardevolle ervaring heb opgedaan in klantcontact,
                  teamwork en commerciële vaardigheden. Deze ervaring heeft me veel geleerd over communicatie
                  en samenwerken in een professionele omgeving.
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2" />
                    <div>
                      <p className="font-medium text-slate-800 dark:text-white">Communicatie</p>
                      <p className="text-sm text-slate-600 dark:text-slate-300">Effectief communiceren met klanten en collega's</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2" />
                    <div>
                      <p className="font-medium text-slate-800 dark:text-white">Verkoopstrategieën</p>
                      <p className="text-sm text-slate-600 dark:text-slate-300">Klantbehoeften identificeren en adviseren</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2" />
                    <div>
                      <p className="font-medium text-slate-800 dark:text-white">Samenwerken</p>
                      <p className="text-sm text-slate-600 dark:text-slate-300">Effectief teamwork in drukke omgeving</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2" />
                    <div>
                      <p className="font-medium text-slate-800 dark:text-white">Klantcontact</p>
                      <p className="text-sm text-slate-600 dark:text-slate-300">Professionele en vriendelijke service</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Looking for internship */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl shadow-lg text-white"
          >
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="flex-shrink-0">
                <div className="p-4 bg-white/20 backdrop-blur rounded-xl">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2">Op zoek naar een Stage</h3>
                <p className="text-blue-100 dark:text-blue-200 mb-4">
                  Ik ben actief op zoek naar een stageplek waar ik me verder kan ontwikkelen in{' '}
                  <span className="font-semibold text-white">AI/Machine Learning en Backend Development</span>.
                  Een plek waar uitdaging en groei centraal staan.
                </p>
                <button
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all"
                >
                  Neem contact op
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}