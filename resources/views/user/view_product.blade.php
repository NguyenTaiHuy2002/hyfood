@extends('layouts.app_master_user')
@section('content')
<section>
    <div class="group" id="user-product-view">
        <div class="spinner">
            <div class="rect1"></div>
            <div class="rect2"></div>
            <div class="rect3"></div>
            <div class="rect4"></div>
            <div class="rect5"></div>
        </div>
    </div>
    </section>
@stop
@section('script')
    <script>
		var LOADPRODUCTVIEW = '{{ route('ajax_get.product_view') }}'
    </script>
    <script type="text/javascript">
		<?php $js = file_get_contents('js/product_search.js');
echo $js;?>
    </script>
@stop
