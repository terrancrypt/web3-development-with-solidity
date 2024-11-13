# Hướng Dẫn Cài Đặt Foundry trên Windows với Git Bash

## Bước 1: Cài đặt Git Bash

Trước tiên, bạn cần cài đặt Git Bash trên Windows. Nếu chưa có, bạn có thể tải xuống và cài đặt từ trang web chính thức của Git: [Git for Windows](https://gitforwindows.org/).

## Bước 2: Mở Git Bash

Sau khi cài đặt Git Bash, mở nó lên để bắt đầu quá trình cài đặt Foundry.

## Bước 3: Cài đặt Foundry

Sử dụng script cài đặt chính thức của Foundry. Trong cửa sổ Git Bash, chạy lệnh sau:
```bash
curl -L https://foundry.paradigm.xyz | bash
```

Lệnh này sẽ tải xuống và cài đặt Foundry trên hệ thống của bạn.

## Bước 4: Thiết lập môi trường

Sau khi cài đặt, bạn cần thiết lập môi trường để sử dụng Foundry. Chạy lệnh sau trong Git Bash:

```bash
foundryup
```

Lệnh này sẽ tải xuống và cài đặt các phiên bản mới nhất của các công cụ Foundry.

## Bước 5: Kiểm tra cài đặt

Để đảm bảo rằng Foundry đã được cài đặt thành công, bạn có thể kiểm tra phiên bản của Forge, một trong những công cụ chính của Foundry, bằng cách chạy:
```bash
forge --version
```

Nếu cài đặt thành công, bạn sẽ thấy phiên bản của Forge được hiển thị.

## Bước 6: Khởi tạo dự án mới

Bây giờ bạn đã sẵn sàng để bắt đầu phát triển với Foundry. Bạn có thể khởi tạo một dự án mới bằng cách sử dụng Forge:
```bash
forge init my-project
```

Lệnh này sẽ tạo một thư mục dự án mới với cấu trúc cơ bản cho một dự án Solidity.

## Kết luận

Với các bước trên, bạn đã cài đặt thành công Foundry trên Windows sử dụng Git Bash và sẵn sàng để bắt đầu phát triển các hợp đồng thông minh trên Ethereum. Foundry cung cấp một bộ công cụ mạnh mẽ và linh hoạt, giúp tối ưu hóa quy trình phát triển của bạn.