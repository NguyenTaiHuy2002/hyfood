<style type="text/css">
    .item__content .active a {
        color: red;
    }
</style>
<div class="filter-sidebar">
@if (isset($category) && !empty($category))
        <div class="item">
            <div class="item__title">Danh mục</div>
            <div class="item__content">
                <ul>
                    @foreach($category as $key => $item)
                        <li class="{{ Request::get('category') == $item['id'] ? "active" : "" }} js-param-search" data-param="category={{ $item['id'] }}">
                            <a href="{{ request()->fullUrlWithQuery(['category' => $item['id']]) }}">
                                <span>{{ $item['c_name'] }}</span>
                            </a>
                        </li>
                    @endforeach
                </ul>
            </div>
        </div>
    @endif
<!-- @if (isset($categories) && !empty($categories))
        <div class="item">
            <div class="item__title">Xuất xứ</div>
            <div class="item__content">
                <ul>
                    @foreach($categories as $key => $item)
                        <li class="{{ Request::get('category') == $item['id'] ? "active" : "" }} js-param-search" data-param="c_name={{ $item['id'] }}">
                        <a href="{{  route('get.category.list', $item->c_slug . '-' . $item->id) }}"
                           title="{{  $item->c_name }}" class="js-open-menu">
                            <span>{{  $item->c_name }}</span>
                        </a>
                        </li>
                    @endforeach
                </ul>
            </div>
        </div>
    @endif

<script>
    // Sử dụng JavaScript thuần
    var items = document.getElementsByClassName("item-choose");

    for (var i = 0; i < items.length; i++) {
        items[i].addEventListener("click", function() {
            // Xóa lớp "active" của tất cả các phần tử
            for (var j = 0; j < items.length; j++) {
                items[j].classList.remove("active");
            }

            // Thêm lớp "active" cho phần tử được nhấp vào
            this.classList.add("active");
        });
    } -->
</script>
    <div class="item">
        <div class="item__title">Đánh giá</div>
        <div class="item__content ratings">
            <ul>
                @for ($i = 5; $i > 0; $i--)
                    <li class="{{ Request::get('rv') == $i ? "active" : "" }}">
                        <a href="{{ request()->fullUrlWithQuery(['rv' => $i]) }}">
                            <span>
                                @for($j = 1; $j <= 5; $j++)
                                    <i class="la la-star {{ $j <= $i ? 'active' : '' }}"></i>
                                @endfor
                                {{ $i < 5 ? 'Trở lên' : '' }}
                            </span>
                        </a>
                    </li>
                @endfor
            </ul>
        </div>
    </div>
</div>
