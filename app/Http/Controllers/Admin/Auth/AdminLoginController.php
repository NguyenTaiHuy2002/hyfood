<?php

namespace App\Http\Controllers\Admin\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

class AdminLoginController extends Controller
{
    use AuthenticatesUsers;

    public function getLoginAdmin()
    {
        return view('admin.auth.login');
    }

    public function postLoginAdmin(Request $request)
    {
        if (\Auth::guard('admins')->attempt(['email' => $request->email, 'password' => $request->password])) {
            // Đăng nhập thành công
            \Session::flash('toastr', [
                'type' => 'success',
                'message' => 'Đăng nhập thành công'
            ]);
            return redirect()->route('get.admin.index');
        }

        // Sai tên tài khoản hoặc mật khẩu
        \Session::flash('toastr', [
            'type' => 'error',
            'message' => 'Sai tên tài khoản hoặc mật khẩu. Vui lòng thử lại.'
        ]);
        return redirect()->back();
    }

    public function getLogoutAdmin()
    {
        \Auth::guard('admins')->logout();
        return redirect()->to('/');
    }
}
