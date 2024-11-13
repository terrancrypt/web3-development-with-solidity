# Hướng Dẫn Cài Đặt Foundry trên MacOS

## Bước 1: Cài đặt Homebrew

Trước tiên, bạn cần đảm bảo rằng bạn đã cài đặt Homebrew, một trình quản lý gói phổ biến trên MacOS. Nếu chưa, bạn có thể cài đặt Homebrew bằng cách mở Terminal và chạy lệnh sau:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

## Bước 2: Cài đặt Foundry

Sau khi đã cài đặt Homebrew, bạn có thể cài đặt Foundry bằng cách sử dụng script cài đặt chính thức. Mở Terminal và chạy lệnh sau:

```bash
curl -L https://foundry.paradigm.xyz | bash
```

Lệnh này sẽ tải xuống và cài đặt Foundry trên hệ thống của bạn.

## Bước 3: Thiết lập môi trường

Sau khi cài đặt, bạn cần thiết lập môi trường để sử dụng Foundry. Chạy lệnh sau trong Terminal:

```bash
foundryup
```

Lệnh này sẽ tải xuống và cài đặt các phiên bản mới nhất của các công cụ Foundry.

## Bước 4: Kiểm tra cài đặt

Để đảm bảo rằng Foundry đã được cài đặt thành công, bạn có thể kiểm tra phiên bản của Forge, một trong những công cụ chính của Foundry, bằng cách chạy:

```bash
forge --version
```

Nếu cài đặt thành công, bạn sẽ thấy phiên bản của Forge được hiển thị.

## Bước 5: Khởi tạo dự án mới

Bây giờ bạn đã sẵn sàng để bắt đầu phát triển với Foundry. Bạn có thể khởi tạo một dự án mới bằng cách sử dụng Forge:


