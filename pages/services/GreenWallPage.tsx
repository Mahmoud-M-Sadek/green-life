import React from 'react';
import { Link } from 'react-router-dom';
import { Fence, CheckCircle, ArrowRight, Phone, Mail, Leaf, Shield, Eye } from 'lucide-react';
import SEO from '../../components/SEO';

const GreenWallPage: React.FC = () => {
  return (
    <div>
      <SEO
        title="الأسوار الخضراء والعشب الجداري | جدران خضراء جميلة في الرياض"
        description="خدمات تصميم وتركيب الأسوار النباتية الطبيعية والعشب الجداري الصناعي لإضافة خصوصية ولمسة جمالية فريدة على الجدران والأسوار."
        keywords="أسوار خضراء, عشب جداري, جدران خضراء, أسوار نباتية, خصوصية, ديكور خارجي, جدران الرياض"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Fence className="h-16 w-16 mx-auto mb-6 text-white" />
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">الأسوار الخضراء والعشب الجداري</h1>
            <p className="text-xl md:text-2xl leading-relaxed">
              جدران خضراء تضفي خصوصية وجمالاً فريداً لمساحتك
            </p>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">جمال الجدران الخضراء</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-accent leading-relaxed mb-6">
                  الأسوار الخضراء والعشب الجداري يمثلان ثورة في عالم الديكور الخارجي.
                  نحن نصمم ونركب أنظمة جدارية خضراء تجمع بين الجمال الطبيعي والوظائف العملية، مما يحول جدرانك العادية إلى لوحات فنية حية.
                </p>
                <p className="text-lg text-accent leading-relaxed">
                  من الأسوار النباتية الطبيعية إلى العشب الجداري الصناعي، نقدم حلول متنوعة تناسب جميع الاحتياجات
                  في الرياض، مع التركيز على الجودة والمتانة والصيانة السهلة.
                </p>
              </div>
              <div>
                <img
                  src="https://picsum.photos/seed/greenwall-hero/600/400"
                  alt="الأسوار الخضراء والعشب الجداري"
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
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">أنواع الجدران الخضراء</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Leaf className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">الأسوار النباتية</h3>
              <p className="text-accent">أسوار طبيعية من النباتات المتسلقة والشجيرات</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Shield className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">العشب الجداري</h3>
              <p className="text-accent">جدران خضراء صناعية مقاومة للعوامل الجوية</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Eye className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">الجدران المركبة</h3>
              <p className="text-accent">مزيج من النباتات الطبيعية والعناصر الصناعية</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">كيف نصمم جدارك الأخضر؟</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">دراسة الموقع</h3>
              <p className="text-accent">نقيم المساحة والظروف البيئية المتاحة</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">اختيار النظام</h3>
              <p className="text-accent">نختار النظام المناسب لاحتياجاتك</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">التركيب المهني</h3>
              <p className="text-accent">نركب النظام بأعلى معايير الجودة</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">4</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">الصيانة والرعاية</h3>
              <p className="text-accent">نوفر خدمات الصيانة المستمرة</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">فوائد الجدران الخضراء</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">الخصوصية والأمان</h3>
              <p className="text-accent">توفر خصوصية عالية وتحمي من الأنظار الغريبة</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">الجمال الطبيعي</h3>
              <p className="text-accent">تضفي مظهراً طبيعياً جميلاً على المكان</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">العزل الحراري</h3>
              <p className="text-accent">توفر عزل حراري طبيعي يقلل من الحرارة</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">تحسين البيئة</h3>
              <p className="text-accent">تنقي الهواء وتقلل من التلوث البيئي</p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">تطبيقات الجدران الخضراء</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <img src="https://picsum.photos/seed/home-greenwall/300/200" alt="جدران خضراء للمنازل" className="rounded-lg shadow-lg mb-4 w-full h-48 object-cover" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">الحدائق السكنية</h3>
              <p className="text-accent">فصل الخصوصية في الحدائق والفيلات</p>
            </div>
            <div className="text-center">
              <img src="https://picsum.photos/seed/office-greenwall/300/200" alt="جدران خضراء للمكاتب" className="rounded-lg shadow-lg mb-4 w-full h-48 object-cover" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">المباني التجارية</h3>
              <p className="text-accent">ديكور خارجي جذاب للمكاتب والمحلات</p>
            </div>
            <div className="text-center">
              <img src="https://picsum.photos/seed/public-greenwall/300/200" alt="جدران خضراء عامة" className="rounded-lg shadow-lg mb-4 w-full h-48 object-cover" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">المساحات العامة</h3>
              <p className="text-accent">تجميل المنتزهات والحدائق العامة</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">أضف لمسة خضراء لجدرانك</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            دعنا نصمم جداراً أخضر يعكس شخصيتك ويضفي جمالاً فريداً
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

export default GreenWallPage;
