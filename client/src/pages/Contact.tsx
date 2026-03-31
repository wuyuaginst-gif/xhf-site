import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("感谢您的留言，我们会尽快与您联系！");
    setFormData({ name: "", email: "", phone: "", company: "", message: "" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Navigation />
      <main className="flex-1 pt-20">
        {/* Hero section */}
        <section className="relative py-20 overflow-hidden section-3d bg-white">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 left-10 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold">
                <span className="gradient-text">联系我们</span>
              </h1>
              <p className="text-lg text-slate-600">
                欢迎与我们取得联系，了解更多关于我们的产品和服务
              </p>
            </div>
          </div>
        </section>

        {/* Contact info and form */}
        <section className="py-20 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {/* Contact info cards */}
              <div className="tech-card">
                <Phone className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-slate-900">电话</h3>
                <p className="text-slate-600 mb-4">
                  027-87771732
                </p>
                <p className="text-sm text-slate-500">
                  工作时间：周一至周五 9:00-18:00
                </p>
              </div>

              <div className="tech-card">
                <Mail className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-slate-900">邮箱</h3>
                <p className="text-slate-600 mb-4">
                  hbxhf@hbxhf.com.cn
                </p>
                <p className="text-sm text-slate-500">
                  我们会在24小时内回复您的邮件
                </p>
              </div>

              <div className="tech-card">
                <MapPin className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-slate-900">地址</h3>
                <p className="text-slate-600 text-sm mb-4">
                  湖北省武汉市东湖高新技术开发区金融港光谷汇金中心8号楼
                </p>
              </div>
            </div>

            {/* Contact form */}
            <div className="max-w-2xl mx-auto">
              <div className="tech-card">
                <h2 className="text-2xl font-bold mb-6 text-slate-900">发送消息</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-slate-700">姓名 *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 rounded-lg bg-white border border-blue-200 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none transition-colors"
                        placeholder="请输入您的姓名"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-slate-700">邮箱 *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 rounded-lg bg-white border border-blue-200 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none transition-colors"
                        placeholder="请输入您的邮箱"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-slate-700">电话</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg bg-white border border-blue-200 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none transition-colors"
                        placeholder="请输入您的电话"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-slate-700">公司</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg bg-white border border-blue-200 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none transition-colors"
                        placeholder="请输入您的公司名称"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-slate-700">消息 *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 rounded-lg bg-white border border-blue-200 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                      placeholder="请输入您的消息"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all duration-300"
                  >
                    发送消息
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Business hours */}
        <section className="py-20 bg-slate-50/60">
          <div className="container">
            <div className="max-w-2xl mx-auto">
              <div className="tech-card">
                <div className="flex items-start gap-4">
                  <Clock className="w-12 h-12 text-blue-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-slate-900">工作时间</h3>
                    <div className="space-y-2 text-slate-600">
                      <div className="flex justify-between">
                        <span>周一至周五：</span>
                        <span>09:00 - 18:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>周六：</span>
                        <span>10:00 - 16:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>周日：</span>
                        <span>休息</span>
                      </div>
                      <p className="text-sm text-slate-500 pt-4">
                        紧急情况请拨打24小时应急热线：027-87771732
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
