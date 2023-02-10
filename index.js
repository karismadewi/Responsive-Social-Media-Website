const menuItems = document.querySelectorAll('.menu-item');
const messageNotification = document.querySelector('#message-notif');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message'); 
const messageSearch = document.querySelector('#message-search');
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.costomize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose-color span');
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');

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


// fungsi untuk open modal theme
const openThemeModal = () =>{
    themeModal.style.display = 'grid';
} 


// function buat nutup modal kalo ngeklik sembarang di luar modal 
const closeThemeModal = (e) => {
    if(e.target.classList.contains('costomize-theme')){
        themeModal.style.display = 'none';
    }
}

// deklarasi kalo di klik themenya bakalan running function openThemeModal sama kayak close modal
themeModal.addEventListener('click', closeThemeModal);
theme.addEventListener('click', openThemeModal);



// -------------------------------------------------- F O N T ----------------------------------------------------------------
// remove active class from spans or font size selector 
// fungsi untuk mindahin active class sesuai dengan tombol (span) yang di klik
const removeSizeSelector = () =>{
    fontSizes.forEach(size => {
        size.classList.remove('active');
    })
}

fontSizes.forEach(size => {
    // ukuran masing masng span font-size themenya 
    // ganti font-size di semua element htmlnya. 
    // jadi kalo nanti ganti theme, otomatis semua ukuran font di websitenya keganti :"D"
    // sepertinya begitu :v

    size.addEventListener('click',() =>{
        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');

        if(size.classList.contains('font-size-1')){
            fontSize = '10px';
            root.style.setProperty('----sticky-top-left', '5.4 rem');
            root.style.setProperty('----sticky-top-right', '5.4 rem');
        }
        else if(size.classList.contains('font-size-2')){
            fontSize = '13px';
            root.style.setProperty('----sticky-top-left', '5.4 rem');
            root.style.setProperty('----sticky-top-right', '-7 rem');
        }
        else if(size.classList.contains('font-size-3')){
            fontSize = '16px';
            root.style.setProperty('----sticky-top-left', '-2 rem');
            root.style.setProperty('----sticky-top-right', '-17 rem');
        }
        else if(size.classList.contains('font-size-4')){
            fontSize = '19px';
            root.style.setProperty('----sticky-top-left', '-5 rem');
            root.style.setProperty('----sticky-top-right', '-25 rem');
        }
        else if (size.classList.contains('font-size-5')){
            fontSize = '22px';
            root.style.setProperty('----sticky-top-left', '-10 rem');
            root.style.setProperty('----sticky-top-right', '-33 rem');
        }
        document.querySelector('html').style.fontSize = fontSize;
    })
})


// remove an active class from the span color 
const changeActiveColorClass = () =>{
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}


// change primary color 
colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        let primary;
        // remove an active class from the span color 
        changeActiveColorClass();

        if(color.classList.contains('color-1')){
            primaryHue = 252;
        }
        else if (color.classList.contains('color-2')){
            primaryHue = 52;
            // console.log(primaryHue);
        }
        else if (color.classList.contains('color-3')){
            primaryHue = 352;
        }
        else if (color.classList.contains('color-4')){
            primaryHue = 152;
        }
        else if (color.classList.contains('color-5')){
            primaryHue = 202;
        }
        color.classList.add('active');

        root.style.setProperty('--primary-color-hue', primaryHue);
    })
})


// theme background===========
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

// change background color
const changeBg = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
}

Bg1.addEventListener('click', () =>{
    // add active class 
    Bg1.classList.add('active');
    // remove active class
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    window.location.reload();
})

Bg2.addEventListener('click', () =>{
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';
    // add active class 
    Bg2.classList.add('active');
    // remove active class
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBg();
})


Bg3.addEventListener('click', () =>{
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';
    // add active class 
    Bg3.classList.add('active');
    // remove active class
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBg();
})



