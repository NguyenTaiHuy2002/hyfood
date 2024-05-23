<div id="footer">
    <div class="container footer">
        <div class="footer__left">
            <div class="top">
                <div class="item">
                    <div class="title">Về chúng tôi</div>
                    <ul>
                        <li>
                            <a href="{{ route('get.product.list') }}">Sản phẩm</a>
                        </li>
                        <li>
                            <a href="{{ route('get.register') }}">Đăng ký</a>
                        </li>
                        <li>
                            <a href="{{ route('get.login') }}">Đăng nhập</a>
                        </li>

                        <li>
                            <a href="{{ route('get.contact') }}">Liên hệ</a>
                        </li>
                    </ul>
                </div>
                <div class="item">
                    <div class="title">Tin tức</div>
                    <ul>
                        @if (isset($menus))
                            @foreach($menus as $menu)
                                <li>
                                    <a title="{{ $menu->mn_name }}"
                                        href="{{ route('get.article.by_menu', $menu->mn_slug . '-' . $menu->id) }}">
                                        {{ $menu->mn_name }}
                                    </a>
                                </li>
                            @endforeach
                        @endif
                    </ul>
                </div>
                <div class="item">
                    <div class="title">Chăm sóc khách hàng</div>
                    <ul>
                        <li><a href="{{ route('get.static.shopping_guide') }}">Hướng dẫn mua hàng</a></li>
                        <li><a href="{{  route('get.static.return_policy') }}">Chính sách đổi trả</a></li>
                    </ul>
                </div>
            </div>
            <!-- <div class="bot">
                <div class="social">
                    <div class="title">KẾT NỐI VỚI CHÚNG TÔI</div>
                    <p>
                        <a href="" class="fa fa fa-youtube"></a>
                        <a href="" class="fa fa-facebook-official"></a>
                        <a href="" class="fa fa-twitter"></a>
                    </p>
                </div>
            </div> -->
        </div>
        <div class="footer__mid">
            <div class="title">Thanh toán</div>
            <div class="footer-pay">
                <ul class="footer-list footer-list__pay">
                    <li class="footer-item">
                        <img class="footer-item__pay--img" src="../images/visa.png" alt="">
                    </li>

                    <li class="footer-item">
                        <img class="footer-item__pay--img" src="../images/master.png" alt="">
                    </li>

                    <li class="footer-item">
                        <img class="footer-item__pay--img" src="../images/jcb.png" alt="">
                    </li>

                    <li class="footer-item">
                        <img class="footer-item__pay--img" src="../images/tragop.png" alt="">
                    </li>

                    <li class="footer-item">
                        <img class="footer-item__pay--img" src="../images/spay.png" alt="">
                    </li>
                    <li class="footer-item">
                        <img class="footer-item__pay--img" src="../images/spaylate.png" alt="">
                    </li>
                </ul>
            </div>
        </div>
        <div class="footer__right">
            <!-- <div class="title">Theo dõi chúng tôi trên</div> -->
            <!-- <div class="footer-socials">
                <a href=""><i class="fa fa fa-youtube"></i>Youtube</a>
                <a href=""><i class="fa fa-facebook-official"></i>Facebook</a>
                <a href=""><i class="fa fa-twitter"></i>Twitter</a>
            </div> -->
            <div class="social">
                <div class="title">KẾT NỐI VỚI CHÚNG TÔI</div>
                <p>
                    <a href="" class="fa fa fa-youtube"></a>
                    <a href="" class="fa fa-facebook-official"></a>
                    <a href="" class="fa fa-twitter"></a>
                </p>
            </div>
        </div>

    </div>
    <div class="footer-bottom">
        <p>
            <i class="fa fa-copyright"></i>
            2024 Bản quyền thuộc về cá nhân Nguyễn Tài Huy
        </p>
    </div>
</div>
{{-- <div id="fb-root"></div>
<script async defer crossorigin="anonymous"
    src="https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v6.0&appId=3205159929509308&autoLogAppEvents=1"></script>
--}}