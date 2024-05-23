<div id="slider">
    <div class="imageSlide js-banner owl-carousel">
        @foreach($slides as $item)
            <div>
                <a href="{{ $item->sd_link }}" title="{{ $item->sd_title }}">
                    <img alt="image-home-banner" src="{{ pare_url_file($item->sd_image) }}"  style="max-width: 100%" class="" />
                </a>
            </div>
        @endforeach
    </div>
</div>
