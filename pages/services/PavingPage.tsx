import React from 'react';
import { Link } from 'react-router-dom';
import { BrickWall, CheckCircle, ArrowRight, Phone, Mail, MapPin, TreePine, Waves } from 'lucide-react';
import SEO from '../../components/SEO';

const PavingPage: React.FC = () => {
  return (
    <div>
      <SEO
        title="أعمال الحجر والبلاط للممرات | ممرات حدائق جميلة في الرياض"
        description="خدمات تصميم وتنفيذ ممرات الحدائق باستخدام بلاط الحدائق، الحجر الطبيعي، والحجر النهري. تركيب الانترلوك لممرات جميلة وعملية."
        keywords="ممرات حدائق, بلاط حدائق, حجر طبيعي, حجر نهري, انترلوك, ممرات جميلة, تصميم ممرات, ممرات الرياض"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <BrickWall className="h-16 w-16 mx-auto mb-6 text-white" />
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">أعمال الحجر والبلاط للممرات</h1>
            <p className="text-xl md:text-2xl leading-relaxed">
              ممرات جميلة وعملية تضفي طابعاً مميزاً على حديقتك
            </p>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">أهمية الممرات في التصميم</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-accent leading-relaxed mb-6">
                  الممرات ليست مجرد طرق للتنقل، بل هي عنصر ديكوري أساسي في تصميم الحدائق.
                  نحن نستخدم أجود أنواع البلاط والحجر الطبيعي لإنشاء ممرات جميلة وعملية تتناسب مع التصميم العام للحديقة.
                </p>
                <p className="text-lg text-accent leading-relaxed">
                  من الحجر النهري الأنيق إلى الانترلوك العملي، نقدم حلول متنوعة تناسب جميع الأذواق
                  والميزانيات في الرياض، مع التركيز على الجودة والمتانة.
                </p>
              </div>
              <div>
                <img
                  src="https://picsum.photos/seed/paving-hero/600/400"
                  alt="ممرات حدائق جميلة"
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
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">أنواع المواد التي نستخدمها</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <MapPin className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">الحجر الطبيعي</h3>
              <p className="text-accent">حجر طبيعي أنيق يضفي مظهراً كلاسيكياً وفاخراً</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Waves className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">الحجر النهري</h3>
              <p className="text-accent">حجر ناعم المظهر مع حواف مستديرة للمظهر الطبيعي</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <TreePine className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">بلاط الحدائق</h3>
              <p className="text-accent">بلاط متخصص للحدائق مقاوم للرطوبة والتآكل</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">مراحل تنفيذ الممرات</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">التخطيط والتصميم</h3>
              <p className="text-accent">تصميم الممرات حسب احتياجات العميل والتصميم العام</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">إعداد الأساس</h3>
              <p className="text-accent">تحضير القاعدة الصلبة والمستوية للممر</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">التركيب والتنفيذ</h3>
              <p className="text-accent">تركيب البلاط أو الحجر بمهارة واحترافية</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">4</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">اللمسات النهائية</h3>
              <p className="text-accent">إضافة الحواف والتشطيبات النهائية</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">فوائد الممرات الجميلة</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">الأمان والسلامة</h3>
              <p className="text-accent">ممرات آمنة غير زلقة تقلل من خطر الحوادث</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">الجمال الديكوري</h3>
              <p className="text-accent">تضفي طابعاً مميزاً وأنيقاً على الحديقة</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">المتانة والقوة</h3>
              <p className="text-accent">مواد عالية الجودة مقاومة للعوامل الجوية</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">سهولة الصيانة</h3>
              <p className="text-accent">سهلة التنظيف والحفاظ على المظهر الجميل</p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">أنواع الممرات</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <img src="https://picsum.photos/seed/straight-path/300/200" alt="ممرات مستقيمة" className="rounded-lg shadow-lg mb-4 w-full h-48 object-cover" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">ممرات مستقيمة</h3>
              <p className="text-accent">ممرات منظمة ومباشرة للوصول السريع</p>
            </div>
            <div className="text-center">
              <img src="https://picsum.photos/seed/curved-path/300/200" alt="ممرات منحنية" className="rounded-lg shadow-lg mb-4 w-full h-48 object-cover" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">ممرات منحنية</h3>
              <p className="text-accent">ممرات طبيعية تضفي جمالاً على الحديقة</p>
            </div>
            <div className="text-center">
              <img src="https://picsum.photos/seed/stepping-stones/300/200" alt="حجارة خطوة" className="rounded-lg shadow-lg mb-4 w-full h-48 object-cover" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">حجارة الخطوة</h3>
              <p className="text-accent">حجارة فردية للمظهر الطبيعي والريفي</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">ممرات جميلة لحديقتك</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            دعنا نصمم ممرات تضفي جمالاً وعملية على مساحتك الخضراء
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

export default PavingPage;
