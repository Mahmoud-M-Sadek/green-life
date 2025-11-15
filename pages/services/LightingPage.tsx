import React from 'react';
import { Link } from 'react-router-dom';
import { Lightbulb, CheckCircle, ArrowRight, Phone, Mail, Sun, Moon, Zap } from 'lucide-react';
import SEO from '../../components/SEO';

const LightingPage: React.FC = () => {
  return (
    <div>
      <SEO
        title="الإضاءة الخارجية للحدائق | إضاءة ديكورية وأمان في الرياض"
        description="خدمات تصميم وتركيب الإضاءة الخارجية للحدائق والمساحات الخضراء. إضاءة أرضية، إضاءة ممرات، سبوت لايت ديكوري لإضفاء أجواء ساحرة."
        keywords="إضاءة حدائق, إضاءة خارجية, إضاءة ديكورية, إضاءة أرضية, سبوت لايت, إضاءة ممرات, إضاءة أمان, إضاءة الرياض"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Lightbulb className="h-16 w-16 mx-auto mb-6 text-white" />
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">الإضاءة الخارجية للحدائق</h1>
            <p className="text-xl md:text-2xl leading-relaxed">
              إضاءة ديكورية وأمان تضفي جمالاً وسحراً على حديقتك ليلاً
            </p>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">أهمية الإضاءة الخارجية</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-accent leading-relaxed mb-6">
                  الإضاءة الخارجية ليست مجرد إضاءة، بل هي عنصر ديكوري يحول حديقتك إلى لوحة فنية ليلاً.
                  نحن نصمم أنظمة إضاءة متكاملة تجمع بين الجمال الديكوري والأمان والوظائف العملية.
                </p>
                <p className="text-lg text-accent leading-relaxed">
                  من الإضاءة الأرضية المنخفضة التي تضيء الممرات إلى السبوت لايت الديكوري الذي يبرز جمال الأشجار والزهور،
                  نقدم حلول إضاءة مبتكرة تناسب جميع أذواق العملاء في الرياض.
                </p>
              </div>
              <div>
                <img
                  src="https://picsum.photos/seed/lighting-hero/600/400"
                  alt="إضاءة حدائق ديكورية"
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
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">أنواع الإضاءة التي نقدمها</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Sun className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">إضاءة أرضية</h3>
              <p className="text-accent">إضاءة منخفضة تضيء الممرات والحدود بأمان وجمال</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Moon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">إضاءة ممرات</h3>
              <p className="text-accent">إضاءة آمنة للممرات والطرق داخل الحديقة</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Zap className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">سبوت لايت ديكوري</h3>
              <p className="text-accent">إضاءة موجهة تبرز جمال الأشجار والنباتات</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">كيف نصمم نظام الإضاءة؟</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">تقييم الموقع</h3>
              <p className="text-accent">نقيم حديقتك ونحدد النقاط التي تحتاج إضاءة</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">التصميم الديكوري</h3>
              <p className="text-accent">نصمم نظام إضاءة يتناسب مع تصميم الحديقة</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">التركيب المهني</h3>
              <p className="text-accent">نركب الأجهزة بأحدث التقنيات والمعايير</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">4</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">الاختبار والتسليم</h3>
              <p className="text-accent">نختبر النظام ونسلم المشروع جاهز للاستخدام</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">فوائد الإضاءة الخارجية</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">الأمان والحماية</h3>
              <p className="text-accent">تقلل من خطر الحوادث وتوفر إضاءة آمنة للتنقل ليلاً</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">الجمال الديكوري</h3>
              <p className="text-accent">تحول الحديقة إلى لوحة فنية جذابة في الليل</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">الطاقة الفعالة</h3>
              <p className="text-accent">أجهزة LED موفرة للطاقة وطويلة العمر</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">قيمة العقار</h3>
              <p className="text-accent">تزيد من جمال وجاذبية المنزل والحديقة</p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">تطبيقات الإضاءة</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <img src="https://picsum.photos/seed/garden-lighting/300/200" alt="إضاءة حدائق" className="rounded-lg shadow-lg mb-4 w-full h-48 object-cover" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">حدائق المنازل</h3>
              <p className="text-accent">إضاءة ديكورية وأمان للحدائق السكنية</p>
            </div>
            <div className="text-center">
              <img src="https://picsum.photos/seed/villa-lighting/300/200" alt="إضاءة فلل" className="rounded-lg shadow-lg mb-4 w-full h-48 object-cover" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">الفلل والقصور</h3>
              <p className="text-accent">إضاءة فاخرة تبرز التصميم المعماري</p>
            </div>
            <div className="text-center">
              <img src="https://picsum.photos/seed/commercial-lighting/300/200" alt="إضاءة تجارية" className="rounded-lg shadow-lg mb-4 w-full h-48 object-cover" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">المنشآت التجارية</h3>
              <p className="text-accent">إضاءة احترافية للمطاعم والفنادق</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">أضف سحراً لحديقتك</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            دعنا نصمم نظام إضاءة يجعل حديقتك أكثر جمالاً وأماناً
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

export default LightingPage;
