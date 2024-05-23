<div class="top">
    <h2 class="main-title">Sản phẩm vừa xem</h2>
</div>
<div class="bot">
    @if (isset($products))
        @foreach($products as $product)
            <div class="item">
                @include('frontend.components.product_item', ['product' => $product])
            </div>
        @endforeach
    @endif
</div>
