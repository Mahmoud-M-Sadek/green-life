import React from 'react';
import { Link } from 'react-router-dom';
import { Trees, CheckCircle, Users, Award } from 'lucide-react';
import SEO from '../../components/SEO';

const LandscapingPage: React.FC = () => {
  return (
    <div>
      <SEO
        title="تنسيق اللاندسكيب الاحترافي | جرين لايف - الرياض"
        description="خدمات تنسيق لاندسكيب شاملة في الرياض. زراعة الأشجار والزهور، تنفيذ المسطحات الخضراء، تركيب النجيل الطبيعي والصناعي. اتصل بنا لتحقيق شكل متناغم لحديقتك."
        keywords="تنسيق لاندسكيب, زراعة أشجار, مسطحات خضراء, نجيل طبيعي, نجيل صناعي, حدائق الرياض, جرين لايف"
        canonicalUrl="/services/landscaping"
      />

      {/* Hero Section */}
      <header className="bg-primary-dark text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <Trees className="h-16 w-16 mx-auto mb-6 text-white" />
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">تنسيق اللاندسكيب</h1>
          <p className="text-xl max-w-3xl mx-auto">نحول أرضك إلى لوحة فنية خضراء تجمع بين الطبيعة والتصميم الحديث</p>
        </div>
      </header>

      {/* Detailed Description */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">ما نقدمه في خدمة تنسيق اللاندسكيب</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <img src="https://picsum.photos/seed/landscaping/600/400" alt="تنسيق لاندسكيب" className="w-full h-64 object-cover rounded-lg mb-6" />
                <p className="text-accent leading-relaxed mb-6">
                  نقدم خدمات تنسيق لاندسكيب شاملة تشمل جميع جوانب تحويل المساحات الخارجية إلى بيئات جميلة ووظيفية. من زراعة الأشجار والشجيرات إلى إنشاء المسطحات الخضراء والممرات، نحن نضمن أن يكون كل عنصر في مكانه المثالي لإنشاء توازن متناغم بين الطبيعة والتصميم.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">خدمات التنسيق الشاملة</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary ml-3 mt-1 flex-shrink-0" />
                    <span>زراعة الأشجار والشجيرات المحلية والمستوردة</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary ml-3 mt-1 flex-shrink-0" />
                    <span>إنشاء وصيانة المسطحات الخضراء</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary ml-3 mt-1 flex-shrink-0" />
                    <span>تركيب النجيل الطبيعي والصناعي</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary ml-3 mt-1 flex-shrink-0" />
                    <span>تصميم وتنفيذ الممرات والمسارات</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary ml-3 mt-1 flex-shrink-0" />
                    <span>إضافة عناصر مائية وديكورية</span>
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
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">خطوات عملية التنسيق</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
              <h3 className="text-xl font-bold mb-4">تقييم الموقع</h3>
              <p className="text-accent">دراسة التربة والمناخ والمساحة المتاحة</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
              <h3 className="text-xl font-bold mb-4">التخطيط</h3>
              <p className="text-accent">إعداد خطة زراعة مفصلة ومتناسقة</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
              <h3 className="text-xl font-bold mb-4">التنفيذ</h3>
              <p className="text-accent">زراعة وتركيب جميع العناصر المخططة</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">4</div>
              <h3 className="text-xl font-bold mb-4">الصيانة</h3>
              <p className="text-accent">متابعة دورية للحفاظ على الجمال</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">فوائد تنسيق اللاندسكيب المهني</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">تحسين المظهر العام</h3>
              <p className="text-accent text-sm">يضفي جمالاً وجاذبية على الممتلكات</p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">زيادة القيمة</h3>
              <p className="text-accent text-sm">يرفع من قيمة العقار بشكل ملحوظ</p>
            </div>
            <div className="text-center">
              <Trees className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">فوائد بيئية</h3>
              <p className="text-accent text-sm">يحسن جودة الهواء ويقلل من التلوث</p>
            </div>
            <div className="text-center">
              <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">راحة نفسية</h3>
              <p className="text-accent text-sm">يوفر مساحات للاسترخاء والتأمل</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-dark text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">حول مساحتك إلى جنة خضراء</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">تواصل معنا اليوم لبدء مشروع تنسيق لاندسكيب احترافي</p>
          <Link to="/contact" className="bg-white text-primary-dark font-bold py-4 px-10 rounded-lg hover:bg-gray-100 transition duration-300 text-xl">
            اطلب عرض سعر مجاني
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LandscapingPage;
