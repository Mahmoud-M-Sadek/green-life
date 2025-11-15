import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, CheckCircle, ArrowRight, Phone, Mail, Scissors, Droplets, Bug } from 'lucide-react';
import SEO from '../../components/SEO';

const MaintenancePage: React.FC = () => {
  return (
    <div>
      <SEO
        title="صيانة الحدائق الدورية | خدمات صيانة احترافية في الرياض"
        description="عقود صيانة دورية للحدائق تشمل تنظيف الحديقة، صيانة شبكات الري، علاج وتقليم الأشجار، وقص المسطحات الخضراء للحفاظ على حيويتها."
        keywords="صيانة حدائق, صيانة دورية, تقليم أشجار, قص مسطحات خضراء, صيانة ري, علاج نباتات, صيانة الرياض"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Wrench className="h-16 w-16 mx-auto mb-6 text-white" />
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">صيانة الحدائق الدورية</h1>
            <p className="text-xl md:text-2xl leading-relaxed">
              خدمات صيانة شاملة للحفاظ على جمال وصحة حديقتك
            </p>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">أهمية الصيانة الدورية</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-accent leading-relaxed mb-6">
                  الصيانة الدورية هي سر الحفاظ على جمال وصحة الحدائق والمساحات الخضراء.
                  نحن نقدم عقود صيانة شاملة تغطي جميع جوانب العناية بالنباتات والمساحات الخضراء، مما يضمن بقاء حديقتك في أفضل حالة طوال العام.
                </p>
                <p className="text-lg text-accent leading-relaxed">
                  من تقليم الأشجار إلى صيانة أنظمة الري، نقدم خدمات صيانة احترافية تناسب جميع أنواع الحدائق
                  في الرياض، مع جداول زمنية مرنة وأسعار تنافسية.
                </p>
              </div>
              <div>
                <img
                  src="https://picsum.photos/seed/maintenance-hero/600/400"
                  alt="صيانة الحدائق الدورية"
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
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">خدمات الصيانة المتوفرة</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Scissors className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">تقليم الأشجار</h3>
              <p className="text-accent">تقليم احترافي للأشجار والشجيرات للحفاظ على شكلها</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Droplets className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">صيانة الري</h3>
              <p className="text-accent">فحص وصيانة أنظمة الري والمضخات</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Bug className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">مكافحة الآفات</h3>
              <p className="text-accent">علاج النباتات من الآفات والأمراض</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">برنامج الصيانة الدورية</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">التقييم الأولي</h3>
              <p className="text-accent">نقيم حالة الحديقة ونحدد احتياجات الصيانة</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">وضع الخطة</h3>
              <p className="text-accent">نضع جدول صيانة دوري حسب نوع النباتات</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">التنفيذ الدوري</h3>
              <p className="text-accent">ننفذ أعمال الصيانة حسب الجدول المحدد</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">4</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">المتابعة المستمرة</h3>
              <p className="text-accent">نتابع نمو النباتات ونعدل الخطة حسب الحاجة</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">فوائد الصيانة الدورية</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">الحفاظ على الصحة</h3>
              <p className="text-accent">يحافظ على صحة النباتات ويمنع انتشار الأمراض</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">الجمال المستمر</h3>
              <p className="text-accent">يحافظ على مظهر الحديقة الجميل طوال العام</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">توفير التكاليف</h3>
              <p className="text-accent">يمنع المشاكل الكبيرة ويوفر تكاليف الإصلاح</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">الراحة والأمان</h3>
              <p className="text-accent">يوفر الوقت والجهد لأصحاب الحدائق</p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">أنواع الحدائق التي نخدمها</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <img src="https://picsum.photos/seed/home-maintenance/300/200" alt="صيانة حدائق منازل" className="rounded-lg shadow-lg mb-4 w-full h-48 object-cover" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">حدائق المنازل</h3>
              <p className="text-accent">صيانة دورية للحدائق السكنية</p>
            </div>
            <div className="text-center">
              <img src="https://picsum.photos/seed/commercial-maintenance/300/200" alt="صيانة حدائق تجارية" className="rounded-lg shadow-lg mb-4 w-full h-48 object-cover" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">الحدائق التجارية</h3>
              <p className="text-accent">صيانة حدائق الفنادق والمطاعم</p>
            </div>
            <div className="text-center">
              <img src="https://picsum.photos/seed/public-maintenance/300/200" alt="صيانة حدائق عامة" className="rounded-lg shadow-lg mb-4 w-full h-48 object-cover" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">الحدائق العامة</h3>
              <p className="text-accent">صيانة المنتزهات والحدائق العامة</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">احجز عقد صيانة اليوم</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            دعنا نحافظ على جمال حديقتك مع خدمات صيانة دورية احترافية
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

export default MaintenancePage;
