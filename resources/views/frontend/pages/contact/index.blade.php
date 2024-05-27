@extends('layouts.app_master_frontend')
@section('content')
<div class="container">
    <div class="breadcrumb">
        <ul>
            <li itemscope="">
                <a itemprop="url" href="/" title="Home"><span itemprop="title">Trang chủ</span></a>
            </li>
            <li itemscope="">
                <a itemprop="url" href="#" title="Liên hệ"><span itemprop="title">Liên hệ</span></a>
            </li>
        </ul>
    </div>
    <div class="auth contact" style="background: white;">
        <div class="contact-map">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.463138850393!2d105.73595410987416!3d21.05415668682677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454f82b42512f%3A0x4d6219f97f6f17ef!2zTmdoLiAxMzIvODIgxJAuQ-G6p3UgRGnhu4VuLCBOZ3V5w6puIFjDoSwgTWluaCBLaGFpLCBC4bqvYyBU4burIExpw6ptLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1715504661994!5m2!1svi!2s"
                width="600" height="500" style="border:0; box-shadow: 0 2px 7px #ccc" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <form class="from_cart_register" action="" method="post" style="width: 500px;margin:0 auto;">

            <h2 class="contact-header">Viết nhận xét</h2>
            <span class="contact-header-sub">Nếu bạn có thắc mắc gì, có thể gửi yêu cầu cho chúng tôi, và chúng tôi sẽ
                liên lạc lại với bạn sớm nhất có thể </span>
            @csrf
            <div class="form-group">
                <label for="phone">Tiêu đề <span class="cRed">(*)</span></label>
                <input name="c_title" id="phone" required type="text" placeholder="" class="form-control">
            </div>
            <div class="form-group">
                <label for="name">Email <span class="cRed">(*)</span></label>
                <input name="c_email" id="name" required type="email" class="form-control" placeholder="">
            </div>
            <div class="form-group">
                <label for="phone">Điện thoại <span class="cRed">(*)</span></label>
                <input name="c_phone" id="phone" required type="number" placeholder="" class="form-control">
            </div>
            <div class="form-group">
                <label for="phone">Nội dung <span class="cRed">(*)</span></label>
                <textarea name="c_content" required class="form-control" id="" cols="30" rows="10"></textarea>
            </div>
            <div class="form-group " style="text-align: center">
                <button class="btn btn-purple">Gửi thông tin</button>
            </div>
        </form>
    </div>
</div>
@endsection
<script type="text/javascript">
    <?php $js = file_get_contents('js/home.js');
echo $js;?>
    </script>