@extends('layouts.app_master_user')
@section('content')
<section>
    <div class="main-title">Danh sách đơn hàng</div>
    <form class="form-inline">
        <div class="form-group " style="margin-right: 10px;">
            <input type="text" class="form-control" value="{{ Request::get('id') }}" name="id" placeholder="ID">
        </div>
        <div class="form-group" style="margin-right: 10px;">
            <select name="status" class="form-control">
                <option value="">Trạng thái</option>
                <option value="1" {{ Request::get('status') == 1 ? "selected='selected'" : "" }}>Tiếp nhận</option>
                <option value="2" {{ Request::get('status') == 2 ? "selected='selected'" : "" }}>Đang vận chuyển
                </option>
                <option value="3" {{ Request::get('status') == 3 ? "selected='selected'" : "" }}>Đã bàn giao
                </option>
                <option value="-1" {{ Request::get('status') == -1 ? "selected='selected'" : "" }}>Huỷ bỏ</option>
            </select>
        </div>
        <div class="form-group" style="margin-right: 10px;">
            <button type="submit" class="btn btn-pink btn-sm">Tìm kiếm</button>
        </div>
    </form>
    <table class="table table-striped">
        <thead>
            <tr>
                <th scope="col">Mã đơn</th>
                <th scope="col">Tên khách hàng</th>
                <th scope="col">Tổng tiền</th>
                <th scope="col">Thời gian đặt hàng</th>
                <th scope="col">Trạng thái đơn hàng</th>
                <th scope="col" style="text-align: center">Hành động</th>
            </tr>
        </thead>
        <tbody>
            @foreach($transactions as $transaction)
                <tr>
                    <th scope="row">
                        <b>DH{{ $transaction->id }}</b>
                    </th>
                    <th>{{ $transaction->tst_name }}</th>
                    <th>{{ number_format($transaction->tst_total_money, 0, ',', '.') }} đ</th>
                    <th>{{  $transaction->created_at }}</th>
                    <th>
                        <span class="label label-{{ $transaction->getStatus($transaction->tst_status)['class'] }}">
                            {{ $transaction->getStatus($transaction->tst_status)['name'] }}
                        </span>
                    </th>
                    <th class="btn-order-view"><a class="btn-order-link"
                            href="{{ route('get.user.order', $transaction->id) }}">Xem đơn
                            hàng</a>
                    </th>
                </tr>
            @endforeach
        </tbody>
    </table>

</section>
@stop