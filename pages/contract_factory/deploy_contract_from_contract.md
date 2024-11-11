# Deploy Contract từ một Contract khác

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleContract {
    string public data;

    constructor(string memory data) {
        data = data;
    }
}

contract ContractFactory {
    SimpleContract[] public contracts;

    function createContract(string memory data) public {
        SimpleContract newContract = new SimpleContract(data);
        contracts.push(newContract);
    }

    function getContracts() public view returns (SimpleContract[] memory) {
        return contracts;
    }
}
```

Smart Contract Factory là một công cụ mạnh mẽ trong phát triển hợp đồng thông minh, giúp tối ưu hóa quy trình triển khai và quản lý các hợp đồng trên Ethereum. Bằng cách sử dụng Factory, các nhà phát triển có thể dễ dàng tạo ra và quản lý nhiều hợp đồng một cách hiệu quả.