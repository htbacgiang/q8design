import Head from "next/head";
import { FaFileContract, FaShieldAlt, FaUserShield, FaGavel, FaExclamationTriangle } from "react-icons/fa";
import DefaultLayout from "../components/layout/DefaultLayout";
export default function TermsOfUsePage() {
  return (
    <DefaultLayout>
      <Head>
        <title>Điều khoản sử dụng - Q8 Design</title>
        <meta name="description" content="Điều khoản sử dụng dịch vụ thiết kế và thi công nội thất Q8 Design" />
        <meta name="keywords" content="điều khoản sử dụng, quy định, Q8 Design, thiết kế nội thất" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-orange-600 to-orange-700 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">
              <div className="mb-6">
                <FaFileContract className="text-6xl mx-auto mb-4 opacity-80" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Điều khoản sử dụng
              </h1>
              <p className="text-xl text-orange-100 leading-relaxed">
                Các quy định và điều khoản khi sử dụng dịch vụ thiết kế và thi công nội thất của Q8 Design
              </p>
              <p className="text-sm text-orange-200 mt-4">
                Cập nhật lần cuối: {new Date().toLocaleDateString('vi-VN')}
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                
                {/* Introduction */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <FaShieldAlt className="text-orange-600 mr-3" />
                    1. Giới thiệu
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Chào mừng bạn đến với Q8 Design. Việc bạn truy cập và sử dụng website cũng như các dịch vụ của chúng tôi 
                    có nghĩa là bạn đã đọc, hiểu và đồng ý tuân thủ các điều khoản và điều kiện được nêu trong tài liệu này.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Q8 Design cam kết bảo vệ quyền lợi của khách hàng và đảm bảo tính minh bạch trong mọi giao dịch. 
                    Chúng tôi khuyến khích bạn đọc kỹ các điều khoản này trước khi sử dụng dịch vụ.
                  </p>
                </div>

                {/* Definitions */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <FaGavel className="text-orange-600 mr-3" />
                    2. Định nghĩa
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2">&ldquo;Chúng tôi&rdquo;, &ldquo;Q8 Design&rdquo;</h3>
                      <p className="text-gray-700">Chỉ Công ty TNHH Q8 Design, có địa chỉ tại Đ. Nam An Khánh - KĐT Nam An Khánh - Hà Nội.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2">&ldquo;Bạn&rdquo;, &ldquo;Khách hàng&rdquo;</h3>
                      <p className="text-gray-700">Chỉ cá nhân hoặc tổ chức sử dụng dịch vụ của Q8 Design.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2">&ldquo;Dịch vụ&rdquo;</h3>
                      <p className="text-gray-700">Bao gồm thiết kế kiến trúc, thiết kế nội thất, thi công trọn gói và các dịch vụ liên quan.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2">&ldquo;Website&rdquo;</h3>
                      <p className="text-gray-700">Chỉ website q8design.vn và các trang con của nó.</p>
                    </div>
                  </div>
                </div>

                {/* Service Terms */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <FaUserShield className="text-orange-600 mr-3" />
                    3. Điều khoản dịch vụ
                  </h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-3">3.1. Cam kết chất lượng</h3>
                      <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Q8 Design cam kết cung cấp dịch vụ thiết kế và thi công với chất lượng cao nhất</li>
                        <li>Tuân thủ đầy đủ các tiêu chuẩn kỹ thuật và quy định pháp luật hiện hành</li>
                        <li>Đảm bảo tiến độ thi công theo đúng hợp đồng đã ký kết</li>
                        <li>Bảo hành công trình theo quy định (tối thiểu 12 tháng)</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-3">3.2. Quyền và nghĩa vụ của khách hàng</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-bold text-gray-800 mb-2">Quyền:</h4>
                          <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                            <li>Được tư vấn miễn phí về thiết kế</li>
                            <li>Được báo giá chi tiết, minh bạch</li>
                            <li>Được giám sát quá trình thi công</li>
                            <li>Được bảo hành theo quy định</li>
                            <li>Được hỗ trợ sau bán hàng</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 mb-2">Nghĩa vụ:</h4>
                          <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                            <li>Cung cấp thông tin chính xác</li>
                            <li>Thanh toán đúng hạn theo hợp đồng</li>
                            <li>Tạo điều kiện thuận lợi cho thi công</li>
                            <li>Bảo quản công trình sau bàn giao</li>
                            <li>Tuân thủ quy định an toàn lao động</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment Terms */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Điều khoản thanh toán</h2>
                  
                  <div className="space-y-4">
                    <div className="bg-orange-50 border-l-4 border-orange-500 p-4">
                      <h3 className="text-lg font-bold text-gray-800 mb-2">4.1. Phương thức thanh toán</h3>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Chuyển khoản ngân hàng</li>
                        <li>Thanh toán bằng tiền mặt</li>
                        <li>Thanh toán qua thẻ tín dụng (nếu có)</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2">4.2. Lịch thanh toán</h3>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-gray-300">
                          <thead>
                            <tr className="bg-gray-100">
                              <th className="border border-gray-300 px-4 py-2 text-left">Giai đoạn</th>
                              <th className="border border-gray-300 px-4 py-2 text-left">Tỷ lệ (%)</th>
                              <th className="border border-gray-300 px-4 py-2 text-left">Thời điểm</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border border-gray-300 px-4 py-2">Ký hợp đồng</td>
                              <td className="border border-gray-300 px-4 py-2">30%</td>
                              <td className="border border-gray-300 px-4 py-2">Khi ký hợp đồng</td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 px-4 py-2">Bắt đầu thi công</td>
                              <td className="border border-gray-300 px-4 py-2">40%</td>
                              <td className="border border-gray-300 px-4 py-2">Khi bắt đầu thi công</td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 px-4 py-2">Hoàn thành 80%</td>
                              <td className="border border-gray-300 px-4 py-2">25%</td>
                              <td className="border border-gray-300 px-4 py-2">Khi hoàn thành 80% công trình</td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 px-4 py-2">Nghiệm thu</td>
                              <td className="border border-gray-300 px-4 py-2">5%</td>
                              <td className="border border-gray-300 px-4 py-2">Khi nghiệm thu hoàn thành</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Privacy Policy */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Chính sách bảo mật</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2">5.1. Thu thập thông tin</h3>
                      <p className="text-gray-700 mb-3">
                        Chúng tôi chỉ thu thập thông tin cá nhân cần thiết để cung cấp dịch vụ tốt nhất cho bạn, bao gồm:
                      </p>
                      <ul className="list-disc list-inside text-gray-700 space-y-1">
                        <li>Họ tên, địa chỉ, số điện thoại, email</li>
                        <li>Thông tin về dự án thiết kế/thi công</li>
                        <li>Hình ảnh công trình (nếu có)</li>
                        <li>Thông tin thanh toán (được mã hóa an toàn)</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2">5.2. Sử dụng thông tin</h3>
                      <p className="text-gray-700">
                        Thông tin cá nhân của bạn sẽ được sử dụng để:
                      </p>
                      <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2">
                        <li>Cung cấp dịch vụ thiết kế và thi công</li>
                        <li>Liên hệ tư vấn và hỗ trợ khách hàng</li>
                        <li>Gửi báo giá và hợp đồng</li>
                        <li>Cải thiện chất lượng dịch vụ</li>
                        <li>Tuân thủ các quy định pháp luật</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2">5.3. Bảo vệ thông tin</h3>
                      <p className="text-gray-700">
                        Chúng tôi cam kết bảo vệ thông tin cá nhân của bạn bằng các biện pháp bảo mật tiên tiến 
                        và không chia sẻ thông tin với bên thứ ba mà không có sự đồng ý của bạn.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Liability */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                    <FaExclamationTriangle className="text-orange-600 mr-3" />
                    6. Trách nhiệm và giới hạn
                  </h2>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2">6.1. Trách nhiệm của Q8 Design</h3>
                      <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Đảm bảo chất lượng thiết kế và thi công theo đúng tiêu chuẩn</li>
                        <li>Hoàn thành công trình đúng thời hạn (trừ trường hợp bất khả kháng)</li>
                        <li>Bảo hành công trình theo quy định trong hợp đồng</li>
                        <li>Bồi thường thiệt hại do lỗi của Q8 Design gây ra</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2">6.2. Trường hợp miễn trừ trách nhiệm</h3>
                      <ul className="list-disc list-inside text-gray-700 space-y-2">
                        <li>Thiên tai, hỏa hoạn, lũ lụt và các sự kiện bất khả kháng khác</li>
                        <li>Thay đổi quy định pháp luật sau khi ký hợp đồng</li>
                        <li>Lỗi do khách hàng cung cấp thông tin sai lệch</li>
                        <li>Thiệt hại do khách hàng không tuân thủ hướng dẫn sử dụng</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Dispute Resolution */}
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Giải quyết tranh chấp</h2>
                  
                  <div className="space-y-4">
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                      <h3 className="text-lg font-bold text-gray-800 mb-2">7.1. Nguyên tắc giải quyết</h3>
                      <p className="text-gray-700">
                        Mọi tranh chấp sẽ được giải quyết thông qua đối thoại, thương lượng trên tinh thần hợp tác, 
                        tôn trọng lẫn nhau. Nếu không thể thỏa thuận, sẽ đưa ra Tòa án có thẩm quyền.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2">7.2. Luật áp dụng</h3>
                      <p className="text-gray-700">
                        Các điều khoản này được điều chỉnh bởi pháp luật Việt Nam. 
                        Tòa án có thẩm quyền là Tòa án nhân dân thành phố Hà Nội.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Thông tin liên hệ</h2>
                  
                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-3">Q8 Design</h3>
                      <div className="space-y-2 text-gray-700">
                        <p><strong>Địa chỉ:</strong> Đ. Nam An Khánh - KĐT Nam An Khánh - Hà Nội</p>
                        <p><strong>Hotline:</strong> <a href="tel:0988116828" className="text-orange-600 hover:text-orange-700">098 811 68 28</a></p>
                        <p><strong>Email:</strong> <a href="mailto:info@q8design.vn" className="text-orange-600 hover:text-orange-700">info@q8design.vn</a></p>
                        <p><strong>Website:</strong> <a href="https://q8design.vn" className="text-orange-600 hover:text-orange-700">q8design.vn</a></p>
                      </div>
                    </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-3">Giờ làm việc</h3>
                        <div className="space-y-1 text-gray-700">
                          <p>Thứ 2 - Thứ 7: 8:00 - 18:00</p>
                          <p>Chủ nhật: 9:00 - 17:00</p>
                          <p className="text-sm text-gray-500 mt-2">
                            Hỗ trợ khách hàng 24/7 qua hotline
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Final Notice */}
                <div className="border-t border-gray-200 pt-8">
                  <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-3">Lưu ý quan trọng</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Các điều khoản này có thể được cập nhật theo thời gian. Chúng tôi sẽ thông báo trước 
                      khi có thay đổi quan trọng. Việc bạn tiếp tục sử dụng dịch vụ sau khi có cập nhật 
                      được coi là đồng ý với các điều khoản mới.
                    </p>
                    <p className="text-gray-700 mt-3">
                      Nếu bạn có bất kỳ câu hỏi nào về các điều khoản này, vui lòng liên hệ với chúng tôi 
                      qua hotline <a href="tel:0988116828" className="text-orange-600 hover:text-orange-700 font-bold">098 811 68 28</a>  
                      hoặc email <a href="mailto:info@q8design.vn" className="text-orange-600 hover:text-orange-700 font-bold"> info@q8design.vn</a>.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </div>
    </DefaultLayout>
  );
}
