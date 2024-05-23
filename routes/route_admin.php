<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\AdminStatisticalController;
use App\Http\Controllers\Admin\AdminContactController;
use App\Http\Controllers\Admin\AdminProfileController;
use App\Http\Controllers\Admin\AdminCategoryController;
use App\Http\Controllers\Admin\AdminUserController;
use App\Http\Controllers\Admin\AdminTransactionController;
use App\Http\Controllers\Admin\AdminProductController;
use App\Http\Controllers\Admin\AdminRatingController;
use App\Http\Controllers\Admin\AdminMenuController;
use App\Http\Controllers\Admin\AdminCommentController;
use App\Http\Controllers\Admin\AdminArticleController;
use App\Http\Controllers\Admin\AdminEventController;
use App\Http\Controllers\Admin\AdminSlideController;
use App\Http\Controllers\Admin\DiscountCodeController;
use App\Http\Controllers\Admin\AdminStaticController;
use App\Http\Controllers\Admin\AdminKeywordController;
use App\Http\Controllers\Admin\AdminAttributeController;
use App\Http\Controllers\Admin\AdminProducerController;
use App\Http\Controllers\Admin\AdminTypeController;

Route::group(['prefix' => 'laravel-filemanager', 'middleware' => 'check_admin_login'], function () {
    \UniSharp\LaravelFilemanager\Lfm::routes();
});

