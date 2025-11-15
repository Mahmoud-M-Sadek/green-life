import React from 'react';
import { Link } from 'react-router-dom';
import { Sofa, CheckCircle, ArrowRight, Phone, Mail, Sparkles, Droplets, Fence } from 'lucide-react';
import SEO from '../../components/SEO';

const BeautifyPage: React.FC = () => {
  return (
    <div>
      <SEO
        title="تجميل المساحات الخارجية | ديكور خارجي جميل في الرياض"
        description="خدمات تجميل المساحات الخارجية بتركيب نوافير وشلالات، عشب جداري، مظلات وسواتر، وديكورات خارجية متنوعة."
        keywords="تجميل خارجي, نوافير وشلالات, عشب جداري, مظلات وسواتر, ديكور خارجي, تجميل حدائق, ديكور الرياض"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Sofa className="h-16 w-16 mx-auto mb-6 text-white" />
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">تجميل المساحات الخارجية</h1>
            <p className="text-xl md:text-2xl leading-relaxed">
              لمسات جمالية تحول مساحتك الخارجية إلى لوحة فنية
            </p>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">أهمية التجميل الخارجي</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-accent leading-relaxed mb-6">
                  التجميل الخارجي هو فن تحويل المساحات العادية إلى أماكن جذابة ومميزة.
                  نحن نضيف لمسات جمالية مبتكرة تجمع بين الوظائف العملية والمتعة البصرية، مما يجعل مساحتك الخارجية مكاناً يستحق الإعجاب.
                </p>
                <p className="text-lg text-accent leading-relaxed">
                  من النوافير الراقصة إلى العشب الجداري الأخضر، نقدم حلول ديكورية متنوعة تناسب جميع الأذواق
                  والميزانيات في الرياض، مع التركيز على الجودة والإبداع.
                </p>
              </div>
              <div>
                <img
                  src="https://picsum.photos/seed/beautify-hero/600/400"
                  alt="تجميل المساحات الخارجية"
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
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">خدمات التجميل الخارجي</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Droplets className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">نوافير وشلالات</h3>
              <p className="text-accent">نوافير راقصة وشلالات اصطناعية تضفي أجواء هادئة</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Sparkles className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">عشب جداري</h3>
              <p className="text-accent">جدران خضراء اصطناعية تضفي حيوية وجمالاً</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Fence className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">مظلات وسواتر</h3>
              <p className="text-accent">مظلات جميلة وسواتر ديكورية للخصوصية</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">كيف نجمّل مساحتك؟</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">تقييم المساحة</h3>
              <p className="text-accent">نقيم المساحة المتاحة ونحدد فرص التجميل</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">التصميم الإبداعي</h3>
              <p className="text-accent">نصمم عناصر ديكورية مبتكرة وجذابة</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">التنفيذ الدقيق</h3>
              <p className="text-accent">ننفذ التصاميم بأعلى مستويات الدقة</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">4</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">اللمسات النهائية</h3>
              <p className="text-accent">نضيف التفاصيل التي تجعل الفرق</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">فوائد التجميل الخارجي</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">الجاذبية البصرية</h3>
              <p className="text-accent">تحول المساحات العادية إلى أماكن جذابة</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">القيمة المضافة</h3>
              <p className="text-accent">تزيد من قيمة العقار والاستثمار</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">الراحة النفسية</h3>
              <p className="text-accent">أجواء هادئة ومريحة للعائلة والضيوف</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">الإبداع والتميز</h3>
              <p className="text-accent">تصاميم فريدة تعبر عن شخصيتك</p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">أماكن التطبيق</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <img src="https://picsum.photos/seed/home-beautify/300/200" alt="تجميل المنازل" className="rounded-lg shadow-lg mb-4 w-full h-48 object-cover" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">الحدائق السكنية</h3>
              <p className="text-accent">تجميل حدائق المنازل والفلل</p>
            </div>
            <div className="text-center">
              <img src="https://picsum.photos/seed/commercial-beautify/300/200" alt="تجميل تجاري" className="rounded-lg shadow-lg mb-4 w-full h-48 object-cover" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">المنشآت التجارية</h3>
              <p className="text-accent">تجميل المطاعم والفنادق والمولات</p>
            </div>
            <div className="text-center">
              <img src="https://picsum.photos/seed/public-beautify/300/200" alt="تجميل عام" className="rounded-lg shadow-lg mb-4 w-full h-48 object-cover" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">المساحات العامة</h3>
              <p className="text-accent">تجميل المنتزهات والحدائق العامة</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">جمّل مساحتك الخارجية</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            دعنا نضيف لمسات جمالية تحول مساحتك إلى مكان مميز
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

export default BeautifyPage;
