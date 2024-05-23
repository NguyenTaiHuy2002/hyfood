<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\AdminRequestMenu;
use App\Models\Menu;
use Carbon\Carbon;
use Illuminate\Support\Str;

class AdminMenuController extends Controller
{
    public function index()
    {
        $menus = Menu::all();
        $viewData = [
            'menus' => $menus
        ];

        return view('admin.menu.index', $viewData);
    }

    public function create()
    {
        return view('admin.menu.create');
    }

    public function store(AdminRequestMenu $request)
    {
        $data = $request->except('_token');
        $data['mn_slug'] = Str::slug($request->mn_name);
        $data['created_at'] = Carbon::now();

        $id = Menu::insertGetId($data);
        \Session::flash('toastr', [
            'type' => 'success',
            'message' => 'Thêm mới thành công'
        ]);

        // return redirect()->back();
        return redirect()->to('/api-admin/menu');
    }

    public function edit($id)
    {
        $menu = Menu::find($id);
        return view('admin.menu.update', compact('menu'));
    }

    public function update(AdminRequestMenu $request, $id)
    {
        $menu = Menu::find($id);
        $data = $request->except('_token');
        $data['mn_slug'] = Str::slug($request->mn_name);
        $data['updated_at'] = Carbon::now();

        $menu->update($data);
        \Session::flash('toastr', [
            'type' => 'success',
            'message' => 'cập nhật thành công'
        ]);

        // return redirect()->back();
        return redirect()->to('/api-admin/menu');
    }

    public function active($id)
    {
        $menu = Menu::find($id);
        $menu->mn_status = !$menu->mn_status;
        $menu->save();
        \Session::flash('toastr', [
            'type' => 'success',
            'message' => 'Cập nhật thành công'
        ]);
        return redirect()->back();
    }

    public function hot($id)
    {
        $menu = Menu::find($id);
        $menu->mn_hot = !$menu->mn_hot;
        $menu->save();
        \Session::flash('toastr', [
            'type' => 'success',
            'message' => 'Cập nhật thành công'
        ]);
        return redirect()->back();
    }

    public function delete($id)
    {
        $menu = Menu::find($id);
        if ($menu)
            $menu->delete();

        \Session::flash('toastr', [
            'type' => 'success',
            'message' => 'Xóa thành công'
        ]);

        // return redirect()->back();
        return redirect()->to('/api-admin/menu');
    }
}