Route::group(['prefix' => 'api-admin', 'namespace' => 'Admin', 'middleware' => 'check_admin_login'], function () {
    Route::get('', [AdminController::class, 'index'])->name('get.admin.index');


    Route::get('statistical', [AdminStatisticalController::class, 'index'])->name('admin.statistical');
    Route::get('contact', [AdminContactController::class, 'index'])->name('admin.contact');
    Route::get('contact/delete/{id}', [AdminContactController::class, 'delete'])->name('admin.contact.delete');

    Route::get('profile', [AdminProfileController::class, 'index'])->name('admin.profile.index');
    Route::post('profile/{id}', [AdminProfileController::class, 'update'])->name('admin.profile.update');
    /**
     * Route danh mục sản phẩm
     **/
    Route::group(['prefix' => 'category'], function () {
        Route::get('', [AdminCategoryController::class, 'index'])->name('admin.category.index');
        Route::get('create', [AdminCategoryController::class, 'create'])->name('admin.category.create');
        Route::post('create', [AdminCategoryController::class, 'store']);

        Route::get('update/{id}', [AdminCategoryController::class, 'edit'])->name('admin.category.update');
        Route::post('update/{id}', [AdminCategoryController::class, 'update']);

        Route::get('active/{id}', [AdminCategoryController::class, 'active'])->name('admin.category.active');
        Route::get('hot/{id}', [AdminCategoryController::class, 'hot'])->name('admin.category.hot');
        Route::get('delete/{id}', [AdminCategoryController::class, 'delete'])->name('admin.category.delete');

    });

    Route::group(['prefix' => 'keyword'], function () {
        Route::get('', [AdminKeywordController::class, 'index'])->name('admin.keyword.index');
        Route::get('create', [AdminKeywordController::class, 'create'])->name('admin.keyword.create');
        Route::post('create', [AdminKeywordController::class, 'store']);

        Route::get('update/{id}', [AdminKeywordController::class, 'edit'])->name('admin.keyword.update');
        Route::post('update/{id}', [AdminKeywordController::class, 'update']);
        Route::get('hot/{id}', [AdminKeywordController::class, 'hot'])->name('admin.keyword.hot');

        Route::get('delete/{id}', [AdminKeywordController::class, 'delete'])->name('admin.keyword.delete');

    });

    Route::group(['prefix' => 'attribute'], function () {
        Route::get('', [AdminAttributeController::class, 'index'])->name('admin.attribute.index');
        Route::get('create', [AdminAttributeController::class, 'create'])->name('admin.attribute.create');
        Route::post('create', [AdminAttributeController::class, 'store']);

        Route::get('update/{id}', [AdminAttributeController::class, 'edit'])->name('admin.attribute.update');
        Route::post('update/{id}', [AdminAttributeController::class, 'update']);
        Route::get('hot/{id}', [AdminAttributeController::class, 'hot'])->name('admin.attribute.hot');

        Route::get('delete/{id}', [AdminAttributeController::class, 'delete'])->name('admin.attribute.delete');

    });

    Route::group(['prefix' => 'user'], function () {
        Route::get('', [AdminUserController::class, 'index'])->name('admin.user.index');

        Route::get('update/{id}', [AdminUserController::class, 'edit'])->name('admin.user.update');
        Route::post('update/{id}', [AdminUserController::class, 'update']);


        Route::get('delete/{id}', [AdminUserController::class, 'delete'])->name('admin.user.delete');

    });

    Route::group(['prefix' => 'transaction'], function () {
        Route::get('', [AdminTransactionController::class, 'index'])->name('admin.transaction.index');
        Route::get('delete/{id}', [AdminTransactionController::class, 'delete'])->name('admin.transaction.delete');
        Route::get('order-delete/{id}', [AdminTransactionController::class, 'deleteOrderItem'])->name('ajax_admin.transaction.order_item');
        Route::get('view-transaction/{id}', [AdminTransactionController::class, 'getTransactionDetail'])->name('ajax.admin.transaction.detail');
        Route::get('action/{action}/{id}', [AdminTransactionController::class, 'getAction'])->name('admin.action.transaction');
    });


    Route::group(['prefix' => 'product'], function () {
        Route::get('', [AdminProductController::class, 'index'])->name('admin.product.index');
        Route::get('create', [AdminProductController::class, 'create'])->name('admin.product.create');
        Route::post('create', [AdminProductController::class, 'store']);

        Route::get('hot/{id}', [AdminProductController::class, 'hot'])->name('admin.product.hot');
        Route::get('active/{id}', [AdminProductController::class, 'active'])->name('admin.product.active');
        Route::get('update/{id}', [AdminProductController::class, 'edit'])->name('admin.product.update');
        Route::post('update/{id}', [AdminProductController::class, 'update']);

        Route::get('delete/{id}', [AdminProductController::class, 'delete'])->name('admin.product.delete');
        Route::get('delete-image/{id}', [AdminProductController::class, 'deleteImage'])->name('admin.product.delete_image');
    });

    Route::group(['prefix' => 'rating'], function () {
        Route::get('', [AdminRatingController::class, 'index'])->name('admin.rating.index');
        Route::get('delete/{id}', [AdminRatingController::class, 'delete'])->name('admin.rating.delete');
    });

    Route::group(['prefix' => 'menu'], function () {
        Route::get('', [AdminMenuController::class, 'index'])->name('admin.menu.index');
        Route::get('create', [AdminMenuController::class, 'create'])->name('admin.menu.create');
        Route::post('create', [AdminMenuController::class, 'store']);

        Route::get('update/{id}', [AdminMenuController::class, 'edit'])->name('admin.menu.update');
        Route::post('update/{id}', [AdminMenuController::class, 'update']);

        Route::get('active/{id}', [AdminMenuController::class, 'active'])->name('admin.menu.active');
        Route::get('hot/{id}', [AdminMenuController::class, 'hot'])->name('admin.menu.hot');
        Route::get('delete/{id}', [AdminMenuController::class, 'delete'])->name('admin.menu.delete');
    });
    Route::group(['prefix' => 'comment'], function () {
        Route::get('', [AdminCommentController::class, 'index'])->name('admin.comment.index');
        Route::get('delete/{id}', [AdminCommentController::class, 'delete'])->name('admin.comment.delete');
    });

    Route::group(['prefix' => 'article'], function () {
        Route::get('', [AdminArticleController::class, 'index'])->name('admin.article.index');
        Route::get('create', [AdminArticleController::class, 'create'])->name('admin.article.create');
        Route::post('create', [AdminArticleController::class, 'store']);

        Route::get('update/{id}', [AdminArticleController::class, 'edit'])->name('admin.article.update');
        Route::post('update/{id}', [AdminArticleController::class, 'update']);

        Route::get('active/{id}', [AdminArticleController::class, 'active'])->name('admin.article.active');
        Route::get('hot/{id}', [AdminArticleController::class, 'hot'])->name('admin.article.hot');
        Route::get('delete/{id}', [AdminArticleController::class, 'delete'])->name('admin.article.delete');

    });

    Route::group(['prefix' => 'slide'], function () {
        Route::get('', [AdminSlideController::class, 'index'])->name('admin.slide.index');
        Route::get('create', [AdminSlideController::class, 'create'])->name('admin.slide.create');
        Route::post('create', [AdminSlideController::class, 'store']);

        Route::get('update/{id}', [AdminSlideController::class, 'edit'])->name('admin.slide.update');
        Route::post('update/{id}', [AdminSlideController::class, 'update']);

        Route::get('active/{id}', [AdminSlideController::class, 'active'])->name('admin.slide.active');
        Route::get('hot/{id}', [AdminSlideController::class, 'hot'])->name('admin.slide.hot');
        Route::get('delete/{id}', [AdminSlideController::class, 'delete'])->name('admin.slide.delete');
    });

    Route::group(['prefix' => 'event'], function () {
        Route::get('', [AdminEventController::class, 'index'])->name('admin.event.index');
        Route::get('create', [AdminEventController::class, 'create'])->name('admin.event.create');
        Route::post('create', [AdminEventController::class, 'store']);

        Route::get('update/{id}', [AdminEventController::class, 'edit'])->name('admin.event.update');
        Route::post('update/{id}', [AdminEventController::class, 'update']);

        Route::get('delete/{id}', [AdminEventController::class, 'delete'])->name('admin.event.delete');
    });

    Route::group(['prefix' => 'page-static'], function () {
        Route::get('', [AdminStaticController::class, 'index'])->name('admin.static.index');
        Route::get('create', [AdminStaticController::class, 'create'])->name('admin.static.create');
        Route::post('create', [AdminStaticController::class, 'store']);

        Route::get('update/{id}', [AdminStaticController::class, 'edit'])->name('admin.static.update');
        Route::post('update/{id}', [AdminStaticController::class, 'update']);

        Route::get('delete/{id}', [AdminStaticController::class, 'delete'])->name('admin.static.delete');
    });

    Route::group(['prefix' => 'producer'], function () {
        Route::get('', [AdminProducerController::class, 'index'])->name('admin.producer.index');
        Route::get('create', [AdminProducerController::class, 'create'])->name('admin.producer.create');
        Route::post('create', [AdminProducerController::class, 'store']);

        Route::get('update/{id}', [AdminProducerController::class, 'edit'])->name('admin.producer.update');
        Route::post('update/{id}', [AdminProducerController::class, 'update']);

        Route::get('delete/{id}', [AdminProducerController::class, 'delete'])->name('admin.producer.delete');
    });

    Route::group(['prefix' => 'type'], function () {
        Route::get('', [AdminTypeController::class, 'index'])->name('admin.type.index');
        Route::get('create', [AdminTypeController::class, 'create'])->name('admin.type.create');
        Route::post('create', [AdminTypeController::class, 'store']);

        Route::get('update/{id}', [AdminTypeController::class, 'edit'])->name('admin.type.update');
        Route::post('update/{id}', [AdminTypeController::class, 'update']);

        Route::get('delete/{id}', [AdminTypeController::class, 'delete'])->name('admin.type.delete');
    });

    Route::group(['prefix' => 'discount-code'], function () {
        Route::get('', [DiscountCodeController::class, 'index'])->name('admin.discount.code.index');
        Route::get('create', [DiscountCodeController::class, 'create'])->name('admin.discount.code.create');
        Route::post('create', [DiscountCodeController::class, 'store']);

        Route::get('update/{id}', [DiscountCodeController::class, 'edit'])->name('admin.discount.code.update');
        Route::post('update/{id}', [DiscountCodeController::class, 'update']);

        Route::get('delete/{id}', [DiscountCodeController::class, 'delete'])->name('admin.discount.code.delete');
    });

});
