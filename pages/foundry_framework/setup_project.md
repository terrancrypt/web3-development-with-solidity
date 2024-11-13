# Thiết Lập Dự Án Mới với Foundry

Foundry cung cấp một quy trình đơn giản và hiệu quả để khởi tạo và thiết lập một dự án mới cho phát triển hợp đồng thông minh trên Ethereum. Dưới đây là các bước để thiết lập một dự án mới với Foundry.

## Bước 1: Cài Đặt Foundry

Trước tiên, hãy đảm bảo rằng bạn đã cài đặt Foundry trên hệ thống của mình. Nếu chưa, bạn có thể tham khảo hướng dẫn cài đặt Foundry trên MacOS hoặc Windows.

## Bước 2: Khởi Tạo Dự Án Mới

Sử dụng công cụ Forge của Foundry để khởi tạo một dự án mới. Mở Terminal (hoặc Git Bash trên Windows) và chạy lệnh sau:
```bash
forge init my-project
```

Lệnh này sẽ tạo một thư mục dự án mới có tên là `my-project` với cấu trúc cơ bản cho một dự án Solidity.

## Cấu trúc dự án

Sau khi khởi tạo, dự án của bạn sẽ có cấu trúc thư mục cơ bản như sau:

```
my-project/
├── lib/
├── script/
│   └── Deploy.s.sol
├── src/
│   └── Contract.sol
├── test/
│   └── Contract.t.sol
├── foundry.toml
```

- **lib/**: Thư mục này thường được sử dụng để lưu trữ các thư viện bên ngoài mà dự án của bạn phụ thuộc vào. Bạn có thể sử dụng `forge install` để thêm các thư viện vào đây.
- **script/**: Thư mục này chứa các script để triển khai hoặc tương tác với các hợp đồng của bạn. Tệp `Deploy.s.sol` là một script mẫu để triển khai hợp đồng.
- **src/**: Thư mục này chứa mã nguồn Solidity của bạn. Tệp `Contract.sol` là một hợp đồng mẫu mà bạn có thể chỉnh sửa hoặc thay thế bằng hợp đồng của riêng bạn.
- **test/**: Thư mục này chứa các bài kiểm tra cho hợp đồng của bạn. Tệp `Contract.t.sol` là một bài kiểm tra mẫu. Foundry hỗ trợ viết các bài kiểm tra bằng Solidity, giúp bạn dễ dàng kiểm tra logic của hợp đồng.
- **foundry.toml**: Tệp cấu hình cho dự án Foundry của bạn. Tệp này cho phép bạn cấu hình các tùy chọn như phiên bản Solidity, đường dẫn thư mục, và các cài đặt khác.

## Cách sử dụng
- **Viết Hợp Đồng**: Mở tệp `src/Contract.sol` và bắt đầu viết hợp đồng thông minh của bạn.
- **Viết Bài Kiểm Tra**: Mở tệp `test/Contract.t.sol` và viết các bài kiểm tra cho hợp đồng của bạn.
- **Chạy Bài Kiểm Tra**: Sử dụng lệnh `forge test` để biên dịch và chạy các bài kiểm tra.
- **Triển Khai Hợp Đồng**: Sử dụng các script trong thư mục `script/` để triển khai hợp đồng của bạn lên mạng blockchain.

Với các bước trên, bạn đã thiết lập thành công một dự án mới với Foundry và sẵn sàng để phát triển và kiểm tra các hợp đồng thông minh của mình. Foundry cung cấp một môi trường phát triển mạnh mẽ và linh hoạt, giúp tối ưu hóa quy trình phát triển của bạn.