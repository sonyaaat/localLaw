import BtnUp from "@/components/BtnUp/BtnUp";
import HeaderBox from "@/components/Header/HeaderBox";
import MainPage from "@/components/MainPage/MainPage";

export default function Home() {
  return (
    <main>
      <HeaderBox
        text={
          "Система створення, публікації, пошуку та аналізу актів органів місцевого самоврядування"
        }
      />

      <MainPage />
    </main>
  );
}
