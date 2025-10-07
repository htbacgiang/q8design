export const subscriptionEmailTemplate = (email) => {
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html dir="ltr" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="vi">
 <head>
  <meta charset="UTF-8">
  <meta content="width=device-width, initial-scale=1" name="viewport">
  <meta name="x-apple-disable-message-reformatting">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta content="telephone=no" name="format-detection">
  <title>Đăng ký nhận bản tin thành công</title>
  <style type="text/css">
    .rollover:hover .rollover-first {
      max-height:0px!important;
      display:none!important;
    }
    .rollover:hover .rollover-second {
      max-height:none!important;
      display:block!important;
    }
    .rollover span {
      font-size:0px;
    }
    u + .body img ~ div div {
      display:none;
    }
    #outlook a {
      padding:0;
    }
    span.MsoHyperlink,
    span.MsoHyperlinkFollowed {
      color:inherit;
      mso-style-priority:99;
    }
    a.es-button {
      mso-style-priority:100!important;
      text-decoration:none!important;
    }
    a[x-apple-data-detectors],
    #MessageViewBody a {
      color:inherit!important;
      text-decoration:none!important;
      font-size:inherit!important;
      font-family:inherit!important;
      font-weight:inherit!important;
      line-height:inherit!important;
    }
    .es-desk-hidden {
      display:none;
      float:left;
      overflow:hidden;
      width:0;
      max-height:0;
      line-height:0;
      mso-hide:all;
    }
    @media only screen and (max-width:600px) {
      .es-m-p0r { padding-right:0px!important } 
      .es-m-p0l { padding-left:0px!important } 
      .es-p-default { } 
      *[class="gmail-fix"] { display:none!important } 
      p, a { line-height:150%!important } 
      h1, h1 a { line-height:120%!important } 
      h2, h2 a { line-height:120%!important } 
      h3, h3 a { line-height:120%!important } 
      h4, h4 a { line-height:120%!important } 
      h5, h5 a { line-height:120%!important } 
      h6, h6 a { line-height:120%!important } 
      .es-header-body p { } 
      .es-content-body p { } 
      .es-footer-body p { } 
      .es-infoblock p { } 
      h1 { font-size:36px!important; text-align:left } 
      h2 { font-size:26px!important; text-align:left } 
      h3 { font-size:20px!important; text-align:left } 
      h4 { font-size:24px!important; text-align:left } 
      h5 { font-size:20px!important; text-align:left } 
      h6 { font-size:16px!important; text-align:left } 
      .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:36px!important } 
      .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:26px!important } 
      .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px!important } 
      .es-header-body h4 a, .es-content-body h4 a, .es-footer-body h4 a { font-size:24px!important } 
      .es-header-body h5 a, .es-content-body h5 a, .es-footer-body h5 a { font-size:20px!important } 
      .es-header-body h6 a, .es-content-body h6 a, .es-footer-body h6 a { font-size:16px!important } 
      .es-menu td a { font-size:12px!important } 
      .es-header-body p, .es-header-body a { font-size:14px!important } 
      .es-content-body p, .es-content-body a { font-size:16px!important } 
      .es-footer-body p, .es-footer-body a { font-size:14px!important } 
      .es-infoblock p, .es-infoblock a { font-size:12px!important } 
      .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3, .es-m-txt-c h4, .es-m-txt-c h5, .es-m-txt-c h6 { text-align:center!important } 
      .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3, .es-m-txt-r h4, .es-m-txt-r h5, .es-m-txt-r h6 { text-align:right!important } 
      .es-m-txt-j, .es-m-txt-j h1, .es-m-txt-j h2, .es-m-txt-j h3, .es-m-txt-j h4, .es-m-txt-j h5, .es-m-txt-j h6 { text-align:justify!important } 
      .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3, .es-m-txt-l h4, .es-m-txt-l h5, .es-m-txt-l h6 { text-align:left!important } 
      .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } 
      .es-m-txt-r .rollover:hover .rollover-second, .es-m-txt-c .rollover:hover .rollover-second, .es-m-txt-l .rollover:hover .rollover-second { display:inline!important } 
      .es-m-txt-r .rollover span, .es-m-txt-c .rollover span, .es-m-txt-l .rollover span { line-height:0!important; font-size:0!important; display:block } 
      .es-spacer { display:inline-table } 
      a.es-button, button.es-button { font-size:20px!important; padding:10px 20px 10px 20px!important; line-height:120%!important } 
      a.es-button, button.es-button, .es-button-border { display:inline-block!important } 
      .es-m-fw, .es-m-fw.es-fw, .es-m-fw .es-button { display:block!important } 
      .es-m-il, .es-m-il .es-button, .es-social, .es-social td, .es-menu { display:inline-block!important } 
      .es-adaptive table, .es-left, .es-right { width:100%!important } 
      .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } 
      .adapt-img { width:100%!important; height:auto!important } 
      .es-mobile-hidden, .es-hidden { display:none!important } 
      .es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } 
      tr.es-desk-hidden { display:table-row!important } 
      table.es-desk-hidden { display:table!important } 
      td.es-desk-menu-hidden { display:table-cell!important } 
      .es-menu td { width:1%!important } 
      table.es-table-not-adapt, .esd-block-html table { width:auto!important } 
      .h-auto { height:auto!important } 
    }
  </style>
 </head>
 <body class="body" style="width:100%;height:100%;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0">
  <div dir="ltr" class="es-wrapper-color" lang="vi" style="background-color:#FAFAFA">
   <table width="100%" cellspacing="0" cellpadding="0" class="es-wrapper" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#FAFAFA">
     <tr>
      <td valign="top" style="padding:0;Margin:0">
       <table cellpadding="0" cellspacing="0" align="center" class="es-content" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important">
         <tr>
          <td align="center" style="padding:0;Margin:0">
           <table bgcolor="#ffffff" align="center" cellpadding="0" cellspacing="0" class="es-content-body" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
             <tr>
              <td align="left" data-custom-paddings="true" style="Margin:0;padding-top:30px;padding-right:20px;padding-bottom:30px;padding-left:20px">
               <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                 <tr>
                  <td align="center" valign="top" style="padding:0;Margin:0;width:560px">
                   <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr>
                      <td align="center" style="padding:0;Margin:0;padding-top:10px;font-size:0px">
                        <a target="_blank" href="https://ecobacgiang.vn" style="mso-line-height-rule:exactly;text-decoration:underline;color:#5C68E2;font-size:14px">
                          <img src="https://eryolzo.stripocdn.email/content/guids/CABINET_e7929be2b2332ef2f39be0e176f073bc8324ccf620be96ff821a7db88787f528/images/new_logo_ecobacgang_copy.png" alt="Eco Bắc Giang" width="150" class="adapt-img" style="display:block;font-size:14px;border:0;outline:none;text-decoration:none">
                        </a>
                      </td>
                     </tr>
                     <tr>
                      <td align="center" class="es-m-p0r es-m-p0l" style="Margin:0;padding-top:20px;padding-right:40px;padding-bottom:20px;padding-left:40px">
                        <h2 style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:28px;letter-spacing:0;color:#333333;font-size:24px;font-weight:bold">
                          🎉 Đăng ký nhận bản tin thành công!
                        </h2>
                      </td>
                     </tr>
                     <tr>
                      <td align="center" class="es-m-p0r es-m-p0l" style="Margin:0;padding-top:5px;padding-right:40px;padding-bottom:20px;padding-left:40px">
                        <p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">
                          <strong>Xin chào!</strong>
                        </p>
                        <p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">
                          Cảm ơn bạn đã đăng ký nhận bản tin từ <strong>Q8 Design</strong>! Chúng tôi rất vui mừng được chào đón bạn vào cộng đồng những người yêu thích thiết kế nội thất và kiến trúc.
                        </p>
                      </td>
                     </tr>
                     <tr>
                      <td align="center" class="es-m-p0r es-m-p0l" style="Margin:0;padding-top:5px;padding-right:40px;padding-bottom:20px;padding-left:40px">
                        <p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">
                          <strong>Những gì bạn sẽ nhận được:</strong>
                        </p>
                        <ul style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px;text-align:left">
                          <li>🏠 Kiến thức về thiết kế nội thất và kiến trúc</li>
                          <li>🎨 Xu hướng thiết kế mới nhất và phong cách trang trí</li>
                          <li>💰 Ưu đãi độc quyền và khuyến mãi đặc biệt</li>
                          <li>📰 Tin tức mới nhất về dự án và dịch vụ</li>
                          <li>💡 Mẹo thiết kế nội thất và trang trí nhà</li>
                        </ul>
                      </td>
                     </tr>
                     <tr>
                      <td align="center" style="padding:0;Margin:0;padding-top:20px;padding-bottom:20px">
                        <span class="es-button-border" style="border-style:solid;border-color:#f97316;background:#ea580c;border-width:0px;display:inline-block;border-radius:6px;width:auto">
                          <a href="https://q8design.vn" target="_blank" class="es-button" style="mso-style-priority:100 !important;text-decoration:none !important;mso-line-height-rule:exactly;color:#FFFFFF;font-size:18px;padding:10px 30px 10px 30px;display:inline-block;background:#ea580c;border-radius:6px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:normal;font-style:normal;line-height:21.6px;width:auto;text-align:center;letter-spacing:0;mso-padding-alt:0;mso-border-alt:10px solid #ea580c;padding-left:30px;padding-right:30px">
                            KHÁM PHÁ NGAY
                          </a>
                        </span>
                      </td>
                     </tr>
                     <tr>
                      <td align="center" class="es-m-p0r es-m-p0l" style="Margin:0;padding-top:5px;padding-right:40px;padding-bottom:20px;padding-left:40px">
                        <p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">
                          <strong>Lưu ý:</strong> Bạn có thể hủy đăng ký bất cứ lúc nào bằng cách nhấp vào liên kết "Hủy đăng ký" ở cuối email này.
                        </p>
                        <p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">
                          Nếu có bất kỳ thắc mắc nào, vui lòng liên hệ với chúng tôi qua:
                        </p>
                        <p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">
                          📧 Email: <a href="mailto:lienhe@ecobacgiang.vn" style="mso-line-height-rule:exactly;text-decoration:underline;color:#5C68E2;font-size:14px">lienhe@ecobacgiang.vn</a>
                        </p>
                        <p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">
                          📞 Hotline: <a href="tel:0866572271" style="mso-line-height-rule:exactly;text-decoration:underline;color:#5C68E2;font-size:14px">0866.572.271</a>
                        </p>
                      </td>
                     </tr>
                     <tr>
                      <td align="center" class="es-m-p0r es-m-p0l" style="Margin:0;padding-top:20px;padding-right:40px;padding-bottom:5px;padding-left:40px">
                        <p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">
                          Trân trọng,<br>
                          <strong>Đội ngũ <a target="_blank" href="https://ecobacgiang.vn" style="mso-line-height-rule:exactly;text-decoration:underline;color:#5C68E2;font-size:14px">Eco Bắc Giang</a></strong>
                        </p>
                      </td>
                     </tr>
                   </table>
                  </td>
                 </tr>
               </table>
              </td>
             </tr>
           </table>
          </td>
         </tr>
       </table>
       <table cellpadding="0" cellspacing="0" align="center" class="es-content" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important">
         <tr>
          <td align="center" class="es-info-area" style="padding:0;Margin:0">
           <table align="center" cellpadding="0" cellspacing="0" bgcolor="#00000000" class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" role="none">
             <tr>
              <td align="left" data-custom-paddings="true" style="padding:20px;Margin:0">
               <table cellpadding="0" cellspacing="0" width="100%" role="none" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                 <tr>
                  <td align="center" valign="top" style="padding:0;Margin:0;width:560px">
                   <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr>
                      <td align="center" class="es-infoblock" style="padding:0;Margin:0">
                        <p style="Margin:0;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:18px;letter-spacing:0;color:#CCCCCC;font-size:12px">
                          Không muốn nhận email này nữa? <a href="https://q8design.vn/unsubscribe?email=${encodeURIComponent(email)}" target="_blank" style="mso-line-height-rule:exactly;text-decoration:underline;color:#CCCCCC;font-size:12px">Hủy đăng ký</a>.
                        </p>
                      </td>
                     </tr>
                   </table>
                  </td>
                 </tr>
               </table>
              </td>
             </tr>
           </table>
          </td>
         </tr>
       </table>
      </td>
     </tr>
   </table>
  </div>
 </body>
</html>`;
};
