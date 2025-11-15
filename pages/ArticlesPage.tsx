import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from '../types';
import SEO from '../components/SEO';

const articles: Article[] = [
  {
    id: 1,
    title: "أفضل 5 نباتات تتحمل حرارة الرياض لحديقتك",
    excerpt: "تعرف على أفضل أنواع النباتات التي تزدهر في المناخ الحار لمدينة الرياض، وكيفية العناية بها للحفاظ على حديقة خضراء طوال العام.",
    imageUrl: "https://picsum.photos/seed/plants/600/400",
    date: "15 يوليو 2024",
    author: "فريق جرين لايف"
  },
  {
    id: 2,
    title: "دليل شامل لاختيار النجيل الصناعي المناسب",
    excerpt: "قبل تركيب النجيل الصناعي، هناك عدة عوامل يجب مراعاتها. في هذا الدليل، نوضح لك كيفية اختيار النوع الأفضل لحديقتك أو ملعبك.",
    imageUrl: "https://picsum.photos/seed/turf-guide/600/400",
    date: "10 يوليو 2024",
    author: "فريق جرين لايف"
  },
  {
    id: 3,
    title: "أهمية شبكات الري الحديثة في توفير المياه",
    excerpt: "في ظل التحديات المائية، أصبحت أنظمة الري الحديثة ضرورة. اكتشف كيف تساهم هذه الأنظمة في الحفاظ على جمال حديقتك وتقليل فاتورة المياه.",
    imageUrl: "https://picsum.photos/seed/irrigation-tips/600/400",
    date: "05 يوليو 2024",
    author: "فريق جرين لايف"
  },
    {
    id: 4,
    title: "أفكار إبداعية لإضاءة الحدائق الخارجية",
    excerpt: "الإضاءة ليست للأمان فقط، بل هي عنصر جمالي أساسي. استلهم من هذه الأفكار لتحويل حديقتك ليلاً إلى لوحة فنية ساحرة.",
    imageUrl: "https://picsum.photos/seed/lighting-ideas/600/400",
    date: "01 يوليو 2024",
    author: "فريق جرين لايف"
  },
];

const ArticlesPage: React.FC = () => {
  return (
    <div>
      <SEO
        title="مقالات ونصائح | مدونة جرين لايف للعناية بالحدائق"
        description="اقرأ أحدث المقالات والنصائح من خبراء جرين لايف حول العناية بالنباتات، اختيار النجيل الصناعي، وأفكار مبتكرة لتنسيق حديقتك في السعودية."
        keywords="مدونة تنسيق حدائق, العناية بالنباتات, نصائح للحدائق, لاندسكيب السعودية, اختيار النجيل الصناعي"
      />
      <header className="bg-primary-dark text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold">مقالات ونصائح</h1>
          <p className="mt-4 text-xl max-w-3xl mx-auto">نشارككم خبراتنا وأحدث الأفكار في عالم اللاندسكيب وتنسيق الحدائق لمساعدتكم في العناية بمساحاتكم الخضراء.</p>
        </div>
      </header>

      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <div key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col group transform hover:-translate-y-2 transition-transform duration-300">
                <img src={article.imageUrl} alt={article.title} className="w-full h-56 object-cover" />
                <div className="p-6 flex-grow flex flex-col">
                  <div className="mb-4">
                    <p className="text-sm text-gray-500">{article.date} - بقلم: {article.author}</p>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors duration-300">{article.title}</h3>
                  <p className="text-accent leading-relaxed flex-grow">{article.excerpt}</p>
                  <Link to={`/articles/${article.id}`} className="mt-6 self-start text-primary font-bold hover:text-primary-dark transition-colors duration-300">
                    اقرأ المزيد ←
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArticlesPage;