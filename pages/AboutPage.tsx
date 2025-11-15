import React from 'react';
import { Target, Eye, Gem, Users, Leaf, Clock } from 'lucide-react';
import SEO from '../components/SEO';

const AboutPage: React.FC = () => {

  const values = [
    { title: "الجودة", description: "نلتزم بأعلى معايير الجودة في المواد والتنفيذ.", icon: <Gem className="h-10 w-10 text-primary" /> },
    { title: "الابتكار", description: "نبحث دائمًا عن أحدث التقنيات والتصاميم في عالم اللاندسكيب.", icon: <Leaf className="h-10 w-10 text-primary" /> },
    { title: "الالتزام", description: "نحترم المواعيد والميزانيات المتفق عليها مع عملائنا.", icon: <Clock className="h-10 w-10 text-primary" /> },
    { title: "فريق عمل خبير", description: "مهندسون وفنيون متخصصون بخبرة طويلة في المجال.", icon: <Users className="h-10 w-10 text-primary" /> },
  ];

  return (
    <div>
      <SEO
        title="من نحن | قصة وخبرة جرين لايف في عالم اللاندسكيب"
        description="تعرف على قصة جرين لايف، رؤيتنا، ورسالتنا. نحن فريق من الخبراء ملتزمون بتقديم أعلى جودة في خدمات اللاندسكيب وتنسيق الحدائق بالرياض."
        keywords="شركة لاندسكيب, خبراء تنسيق حدائق, تاريخ جرين لايف, فريق عمل لاندسكيب"
      />
      <header className="bg-primary-dark text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold">من نحن</h1>
          <p className="mt-4 text-xl">شركاؤك في صناعة الجمال الطبيعي</p>
        </div>
      </header>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">قصتنا: شغف بالطبيعة والتصميم</h2>
              <p className="text-lg text-accent mb-4 leading-relaxed">
                تأسست "جرين لايف" في قلب مدينة الرياض على يد فريق من المهندسين والمصممين الشغوفين بتحويل المساحات القاحلة إلى واحات خضراء تنبض بالحياة. انطلقنا من إيماننا بأن الجمال الطبيعي له تأثير إيجابي على جودة الحياة، وسعينا لتقديم خدمات لاندسكيب احترافية تلبي تطلعات عملائنا في المملكة العربية السعودية.
              </p>
              <p className="text-lg text-accent leading-relaxed">
                على مر السنين، نمت خبراتنا وتوسعت مشاريعنا لتشمل الفلل السكنية، المجمعات التجارية، والملاعب الرياضية، مع الحفاظ على بصمتنا الخاصة التي تجمع بين الإبداع الفني والدقة الهندسية.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img src="https://picsum.photos/seed/team/600/450" alt="فريق جرين لايف" className="w-full h-full object-cover"/>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img src="https://picsum.photos/seed/vision/600/400" alt="رؤية جرين لايف" className="rounded-lg shadow-2xl"/>
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-start mb-8">
                <div className="bg-primary text-white p-3 rounded-full mr-4 ml-4">
                  <Target className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">رسالتنا</h3>
                  <p className="text-lg text-accent leading-relaxed">
                    تقديم حلول لاندسكيب مبتكرة ومستدامة ترفع من قيمة العقارات وتحسن من جودة الحياة، مع الالتزام التام برضا العميل وتحقيق رؤيته بأعلى درجات الحرفية.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-primary text-white p-3 rounded-full mr-4 ml-4">
                  <Eye className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">رؤيتنا</h3>
                  <p className="text-lg text-accent leading-relaxed">
                    أن نكون الشركة الرائدة في مجال اللاندسكيب وتنسيق الحدائق في المملكة العربية السعودية، والمصدر الأول للثقة والإلهام في صناعة المساحات الخضراء.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">لماذا تختار جرين لايف؟</h2>
          <p className="text-lg text-accent mb-12 max-w-3xl mx-auto">نحن لا نبني حدائق فقط، بل نبني علاقات ثقة طويلة الأمد مع عملائنا من خلال التزامنا بالتميز.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border-t-4 border-primary">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{value.title}</h3>
                <p className="text-accent">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;