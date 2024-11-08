# Tương tác với Hợp đồng Thông minh đã Triển khai

Sau khi triển khai hợp đồng thông minh của bạn, bạn có thể tương tác với nó thông qua Remix IDE. Dưới đây là các bước để thực hiện điều này:

## Bước 1: Xem Hợp đồng đã Triển khai

1. Trong Remix IDE, chuyển đến tab "Deploy & Run Transactions".
2. Trong phần "Deployed Contracts", bạn sẽ thấy danh sách các hợp đồng đã triển khai.
3. Nhấp vào mũi tên bên cạnh tên hợp đồng để mở rộng và xem các hàm có sẵn.

## Bước 2: Gọi Hàm trong Hợp đồng

1. **Gọi Hàm `set`**:
   - Nhập giá trị bạn muốn lưu trữ vào ô đầu vào bên cạnh hàm `set`.
   - Nhấp vào nút `set` để gọi hàm. Điều này sẽ gửi một giao dịch để cập nhật giá trị trong hợp đồng.

2. **Gọi Hàm `get`**:
   - Nhấp vào nút `get` để gọi hàm. Điều này sẽ trả về giá trị hiện tại được lưu trữ trong hợp đồng mà không cần gửi giao dịch.

## Bước 3: Kiểm tra Kết Quả

- Sau khi gọi hàm `set`, bạn có thể kiểm tra kết quả bằng cách gọi hàm `get` để đảm bảo rằng giá trị đã được cập nhật chính xác.
- Remix IDE sẽ hiển thị kết quả trả về của hàm `get` ngay bên dưới nút gọi hàm.

## Lưu ý

- **Phí Gas**: Khi gọi các hàm thay đổi trạng thái (như `set`), bạn sẽ cần trả phí gas. Remix sẽ tự động tính toán và trừ phí này khi bạn sử dụng môi trường "JavaScript VM" hoặc "Injected Web3".
- **Kiểm tra Lỗi**: Nếu có lỗi xảy ra khi gọi hàm, Remix sẽ hiển thị thông báo lỗi chi tiết để bạn có thể khắc phục.

Tương tác với hợp đồng thông minh đã triển khai trong Remix IDE là một cách tuyệt vời để thử nghiệm và kiểm tra các chức năng của hợp đồng trước khi triển khai trên mạng chính.