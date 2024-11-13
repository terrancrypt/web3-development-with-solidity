# Triển Khai Hợp Đồng Lên Sepolia Testnet

Sepolia là một trong những mạng thử nghiệm của Ethereum, cho phép bạn thử nghiệm các hợp đồng thông minh mà không cần sử dụng Ether thực. Dưới đây là các bước để triển khai hợp đồng lên Sepolia Testnet.

## Bước 1: Chuẩn bị môi trường

1. **Cài Đặt Foundry**: Đảm bảo rằng bạn đã cài đặt Foundry trên hệ thống của mình. Nếu chưa, hãy tham khảo hướng dẫn cài đặt Foundry.

2. **Tạo Ví và Nhận Sepolia ETH**:
   - Tạo một ví Ethereum nếu bạn chưa có. Bạn có thể sử dụng MetaMask hoặc bất kỳ ví nào hỗ trợ Ethereum.
   - Nhận Sepolia ETH từ một faucet. Bạn có thể tìm kiếm "Sepolia faucet" trên Google để tìm các dịch vụ cung cấp ETH miễn phí cho mạng thử nghiệm.

## Bước 2: Cấu hình RPC-URL

1. **Lấy RPC-URL**: Sử dụng một dịch vụ như Alchemy hoặc Infura để lấy RPC-URL cho Sepolia Testnet. Đảm bảo bạn đã tạo một ứng dụng và chọn Sepolia Testnet khi cấu hình.

2. **Cập Nhật Tệp Cấu Hình**: Mở tệp `foundry.toml` trong dự án của bạn và thêm hoặc cập nhật thông tin RPC-URL:

   ```toml
   [rpc]
   url = "https://eth-sepolia.alchemyapi.io/v2/YOUR_ALCHEMY_API_KEY"
   ```

   Thay `YOUR_ALCHEMY_API_KEY` bằng khóa API của bạn từ Alchemy.

## Bước 3: Viết Script triển khai

Tạo một script triển khai trong thư mục `script/`. Ví dụ, tạo tệp `Deploy.s.sol` với nội dung sau:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "forge-std/Script.sol";
import "../src/Contract.sol"; // Đảm bảo đường dẫn đúng với hợp đồng của bạn

contract DeployScript is Script {
    function run() external {
        vm.startBroadcast();
        new Contract(); // Thay Contract bằng tên hợp đồng của bạn
        vm.stopBroadcast();
    }
}
```

## Bước 4: Triển khai hợp đồng

Sử dụng lệnh `forge script` để chạy script triển khai trên Sepolia Testnet. Bạn cần chỉ định RPC-URL và khóa riêng của ví chứa Sepolia ETH:

```bash
forge script script/Deploy.s.sol --rpc-url https://eth-sepolia.alchemyapi.io/v2/YOUR_ALCHEMY_API_KEY --account YOUR_CAST_ACCOUNT --broadcast
```

- **`YOUR_ALCHEMY_API_KEY`**: Thay thế bằng ID dự án của bạn từ Alchemy.
- **`YOUR_CAST_ACCOUNT`**: Thay thế bằng tài khoản cast wallet bạn đã lưu.

## Bước 5: Xác nhận triển khai

Sau khi triển khai, `forge script` sẽ hiển thị địa chỉ của hợp đồng đã được triển khai trên Sepolia Testnet. Bạn có thể sử dụng địa chỉ này để tương tác với hợp đồng thông qua các công cụ như Etherscan hoặc các script tùy chỉnh.

## Kết luận

Triển khai hợp đồng lên Sepolia Testnet cho phép bạn thử nghiệm và xác minh hoạt động của hợp đồng trong một môi trường an toàn trước khi triển khai lên mạng chính. Sử dụng Foundry và các công cụ như Infura hoặc Alchemy giúp bạn dễ dàng thực hiện quá trình này.

