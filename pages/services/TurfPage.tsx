import React from 'react';
import { Link } from 'react-router-dom';
import { Tractor, CheckCircle, Users, Award } from 'lucide-react';
import SEO from '../../components/SEO';

const TurfPage: React.FC = () => {
  return (
    <div>
      <SEO
        title="تركيب النجيل الصناعي | جرين لايف - الرياض"
        description="تركيب نجيل صناعي عالي الجودة للمنازل، الفلل، الحدائق، والملاعب في الرياض. ضمان المتانة والمظهر الطبيعي. اتصل بنا للحصول على أفضل الأسعار."
        keywords="نجيل صناعي, تركيب نجيل صناعي, نجيل صناعي الرياض, نجيل صناعي للملاعب, نجيل صناعي للحدائق, جرين لايف"
        canonicalUrl="/services/turf"
      />

      {/* Hero Section */}
      <header className="bg-primary-dark text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <Tractor className="h-16 w-16 mx-auto mb-6 text-white" />
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">تركيب النجيل الصناعي</h1>
          <p className="text-xl max-w-3xl mx-auto">نوفر ونركب أجود أنواع النجيل الصناعي لمنازلك وحدايقك وملاعبك</p>
        </div>
      </header>

      {/* Detailed Description */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">لماذا تختار النجيل الصناعي؟</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <img src="https://picsum.photos/seed/turf/600/400" alt="نجيل صناعي" className="w-full h-64 object-cover rounded-lg mb-6" />
                <p className="text-accent leading-relaxed mb-6">
                  النجيل الصناعي هو الحل الأمثل لمن يريد مساحات خضراء جميلة دون عناء الصيانة المستمرة. نقدم مجموعة واسعة من أنواع النجيل الصناعي عالي الجودة المستورد من أفضل المصانع العالمية، مع ضمان المتانة والمظهر الطبيعي الذي يشبه العشب الطبيعي.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">أنواع النجيل الصناعي المتوفرة</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary ml-3 mt-1 flex-shrink-0" />
                    <span>نجيل صناعي للحدائق والمنازل</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary ml-3 mt-1 flex-shrink-0" />
                    <span>نجيل صناعي للملاعب الرياضية</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary ml-3 mt-1 flex-shrink-0" />
                    <span>نجيل صناعي للأسطح والمدرجات</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary ml-3 mt-1 flex-shrink-0" />
                    <span>نجيل صناعي مقاوم للحريق</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-primary ml-3 mt-1 flex-shrink-0" />
                    <span>نجيل صناعي بألوان مختلفة</span>
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
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">خطوات تركيب النجيل الصناعي</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
              <h3 className="text-xl font-bold mb-4">القياس والتخطيط</h3>
              <p className="text-accent">قياس المساحة بدقة وتحديد نوع النجيل المناسب</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
              <h3 className="text-xl font-bold mb-4">إعداد الأرض</h3>
              <p className="text-accent">تنظيف وتسوية الأرض وإعداد القاعدة</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
              <h3 className="text-xl font-bold mb-4">التركيب</h3>
              <p className="text-accent">تركيب النجيل الصناعي بدقة واحترافية</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">4</div>
              <h3 className="text-xl font-bold mb-4">الاختبار النهائي</h3>
              <p className="text-accent">فحص الجودة وضمان السلامة</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">مزايا النجيل الصناعي</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">صيانة منخفضة</h3>
              <p className="text-accent text-sm">لا يحتاج لقص أو ري مستمر</p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">متانة عالية</h3>
              <p className="text-accent text-sm">مقاوم للتمزق والاهتراء</p>
            </div>
            <div className="text-center">
              <Tractor className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">استخدام متعدد</h3>
              <p className="text-accent text-sm">مناسب للرياضة والترفيه</p>
            </div>
            <div className="text-center">
              <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-2">توفير المياه</h3>
              <p className="text-accent text-sm">لا يحتاج للري مما يوفر المياه</p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">تطبيقات النجيل الصناعي</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <img src="https://picsum.photos/seed/homedeco/400/300" alt="حدائق المنازل" className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-bold mb-2">حدائق المنازل والفلل</h3>
              <p className="text-accent">يضفي جمالاً وأناقة على مساحاتك الخارجية</p>
            </div>
            <div className="text-center">
              <img src="https://picsum.photos/seed/stadium/400/300" alt="الملاعب الرياضية" className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-bold mb-2">الملاعب الرياضية</h3>
              <p className="text-accent">أمان وسلامة للرياضيين واللاعبين</p>
            </div>
            <div className="text-center">
              <img src="https://picsum.photos/seed/roofgarden/400/300" alt="الأسطح والمدرجات" className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-bold mb-2">الأسطح والمدرجات</h3>
              <p className="text-accent">استغلال أمثل للمساحات العلوية</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-dark text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">احصل على نجيل صناعي عالي الجودة</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">تواصل معنا للحصول على استشارة مجانية وأفضل الأسعار</p>
          <Link to="/contact" className="bg-white text-primary-dark font-bold py-4 px-10 rounded-lg hover:bg-gray-100 transition duration-300 text-xl">
            اطلب استشارة مجانية
          </Link>
        </div>
      </section>
    </div>
  );
};

export default TurfPage;
