const menuItems = [
    {
      label: 'Anasayfa'
    },
    {
      label: 'Kurumsal',
      children: [
        {
          label: 'Hakkımızda',
          children: [
            {
              label: 'Şirket Profili',
              children: [
                { label: 'Yönetim' },
                { label: 'Departmanlar' }
              ]
            },
            { label: 'Kurucu Mesajı' },
            {
              label: 'Ekibimiz',
              children: [
                {
                  label: 'Teknik Ekip',
                  children: [
                    { label: 'Yazılım Ekibi' },
                    { label: 'Donanım Ekibi' }
                  ]
                },
                { label: 'Yönetim Ekibi' }
              ]
            }
          ]
        },
        {
          label: 'Vizyon & Misyon',
          children: [
            { label: 'Değerlerimiz' },
            {
              label: 'Hedeflerimiz',
              children: [
                { label: 'Kısa Vadeli Hedefler' },
                { label: 'Uzun Vadeli Hedefler' }
              ]
            }
          ]
        },
        {
          label: 'Tarihçe',
          children: [
            {
              label: 'Kuruluş Yılları',
              children: [
                { label: '2000 Öncesi' },
                { label: '2000 Sonrası' }
              ]
            },
            { label: 'Başarı Hikayeleri' },
            { label: 'Gelecek Planları' }
          ]
        }
      ]
    },
    {
      label: 'Ürünler',
      children: [
        {
          label: 'Elektronik',
          children: [
            {
              label: 'Cep Telefonu',
              children: [
                {
                  label: 'Android',
                  children: [
                    { label: 'Samsung' },
                    { label: 'Xiaomi' }
                  ]
                },
                {
                  label: 'iOS',
                  children: [
                    { label: 'iPhone 14' },
                    { label: 'iPhone 15' }
                  ]
                }
              ]
            },
            {
              label: 'Bilgisayar',
              children: [
                { label: 'Dizüstü' },
                {
                  label: 'Masaüstü',
                  children: [
                    { label: 'Oyun Bilgisayarları' },
                    { label: 'Ofis Bilgisayarları' }
                  ]
                },
                { label: 'Tablet' }
              ]
            }
          ]
        },
        {
          label: 'Ev Aletleri',
          children: [
            { label: 'Beyaz Eşya' },
            {
              label: 'Küçük Ev Aletleri',
              children: [
                { label: 'Mikserler' },
                { label: 'Elektrikli Süpürgeler' }
              ]
            }
          ]
        }
      ]
    },
    {
      label: 'Hizmetler',
      children: [
        {
          label: 'Danışmanlık',
          children: [
            { label: 'IT Danışmanlığı' },
            {
              label: 'Stratejik Danışmanlık',
              children: [
                { label: 'Şirket Yönetimi' },
                { label: 'Büyüme Stratejileri' }
              ]
            }
          ]
        },
        {
          label: 'Eğitim',
          children: [
            {
              label: 'Online Kurslar',
              children: [
                { label: 'Frontend Geliştirme' },
                { label: 'Backend Geliştirme' }
              ]
            },
            { label: 'Yüz Yüze Eğitimler' }
          ]
        }
      ]
    },
    {
      label: 'İletişim',
      children: [
        { label: 'Bize Ulaşın' },
        {
          label: 'Sıkça Sorulan Sorular',
          children: [
            { label: 'Ürünler Hakkında' },
            { label: 'Hizmetler Hakkında' }
          ]
        },
        {
          label: 'Destek',
          children: [
            { label: 'Teknik Destek' },
            {
              label: 'Müşteri Hizmetleri',
              children: [
                { label: 'İletişim Formu' },
                { label: 'Canlı Destek' }
              ]
            }
          ]
        }
      ]
    }
];


function renderMenu(menuItems, container) {
  menuItems.forEach(item => {
    const li = document.createElement('li');
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');
    menuItem.innerHTML = `${item.label} <span class="toggle">+</span>`;

    li.appendChild(menuItem);
    container.appendChild(li);

    if (item.children) {
      const submenu = document.createElement('ul');
      submenu.classList.add('submenu');
      li.appendChild(submenu);
      renderMenu(item.children, submenu);

      menuItem.querySelector('.toggle').addEventListener('click', function () {
        const subMenu = submenu;
        const isVisible = subMenu.style.display === 'block';
        subMenu.style.display = isVisible ? 'none' : 'block';
        menuItem.querySelector('.toggle').textContent = isVisible ? '+' : '-';
      });
    }
  });
}
const menuContainer = document.querySelector('.menu');
renderMenu(menuItems, menuContainer);