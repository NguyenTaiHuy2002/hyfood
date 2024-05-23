@extends('layouts.app_master_frontend')
@section('content')
    <div class="container">
        <div class="breadcrumb">
            <ul>
                <li itemscope="" >
                    <a itemprop="url" href="/" title="Home"><span itemprop="title">Trang chủ</span></a>
                </li>
                <li itemscope="">
                    <a itemprop="url" href="#" title="Đăng nhập"><span itemprop="title">Đăng nhập</span></a>
                </li>

            </ul>
        </div>
        <div class="auth" style="background: white;">
            <image src="../images/banner-login.jpg" alt="banner login" class="auth-banner">

            <form class="auth-form" action="" method="post" style="">
                <h2 class="auth-lable">Đăng nhập</h2>
                @csrf
                <div class="form-group">
                    <label for="name">Email <span class="cRed">(*)</span></label>
                    <input name="email" id="name" type="email" class="form-control" placeholder="nguyenvana@gmail.com">
                    @if ($errors->first('email'))
                        <span class="text-danger">{{ $errors->first('email') }}</span>
                    @endif
                </div>
                <div class="form-group">
                    <label for="phone">Mật khẩu <span class="cRed">(*)</span></label>
                    <input name="password" id="phone" type="password" placeholder="********" class="form-control">
                    @if ($errors->first('password'))
                        <span class="text-danger">{{ $errors->first('password') }}</span>
                    @endif
                </div>
                <div class="form-group form-group-btn">
                    <button class="btn btn-purple">Đăng nhập</button>
                    {{--<a href="{{ route('get.login.social', ['social' => 'google']) }}">Google</a><br>--}}
                    <a class="btn-forgot-pw" href="{{ route('get.email_reset_password') }}">Quên mật khẩu</a>
                    <!-- <a class="btn btn-danger btn-sm" href="{{ url('auth/google') }}">Đăng nhập google</a>
                    <a class="btn btn-primary btn-sm" href="{{ url('auth/facebook') }}">Đăng nhập facebook</a> -->
                </div>
            </form>
        </div>
    </div>
@endsection
@section('script')
    <script type="text/javascript">
        <?php $js = file_get_contents('js/home.js');
echo $js;?>
    </script>
@stop