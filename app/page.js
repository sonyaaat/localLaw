import BtnUp from "@/components/BtnUp/BtnUp";
import Header from "@/components/Header/Header";
import HeaderBox from "@/components/Header/HeaderBox";
import MainPage from "@/components/MainPage/MainPage";

export default function Home() {
  return (
    <main>
      <HeaderBox text={"Харківська обласна рада"}/>
      <BtnUp />
      <MainPage />
    </main>
  );
}
