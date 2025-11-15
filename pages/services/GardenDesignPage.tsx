import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutTemplate, CheckCircle, Users, Award } from 'lucide-react';
import SEO from '../../components/SEO';

const GardenDesignPage: React.FC = () => {
  return (
    <div>
      <SEO
        title="تصميم الحدائق الاحترافي | جرين لايف - الرياض"
        description="خدمات تصميم حدائق احترافية في الرياض. نقدم رسومات ثنائية وثلاثية الأبعاد، تخطيط شامل للنباتات والممرات والإضاءة. اتصل بنا لتصميم حديقتك المثالية."
        keywords="تصميم حدائق, رسومات حدائق ثلاثية الأبعاد, تخطيط حدائق, تصميم لاندسكيب, حدائق الرياض, جرين لايف"
        canonicalUrl="/services/garden-design"
      />

      {/* Hero Section */}
      <header className="bg-primary-dark text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <LayoutTemplate className="h-16 w-16 mx-auto mb-6 text-white" />
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">تصميم الحدائق</h1>
          <p className="text-xl max-w-3xl mx-auto">نحول رؤيتك إلى واقع من خلال تصاميم حدائق مبتكرة تجمع بين الجمال والوظيفة</p>
        </div>
      </header>

      {/* Detailed Description */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">ما نقدمه في خدمة تصميم الحدائق</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <img src="https://picsum.photos/seed/gardendesign/600/400" alt="تصميم حدائق" className="w-full h-64 object-cover rounded-lg mb-6" />
                <p className="text-accent leading-relaxed mb-6">
                  في جرين لايف، نؤمن أن الحديقة هي امتداد لمنزلك. نقدم خدمات تصميم حدائق شاملة تشمل تحليل الموقع، دراسة التربة والمناخ، وإعداد مخططات مفصلة. نستخدم أحدث البرامج لإنشاء رسومات ثنائية وثلاثية الأبعاد تساعدك على رؤية التصميم النهائي قبل البدء في التنفيذ.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">عناصر التصميم الشامل</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary ml-3 mt-1 flex-shrink-0" />
                    <span>تحديد أماكن النباتات والأشجار والزهور حسب المناخ</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary ml-3 mt-1 flex-shrink-0" />
                    <span>تصميم الممرات والمسارات بأنماط متنوعة</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary ml-3 mt-1 flex-shrink-0" />
                    <span>تخطيط أنظمة الإضاءة والري</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary ml-3 mt-1 flex-shrink-0" />
                    <span>إضافة عناصر ديكورية مثل النوافير والتماثيل</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary ml-3 mt-1 flex-shrink-0" />
                    <span>دراسة الخصوصية والأمان</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">خطوات عملية التصميم</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
              <h3 className="text-xl font-bold mb-4">الاستشارة الأولية</h3>
              <p className="text-accent">نزور موقعك ونناقش رؤيتك واحتياجاتك وميزانيتك</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
              <h3 className="text-xl font-bold mb-4">إعداد التصميم</h3>
              <p className="text-accent">نعمل على رسومات مفصلة ونماذج ثلاثية الأبعاد</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
              <h3 className="text-xl font-bold mb-4">التنفيذ والمتابعة</h3>
              <p className="text-accent">نبدأ في تنفيذ التصميم مع متابعة مستمرة للجودة</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">فوائد تصميم الحدائق الاحترافي</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">زيادة قيمة العقار</h3>
              <p className="text-accent text-sm">الحدائق المصممة جيدًا تزيد من جاذبية المنزل</p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">توفير الوقت والجهد</h3>
              <p className="text-accent text-sm">تصميم شامل يقلل من الحاجة للتعديلات المستقبلية</p>
            </div>
            <div className="text-center">
              <LayoutTemplate className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">استدامة بيئية</h3>
              <p className="text-accent text-sm">تصاميم صديقة للبيئة تحافظ على الموارد</p>
            </div>
            <div className="text-center">
              <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">راحة نفسية</h3>
              <p className="text-accent text-sm">مساحات خضراء تساعد في الاسترخاء والتأمل</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-dark text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">ابدأ تصميم حديقتك اليوم</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">تواصل معنا للحصول على استشارة مجانية وتصميم مخصص لحديقتك</p>
          <Link to="/contact" className="bg-white text-primary-dark font-bold py-4 px-10 rounded-lg hover:bg-gray-100 transition duration-300 text-xl">
            احجز استشارتك المجانية
          </Link>
        </div>
      </section>
    </div>
  );
};

export default GardenDesignPage;
