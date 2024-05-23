<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\User\UserTransactionController;
use App\Http\Controllers\User\UserDashboardController;
use App\Http\Controllers\User\UserInfoController;
use App\Http\Controllers\User\UserRatingController;
use App\Http\Controllers\User\LogLoginUserController;
use App\Http\Controllers\User\UserFavouriteController;
use App\Http\Controllers\User\CaptchaController;
use App\Http\Middleware\CheckLoginUser;
use App\Http\Controllers\BosungController;


Route::group(['prefix' => 'account', 'middleware' => 'check_user_login'], function () {
    Route::get('', [UserDashboardController::class, 'dashboard'])->name('get.user.dashboard');

    Route::get('update-info', [UserInfoController::class, 'updateInfo'])->name('get.user.update_info');
    Route::post('update-info', [UserInfoController::class, 'saveUpdateInfo']);

    Route::get('transaction', [UserTransactionController::class, 'index'])->name('get.user.transaction');
    Route::get('order/view/{id}', [UserTransactionController::class, 'viewOrder'])->name('get.user.order');

    Route::get('rating', [UserRatingController::class, 'index'])->name('get.user.rating');
    Route::get('log-login', [LogLoginUserController::class, 'index'])->name('get.user.log_login');

    Route::get('tracking/view/{id}', [UserTransactionController::class, 'getTrackingTransaction'])->name('get.user.tracking_order');
    Route::get('favourite', [UserFavouriteController::class, 'index'])->name('get.user.favourite');
    Route::get('favourite-delete/{id}', [UserFavouriteController::class, 'delete'])->name('get.user.favourite.delete');

    Route::post('ajax-favourite/{idProduct}', [UserFavouriteController::class, 'addFavourite'])->name('ajax_get.user.add_favourite');
    Route::post('ajax-rating', [UserRatingController::class, 'addRatingProduct'])->name('ajax_post.user.rating.add');
    Route::post('captcha', [CaptchaController::class, 'authCaptchaResume'])->name('ajax_post.captcha.resume');
});
