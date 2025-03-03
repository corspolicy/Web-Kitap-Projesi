# Web | Kitap E-Ticaret Projesi

Bu proje, Taşçı Yayıncılık için geliştirilen basit bir e-ticaret platformunun temel yapı taşlarını içermektedir. Kullanıcılar ürünleri sepete ekleyebilir, sepete ürünler eklerken giriş yapabilir veya hesap oluşturabilirler.

## Kullanılan Teknolojiler

- **HTML5**: Yapı ve içerik için.
- **CSS3**: Tasarım ve stil için.
- **JavaScript**: Etkileşimli özellikler ve veritabanı işlemleri için.
- **LocalStorage**: Kullanıcı sepet bilgilerini saklamak için.
- **Font Awesome**: İkonlar için.

## Özellikler

### Navigasyon Çubuğu
- Ana Sayfa, Hakkımızda, Ürünler ve İletişim bölümlerine bağlantılar içerir.
- Üzerine gelindiğinde efektler uygulanır.
- Taşçı yayıncılık logosu bulunur.

### Giriş Bölümü
- Ürünlerin bulunduğu kısımdır.
- Butonların üzerine gelindiğinde efektler uygulanır.
- Sepete ekle butonuna tıklandığında alert mesajı vererek sepete ürün eklenir.

### Footer (Alt Bilgi)
- " 2025 Alp Eray Taşçı Tüm Hakları Saklıdır. " yazısı bulunur.
- Üzerine gelindiğinde efekt gösteren sosyal medya ikonları bulunur.

### Hakkımızda Bölümü
- Web sitesinin amacını anlatan kısa bir tanıtım içerir.
- Neden Biz, Kimiz Biz, Çalışma Şartları gibi başlıklar içerir.

### İletişim Bölümü / Giriş Yap
- E-posta ve şifre girişi gibi alanlar içerir
- Yan seçenek olarak telefon ve google ile giriş bulunur
- Yuvarlatılmış kenarları olan, şık giriş alanları mevcuttur.
- Üzerine gelindiğinde efekt veren bir gönderme düğmesi bulunur.
- Üzerine gelindiğinde efekt veren şifremi unuttum düğmesi bulunur.

### İletişim Bölümü / Kayıt Ol
- Ad, Soyad, E-posta, şifre, şifre onaylama girişi gibi alanlar içerir.
- Yuvarlatılmış kenarları olan, şık giriş alanları mevcuttur.
- Üzerine gelindiğinde efekt veren bir gönderme düğmesi bulunur.

## Proje İçeriği

Proje aşağıdaki dosyaları içerir:

- **HTML Dosyaları**:
  - `index.html`: Ana sayfa, kullanıcıların ürünleri sepete eklemesine olanak tanır.
  - `sepet.html`: Sepet sayfası, sepete eklenen ürünleri görüntüler.
  - `kayıtol.html`: Kullanıcıların sisteme kayıt olmalarını sağlayan sayfa.
  - `girisyap.html`: Kullanıcıların sisteme giriş yapmalarını sağlayan sayfa.

- **CSS Dosyası**:
  - `style.css`: Sayfanın stilini tanımlar, tasarım ve layout için kullanılır.

- **JavaScript Dosyası**:
  - `script.js`: Sepet işlemleri (ürün ekleme, çıkarma) ve kullanıcı etkileşimlerini yönetir. Veriler `localStorage`'a kaydedilir, böylece sayfa yenilendiğinde kaybolmaz.

## Dosya Yapısı
````
├── index.html          
├── sepet.html  
├── kayıtol.html          
├── girisyap.html        
├── style.css              
├── script.js    
└── images/              
    ├── social-icons/ 
    │   ├── google-icon.png
    │   ├── telefon-icon.png
    └── kitap-isimleri/     # Ürün resimleri
        └── camideki-sair.jpg
        └── ....
````

## Nasıl Kullanılır?

### Adım 1: Projeyi klonlayın veya Proje Dosyasını İndirin:

```sh
git clone <repo-url>
````

### Adım 2: Tarayıcıda Açın
Projenin HTML dosyalarını, herhangi bir tarayıcıda açarak kullanabilirsiniz. Örneğin:
- `index.html` dosyasını açarak ana sayfayı görüntüleyebilirsiniz.
- `sepet.html` dosyasına giderek sepete eklenen ürünleri görebilirsiniz.

### Adım 3: Sepete Ürün Ekleyin
Ana sayfada bulunan "Sepete Ekle" butonlarına tıklayarak ürünleri sepete ekleyebilirsiniz. Sepet sayfasında, eklediğiniz ürünler görüntülenir. Ürünleri sepette kaldırabilirsiniz.

### Adım 4: Kullanıcı Girişi ve Kaydı
- Kullanıcılar `kayıtol.html` sayfasından hesap oluşturabilirler.
- `girisyap.html` sayfası üzerinden giriş yapabilirler.

## Gelecek Gelişmeler

1. **Kullanıcı Profili ve Yönetimi**: Kullanıcıların profil bilgilerini güncelleyebileceği bir bölüm eklenebilir.
2. **Sepet Özellikleri**: İndirimler gibi özellikler eklenebilir.
3. **Ürün Arama ve Filtreleme**: Kullanıcılar ürünleri fiyat, kategori ve popülerlik gibi kriterlere göre filtreleyebilirler.
4. **Veritabanı Entegrasyonu**: Veritabanı işlemleri için, ürünler ve kullanıcılar için dinamik yönetim panelleri eklenebilir. Örnek olarak, **MySQL** kullanılabilir.

## Ekran Görüntüleri

**Ana Sayfa (index.html)**

![ana sayfa](https://github.com/user-attachments/assets/97de5799-311f-4b7d-95a3-5e04cf61d394)

**Sepet Sayfası (sepet.html)**

![sepet](https://github.com/user-attachments/assets/31db5360-755f-46c9-a5a6-41bcd01a9d47)


**Kayıt Ol Sayfası (kayıtol.html)**

![kayıt olma](https://github.com/user-attachments/assets/b44d7cd6-903d-42a6-b69e-bf5475ab68df)


**Giriş Yap Sayfası (girisyap.html)**

![giris yap](https://github.com/user-attachments/assets/000a0bba-476a-4078-b03c-c56e5711bee0)

**Hakkımızda Sayfası (hakkımızda.html)**

![hakkımızda](https://github.com/user-attachments/assets/829fdef4-7825-41cb-9e33-2462bfb62435)


## Sosyal Medya Bağlantıları

- [Instagram](https://instagram.com/alperaytasci)
- [GitHub](https://github.com/alpperay)
- [LinkedIn](https://linkedin.com/alperaytasci)
- [Twitter](https://x.com/alperaytasci)

## Geliştirici & Yazar
**Alp Eray Taşçı**

## Lisans

Bu proje **MIT Lisansı** ile lisanslanmıştır. Lisans bilgilerini [LICENSE](LICENSE) dosyasından görebilirsiniz.

## Katkıda Bulunma

Bu projeye katkıda bulunmak isterseniz, aşağıdaki adımları takip edebilirsiniz:

1. Bu projeyi kendi GitHub hesabınıza fork'layın.
2. Değişikliklerinizi yapın ve pull request gönderin.
