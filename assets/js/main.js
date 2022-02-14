const menuBtn = document.querySelector('.header__menu-icon')
const menu = document.querySelector('.container__menu')
const notifi = document.querySelector('.notifi-img')
const tempModal = `
    <div class="modal">
        <div class="modal-container">
        <i class="modal-close far fa-times-circle"></i>
        <div class="modal-content">
            <h2>
                <i class="fas fa-tools"></i>
                CẬP NHẬT
            </h2>
            <div class="notifi-content">
                <p class="notifi-day">
                    <span class="notifi-line"></span>
                    <span class="text"> 26-01-2022 </span>
                    <span class="notifi-line"></span>
                </p>
                <p>
                    <i class="fas fa-circle"></i>
                    Đã fix lại tính năng <span class="primary-color">validate</span> của trang <a href="./page/report-scam.html" class="modal-link">Gửi tố cáo</a>
                </p>
            </div>
            <div class="notifi-content">
                <p class="notifi-day">
                    <span class="notifi-line"></span>
                    <span class="text"> 06-02-2022 </span>
                    <span class="notifi-line"></span>
                </p>
                <p>
                    <i class="fas fa-circle"></i>
                    Update tính năng kiểm duyệt đơn tố cáo
                </p>
                <p>
                    <i class="fas fa-circle"></i>
                    Tối ưu hóa Website
                </p>
            </div>

            <h3>
                Thanks AE trong group đã vào test web và cho góp ý
            </h3>
            <h3>😄😄😄</h3>
            <br>
            <h3 class="primary-color"> - DƯƠNG TUẤN -</h3>
        </div>
        </div>
    </div>
`
const copyRight = `
    <h4 class="copy-right">Soiscam by <a href="https://www.facebook.com/tuanduong.auto/">Dương Tuấn</a>© 2022</h4>
`

// Function 
function stopPropagation(e) {
    e.stopPropagation()
}

function showNotifi(e) {
    document.body.insertAdjacentHTML('beforeend', tempModal)
    stopPropagation(e)
}

// event
document.body.addEventListener('click', (e) =>{
    const modal =  document.querySelector('.modal')
    const isActive = document.querySelector('.is-active')
    if(isActive) {
        menu.classList.remove('is-active')
    }else if(e.target.matches('.modal')) {
        e.stopPropagation()
        modal.parentNode.removeChild(e.target)
    }else if(e.target.matches('.modal-close')) {
        modal.parentNode.removeChild(modal)
    }else if(e.target.matches('.modal-container')) {
        e.stopPropagation()
    }
})
menu.addEventListener('click',stopPropagation)

menuBtn.addEventListener('click', (e) =>{
    menu.classList.toggle('is-active')
    stopPropagation(e)
})

notifi.addEventListener('click', showNotifi)
document.body.insertAdjacentHTML('beforeend', copyRight)
