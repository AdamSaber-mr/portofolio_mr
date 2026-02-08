import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Brain, Target, TrendingUp } from 'lucide-react';

export function About() {
  const [ref, isInView] = useInView();

  const highlights = [
    {
      icon: Brain,
      title: 'Probleem Oplosser',
      description: 'Ik duik graag in complexe uitdagingen en werk door tot ik een oplossing vind.',
    },
    {
      icon: Target,
      title: 'Gedreven & Leergierig',
      description: 'Continu op zoek naar nieuwe kennis en manieren om mezelf te verbeteren.',
    },
    {
      icon: TrendingUp,
      title: 'Groei Mindset',
      description: 'Van front-end naar backend, en nu AI/ML - ik blijf mezelf uitdagen.',
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 px-4 sm:px-6 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4">
            Over <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Mij</span>
          </h2>
          <p className="text-center text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
            17 jaar | Gouda | Software Development @ Grafische Lyceum Rotterdam
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 p-6 sm:p-8 rounded-2xl">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-slate-800 dark:text-white">Mijn Verhaal</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                Ik ben Adam, een 17-jarige Software Development student in mijn tweede jaar. Wat begon als
                een reis in front-end development, is uitgegroeid tot een passie voor de meest complexe
                uitdagingen in technologie: <span className="font-semibold text-blue-600 dark:text-blue-400">AI en Machine Learning</span>.
              </p>
              <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                Waarom deze switch? Simpel - ik verveel me snel bij dingen die te makkelijk zijn. Front-end
                was te voorspelbaar, backend bood meer uitdaging, maar AI/ML? Dat is waar de échte complexiteit
                ligt, en dat is precies waar ik van hou.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Momenteel ben ik volledig gefocust op Python en machine learning, en overweeg ik serieus om
                wiskunde te studeren op HBO niveau om me nog dieper te kunnen verdiepen in deze fascinerende
                wereld.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 p-5 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-slate-100 dark:border-slate-700"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2.5 sm:p-3 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 rounded-lg flex-shrink-0">
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 dark:text-white mb-2">{item.title}</h4>
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}