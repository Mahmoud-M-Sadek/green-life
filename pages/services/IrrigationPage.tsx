import React from 'react';
import { Link } from 'react-router-dom';
import { Droplets, CheckCircle, ArrowRight, Phone, Mail } from 'lucide-react';
import SEO from '../../components/SEO';

const IrrigationPage: React.FC = () => {
  return (
    <div>
      <SEO
        title="شبكات الري الحديثة | أنظمة ري أوتوماتيكية في الرياض"
        description="خدمات تصميم وتركيب شبكات الري الحديثة بالتنقيط والرش الأوتوماتيكي. نوفر حلول ري فعالة توفر المياه وتحافظ على صحة النباتات في الرياض."
        keywords="شبكات ري حديثة, ري بالتنقيط, ري أوتوماتيكي, مضخات ري, تمديدات ري, توفير المياه, ري حدائق الرياض"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Droplets className="h-16 w-16 mx-auto mb-6 text-white" />
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">شبكات الري الحديثة</h1>
            <p className="text-xl md:text-2xl leading-relaxed">
              حلول ري متقدمة توفر المياه وتحافظ على صحة النباتات والمساحات الخضراء
            </p>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">ما هي شبكات الري الحديثة؟</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-accent leading-relaxed mb-6">
                  شبكات الري الحديثة هي أنظمة متطورة مصممة لتوفير المياه وتوزيعها بكفاءة عالية على النباتات والمساحات الخضراء.
                  تشمل هذه الأنظمة تقنيات الري بالتنقيط، الري بالرش، والتحكم الأوتوماتيكي الذي يضمن وصول المياه إلى الجذور مباشرة.
                </p>
                <p className="text-lg text-accent leading-relaxed">
                  في شركة جرين لايف، نقدم حلول ري متكاملة تناسب جميع أنواع الحدائق والمساحات الخضراء في الرياض،
                  مع التركيز على توفير المياه وتقليل التكاليف التشغيلية.
                </p>
              </div>
              <div>
                <img
                  src="https://picsum.photos/seed/irrigation-hero/600/400"
                  alt="شبكات ري حديثة"
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
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">خدماتنا في مجال الري</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Droplets className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">ري بالتنقيط</h3>
              <p className="text-accent">أنظمة ري دقيقة توفر المياه بنسبة تصل إلى 70% مقارنة بالطرق التقليدية</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <CheckCircle className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">ري بالرش الأوتوماتيكي</h3>
              <p className="text-accent">أنظمة ري ذكية تعمل حسب البرنامج المحدد وتغطي مساحات واسعة</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <ArrowRight className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">مضخات وتمديدات</h3>
              <p className="text-accent">تركيب وصيانة مضخات المياه وأنابيب التمديد بأعلى جودة</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">كيف نعمل؟</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">التقييم والتصميم</h3>
              <p className="text-accent">نقوم بتقييم احتياجات حديقتك وتصميم نظام الري المناسب</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">الحفر والتمديد</h3>
              <p className="text-accent">نحفر ونمد الأنابيب والتمديدات بأحدث التقنيات</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">التركيب والاختبار</h3>
              <p className="text-accent">نركب الأجهزة ونختبر النظام للتأكد من عمله بشكل مثالي</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">4</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">التدريب والصيانة</h3>
              <p className="text-accent">ندربك على استخدام النظام ونقدم خدمات الصيانة الدورية</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">فوائد شبكات الري الحديثة</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">توفير المياه</h3>
              <p className="text-accent">توفر حتى 70% من استهلاك المياه مقارنة بالري التقليدي</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">صحة النباتات</h3>
              <p className="text-accent">يضمن وصول المياه للجذور مباشرة مما يحسن نمو النباتات</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">توفير التكاليف</h3>
              <p className="text-accent">يقلل من تكاليف العمالة والصيانة على المدى الطويل</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">الراحة والأمان</h3>
              <p className="text-accent">يعمل تلقائياً مما يوفر الوقت والجهد</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">هل تحتاج نظام ري حديث؟</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            تواصل معنا اليوم للحصول على استشارة مجانية وتصميم نظام ري يناسب احتياجاتك
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

export default IrrigationPage;
