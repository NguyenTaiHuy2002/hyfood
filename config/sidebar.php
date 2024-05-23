<?php
return [
    [
        'name' => 'Quản lý sản phẩm',
        'list-check' => ['category', 'producer', 'type', 'attribute', 'keyword', 'product'],
        'icon' => 'fa fa-database',
        'sub' => [
            [
                'name' => 'Danh Mục',
                'namespace' => 'category',
                'route' => 'admin.category.index',
                'icon' => 'fa fa-edit'
            ],
            [
                'name' => 'Sản phẩm',
                'namespace' => 'product',
                'route' => 'admin.product.index',
                'icon' => 'fa fa-database'
            ],
        ]
    ],
    [
        'name' => 'Quản lý bài viết',
        'list-check' => ['menu', 'article'],
        'icon' => 'fa fa-edit',
        'sub' => [
            [
                'name' => 'Danh mục',
                'namespace' => 'menu',
                'route' => 'admin.menu.index',
                'icon' => 'fa fa-key'
            ],
            [
                'name' => 'Bài viết',
                'namespace' => 'article',
                'route' => 'admin.article.index',
                'icon' => 'fa fa-newspaper-o'
            ],
        ]
    ],
    [
        'name' => 'Quản lý tài khoản',
        'list-check' => ['user', 'rating', 'comment', 'contact'],
        'icon' => 'fa fa-user',
        'sub' => [
            [
                'name' => 'Người dùng',
                'route' => 'admin.user.index',
                'namespace' => 'user',
                'icon' => 'fa fa-user'
            ],
            [
                'name' => 'Đánh giá',
                'namespace' => 'rating',
                'route' => 'admin.rating.index',
                'icon' => 'fa fa-star'
            ],
            [
                'name' => 'Bình luận',
                'namespace' => 'comment',
                'route' => 'admin.comment.index',
                'icon' => 'fa fa-comments'
            ],
            [
                'name' => 'Liên hệ',
                'namespace' => 'contact',
                'route' => 'admin.contact',
                'icon' => 'fa fa-phone'
            ],
        ]
    ],
    [
        'name' => 'Quản lý đơn hàng',
        'list-check' => ['transaction'],
        'icon' => 'fa-shopping-cart',
        'sub' => [
            [
                'name' => 'Danh sách',
                'namespace' => 'transaction',
                'route' => 'admin.transaction.index',
                'icon' => 'fa-opencart'
            ]
        ]
    ],
    [
        'name' => 'Quản lý slide',
        'list-check' => ['slide', 'event'],
        'icon' => 'fa fa-star',
        'sub' => [
            [
                'name' => 'Slide',
                'namespace' => 'slide',
                'route' => 'admin.slide.index',
                'icon' => 'fa fa-sliders'
            ],
            [
                'name' => 'Sự kiện',
                'namespace' => 'event',
                'route' => 'admin.event.index',
                'icon' => 'fa fa-calendar-o'
            ]
        ]
    ],
    // [
    //     'name' => 'System',
    //     'label' => 'true'
    // ]
];
