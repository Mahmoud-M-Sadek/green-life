import React from 'react';
import { Link } from 'react-router-dom';
import { Footprints, CheckCircle, ArrowRight, Phone, Mail, Trophy, Users, Shield } from 'lucide-react';
import SEO from '../../components/SEO';

const StadiumPage: React.FC = () => {
  return (
    <div>
      <SEO
        title="إنشاء وتنسيق الملاعب | ملاعب كرة قدم وملاعب رياضية في الرياض"
        description="خدمات تصميم وإنشاء ملاعب كرة قدم وملاعب رياضية بأعلى المعايير. نجيل صناعي معتمد، تخطيط احترافي، وصيانة دورية للملاعب في الرياض."
        keywords="إنشاء ملاعب كرة قدم, ملاعب رياضية, نجيل صناعي للملاعب, تخطيط ملاعب, صيانة ملاعب, ملاعب مدارس, ملاعب أندية, ملاعب الرياض"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Footprints className="h-16 w-16 mx-auto mb-6 text-white" />
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">إنشاء وتنسيق الملاعب</h1>
            <p className="text-xl md:text-2xl leading-relaxed">
              ملاعب رياضية احترافية بأعلى المعايير والجودة للمدارس والأندية والمجتمعات
            </p>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">ملاعب رياضية متكاملة</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-accent leading-relaxed mb-6">
                  نقدم خدمات شاملة لتصميم وإنشاء الملاعب الرياضية بأعلى المعايير العالمية.
                  من ملاعب كرة القدم إلى الملاعب المتعددة الأغراض، نحن نضمن أن تكون الملاعب آمنة، متينة، وجاهزة للاستخدام اليومي.
                </p>
                <p className="text-lg text-accent leading-relaxed">
                  نستخدم أجود أنواع النجيل الصناعي المعتمد دولياً، مع التخطيط الدقيق والتركيب المهني
                  لضمان أداء رياضي ممتاز ومتانة طويلة الأمد في ظروف الطقس السعودي.
                </p>
              </div>
              <div>
                <img
                  src="https://picsum.photos/seed/stadium-hero/600/400"
                  alt="ملاعب رياضية احترافية"
                  className="rounded-lg shadow-lg w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">خدماتنا في إنشاء الملاعب</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Trophy className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">ملاعب كرة القدم</h3>
              <p className="text-accent">تصميم وإنشاء ملاعب كرة قدم احترافية بأحجام مختلفة</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">ملاعب متعددة الأغراض</h3>
              <p className="text-accent">ملاعب تناسب عدة أنشطة رياضية مثل كرة السلة والطائرة</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Shield className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">ملاعب مدارس</h3>
              <p className="text-accent">ملاعب آمنة ومتينة للمدارس والجامعات</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">مراحل إنشاء الملعب</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">التصميم والتخطيط</h3>
              <p className="text-accent">تصميم الملعب حسب المعايير الدولية ومتطلبات العميل</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">إعداد الأساس</h3>
              <p className="text-accent">تحضير وتسوية الأرض وإنشاء القاعدة المناسبة</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">تركيب النجيل</h3>
              <p className="text-accent">تركيب النجيل الصناعي المعتمد بأعلى جودة</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">4</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">اللمسات النهائية</h3>
              <p className="text-accent">إضافة الخطوط والعلامات والتجهيزات الرياضية</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">لماذا تختار خدماتنا؟</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">جودة عالية</h3>
              <p className="text-accent">نجيل صناعي معتمد دولياً يحمل شهادات الجودة العالمية</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">متانة طويلة</h3>
              <p className="text-accent">مقاوم للظروف الجوية القاسية في المنطقة</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">أمان عالي</h3>
              <p className="text-accent">سطح آمن يقلل من خطر الإصابات أثناء اللعب</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">صيانة سهلة</h3>
              <p className="text-accent">لا يحتاج لقص أو ري مكثف، سهل التنظيف والصيانة</p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">تطبيقات الملاعب</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <img src="https://picsum.photos/seed/school-stadium/300/200" alt="ملاعب مدارس" className="rounded-lg shadow-lg mb-4 w-full h-48 object-cover" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">ملاعب المدارس</h3>
              <p className="text-accent">ملاعب آمنة ومتينة للأنشطة الرياضية المدرسية</p>
            </div>
            <div className="text-center">
              <img src="https://picsum.photos/seed/club-stadium/300/200" alt="ملاعب الأندية" className="rounded-lg shadow-lg mb-4 w-full h-48 object-cover" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">ملاعب الأندية</h3>
              <p className="text-accent">ملاعب احترافية للأندية الرياضية والمباريات</p>
            </div>
            <div className="text-center">
              <img src="https://picsum.photos/seed/community-stadium/300/200" alt="ملاعب المجتمعات" className="rounded-lg shadow-lg mb-4 w-full h-48 object-cover" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">ملاعب المجتمعات</h3>
              <p className="text-accent">ملاعب للأحياء السكنية والمنتزهات العامة</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">هل تحتاج ملعب رياضي؟</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            تواصل معنا لتصميم وإنشاء ملعب رياضي يلبي احتياجاتك بأعلى المعايير
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-primary-dark font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition duration-300 text-lg"
            >
              <Phone className="inline h-5 w-5 ml-2" />
              اطلب استشارة مجانية
            </Link>
            <a
              href="mailto:info@greenlife.com"
              className="border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-primary-dark transition duration-300 text-lg"
            >
              <Mail className="inline h-5 w-5 ml-2" />
              info@greenlife.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StadiumPage;
