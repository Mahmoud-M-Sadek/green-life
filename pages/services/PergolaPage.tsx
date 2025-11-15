import React from 'react';
import { Link } from 'react-router-dom';
import { GalleryVerticalEnd, CheckCircle, ArrowRight, Phone, Mail, Home, TreePine, Sun } from 'lucide-react';
import SEO from '../../components/SEO';

const PergolaPage: React.FC = () => {
  return (
    <div>
      <SEO
        title="إنشاء الجلسات والبرجولات | جلسات خارجية عصرية في الرياض"
        description="خدمات تصميم وإنشاء جلسات خارجية عصرية، عرائش خشبية، وبرجولات لتوفير مساحات مريحة للاسترخاء والاستمتاع بالهواء الطلق."
        keywords="جلسات خارجية, برجولات, عرائش خشبية, جلسات عصرية, تصميم جلسات, جلسات الرياض, مساحات خارجية"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <GalleryVerticalEnd className="h-16 w-16 mx-auto mb-6 text-white" />
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">إنشاء الجلسات والبرجولات</h1>
            <p className="text-xl md:text-2xl leading-relaxed">
              مساحات خارجية مريحة تجمع بين الجمال والوظائف العملية
            </p>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">أهمية الجلسات الخارجية</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-accent leading-relaxed mb-6">
                  الجلسات الخارجية هي امتداد للمنزل، حيث توفر مساحات مريحة للاسترخاء والاستمتاع بالهواء الطلق.
                  نحن نصمم وننفذ جلسات عصرية تجمع بين الجمال الديكوري والراحة العملية، مع مراعاة الطقس السعودي.
                </p>
                <p className="text-lg text-accent leading-relaxed">
                  من البرجولات الخشبية الأنيقة إلى الجلسات المغطاة، نقدم حلول متنوعة تناسب جميع الأذواق
                  والمساحات في الرياض، مع التركيز على الجودة والمتانة.
                </p>
              </div>
              <div>
                <img
                  src="https://picsum.photos/seed/pergola-hero/600/400"
                  alt="جلسات خارجية عصرية"
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
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">أنواع الجلسات والبرجولات</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Home className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">جلسات مغطاة</h3>
              <p className="text-accent">جلسات محمية من الشمس والمطر للراحة التامة</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <TreePine className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">عرائش خشبية</h3>
              <p className="text-accent">عرائش جميلة مغطاة بالنباتات المتسلقة</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Sun className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">برجولات عصرية</h3>
              <p className="text-accent">تصاميم حديثة بمواد متينة وأنيقة</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">كيف نصمم جلساتك؟</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">دراسة الموقع</h3>
              <p className="text-accent">نقيم المساحة المتاحة ومتطلبات العميل</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">التصميم المعماري</h3>
              <p className="text-accent">نصمم الجلسة لتتناسب مع المنزل والحديقة</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">التنفيذ المهني</h3>
              <p className="text-accent">ننفذ الجلسة بأعلى معايير الجودة</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">4</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">التشطيب والتسليم</h3>
              <p className="text-accent">نضيف اللمسات النهائية ونسلم المشروع</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">فوائد الجلسات الخارجية</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">الراحة والاسترخاء</h3>
              <p className="text-accent">مساحات مريحة للجلوس والاستمتاع بالطبيعة</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">الحماية من العوامل</h3>
              <p className="text-accent">حماية من الشمس والمطر والغبار</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">زيادة قيمة العقار</h3>
              <p className="text-accent">تضيف جمالاً ووظائف عملية للمنزل</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">التنوع في الاستخدام</h3>
              <p className="text-accent">مناسبة للتجمعات العائلية والحفلات</p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">أماكن استخدام الجلسات</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <img src="https://picsum.photos/seed/garden-pergola/300/200" alt="جلسات حدائق" className="rounded-lg shadow-lg mb-4 w-full h-48 object-cover" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">حدائق المنازل</h3>
              <p className="text-accent">جلسات مريحة في الحدائق السكنية</p>
            </div>
            <div className="text-center">
              <img src="https://picsum.photos/seed/restaurant-pergola/300/200" alt="جلسات مطاعم" className="rounded-lg shadow-lg mb-4 w-full h-48 object-cover" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">المطاعم والمقاهي</h3>
              <p className="text-accent">جلسات خارجية جذابة للعملاء</p>
            </div>
            <div className="text-center">
              <img src="https://picsum.photos/seed/hotel-pergola/300/200" alt="جلسات فنادق" className="rounded-lg shadow-lg mb-4 w-full h-48 object-cover" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">الفنادق والمنتجعات</h3>
              <p className="text-accent">جلسات فاخرة للضيوف</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">أضف جلسة خارجية لحديقتك</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            دعنا نصمم جلسة تجمع بين الجمال والراحة لعائلتك
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

export default PergolaPage;
