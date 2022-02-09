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
                <p>26-01-2022</p>
            </h2>
            <p>
                <i class="fas fa-circle"></i>
                Đã fix lại tính năng <span class="primary-color">validate</span> của trang <a href="./page/report-scam.html" class="modal-link">Gửi tố cáo</a>
            </p>
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
        modal.parentNode.removeChild(e.target)
    }else if(e.target.matches('.modal-close')) {
        modal.parentNode.removeChild(modal)
    }
})
menu.addEventListener('click',stopPropagation)

menuBtn.addEventListener('click', (e) =>{
    menu.classList.toggle('is-active')
    stopPropagation(e)
})

notifi.addEventListener('click', showNotifi)
