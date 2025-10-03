import Head from 'next/head';
import DefaultLayout from '../components/layout/DefaultLayout';
import { pageMetas } from '../utils/metaUtils';

export default function BaoMat({ meta }) {
  return (
    <DefaultLayout 
      title={meta?.title}
      desc={meta?.description}
      thumbnail={meta?.og?.image}
      meta={meta}
    >
    <div className="h-[80px]"></div>
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-50 py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-700 to-emerald-900 bg-clip-text text-transparent mb-3">
              🔒 Bảo mật dữ liệu
            </h1>
            <p className="text-emerald-600 text-lg mb-2">
              Cam kết bảo vệ thông tin cá nhân và dữ liệu dự án thiết kế
            </p>
            <p className="text-gray-500 text-sm">
              Tuân thủ các tiêu chuẩn bảo mật quốc tế và quy định pháp luật
            </p>
          </div>

          {/* Security Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-emerald-100">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-emerald-900">Mã hóa SSL/TLS</h2>
              </div>
              <p className="text-gray-600 mb-4">
                Tất cả dữ liệu được mã hóa trong quá trình truyền tải
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Mã hóa 256-bit SSL/TLS</li>
                <li>• Chứng chỉ bảo mật từ CA uy tín</li>
                <li>• Bảo vệ khỏi tấn công man-in-the-middle</li>
                <li>• Tuân thủ tiêu chuẩn PCI DSS</li>
              </ul>
            </div>

            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-emerald-100">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-green-900">Tuân thủ GDPR</h2>
              </div>
              <p className="text-gray-600 mb-4">
                Tuân thủ đầy đủ quy định bảo vệ dữ liệu cá nhân
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Quyền được quên (Right to be forgotten)</li>
                <li>• Quyền truy cập dữ liệu cá nhân</li>
                <li>• Quyền sửa đổi thông tin</li>
                <li>• Minh bạch về việc sử dụng dữ liệu</li>
              </ul>
            </div>

            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-emerald-100">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-emerald-900">Backup tự động</h2>
              </div>
              <p className="text-gray-600 mb-4">
                Sao lưu dữ liệu tự động và định kỳ
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Backup hàng ngày tự động</li>
                <li>• Lưu trữ tại nhiều vị trí địa lý</li>
                <li>• Khôi phục dữ liệu nhanh chóng</li>
                <li>• Kiểm tra tính toàn vẹn dữ liệu</li>
              </ul>
            </div>

            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-emerald-100">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-green-900">Giám sát 24/7</h2>
              </div>
              <p className="text-gray-600 mb-4">
                Hệ thống giám sát bảo mật liên tục
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Phát hiện xâm nhập tự động</li>
                <li>• Cảnh báo bảo mật real-time</li>
                <li>• Phân tích hành vi bất thường</li>
                <li>• Phản ứng nhanh với mối đe dọa</li>
              </ul>
            </div>
          </div>

          {/* Privacy Policy */}
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-emerald-100 mb-8">
            <h3 className="text-2xl font-bold text-emerald-900 mb-6 text-center">
              📋 Chính sách bảo mật
            </h3>
            
            <div className="space-y-6 text-sm text-gray-700">
              <div>
                <h4 className="font-semibold text-emerald-800 mb-2">1. Thu thập thông tin</h4>
                <p>Chúng tôi chỉ thu thập thông tin cần thiết để cung cấp dịch vụ thiết kế kiến trúc và nội thất, bao gồm:</p>
                <ul className="ml-4 mt-2 space-y-1">
                  <li>• Thông tin cá nhân cơ bản (tên, email, số điện thoại)</li>
                  <li>• Dữ liệu dự án (yêu cầu thiết kế, diện tích, ngân sách)</li>
                  <li>• Thông tin sử dụng dịch vụ (logs, cookies)</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-emerald-800 mb-2">2. Sử dụng thông tin</h4>
                <p>Thông tin được sử dụng để:</p>
                <ul className="ml-4 mt-2 space-y-1">
                  <li>• Cung cấp dịch vụ thiết kế kiến trúc và nội thất</li>
                  <li>• Phân tích và đưa ra giải pháp thiết kế chuyên môn</li>
                  <li>• Cải thiện chất lượng dịch vụ thiết kế</li>
                  <li>• Tuân thủ yêu cầu pháp lý</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-emerald-800 mb-2">3. Chia sẻ thông tin</h4>
                <p>Chúng tôi cam kết không chia sẻ thông tin cá nhân với bên thứ ba, trừ khi:</p>
                <ul className="ml-4 mt-2 space-y-1">
                  <li>• Có sự đồng ý rõ ràng từ người dùng</li>
                  <li>• Yêu cầu từ cơ quan pháp luật</li>
                  <li>• Cần thiết để bảo vệ quyền lợi hợp pháp</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-emerald-800 mb-2">4. Quyền của người dùng</h4>
                <p>Người dùng có quyền:</p>
                <ul className="ml-4 mt-2 space-y-1">
                  <li>• Truy cập và xem dữ liệu cá nhân</li>
                  <li>• Sửa đổi thông tin không chính xác</li>
                  <li>• Xóa dữ liệu cá nhân</li>
                  <li>• Rút lại sự đồng ý bất cứ lúc nào</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact for Privacy */}
          <div className="text-center">
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-emerald-100">
              <h3 className="text-2xl font-bold text-emerald-900 mb-4">
                📞 Liên hệ về bảo mật
              </h3>
              <p className="text-gray-600 mb-6">
                Nếu bạn có thắc mắc về bảo mật dữ liệu hoặc muốn thực hiện quyền của mình
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:privacy@q8design.vn">
                  <button className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-8 py-3 rounded-lg hover:from-emerald-700 hover:to-emerald-800 transition-all duration-200 font-semibold shadow-md hover:shadow-lg transform hover:scale-[1.02]">
                    ✉️ Email bảo mật
                  </button>
                </a>
                
                <a href="tel:+84948907686">
                  <button className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-3 rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-200 font-semibold shadow-md hover:shadow-lg transform hover:scale-[1.02]">
                    📞 Hotline
                  </button>
                </a>
              </div>

              <div className="mt-6 p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                <p className="text-sm text-emerald-800">
                  🔒 <strong>Cam kết:</strong> Chúng tôi cam kết bảo vệ thông tin cá nhân và dữ liệu dự án thiết kế của bạn với mức độ bảo mật cao nhất, tuân thủ đầy đủ các quy định pháp luật về bảo vệ dữ liệu cá nhân.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}

export async function getServerSideProps() {
  return {
    props: { 
      meta: pageMetas.privacy 
    },
  };
}
