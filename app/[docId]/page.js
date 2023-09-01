import DocDetails from "@/components/DocDetails/DocDetails";
import data from "../../public/data.json";
import HeaderBox from "@/components/Header/HeaderBox";
export default function DocumentDetailsPage({ params: { docId }}){
    const document = data.find((el) => el.id == docId);
return(
    <>
   {document &&  <HeaderBox docName={document.name}/>}
    <DocDetails document={document}/>
    </>
)
}