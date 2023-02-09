const menuItems = document.querySelectorAll('.menu-item');
const messageNotification = document.querySelector('#message-notif');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message'); 
const messageSearch = document.querySelector('#message-search');

// remove active class  from all menu items


// fungsi yang berfungsi untuk menghapus aktif kelas
const changeActiveClass = () => {
    menuItems.forEach( item =>{
        item.classList.remove('active');
    })
}

// ------------------------------------------------------------------------------------------------ SIDEBAR NOTIFICATIONS ---------------------------------------------------------------- 
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        // fungsi changeActiveClass akan menghapus menu yang di klik sebelumnya dan menggantinya dengan aktif class yang baru di klik 
        // semoga ngerti waktu baca lagi :"D"
        changeActiveClass();
        item.classList.add('active');
        if(item.id != 'notif'){
            document.querySelector('.notification-popup').
            style.display = 'none';
        } 
        else{
            document.querySelector('.notification-popup').
            style.display = 'block'; 
            document.querySelector('#notif .notification-count').style.display='none';
        }
    })
})

// ------------------------------------------------------------------------------------------------ MESSAGES ------------------------------------------------------------------------------------------------
// searcing chats
// jujur aja gangerti
// taapi ini kalo orang nyari chat, misal "le" nanti muncul nama chat yang ada "le" nya :"D" 
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    // console.log(val);
    message.forEach( user => {
        let name = user.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1) {
            user.style.display='flex';
        } else {
            user.style.display='none';
        }
    })
}

// searching messages
// ini juga sepaket gangerti 
messageSearch.addEventListener('keyup', searchMessage);

// ----- hightliting messages when user clicking it
messageNotification.addEventListener('click', ()=> {
    // munculin warna shadow dari card messages
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';

    // notif berapa banyak chat itu dihilangin
    messageNotification.querySelector('.notification-count').style.display ='none';

    // setelah 2 detik, shadownya bakalan hilang
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000);
})





