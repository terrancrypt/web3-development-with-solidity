# Tương Tác Với Contract Đã Deploy Lên Sepolia Testnet

Sau khi triển khai hợp đồng lên Sepolia Testnet, bạn có thể tương tác với nó bằng cách gọi các hàm công khai. Dưới đây là các bước để thực hiện điều này.

## Bước 1: Lấy địa chỉ hợp đồng

Khi bạn triển khai hợp đồng, bạn sẽ nhận được địa chỉ của hợp đồng đã được triển khai. Bạn cần địa chỉ này để tương tác với hợp đồng.

## Bước 2: Sử dụng cast để tương tác

Foundry cung cấp công cụ `cast` để tương tác với các hợp đồng thông minh. Bạn có thể sử dụng `cast` để gọi các hàm công khai của hợp đồng.

### Ví dụ: Gọi hàm công khai

Giả sử bạn có một hợp đồng với hàm công khai `getValue()` mà bạn muốn gọi. Dưới đây là cách thực hiện:

1. **Gọi hàm không trả phí (view/pure)**

   ```bash
   cast call <CONTRACT_ADDRESS> "getValue()" --rpc-url https://eth-sepolia.alchemyapi.io/v2/YOUR_ALCHEMY_API_KEY
   ```

   Thay `<CONTRACT_ADDRESS>` bằng địa chỉ của hợp đồng và `YOUR_ALCHEMY_API_KEY` bằng khóa API của bạn từ Alchemy.

2. **Gọi hàm trả phí**

   Nếu bạn cần gọi một hàm thay đổi trạng thái, bạn sẽ cần cung cấp khóa riêng:

   ```bash
   cast send <CONTRACT_ADDRESS> "setValue(uint256)" <NEW_VALUE> --rpc-url https://eth-sepolia.alchemyapi.io/v2/YOUR_ALCHEMY_API_KEY --private-key YOUR_PRIVATE_KEY
   ```

   Thay `<CONTRACT_ADDRESS>`, `<NEW_VALUE>`, và `YOUR_PRIVATE_KEY` bằng giá trị tương ứng.

## Bước 3: Kiểm tra kết quả

Sau khi gọi hàm, bạn có thể kiểm tra kết quả hoặc trạng thái của hợp đồng bằng cách gọi các hàm `view` hoặc `pure` để xác nhận rằng các thay đổi đã được thực hiện như mong đợi.

## Kết luận

Tương tác với hợp đồng trên Sepolia Testnet cho phép bạn kiểm tra và xác minh hoạt động của hợp đồng trong một môi trường an toàn trước khi triển khai lên mạng chính. Sử dụng `cast` giúp bạn dễ dàng thực hiện các cuộc gọi hàm và kiểm tra kết quả một cách nhanh chóng và hiệu quả.