# Blockchain "thực sự" hoạt động như thế nào?

<iframe width="100%" height="500" src="https://www.youtube.com/embed/APcwDT4KHRM?si=sAumOl9Sf1T-J6yD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

- [Blockchain Demo Techical](https://andersbrownworth.com/blockchain/)

Blockchain là một công nghệ phân tán, nơi mà dữ liệu được lưu trữ trong các khối (block) và các khối này được liên kết với nhau thành một chuỗi (chain). Mỗi khối chứa một danh sách các giao dịch đã được xác nhận và một mã băm (hash) của khối trước đó, tạo nên một chuỗi liên tục và không thể thay đổi.

### Cấu Trúc Cơ Bản Của Blockchain

1. **Khối (Block):** Mỗi khối trong blockchain chứa một số lượng giao dịch nhất định, một mã băm của khối trước đó, và một mã băm của chính nó. Mã băm này được tạo ra từ dữ liệu trong khối và là duy nhất, giúp đảm bảo tính toàn vẹn của dữ liệu.

2. **Chuỗi (Chain):** Các khối được liên kết với nhau thông qua mã băm, tạo thành một chuỗi liên tục. Điều này có nghĩa là nếu một khối bị thay đổi, mã băm của nó cũng sẽ thay đổi, làm cho tất cả các khối sau đó trở nên không hợp lệ.

3. **Nút (Node):** Mạng lưới blockchain bao gồm nhiều nút, mỗi nút là một bản sao của toàn bộ blockchain. Các nút này hoạt động cùng nhau để xác minh và ghi lại các giao dịch mới.

### Cơ Chế Đồng Thuận

Blockchain sử dụng các cơ chế đồng thuận để đảm bảo rằng tất cả các nút trong mạng đều đồng ý với trạng thái hiện tại của blockchain. Một số cơ chế đồng thuận phổ biến bao gồm:

- **Proof of Work (PoW):** Các thợ đào giải quyết các bài toán phức tạp để xác minh giao dịch và thêm khối mới vào blockchain. Quá trình này tiêu tốn nhiều năng lượng nhưng đảm bảo tính bảo mật cao.

- **Proof of Stake (PoS):** Người dùng đặt cược một lượng tiền điện tử để có cơ hội được chọn xác minh giao dịch. PoS tiêu tốn ít năng lượng hơn PoW và đang ngày càng được ưa chuộng.