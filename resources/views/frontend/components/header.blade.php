<section class="top-header desktop">
    <div class="container">
        <div class="content">
            <div class="left">
                <a href="{{ route('get.static.customer_care') }}" title="Chăm sóc khách hàng" rel="nofollow">Chăm sóc
                    khách hàng</a>
                <a href="{{ route('get.user.transaction') }}" title="Kiểm tra đơn hàng" rel="nofollow">Kiểm tra đơn
                    hàng</a>
            </div>
            <div class="right">
                @if (Auth::check())
                    <a href="">Xin chào {{ Auth::user()->name }}</a>
                    <a href="{{  route('get.user.dashboard') }}">Quản lý tài khoản</a>
                    <a href="{{  route('get.logout') }}">Đăng xuất </a>
                @else
                    <a href="{{  route('get.register') }}">Đăng ký</a>
                    <a href="{{  route('get.login') }}">Đăng nhập</a>
                @endif
            </div>
        </div>
    </div>
</section>
<section class="top-header mobile">
    <div class="container">
        <div class="content">
            <div class="left">
                <a href="{{ route('get.static.customer_care') }}" title="Chăm sóc khách hàng" rel="nofollow">Chăm sóc
                    khách hàng</a>
                <a href="{{ route('get.user.transaction') }}" title="Kiểm tra đơn hàng" rel="nofollow">Kiểm tra đơn
                    hàng</a>
                @if (Auth::check())
                    <a href="">Xin chào {{ Auth::user()->name }}</a>
                    <a href="{{  route('get.user.dashboard') }}">Quản lý tài khoản</a>
                    <a href="{{  route('get.logout') }}">Đăng xuất </a>
                @else
                    <a href="{{  route('get.register') }}">Đăng ký</a>
                    <a href="{{  route('get.login') }}">Đăng nhập</a>
                @endif
            </div>
        </div>
    </div>
</section>

