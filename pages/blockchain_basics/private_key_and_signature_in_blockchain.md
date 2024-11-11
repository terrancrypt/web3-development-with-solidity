# Private Key & chữ ký trong giao dịch Blockchain hoạt động như thế nào?
<div style="position: relative; width: 100%; height: 0; padding-bottom: 56.25%;">
    <iframe src="https://www.youtube.com/embed/coXIRb9sG54?si=I9EDQgT-o_cSzI5R" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen 
            style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;">
    </iframe>
</div>

- [Private Key & Signature Demo](https://andersbrownworth.com/blockchain/public-private-keys/)

Trong blockchain, private key (khóa riêng tư) và chữ ký số đóng vai trò quan trọng trong việc bảo mật và xác thực giao dịch. Mỗi người dùng có một cặp khóa bao gồm khóa công khai (public key) và khóa riêng tư. Khóa riêng tư là một chuỗi ký tự bí mật mà chỉ chủ sở hữu biết, và nó được sử dụng để tạo chữ ký số cho các giao dịch.

## Khóa Riêng Tư (Private Key)

Khóa riêng tư là một phần không thể thiếu trong việc bảo mật tài sản số của người dùng trên blockchain. Nó được sử dụng để ký các giao dịch, xác nhận rằng người gửi thực sự là chủ sở hữu của tài sản. Nếu khóa riêng tư bị lộ, tài sản của người dùng có thể bị đánh cắp, do đó, việc bảo vệ khóa riêng tư là cực kỳ quan trọng.

## Chữ Ký Số (Digital Signature)

Chữ ký số được tạo ra bằng cách sử dụng khóa riêng tư và được đính kèm với giao dịch. Nó đảm bảo rằng giao dịch không bị thay đổi sau khi được ký và chỉ có thể được tạo bởi chủ sở hữu của khóa riêng tư. Các nút trong mạng blockchain sử dụng khóa công khai để xác minh chữ ký số, đảm bảo tính toàn vẹn và xác thực của giao dịch.

## Quá Trình Ký Giao Dịch

1. **Tạo Giao Dịch:** Người dùng tạo một giao dịch mới, bao gồm thông tin như địa chỉ người nhận và số lượng tài sản cần chuyển.
2. **Ký Giao Dịch:** Sử dụng khóa riêng tư, người dùng tạo chữ ký số cho giao dịch.
3. **Gửi Giao Dịch:** Giao dịch đã ký được gửi lên mạng blockchain để xác minh.
4. **Xác Minh Giao Dịch:** Các nút trong mạng sử dụng khóa công khai của người gửi để xác minh chữ ký số và đảm bảo rằng giao dịch là hợp lệ.

Nhờ vào cơ chế khóa riêng tư và chữ ký số, blockchain có thể đảm bảo tính bảo mật và xác thực của các giao dịch, ngăn chặn gian lận và bảo vệ tài sản của người dùng.