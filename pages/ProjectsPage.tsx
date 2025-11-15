import React, { useState, useMemo } from 'react';
import { Project } from '../types';
import SEO from '../components/SEO';

const allProjects: Project[] = [
  { id: 1, title: 'لاندسكيب فيلا سكنية - حي الياسمين', category: 'سكني', imageUrl: 'https://picsum.photos/seed/project1/600/400', description: 'تصميم وتنفيذ حديقة متكاملة مع مسبح وجلسات خارجية.' },
  { id: 2, title: 'ملعب نجيل صناعي - مجمع تجاري', category: 'ملاعب', imageUrl: 'https://picsum.photos/seed/project2/600/400', description: 'إنشاء ملعب كرة قدم بمواصفات معتمدة للموظفين والزوار.' },
  { id: 3, title: 'حديقة سطح - برج مكتبي', category: 'تجاري', imageUrl: 'https://picsum.photos/seed/project3/600/400', description: 'تحويل سطح مبنى إلى مساحة خضراء للاستراحة والفعاليات.' },
  { id: 4, title: 'تنسيق حديقة قصر - الرياض', category: 'سكني', imageUrl: 'https://picsum.photos/seed/project4/600/400', description: 'مشروع لاندسكيب فاخر يضم نوافير وشبكات ري ذكية.' },
  { id: 5, title: 'صيانة مسطحات خضراء - منتجع', category: 'تجاري', imageUrl: 'https://picsum.photos/seed/project5/600/400', description: 'عقد صيانة دوري للحفاظ على جمال المساحات الخضراء للمنتجع.' },
  { id: 6, title: 'ملعب متعدد الاستخدامات - مدرسة دولية', category: 'ملاعب', imageUrl: 'https://picsum.photos/seed/project6/600/400', description: 'تجهيز ملعب آمن ومتين للأنشطة الرياضية المدرسية.' },
  { id: 7, title: 'حديقة منزلية عصرية', category: 'سكني', imageUrl: 'https://picsum.photos/seed/project7/600/400', description: 'تصميم وتنفيذ حديقة بأسلوب مودرن مع إضاءة ليلية مميزة.' },
  { id: 8, title: 'مدخل شركة - لاندسكيب', category: 'تجاري', imageUrl: 'https://picsum.photos/seed/project8/600/400', description: 'تصميم لاندسكيب احترافي يعكس هوية الشركة وقوتها.' },
];

const categories = ['الكل', 'سكني', 'تجاري', 'ملاعب'];

const ProjectsPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('الكل');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'الكل') {
      return allProjects;
    }
    return allProjects.filter(p => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <div>
      <SEO
        title="مشاريعنا | أعمالنا في اللاندسكيب وتنسيق الحدائق بالرياض"
        description="شاهد معرض أعمال ومشاريع جرين لايف. تصميم وتنفيذ حدائق فلل، مشاريع تجارية، وملاعب رياضية في مختلف أنحاء الرياض والمملكة."
        keywords="مشاريع لاندسكيب, أعمال تنسيق حدائق, صور حدائق, تصميم حدائق فلل, ملاعب نجيل صناعي"
      />
      <header className="bg-primary-dark text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold">مشاريعنا</h1>
          <p className="mt-4 text-xl max-w-3xl mx-auto">استعراض لأعمالنا التي نفخر بها، والتي تعكس التزامنا بالجودة والإبداع في كل تفصيلة.</p>
        </div>
      </header>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-12">
            <div className="flex space-x-2 rtl:space-x-reverse bg-gray-200 p-2 rounded-full">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-6 py-2 text-sm font-medium rounded-full transition-colors duration-300 ${
                    activeFilter === category ? 'bg-primary text-white shadow' : 'text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <div key={project.id} className="group bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                <div className="relative">
                  <img src={project.imageUrl} alt={project.title} className="w-full h-60 object-cover" />
                   <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">{project.category}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-accent">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;