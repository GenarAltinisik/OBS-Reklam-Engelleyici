// content.js - MutationObserver ile Profesyonel Versiyon

console.log("OBS Reklam Engelleyici (Gözcü Modu) devrede...");

// 1. ADIM: Gözlemciyi (Observer) Tanımlıyoruz
const gozlemci = new MutationObserver((mutations) => {
    
    // Sayfada her değişiklik olduğunda burası çalışır
    // Ama merak etme, tarayıcı bunu çok hızlı yapar, yorulmaz.
    
    // HEDEF: Senin bulduğun o özel reklam ID'si
    const reklamGorseli = document.getElementById('btnulusalstajprogrami');

    if (reklamGorseli) {
        // Reklam görselini bulduysak, onun içinde olduğu kutuyu (modal-body) bulalım
        const kapsayiciKutu = reklamGorseli.closest('.modal-body');

        if (kapsayiciKutu) {
            // Kutunun içindeki kapatma (X) butonunu bul
            const kapatButonu = kapsayiciKutu.querySelector('button.close');

            if (kapatButonu) {
                console.log("Reklam yakalandı! Kapatılıyor... 🔨");
                kapatButonu.click();

                // Eğer reklam sadece 1 kere çıkıyorsa, işimiz bitince gözlemciyi durdurabiliriz.
                // Ama OBS içinde sayfa yenilenmeden dolaşılıyorsa durdurmamak daha iyi.
                // gozlemci.disconnect(); // (İsteğe bağlı)
            }
        }
    }
});

// 2. ADIM: Gözcüyü Göreve Başlatıyoruz
// document.body: Sayfanın gövdesini izle
// childList: true -> Yeni bir element eklenirse haber ver
// subtree: true -> İç içe klasörler gibi en derinlerdeki değişiklikleri de izle
gozlemci.observe(document.body, {
    childList: true,
    subtree: true
});

// EKSTRA GÜVENLİK: 
// Bazen script çalışmaya başladığında reklam çoktan yüklenmiş olabilir.
// Gözlemci sadece "yeni" gelenleri görür. Mevcut durumu da bir kere kontrol edelim:
const mevcutReklam = document.getElementById('btnulusalstajprogrami');
if (mevcutReklam) {
    const btn = mevcutReklam.closest('.modal-body')?.querySelector('button.close');
    if (btn) btn.click();
}
