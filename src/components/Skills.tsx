import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Code2, Database, Brain, Users, Server } from 'lucide-react';

export function Skills() {
  const [ref, isInView] = useInView();

  const skillCategories = [
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Python', level: 60, learning: true },
        { name: 'Machine Learning', level: 40, learning: true },
        { name: 'Data Science', level: 35, learning: true },
      ],
    },
    {
      title: 'Backend Development',
      icon: Server,
      color: 'from-blue-500 to-purple-500',
      skills: [
        { name: 'PHP', level: 75 },
        { name: 'JavaScript', level: 70 },
        { name: 'SQL/MariaDB', level: 70 },
      ],
    },
    {
      title: 'Front-End Development',
      icon: Code2,
      color: 'from-cyan-500 to-blue-500',
      skills: [
        { name: 'HTML/CSS', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'UI/UX Design', level: 75 },
      ],
    },
    {
      title: 'Soft Skills',
      icon: Users,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Communicatie', level: 85 },
        { name: 'Samenwerken', level: 85 },
        { name: 'Klantcontact', level: 80 },
        { name: 'Probleem Oplossen', level: 90 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 px-4 sm:px-6 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4">
            Mijn{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Vaardigheden
            </span>
          </h2>
          <p className="text-center text-slate-600 dark:text-slate-400 mb-12 sm:mb-16 max-w-2xl mx-auto">
            Een combinatie van technische expertise en soft skills opgebouwd door studie en werk
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 sm:gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-700 p-5 sm:p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3 mb-5 sm:mb-6">
                <div className={`p-2.5 sm:p-3 bg-gradient-to-br ${category.color} rounded-lg flex-shrink-0`}>
                  <category.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2 gap-2">
                      <span className="text-sm sm:text-base text-slate-700 dark:text-slate-300 font-medium flex items-center gap-2 flex-wrap">
                        {skill.name}
                        {skill.learning && (
                          <span className="text-xs bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 px-2 py-1 rounded-full whitespace-nowrap">
                            In ontwikkeling
                          </span>
                        )}
                      </span>
                      <span className="text-slate-500 dark:text-slate-400 text-sm flex-shrink-0">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 sm:mt-12 text-center bg-blue-50 dark:bg-slate-800 p-5 sm:p-6 rounded-2xl border border-blue-100 dark:border-slate-700"
        >
          <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
            🎯 <span className="font-semibold">Huidige focus:</span> Dagelijks bezig met Python cursus (6/12 uur voltooid)
            en het verdiepen in AI/ML concepten
          </p>
        </motion.div>
      </div>
    </section>
  );
}