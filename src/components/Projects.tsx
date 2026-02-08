import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { ExternalLink, Github, Brain, Database, Code, LineChart, MessageSquare, Image } from 'lucide-react';

export function Projects() {
  const [ref, isInView] = useInView();

  const projects = [
    {
      title: 'AI Sentiment Analyzer',
      type: 'Persoonlijk Project',
      category: 'AI/Machine Learning',
      icon: Brain,
      gradient: 'from-purple-500 to-pink-500',
      description: 'Een sentiment analysis tool die met natuurlijke taalverwerking (NLP) analyseert of tekst positief, negatief of neutraal is. Gebruikt Python en machine learning libraries.',
      tags: ['Python', 'NLP', 'Machine Learning', 'Scikit-learn'],
      highlights: [
        'Getraind op 10.000+ tekstsamples',
        'Nauwkeurigheid van 85%',
        'Real-time sentiment detectie',
      ],
      status: 'In ontwikkeling',
      statusColor: 'bg-purple-100 text-purple-700',
    },
    {
      title: 'Spam Email Classifier',
      type: 'Schoolproject',
      category: 'AI/Machine Learning',
      icon: MessageSquare,
      gradient: 'from-blue-500 to-purple-500',
      description: 'Machine learning model dat emails classificeert als spam of niet-spam. Gebruikt supervised learning technieken en feature engineering.',
      tags: ['Python', 'Machine Learning', 'Pandas', 'Naive Bayes'],
      highlights: [
        'Dataset van 5000+ emails verwerkt',
        '92% precisie in classificatie',
        'Data preprocessing en feature extraction',
      ],
      status: 'Voltooid',
      statusColor: 'bg-green-100 text-green-700',
    },
    {
      title: 'Handwritten Digit Recognition',
      type: 'Persoonlijk Project',
      category: 'AI/Machine Learning',
      icon: Image,
      gradient: 'from-indigo-500 to-purple-500',
      description: 'Neural network dat handgeschreven cijfers herkent (0-9) met behulp van de MNIST dataset. Perfect project om deep learning te begrijpen.',
      tags: ['Python', 'TensorFlow', 'Neural Networks', 'Computer Vision'],
      highlights: [
        'Getraind op 60.000 afbeeldingen',
        '97% nauwkeurigheid',
        'Interactive web interface',
      ],
      status: 'Gepland',
      statusColor: 'bg-blue-100 text-blue-700',
    },
    {
      title: 'Crypto Price Predictor',
      type: 'Persoonlijk Project',
      category: 'Data Science',
      icon: LineChart,
      gradient: 'from-cyan-500 to-blue-500',
      description: 'Time series analyse en voorspelling van cryptocurrency prijzen met behulp van historische data en machine learning algoritmes.',
      tags: ['Python', 'Pandas', 'Time Series', 'Data Visualization'],
      highlights: [
        'Real-time data fetching via API',
        'Visualisatie met Matplotlib',
        'LSTM model voor voorspellingen',
      ],
      status: 'In ontwikkeling',
      statusColor: 'bg-purple-100 text-purple-700',
    },
    {
      title: 'RESTful API met Authenticatie',
      type: 'Schoolproject',
      category: 'Backend',
      icon: Database,
      gradient: 'from-green-500 to-emerald-500',
      description: 'Complete REST API gebouwd met PHP en MySQL, inclusief JWT authenticatie, CRUD operaties en input validatie.',
      tags: ['PHP', 'MySQL', 'REST API', 'JWT', 'Postman'],
      highlights: [
        'Secure JWT token authenticatie',
        'Complete CRUD functionaliteit',
        'Input validatie en error handling',
      ],
      status: 'Voltooid',
      statusColor: 'bg-green-100 text-green-700',
    },
    {
      title: 'Task Management Dashboard',
      type: 'Schoolproject',
      category: 'Full-Stack',
      icon: Code,
      gradient: 'from-blue-400 to-cyan-400',
      description: 'Volledig functionele task management applicatie met user authentication, real-time updates en responsive design.',
      tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      highlights: [
        'User authentication systeem',
        'CRUD operaties voor taken',
        'Responsive design voor alle devices',
      ],
      status: 'Voltooid',
      statusColor: 'bg-green-100 text-green-700',
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Voltooid':
        return '✓';
      case 'In ontwikkeling':
        return '⚡';
      case 'Gepland':
        return '📋';
      default:
        return '•';
    }
  };

  return (
    <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4">
            Mijn{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Projecten
            </span>
          </h2>
          <p className="text-center text-slate-600 dark:text-slate-400 mb-12 sm:mb-16 max-w-2xl mx-auto">
            Een selectie van school en persoonlijke projecten die mijn ontwikkeling en passie laten zien
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-5 sm:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-700 p-5 sm:p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-700 group"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 sm:p-3 bg-gradient-to-br ${project.gradient} rounded-lg group-hover:scale-110 transition-transform flex-shrink-0`}>
                    <project.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-white leading-tight">{project.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">{project.type}</p>
                  </div>
                </div>
              </div>

              {/* Category Badge */}
              <div className="mb-3">
                <span className={`text-xs font-medium px-3 py-1 rounded-full bg-gradient-to-r ${project.gradient} text-white`}>
                  {project.category}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Highlights */}
              <div className="mb-4 space-y-2">
                {project.highlights.map((highlight, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.gradient} mt-2 flex-shrink-0`} />
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{highlight}</p>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-700">
                <span className={`text-xs font-medium px-3 py-1 rounded-full ${project.statusColor} flex items-center gap-1`}>
                  <span>{getStatusIcon(project.status)}</span>
                  {project.status}
                </span>
                <div className="flex gap-2">
                  <button
                    className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
                    aria-label="View on GitHub"
                  >
                    <Github className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                  </button>
                  <button
                    className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
                    aria-label="View project"
                  >
                    <ExternalLink className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-10 sm:mt-12 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 p-5 sm:p-6 rounded-2xl border border-blue-100 dark:border-slate-700">
            <p className="text-slate-700 dark:text-slate-300 mb-3">
              💡 <span className="font-semibold">Altijd bezig met nieuwe projecten</span>
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Deze lijst groeit constant terwijl ik nieuwe skills leer en complexere uitdagingen aanpak
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}