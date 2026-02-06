import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Palette, Server, Cpu } from 'lucide-react';

export function Journey() {
  const [ref, isInView] = useInView();

  const journeySteps = [
    {
      year: 'Jaar 1',
      title: 'Front-End Development',
      icon: Palette,
      description: 'HTML, CSS, JavaScript, PHP - UI/UX design en implementatie',
      learning: 'Ontdekte dat ik meer uitdaging nodig had',
      color: 'from-blue-400 to-cyan-400',
    },
    {
      year: 'Jaar 2',
      title: 'Backend Development',
      icon: Server,
      description: 'PHP, JavaScript, MariaDB (SQL) - Server-side logica en databases',
      learning: 'Vond de diepere technische uitdagingen waar ik naar zocht',
      color: 'from-purple-400 to-blue-400',
    },
    {
      year: 'Nu',
      title: 'AI & Machine Learning',
      icon: Cpu,
      description: 'Python, ML algorithms, data science - De toekomst van technologie',
      learning: 'Mijn echte passie gevonden - complexiteit en oneindige mogelijkheden',
      color: 'from-purple-600 to-pink-500',
    },
  ];

  return (
    <section id="journey" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900">
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
              Ontwikkelingsreis
            </span>
          </h2>
          <p className="text-center text-slate-600 dark:text-slate-400 mb-16 max-w-2xl mx-auto">
            Van simpele websites naar kunstmatige intelligentie - een reis van constante groei en uitdaging
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-500 transform -translate-x-1/2" />

          <div className="space-y-12">
            {journeySteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="flex-1">
                  <div
                    className={`bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow ${
                      index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                    }`}
                  >
                    <div className="inline-block mb-3">
                      <span className={`text-sm font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                        {step.year}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-slate-800 dark:text-white">{step.title}</h3>
                    <p className="text-slate-600 dark:text-slate-300 mb-3">{step.description}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 italic">💡 {step.learning}</p>
                  </div>
                </div>

                <div className="relative flex-shrink-0">
                  <div className={`p-4 bg-gradient-to-br ${step.color} rounded-full shadow-lg`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-2xl text-white">
            <h4 className="text-xl font-bold mb-2">Volgende Stap: HBO Wiskunde</h4>
            <p className="text-blue-100 dark:text-blue-200">
              Om me nog dieper te verdiepen in AI/ML en de wiskundige fundamenten ervan te begrijpen
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}