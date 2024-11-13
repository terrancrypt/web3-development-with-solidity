# Xác Minh Hợp Đồng Trong Khi Triển Khai Với Foundry

Foundry cho phép bạn triển khai và xác minh hợp đồng thông minh trong một bước duy nhất, giúp tiết kiệm thời gian và đảm bảo mã nguồn của bạn được công khai ngay lập tức. Dưới đây là các bước để thực hiện điều này.

## Bước 1: Cài Đặt API Key

Trước tiên, bạn cần có một API key từ Etherscan hoặc một dịch vụ tương tự hỗ trợ xác minh hợp đồng. Đăng ký tài khoản và lấy API key từ [Etherscan](https://etherscan.io/).

## Bước 2: Cập Nhật Tệp `.env`

Thêm API key vào tệp `.env` của bạn để bảo mật thông tin này:

```

# .env
ETHERSCAN_API_KEY=your_etherscan_api_key_here
```

Thay `your_etherscan_api_key_here` bằng API key thực tế của bạn.

## Bước 3: Viết Script Triển Khai

Tạo một script triển khai trong thư mục `script/`. Ví dụ, tạo tệp `DeployAndVerify.s.sol` với nội dung sau:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "forge-std/Script.sol";
import "../src/Contract.sol"; // Đảm bảo đường dẫn đúng với hợp đồng của bạn

contract DeployAndVerifyScript is Script {
    function run() external {
        vm.startBroadcast();
        new Contract(); // Thay Contract bằng tên hợp đồng của bạn
        vm.stopBroadcast();
    }
}
```


## Bước 4: Triển Khai và Xác Minh Hợp Đồng

Sử dụng lệnh `forge script` để chạy script triển khai và xác minh hợp đồng. Bạn cần chỉ định RPC-URL, khóa riêng của ví, và API key:

```bash
source .env && forge script script/DeployAndVerify.s.sol --rpc-url https://eth-sepolia.alchemyapi.io/v2/YOUR_ALCHEMY_API_KEY --private-key YOUR_PRIVATE_KEY --verify --etherscan-api-key $ETHERSCAN_API_KEY --broadcast
```
- **YOUR_ALCHEMY_API_KEY**: Thay thế bằng khóa API của bạn từ Alchemy.
- **YOUR_PRIVATE_KEY**: Thay thế bằng khóa riêng của ví Ethereum của bạn.

## Bước 5: Kiểm Tra Trạng Thái Xác Minh
Sau khi chạy lệnh, bạn có thể kiểm tra trạng thái xác minh trên Etherscan bằng cách truy cập trang hợp đồng của bạn. Nếu xác minh thành công, mã nguồn của hợp đồng sẽ được hiển thị công khai.