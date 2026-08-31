# 🏒 Floorball Manager

**Tvůj tým, tvé taktiky, tvoje vítězství.**

Nativní mobilní/tabletová aplikace pro floorbalové trenéry a správu týmu, vyvíjená pro klub **Florbal Hradec Králové**. Cílem je jednoduchý a přehledný nástroj pro plánování taktiky, správu soupisky a přípravu na zápasy — bez zbytečné administrativy.

> Estetické motto projektu: *„nádherně jednoduché"*

---

## ✨ Klíčové moduly

| Modul | Popis |
| --- | --- |
| 🎯 **Taktická tabule** | Hlavní modul aplikace — kreslení herních situací, formací a taktik pomocí Apple Pencil nebo prstu |
| 📋 **Soupiska** | Správa hráčů týmu (ruční zadávání, role, čísla dresů) |
| 🔍 **Soupeři** | Poznámky a taktiky k soupeřícím týmům |
| 👥 **Přehled sestavy** | Aktivní formace na hřišti + náhradníci |

Klub může spravovat **více týmů** (např. Muži A, Junioři), každý s vlastní soupiskou.

---

## 🛠️ Tech stack

- **React Native** + **Expo** (TypeScript)
- **Expo Router** pro navigaci
- **react-native-skia** — kreslení na taktické tabuli (podpora tlaku a náklonu Apple Pencil)
- **react-native-gesture-handler** — gesta a interakce
- Bez účtů/přihlašování — data uložena **lokálně na zařízení**
- Cloud sync (Google Drive) plánován jako rozšíření po MVP

---

## 📱 Podporované platformy

Primárně vyvíjeno a testováno pro **iPad** (přes Expo Go), s ohledem na použití trenéry přímo na tréninku/zápase.

Jazyky rozhraní: 🇨🇿 čeština / 🇬🇧 angličtina

---

## 🚀 Spuštění projektu

```bash
# Instalace závislostí
npm install

# Spuštění vývojového serveru
npx expo start
```

Naskenuj QR kód aplikací **Expo Go** na iPadu/telefonu pro živý náhled s hot-reloadem.

---

## 📂 Struktura projektu

```src/
├── app/            # Obrazovky a routing (Expo Router)
├── components/     # Znovupoužitelné UI komponenty
├── constants/      # Barvy, motivy, konstanty
└── hooks/          # Vlastní React hooky
```

---

## 🗺️ Roadmapa

- [x] Design domovské obrazovky (light/dark mode)
- [ ] Implementace domovské obrazovky
- [ ] Taktická tabule — kreslení, formace, formáty hřiště
- [ ] Soupiska — CRUD hráčů
- [ ] Soupeři — poznámky a taktiky
- [ ] Nastavení — jazyk, motiv, logo klubu
- [ ] Finální název aplikace
- [ ] Cloud sync (post-MVP)

---

## 📄 Licence

Tento projekt je licencován pod **MIT licencí** — viz [LICENSE](./LICENSE)
