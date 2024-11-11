# Hàm trong Solidity

<div style="position: relative; width: 100%; height: 0; padding-bottom: 56.25%;">
    <iframe src="https://www.youtube.com/embed/RG9cF45DRdY?si=o2-QLtuoVHqiTmju" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen 
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;">
    </iframe>
</div>

Hàm trong Solidity là các khối mã thực hiện các tác vụ cụ thể. Chúng có thể được gọi từ bên trong hợp đồng hoặc từ bên ngoài. Dưới đây là một số khái niệm cơ bản về hàm trong Solidity.

## Định nghĩa Hàm

Hàm được định nghĩa bằng từ khóa `function`, theo sau là tên hàm, danh sách tham số, và phần thân hàm.

```solidity
function set(uint256 x) public {
    storedData = x;
}
```


## Các Loại Hàm

- **Public Functions**: Có thể được gọi từ bên ngoài hợp đồng và từ các hàm khác trong hợp đồng.
  ```solidity
  function set(uint256 x) public {
      storedData = x;
  }
  ```

- **Private Functions**: Chỉ có thể được gọi từ bên trong hợp đồng.
  ```solidity
  function _internalFunction() private {
      // logic
  }
  ```

- **Internal Functions**: Tương tự như private, nhưng có thể được gọi từ các hợp đồng kế thừa.
  ```solidity
  function _internalFunction() internal {
      // logic
  }
  ```

- **External Functions**: Chỉ có thể được gọi từ bên ngoài hợp đồng.
  ```solidity
  function externalFunction() external {
      // logic
  }
  ```

## Các Từ Khóa Quan Trọng

- **View Functions**: Không sửa đổi trạng thái của hợp đồng, chỉ đọc dữ liệu.
  ```solidity
  function get() public view returns (uint256) {
      return storedData;
  }
  ```

- **Pure Functions**: Không đọc hoặc sửa đổi trạng thái của hợp đồng.
  ```solidity
  function add(uint256 a, uint256 b) public pure returns (uint256) {
      return a + b;
  }
  ```

- **Payable Functions**: Có thể nhận Ether khi được gọi.
  ```solidity
  function deposit() public payable {
      // logic
  }
  ```

## Modifiers

Modifiers là các khối mã có thể được sử dụng để thay đổi hành vi của hàm. Chúng thường được sử dụng để kiểm tra điều kiện trước khi thực hiện hàm.


```solidity
modifier onlyOwner() {
    require(msg.sender == owner, "Not the contract owner");
    ;
}

function restrictedFunction() public onlyOwner {
// logic
}
```


## Fallback và Receive Functions

- **Fallback Function**: Được gọi khi một giao dịch không khớp với bất kỳ hàm nào khác hoặc khi dữ liệu không được cung cấp.
  ```solidity
  fallback() external {
      // logic
  }
  ```

- **Receive Function**: Được gọi khi hợp đồng nhận Ether mà không có dữ liệu.
  ```solidity
  receive() external payable {
      // logic
  }
  ```

Hàm trong Solidity là một phần quan trọng của hợp đồng thông minh, cho phép bạn thực hiện các tác vụ và tương tác với dữ liệu trên blockchain. Bạn có thể sử dụng các loại hàm và từ khóa khác nhau để tối ưu hóa và bảo mật hợp đồng của mình.