// Sayfanın tamamen yüklendiğinden emin oluyoruz
document.addEventListener('DOMContentLoaded', () => {

    // Gerekli HTML elementlerini seçiyoruz
    const languageToggle = document.getElementById('languageToggle');
    const langText = languageToggle.querySelector('.lang-text');
    
    // Metin (textContent) çevirisi için elementler
    const translatableElements = document.querySelectorAll('[data-tr]');
    
    // YENİ: Placeholder çevirisi için elementler
    const placeholderElements = document.querySelectorAll('[data-tr-placeholder]');

    // Başlangıç dilini 'tr' (Türkçe) olarak ayarlıyoruz
    let currentLang = 'tr';

    // Dil değiştirme butonuna tıklanma olayını dinliyoruz
    languageToggle.addEventListener('click', () => {
        
        // Mevcut dili değiştiriyoruz
        if (currentLang === 'tr') {
            currentLang = 'en';
            langText.textContent = 'TR'; // Butonun üzerindeki yazıyı 'TR' yap
        } else {
            currentLang = 'tr';
            langText.textContent = 'EN'; // Butonun üzerindeki yazıyı 'EN' yap
        }

        // <html> etiketinin lang özelliğini güncelliyoruz (Erişilebilirlik için önemlidir)
        document.documentElement.lang = currentLang;

        // 1. Metin (textContent) çevirilerini yap
        translatableElements.forEach(element => {
            const text = element.dataset[currentLang]; 
            
            if (text) {
                element.textContent = text;
            }
        });
        
        // 2. YENİ: Placeholder çevirilerini yap
        placeholderElements.forEach(element => {
            // 'data-tr-placeholder' veya 'data-en-placeholder' etiketindeki metni al
            const placeholderText = element.dataset[currentLang + 'Placeholder']; 
            
            if (placeholderText) {
                // Elementin placeholder özelliğini yeni dildeki metinle değiştir
                element.placeholder = placeholderText;
            }
        });
    });
});