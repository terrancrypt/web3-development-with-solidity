# Xác Minh Hợp Đồng Với `forge verify-contract`

Xác minh hợp đồng là quá trình công khai mã nguồn của hợp đồng trên các trình khám phá blockchain như Etherscan, giúp người khác có thể xem và kiểm tra mã nguồn của hợp đồng. Dưới đây là các bước để xác minh hợp đồng với `forge verify-contract`.

## Bước 1: Cài Đặt API Key

Trước tiên, bạn cần có một API key từ Etherscan hoặc một dịch vụ tương tự hỗ trợ xác minh hợp đồng. Đăng ký tài khoản và lấy API key từ [Etherscan](https://etherscan.io/).

## Bước 2: Cập Nhật Tệp `.env`

Thêm API key vào tệp `.env` của bạn để bảo mật thông tin này:

```

# .env
ETHERSCAN_API_KEY=your_etherscan_api_key_here
```

Thay `your_etherscan_api_key_here` bằng API key thực tế của bạn.

## Bước 3: Xác Minh Hợp Đồng

Sử dụng lệnh `forge verify-contract` để xác minh hợp đồng. Bạn cần chỉ định địa chỉ hợp đồng, tên hợp đồng, và API key:

```bash
source .env && forge verify-contract --chain-id 11155111 <CONTRACT_ADDRESS> src/Contract.sol:Contract $ETHERSCAN_API_KEY
```

- `<CONTRACT_ADDRESS>`: Thay thế bằng địa chỉ của hợp đồng đã triển khai.
- `src/Contract.sol:Contract`: Thay thế bằng đường dẫn và tên hợp đồng của bạn.
- `11155111`: Đây là chain ID cho Sepolia Testnet. Thay đổi nếu bạn sử dụng mạng khác.
  
## Bước 4: Kiểm Tra Trạng Thái Xác Minh
Sau khi chạy lệnh, bạn có thể kiểm tra trạng thái xác minh trên Etherscan bằng cách truy cập trang hợp đồng của bạn. Nếu xác minh thành công, mã nguồn của hợp đồng sẽ được hiển thị công khai.
## Kết Luận
Xác minh hợp đồng là một bước quan trọng để đảm bảo tính minh bạch và tin cậy của hợp đồng thông minh. Sử dụng forge verify-contract giúp bạn dễ dàng công khai mã nguồn của hợp đồng trên các trình khám phá blockchain.