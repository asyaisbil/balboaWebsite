const cardDataList = [
    {
      imgURL: 'https://i.ibb.co/W3hCdQt/js.png',
      header: '1. Giriş: Dinamik İçerik ve JavaScript',
      paragraph:
        'Web teknolojilerindeki gelişmelerle birlikte, kullanıcılarla etkileşimi artırmak ve daha zengin deneyimler sunmak için dinamik içerik kullanımı giderek yaygınlaşıyor. Bu bağlamda, JavaScript (JS) dili, tarayıcı tabanlı uygulamalarda dinamik içerik oluşturmak için güçlü bir araç olarak öne çıkıyor.',
      navigationURL:
        'https://appmaster.io/tr/blog/javascript-dinamik-web-icerigi',
    },
    {
      imgURL: 'https://i.ibb.co/pxym76z/dom.png',
      header: '2. Temel JavaScript Fonksiyonları ve DOM Manipülasyonu',
      paragraph:
        'JavaScript, tarayıcı üzerindeki Document Object Model (DOM) üzerinde güçlü bir kontrol sağlar. JS kullanılarak, sayfanın HTML yapısı üzerinde değişiklik yapabilir ve bu sayede içeriği dinamik olarak güncelleyebiliriz. Örneğin, createElement ve appendChild gibi fonksiyonlarla yeni HTML öğeleri oluşturabilir ve sayfa içine ekleyebiliriz.',
      navigationURL:
        'https://medium.com/@kahil_kubilay/doma-hakim-olma-702de9c0a0d0',
    },
    {
      imgURL: 'https://i.ibb.co/8mfvnf4/ajax.png',
      header: '3. Ajax Teknolojisi ile Asenkron İçerik Yükleme',
      paragraph:
        'JavaScript, Asenkron JavaScript ve XML (Ajax) teknolojisi aracılığıyla sayfayı yenilemeden arka planda veri alışverişi yapma imkanı sunar. Bu sayede, kullanıcılar sayfa içinde gezinirken, arka planda yeni veriler çekilebilir ve sayfa içeriği anlık olarak güncellenebilir.',
      navigationURL:
        'https://medium.com/@cagla.aslantas1/web-geli%C5%9Ftirmede-bir-devrim-ajax-ile-dinamik-i%CC%87%C3%A7erik-y%C3%BCkleme-f59b040be5f9',
    },
    {
      imgURL: 'https://i.ibb.co/6t26v2v/css.jpg',
      header: '4. Görsel İçerik Yönetimi: CSS ve Animasyonlar',
      paragraph:
        'Dinamik içerik oluşturmanın yanı sıra, JavaScript ile CSS stil özelliklerini de değiştirebiliriz. Bu, kullanıcı etkileşimlerini artırmak için önemlidir. Örneğin, bir butona tıklandığında arka plandaki renk değişimi veya bir öğenin yavaşça kaybolması gibi animasyonlar ekleyerek kullanıcı deneyimini zenginleştirebiliriz.',
      navigationURL: 'https://www.kodkampusu.com/css-animasyonlar/',
    },
    {
      imgURL: 'https://i.ibb.co/3NWj2x7/user-experience.jpg',
      header: '5. Güvenlik İpuçları ve Sonuç: Kullanıcı Deneyimini Artırma',
      paragraph:
        'Dinamik içerik oluştururken, güvenlik önlemlerini ihmal etmemek önemlidir. Kullanıcı girişlerini doğrulama, güvenliği sağlama ve tarayıcı uyumluluğunu gözetme gibi konulara dikkat ederek, JavaScript ile dinamik içerik oluşturarak kullanıcı deneyimini önemli ölçüde artırabiliriz. Bu sayede, modern web uygulamalarında daha etkileşimli ve çekici içerikler sunabiliriz.',
      navigationURL:
        'https://www.kukumav.net/blog/web-site-kullanici-deneyimi-iyilestirme/',
    },
  ];
  
  /*
  Adım 1: Aşağıdaki HTML yapısını Card componenti için oluşturacak 'card' isimli bir fonksiyon yazın.
  
      <div class="card">
        <img src="{imgURL}" />
        <h2>{header}</h2>
        <hr />
        <div class="card-content">
          <p>
            {paragraph}
          </p>
          <a href="{navigationURL}">Devamı...</a>
        </div>
      </div>
  */
  
  function card(imgURL, header, paragraph, navigationURL) {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
  
    const img = document.createElement('img');
    img.src = imgURL;
  
    const h2 = document.createElement('h2');
    h2.textContent = header;
  
    const hr = document.createElement('hr');
  
    const contentDiv = document.createElement('div');
    contentDiv.classList.add('card-content');
  
    const p = document.createElement('p');
    p.textContent = paragraph;
  
    const a = document.createElement('a');
    a.href = navigationURL;
    a.textContent = 'Devamı...';
  
    contentDiv.appendChild(p);
    contentDiv.appendChild(a);
  
    cardDiv.appendChild(img);
    cardDiv.appendChild(h2);
    cardDiv.appendChild(hr);
    cardDiv.appendChild(contentDiv);
  
    return cardDiv;
  }
  
  /*
  'card' fonksiyonu 4 argüman alacak: 
  - imgURL: card içinde gösterilecek img URL bilgisi
  - header: card başlığı
  - paragraph: card açıklama metni
  - navigationURL: Devamı linkinin yönlendireceği URL
  
  Adım 2: Bu fonksiyonu kullanarak cardList arrayindeki herbir kayıt için bir tane card componenti oluşturun: 
  
  Adım 3: Oluşturduğunuz card componentlerini div.container içerisine ekleyin
  
  */
  
  cardDataList.forEach((data) => {
    const cardComp = card(
      data.imgURL,
      data.header,
      data.paragraph,
      data.navigationURL
    );
    document.querySelector('div.container').appendChild(cardComp);
  });
  