<div class="commonTop">
    <div id="headers">
        <div class="container header-wrapper">
            <!--Thay đổi-->
            <div class="logo">
                <a href="/" class="desktop">
                    <img src="{{ url('images/logo.png') }}" style="height: 50px;" alt="Home">
                </a>
            </div>
            <ul class="menu-list">

                <li class="menu-item">
                    <a class="menu-item-link" href="{{ route('get.home') }}">Trang chủ</a>
                </li>
                <li class="menu-item">
                    <a class="menu-item-link" href="{{ route('get.product.list') }}">Sản phẩm</a>
                </li>
                <li class="menu-item transition-wrapper">
                    <a class="menu-item-link" href="{{ route('get.blog.home') }}">Bài viết</a>
                    <ul class="sub-menu has-transition transition--scale-opacity-0 transition--scale-opacity-1">
                        @foreach($menus as $menu)
                            <li class="sub-menu-item ">
                                <a class="sub-menu-link" title="{{ $menu->mn_name }}"
                                    href="{{ route('get.article.by_menu', $menu->mn_slug . '-' . $menu->id) }}">
                                    {{ $menu->mn_name }}
                                </a>
                            </li>
                        @endforeach
                    </ul>
                </li>
                <li class="menu-item">
                    <a class="menu-item-link" href="{{ route('get.contact') }}">Liên hệ</a>
                </li>
            </ul>
            <!-- <div class="menu transition-wrapper">
                <i class="menu-icon fa fa-list-ul"></i>
                <div class="menu-container has-transition transition--scale-opacity-0 transition--scale-opacity-1">
                    <ul class="menu-list">
                        <li>
                            <a href="{{ route('get.product.list') }}">Sản phẩm</a>
                        </li>
                        <li>
                            <a href="{{ route('get.blog.home') }}">Bài viết</a>
                        </li>
                        <li>
                            <a href="{{ route('get.contact') }}">Liên hệ</a>
                        </li>
                        <li>
                            <a href="{{ route('get.product.list') }}">Về chúng tôi</a>
                        </li>
                        <p>Sản phẩm theo danh mục</p>
                        @foreach($categories as $item)
                            <li>
                                <a href="{{  route('get.category.list', $item->c_slug . '-' . $item->id) }}"
                                    title="{{  $item->c_name }}" class="js-open-menu">
                                    <img src="{{ asset(pare_url_file($item->c_avatar)) }}" alt="{{ $item->c_name }}">
                                    <span>{{  $item->c_name }}</span>
                                    @if (isset($item->children) && count($item->children))
                                        <span class="fa fa-angle-right"></span>
                                    @else
                                        <span></span>
                                    @endif
                                </a>
                                @if (isset($item->children) && count($item->children))
                                    <div class="submenu">
                                        <div class="group">
                                            <div class="item">
                                                @foreach($item->children as $children)
                                                    <a href="{{  route('get.category.list', $children->c_slug . '-' . $children->id) }}"
                                                        title="{{  $children->c_name }}" class="js-open-menu">
                                                        <span>{{  $children->c_name }}</span>
                                                    </a>
                                                @endforeach
                                            </div>
                                        </div>
                                    </div>
                                @endif
                            </li>
                        @endforeach
                    </ul>
                </div>
            </div> -->
            <div class="search">

                {{-- <form action="{{ $link_search ?? route('get.product.list', ['k' => Request::get('k')]) }}"
                    role="search" method="GET">
                    <input type="text" name="k" value="{{ Request::get('k') }}" class="form-control"
                        placeholder="Tìm kiếm sản phẩm ...">
                    <button type="submit" class="btnSearch">
                        <i class="fa fa-search"></i>
                        <span>Tìm kiếm</span>
                    </button>
                </form> --}}
                <style type="text/css">
                    div#search_ajax {
                        border-radius: 4px;
                        position: absolute;
                        top: 100%;
                        left: -1px;
                        background: azure;
                        z-index: 9999;
                        width: 100%;
                    }
                </style>
                <form autocomplete="off"
                    action="{{ $link_search ?? route('get.product.list', ['k' => Request::get('k')]) }}" role="search"
                    method="GET">

                    <input type="text" name="k" class="form-control" id="keywords" placeholder="Tìm kiếm sản phẩm ...">
                    <div id="search_ajax"></div>
                    <button type="submit" class="btnSearch">
                        <i class="fa fa-search"></i>
                    </button>
                </form>
            </div>
            <ul class="right">
                <li>
                    <a href="{{ route('get.shopping.list') }}" title="Giỏ hàng">
                        <i class="la la-shopping-cart"></i>
                        <span class="text">
                            <span class="">Giỏ hàng ({{ \Cart::count() }})</span>
                            <span></span>
                        </span>
                    </a>
                </li>
                <!-- <li class="desktop">
                    <a href="tel:18006005" title="">
                        <i class="la la-phone"></i>
                        <span class="text">
                            <span class="">Hotline</span>
                            <span>1800.6005</span>
                        </span>
                    </a>
                </li> -->
            </ul>

            <!-- <div id="menu-main" class="container">
                <ul class="menu-list">
                    <li>
                    <a href="{{ route('get.product.list') }}">Toàn bộ sản phẩm</a>
                    </li>
                    <p>Sản phẩm theo danh mục</p>
                    @foreach($categories as $item)
                    <li>
                        <a href="{{  route('get.category.list', $item->c_slug . '-' . $item->id) }}"
                           title="{{  $item->c_name }}" class="js-open-menu">
                            <img src="{{ asset(pare_url_file($item->c_avatar)) }}" alt="{{ $item->c_name }}">
                            <span>{{  $item->c_name }}</span>
                            @if (isset($item->children) && count($item->children))
                                <span class="fa fa-angle-right"></span>
                            @else
                                <span></span>
                            @endif
                        </a>
                        @if (isset($item->children) && count($item->children))
                        <div class="submenu">
                            <div class="group">
                                <div class="item">
                                    @foreach($item->children as $children)
                                        <a href="{{  route('get.category.list', $children->c_slug . '-' . $children->id) }}"
                                           title="{{  $children->c_name }}" class="js-open-menu">
                                            <span>{{  $children->c_name }}</span>
                                        </a>
                                    @endforeach
                                </div>
                            </div>
                        </div>
                        @endif
                    </li>
                    @endforeach
                </ul>
            </div> -->
        </div>

    </div>
</div>