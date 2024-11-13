# Tương Tác Với Contract Đã Verify Trên Etherscan

Etherscan cung cấp một giao diện người dùng thân thiện để tương tác với các hợp đồng thông minh đã được xác minh. Bạn có thể gọi các hàm công khai của hợp đồng và xem kết quả ngay trên trình duyệt.

## Bước 1: Truy Cập Trang Hợp Đồng Trên Etherscan

1. **Tìm Kiếm Hợp Đồng**: Truy cập [Etherscan](https://etherscan.io/) và nhập địa chỉ hợp đồng của bạn vào thanh tìm kiếm.
2. **Mở Trang Hợp Đồng**: Nhấp vào kết quả tìm kiếm để mở trang chi tiết của hợp đồng.

## Bước 2: Sử Dụng Tab "Contract"

1. **Chọn Tab "Contract"**: Trên trang chi tiết của hợp đồng, chọn tab "Contract". Tab này sẽ hiển thị mã nguồn của hợp đồng và các thông tin liên quan.
2. **Chọn "Read Contract" hoặc "Write Contract"**:
   - **Read Contract**: Cho phép bạn gọi các hàm `view` hoặc `pure` để đọc dữ liệu từ hợp đồng mà không tốn phí gas.
   - **Write Contract**: Cho phép bạn gọi các hàm thay đổi trạng thái của hợp đồng. Bạn sẽ cần kết nối ví của mình để thực hiện các giao dịch này.

## Bước 3: Gọi Hàm Công Khai

### Đọc Dữ Liệu (Read Contract)

1. **Chọn Hàm**: Trong tab "Read Contract", bạn sẽ thấy danh sách các hàm công khai có thể đọc. Nhấp vào hàm bạn muốn gọi.
2. **Nhập Tham Số (nếu cần)**: Nếu hàm yêu cầu tham số, nhập giá trị cần thiết.
3. **Nhấp "Query"**: Nhấp vào nút "Query" để gọi hàm và xem kết quả.

### Ghi Dữ Liệu (Write Contract)

1. **Kết Nối Ví**: Nhấp vào nút "Connect to Web3" để kết nối ví của bạn (ví dụ: MetaMask).
2. **Chọn Hàm**: Trong tab "Write Contract", chọn hàm bạn muốn gọi.
3. **Nhập Tham Số (nếu cần)**: Nhập giá trị cho các tham số của hàm.
4. **Nhấp "Write"**: Nhấp vào nút "Write" để gửi giao dịch. Bạn sẽ cần xác nhận giao dịch trong ví của mình.

## Kết Luận

Tương tác với hợp đồng đã xác minh trên Etherscan là một cách tiện lợi để kiểm tra và sử dụng các chức năng của hợp đồng mà không cần viết mã bổ sung. Etherscan cung cấp một giao diện dễ sử dụng để thực hiện các thao tác này một cách nhanh chóng và hiệu quả.