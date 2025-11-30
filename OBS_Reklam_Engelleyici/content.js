// Aradığımız butonun özelliklerini tam olarak buraya tanımlıyoruz
// Hem "close" class'ı olan hem de "data-dismiss=modal" özelliği olan butonu arıyoruz.
const butonSecicisi = 'button.close[data-dismiss="modal"]';

function reklamiKapat() {
    const kapatButonu = document.querySelector(butonSecicisi);
    
    // Eğer buton sayfada varsa ve görünürse
    if (kapatButonu) {
        console.log("Reklam kapatma butonu bulundu, tıklanıyor...");
        kapatButonu.click(); // <--- SANKİ SEN BASMIŞSIN GİBİ TIKLAR
        return true; // İşlem başarılı
    }
    return false; // Henüz bulunamadı
}

// Sayfa açılır açılmaz hemen bir kere dene
reklamiKapat();

// Reklam sonradan (ajax ile) yükleniyorsa diye bir döngü kuralım.
// Her yarım saniyede bir kontrol etsin.
const zamanlayici = setInterval(() => {
    const sonuc = reklamiKapat();
    
    // Eğer butonu bulup tıkladıysak artık döngüyü durdurabiliriz.
    if (sonuc) {
        clearInterval(zamanlayici);
        console.log("Reklam kapatıldı, görev tamamlandı.");
    }
}, 500);

// Ne olur ne olmaz, 10 saniye sonra aramayı bırak (bilgisayarı yormamak için)
setTimeout(() => {
    clearInterval(zamanlayici);
}, 10000);