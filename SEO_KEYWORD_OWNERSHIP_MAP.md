# SEO Keyword Ownership Map

Bu dosya, her ana hizmette hangi URL'nin ana sahip oldugunu ve yeni iceriklerin hangi sayfaya otorite tasimasi gerektigini netlestirir.

## Temel Kural

- Genel ticari arama = ana hizmet sayfasi
- Semt aramasi = semt landing page
- Fiyat / karsilastirma / senaryo / rehber = destekleyici icerik
- Yeni semt blogu uretilmez
- Mevcut semt bloglari korunur ama ana para sayfalarinin vitrininde one cikmaz

## Sahiplik Tablosu

| Hizmet | Ana Sorgu Sahibi | Lokal Sorgu Sahibi | Destekleyici Icerik Tipleri | Alias / Not |
| --- | --- | --- | --- | --- |
| Palyaco | `/organizasyonlar/palyaco-kiralama` | `/organizasyonlar/palyaco-kiralama/:district` | fiyat, palyaco mu sihirbaz mi, yas grubu, ev/site/okul senaryolari | net sahip |
| Sihirbaz | `/organizasyonlar/magic-show` | `/organizasyonlar/sihirbaz-kiralama/:district` | fiyat, sahne vs yakin plan, okul/avm/ev kullanimi | `/organizasyonlar/sihirbaz` alias, ana sahip degil |
| Bubble Show | `/organizasyonlar/bubble-show` | `/organizasyonlar/bubble-show-kiralama/:district` | fiyat, sure, mekan uygunlugu, bubble show mu mini disko mu | net sahip |
| Dogum Gunu Organizasyonu | `/organizasyonlar/dogum-gunu-organizasyonu` | `/organizasyonlar/dogum-gunu-organizasyonu/:district` | fiyat, mekan secimi, evde organizasyon, hata/karsilastirma, yas grubu | `/organizasyonlar/full-paket-organizasyon` destekleyici paket URL, ana sahip degil |
| Kostumlu Karakterler | `/organizasyonlar/kostumlu-karakterler` | semt landing yoksa genel sahip olarak kalir | karakter secimi, yas grubu, parti senaryolari, Elsa/Spiderman vb. alt konular | maskot ile karistirilmamali |
| Konsept Dogum Gunu | `/organizasyonlar/konsept-dogum-gunu` | semt landing yoksa genel sahip olarak kalir | tema secimi, pano/masa/pasta, yas grubu, mekan uyumu | alt tema icerikleri ana sayfayi besler |
| Pamuk Seker / Popcorn / Cikolata Selalesi | `/organizasyonlar/pamuk-seker` | ilgili semt landing'ler | fiyat, hangi etkinlikte hangi ikram, paket kombinasyonlari | kategori sahibi olarak bu URL kullanilir |
| Profesyonel Makyaj | `/organizasyonlar/profesyonel-makyaj` | lokal sorgular icin ayni sayfa hedeflenir | gelin/davet/kurumsal cekim, prova, hijyen, kalicilik | net sahip |
| Maskot | `/organizasyonlar/maskot-kiralama` | lokal sorgular icin ayni sayfa hedeflenir | karakter aileleri, performans akisi, etkinlik senaryolari | kostumlu karakterden ayri tutulmali |

## Dogum Gunu Kumesi Ozel Kural

- Ana sahip URL: `/organizasyonlar/dogum-gunu-organizasyonu`
- `/organizasyonlar/full-paket-organizasyon` paket odakli destek sayfasidir
- Yeni dogum gunu bloglari ve rehberleri ana otoriteyi `dogum-gunu-organizasyonu` URL'sine tasimalidir
- Ic linklerde "dogum gunu organizasyonu" anchor'i varsa tercihen ana sahip URL kullanilmalidir

## Ilk Icerik Dalgasi

1. `palyaco kiralama fiyatlari`
2. `sihirbaz gosterisi fiyatlari`
3. `bubble show fiyatlari`
4. `dogum gunu organizasyonu fiyatlari`
5. `evde dogum gunu icin hangi hizmetler uygun`
6. `palyaco mu sihirbaz mi`
7. `bubble show mu mini disko mu`
8. `anaokulu etkinligi icin palyaco mu bubble show mu`
9. `kostumlu karakter secerken nelere dikkat edilmeli`
10. `konsept dogum gunu tema secimi nasil yapilir`
11. `pamuk seker mi popcorn mu`
12. `cikolata selalesi hangi etkinliklere uygun`
13. `gelin makyajinda prova neden onemli`
14. `kurumsal etkinlikte maskot kullanimi`
15. `dogum gunu mekan secimi checklist`

## Uygulama Notu

- Kod tarafinda ana hizmet blog vitrinleri `local` intent bloglari one cikarmayacak sekilde filtrelendi.
- Blog helper'lari alias URL'leri tercih edilen sahip URL'ye normalize edecek sekilde guncellendi.
