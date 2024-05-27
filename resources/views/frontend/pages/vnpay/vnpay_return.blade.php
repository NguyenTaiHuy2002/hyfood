<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <meta name="description" content="">
    <meta name="author" content="">
    <title>Thông tin thanh toán</title>
    <!-- Bootstrap core CSS -->
    <link href="{{ asset('/vnpay/bootstrap.min.css') }}" rel="stylesheet" />
    <!-- Custom styles for this template -->
    <link href="{{ asset('/vnpay/jumbotron-narrow.css') }}" rel="stylesheet">
    <script src="{{ asset('/vnpay_php/jquery-1.11.3.min.js') }}"></script>
</head>

<body>
    <!--Begin display -->
    <div class="container">
        <div class="header clearfix">
            <h3 class="text-muted">Thông tin đơn hàng</h3>
        </div>
        <table class="table-responsive" styles="border: 1px solid">
            <tr class="form-group">
                <td class="transaction-info-item">Mã đơn hàng:</td>
                <td class="transaction-info-item">{{ $vnpayData['vnp_TxnRef'] }}</td>
            </tr>
            <tr class="form-group">
                <td class="transaction-info-item">Số tiền:</td>
                <td class="transaction-info-item">{{ number_format($vnpayData['vnp_Amount'] / 100, 0, ',', '.') }} VNĐ
                </td>
            </tr>
            <tr class="form-group">
                <td class="transaction-info-item">Nội dung thanh toán:</td>
                <td class="transaction-info-item">{{ $vnpayData['vnp_OrderInfo'] }}</td>
            </tr>
            <tr class="form-group">
                <td class="transaction-info-item">Mã phản hồi (vnp_ResponseCode):</td>
                <td class="transaction-info-item">{{ $vnpayData['vnp_ResponseCode'] }}</td>
            </tr>
            <tr class="form-group">
                <td class="transaction-info-item">Mã GD Tại VNPAY:</td>
                <td class="transaction-info-item">{{ $vnpayData['vnp_TransactionNo'] }}</td>
            </tr>
            <tr class="form-group">
                <td class="transaction-info-item">Mã Ngân hàng:</td>
                <td class="transaction-info-item">{{ $vnpayData['vnp_BankCode'] }}</td>
            </tr>
            <tr class="form-group">
                <td class="transaction-info-item">Thời gian thanh toán:</td>
                <td class="transaction-info-item">{{ date('Y-m-d H:i', strtotime($vnpayData['vnp_PayDate'])) }}</td>
            </tr>
            <tr class="form-group">
                <td class="transaction-info-item">Kết quả:</td>
                <td class="transaction-info-item">GD Thanh công</td>
            </tr>
            <tr colspan="2">

            </tr>
        </table>
        <p>
            &nbsp;
        </p>
        <a href="{{ route('get.home') }}">
            <button>Quay lại</button>
        </a>
        <p>
            &nbsp;
        </p>
        <footer class="footer">
            <p>&copy; Ví điện tử VNPAY</p>
        </footer>
    </div>
</body>

</html>