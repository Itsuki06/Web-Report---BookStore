class SpecialHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header class="header">
            <div class="container">
            <div class="row">
                <div class="col-12">
                <div class="inner-main">
                    <div class="col-3 logo">
                    <a href="#">
                        <img src="./asstets/images/logogroup9.png" alt="logo">
                    </a>
                    </div>
                    <div class="col-3  search">
                    <input type="text" class="searchinput" autocomplete="off" placeholder="Bạn tìm sách gì?">
                    <button type="submit" class="icon-search searchbutton" aria-label="search"></button>
                    </div>
                    <div class="col  hotline">
                    <a href="#">
                        <img src="./asstets/images/call.png " alt="anh">
                    </a>
                    </div>
                    <div class="col log-in">
                    <a href="#">
                        <img src="./asstets/images/user-interface.png" alt="anh">
                        <span class="login-p">Dang Nhap</span>
                    </a>
                    </div>
                    <div class="col shopping">
                    <a href="#">
                        <img src="./asstets/images/shopping-cart.png" alt="">
                        <span class="shopping-p">Dat Hang</p>
                    </a>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </header>
        <!--END HEADER-->
        <!-- MENU -->
        <div class="menu">
            <div class="container">
            <div class="row">
                <div class="col-12">
                <div class="inner-main">
                    <div class="menu1">
                    <a href="#" >
                        <img src="./asstets/images/menu (3).png" alt="menu">
                        <p class="menu1-1">TẤT CẢ DANH MỤC</p>
                    </a>
                    
                    <ul class="submenu">
                        <li class="menu-doc"><a href="">Sách Kinh Tế - Kỹ Năng</a>
                        <ul class="submenu">
                            <li><h6>SÁCH KINH TẾ - KỸ NĂNG</h6></li>
                            <li><a href="#">Kinh Tế-Chính Trị</a></li>
                            <li><a href="#">Nhân Vật-Bài Học Kinh Doanh</a></li>
                            <li><a href="#">Khởi Nghiệp</a> </li>
                            <li><a href="#">Quản Trị - Lãnh Đạo</a></li>
                            <li><a href="#">Tài Chính, Kế Toán</a> </li>
                        </ul>
                        </li>
                        <li class="menu-doc"><a href="">Sách Nghệ Thuật Sống -Tâm Lý</a>
                        <ul class="submenu">
                            <li><h6>SÁCH NGHỆ THUẬT SỐNG - TÂM LÝ</h6></li>
                            <li><a href="#">Nghệ Thuật Sống</a></li>
                            <li><a href="#">Tâm Lý</a></li>
                            <li><a href="#">Tư Duy</a> </li>
                            <li><a href="#">Hướng nghiệp</a></li>
                        </ul>
                        </li>
                        <li class="menu-doc"><a href="">Sách Văn Học Việt Nam</a>
                        <ul class="submenu">
                            <li><h6>SÁCH VĂN HỌC VIỆT NAM</h6></li>
                            <li><a href="#">Truyện Ngắn</a></li>
                            <li><a href="#">Tản Văn</a></li>
                            <li><a href="#">Tiểu Thuyết</a> </li>
                            <li><a href="#">Tiểu Thuyết Lịch Sử</a></li>
                            <li><a href="#">Tiểu Sử - Hồi Ký</a> </li>
                        </ul>
                        </li>
                        <li class="menu-doc"><a href="">Sách Văn Học Nước Ngoài</a>
                        <ul class="submenu">
                            <li><h6>SÁCH VĂN HỌC NƯỚC NGOÀI</h6></li>
                            <li><a href="#">Văn Học Hiện Đại</a></li>
                            <li><a href="#">Văn Học Kinh Điển</a></li>
                            <li><a href="#">Tiểu Thuyết Nước Ngoài</a> </li>
                            <li><a href="#">Giả Tưởng - Kinh Dị</a></li>
                            <li><a href="#">Truyện trinh thám</a> </li>
                        </ul>
                        </li>
                        <li class="menu-doc"><a href="">Sách Thiếu Nhi</a>
                        <ul class="submenu">
                            <li><h6>SÁCH THIẾU NHI</h6></li>
                            <li><a href="#">Mẫu Giáo</a></li>
                            <li><a href="#">Nhi Đồng</a></li>
                            <li><a href="#">Thiếu Niên</a> </li>
                            <li><a href="#">Văn Học Thiếu Nhi</a></li>
                            <li><a href="#">Kiến Thức - Bách Khoa</a> </li>
                        </ul>
                        </li>
                        <li class="menu-doc"><a href="">Sách Giáo Dục - Gia Đình</a>
                        <ul class="submenu">
                            <li><h6>SÁCH GIÁO DỤC - GIA ĐÌNH</h6></li>
                            <li><a href="#">Giáo Dục</a></li>
                            <li><a href="#">Giới Tính</a></li>
                            <li><a href="#">Thai Giáo</a> </li>
                            <li><a href="#">Làm Cha Mẹ</a></li>
                            <li><a href="#">Dinh Dưỡng - Chăm Sóc Trẻ</a> </li>
                        </ul>
                        </li>
                        <li class="menu-doc"><a href="">Sách Lịch Sử</a>
                        <ul class="submenu">
                            <li><h6>SÁCH LỊCH SỬ</h6></li>
                            <li><a href="#">Lịch Sử Việt Nam</a></li>
                            <li><a href="#">Lịch Sử Thế Giới</a></li>
                        </ul>
                        </li>
                        <li class="menu-doc"><a href="">Sách Văn Hóa - Nghệ Thuật</a>
                        <ul class="submenu">
                            <li><h6>SÁCH VĂN HÓA - NGHỆ THUẬT</h6></li>
                            <li><a href="#">Văn Hóa</a></li>
                            <li><a href="#">Nghệ Thuật</a></li>
                            <li><a href="#">Phong tục - Tập quán</a> </li>
                            <li><a href="#">Kiến Trúc</a></li>
                            <li><a href="#">Phong Thủy - Chiêm Tinh</a> </li>
                        </ul>
                        </li>
                        <li class="menu-doc"><a href="">Sách Khoa Học - Triết Học</a>
                        <ul class="submenu">
                            <li><h6>SÁCH KHOA HỌC - TRIẾT HỌC</h6></li>
                            <li><a href="#">Triết Học Phương Tây</a></li>
                            <li><a href="#">Minh Triết Phương Đông</a></li>
                            <li><a href="#">Khoa Học - Công Nghệ</a> </li>
                        </ul>
                        </li>
                        <li class="menu-doc"><a href="">Sách Tâm Linh - Tôn Giáo</a>
                        <ul class="submenu">
                            <li><h6>SÁCH TÂM LINH - TÔN GIÁO</h6></li>
                            <li><a href="#">Tâm Linh</a></li>
                            <li><a href="#">Tôn Giáo</a></li>
                        </ul>
                        </li>
                        <li class="menu-doc"><a href="">Sách Y Học - Thực Dưỡng</a>
                        <ul class="submenu">
                            <li><h6>SÁCH Y HỌC - THỰC DƯỠNG</h6></li>
                            <li><a href="#">Chăm Sóc Sức Khỏe</a></li>
                            <li><a href="#">Thực Dưỡng</a></li>
                            <li><a href="#">Y Học</a> </li>
                            <li><a href="#">Đông Y - Cổ Truyền</a></li>
                            <li><a href="#">Thiền - Yoga</a> </li>
                        </ul>
                        </li>
                    </ul> 

                    </div>
                    <div class="menu2">
                    <a href="#" class="menu2-1" id="menu-2-1"> HỖ TRỢ KHÁCH HÀNG </a>
                    <div class="menu-2-2" onmouseover="moveOver('btn1')" onmouseout="moveOut('btn1')">
                        <a href="#">HƯỚNG DẪN ĐẶT HÀNG</a>
                        <a href="#">PHƯƠNG THỨC THANH TOÁN</a>
                        <a href="#">PHƯƠNG THỨC VẬN CHUYỂN</a>
                        <a href="#">CHÍNH SÁCH ĐỔI TRẢ</a>
                        <a href="#">CHÍNH SÁCH BẢO MẬT</a>
                        <a href="#">ĐIỀU KIỆN ĐỔI TRẢ</a>
                    </div>
                    </div>
                    <div class="menu3">
                    <a href="#" class="menu3-1">TIN SÁCH
                    </a>
                    </div>
                    <div class="menu4">
                    <a href="#" class="menu4-1">TỦ SÁCH
                    </a>
                    </div>
                    <div class="menu5">
                    <a href="#" class="menu5-1">KIẾN THỨC
                    </a>
                    </div>
                    <div class="menu6">
                    <a href="#" class="menu6-1" id="menu-6-1"> SẢN PHẨM KHÁC </a>
                    <div class="menu-6-2" onmouseover="moveOver('btn2')" onmouseout="moveOut('btn2')">
                        <a href="#">BÚT CHÌ MÀU-BÚT LÔNG MÀU-SÁP MÀU</a>
                        <a href="#">LƯU NIỆM-QUÀ TẶNG</a>
                    </div>
                    </div>
                    <div class="menu7">
                    <a href="#" class="menu7-1" id="menu-7-1"> VỀ GROUP9 </a>
                    <div class="menu-7-2" onmouseover="moveOver('btn3')" onmouseout="moveOut('btn3')">
                        <a href="#">GIỚI THIỆU</a>
                        <a href="#">TUYỂN DỤNG</a>
                    </div>
                    </div>
                    <div class=" menu8">
                    <a href="#">
                        <span class="menu8-2">SÁCH MỚI TUYỂN CHỌN </span>
                    </a>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div> 
        
        `
    }
}
class SpecialFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
            <div class="footer-1">
            <div class="container">
                <div class="row">
                <div class="col-12">
                    <div class="footer-container-1">
                    <ul class="product-footer">
                        <li class="col-3 footer-item-1">
                        <div class="img-footer">
                            <img src="./asstets/images/book-bookmark-regular-24.png">
                        </div>
                        <span class="title-footer">
                            <span>HƠN 21.000 TỰA SÁCH HAY</span>
                            <span>Tuyển chọn bởi Group9.vn </span>
                        </span>
                        </li>
                        <li class="col-3 footer-item-1">
                        <div class="img-footer">
                            <img src="./asstets/images/car-regular-24.png">
                        </div>
                        <span class="title-footer">
                            <span>MIỄN PHÍ GIAO HÀNG</span>
                            <span>Từ 150k ở HN, từ 300k ở nơi khác</span>
                        </span>
                        </li>
                        <li class="col-3 footer-item-1">
                        <div class="img-footer">
                            <img src="./asstets/images/gift-regular-24.png">
                        </div>
                        <span class="title-footer">
                            <span>QUÀ TẶNG MIỄN PHÍ</span>
                            <span>Tặng bookmark, bao sách miễn phí </span>
                        </span>
                        </li>
                        <li class="col-3 footer-item-1">
                        <div class="img-footer">
                            <img src="./asstets/images/return-box.png">
                        </div>
                        <span class="title-footer">
                            <span>ĐỔI TRẢ NHANH CHÓNG</span>
                            <span>Hàng bị lỗi được đổi trả nhanh chóng </span>
                        </span>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div class="footer-2">
            <div class="container">
                <div class="row">
                <div class="col-12">
                    <div class="footer-container-2">
                    <ul class="product-footer-2">
                        <li class="col-4 footer-item-2">
                        <h6>NHÀ SÁCH ONLINE</h6>
                        <p>(Hoạt động từ 8h-17h,thứ 2 - thứ 7)</p>
                        <span class="fitem-1-1">
                            <img src="./asstets/images/call-1.png">
                            <span>Gọi đặt hàng:
                            <a href="#">012345678</a>
                            </span>
                        </span>
                        <span class="fitem-1-1">
                            <img src="./asstets/images/mail.png">
                            <a href="#">
                            <span class="fitem-1-2">Email:hotro@group9.vn</span>
                            </a>
                        </span>
                        <span class="fitem-1-1">
                            <img src="./asstets/images/place-localizer.png">
                            <span>Số 11 Phường Minh Khai,Q.Bắc Từ Liem,TP.HN</span>
                        </span>
                        </li>
                        <li class="col footer-item-2">
                        <h6>HỠ TRỢ KHÁCH HÀNG</h6>
                        <a href="#">Hưỡng dẫn đặt hàng</a>
                        <a href="#">Phương thức thanh toán</a>
                        <a href="#">Phương thức vận chuyển</a>
                        <a href="#">Chính sách đổi trả</a>
                        <a href="#">Chính sách bảo mật</a>
                        <a href="#">Điều kiện đổi trả</a>
                        </li>
                        <li class="col footer-item-2">
                        <h6>VỀ GROUP9</h6>
                        <p>Giới thiệu Group9</p>
                        <p>Tuyển dụng</p>
                        <h6>SẢN PHẦM KHÁC</h6>
                        <p>Bút chì màu-Bút lông màu-Sáp màu</p>
                        <p>Lưu niệm-Quà tặng</p>
                        </li>
                        <li class="col footer-item-2">
                        <h6>KẾT NỐI VỚI GROUP9</h6>
                        <span class="fitem-1-1">
                            <a href="#">
                            <img src="./asstets/images/facebook-app-symbol.png">
                            <span class="fitem-1-2">6000 lượt theo dõi </span>
                        </a>
                        </span>
                        <span class="fitem-1-1">
                            <a href="#">
                            <img src="./asstets/images/instagram.png">
                            <span class="fitem-1-2">7000 lượt theo dõi</span>
                        </a>
                        </span>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div class="footer-3">
            <div class="container">
                <div class="row">
                <div class="col-12">
                    <div class="content-footer-3">
                    <span>© 2019 - Bản quyền của Công ty TNHH Group9 Việt Nam – www.group9.vn</span>
                    <span>Giấy chứng nhận Đăng ký Kinh doanh số 0315442805 do Sở Kế hoạch và Đầu tư Thành phố Hà Nội cấp ngày 19/12/2018</span>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </footer>
        `
    }
}
customElements.define('special-header', SpecialHeader)
customElements.define('special-footer', SpecialFooter)