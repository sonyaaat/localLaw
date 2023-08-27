import DocDetails from "@/components/DocDetails/DocDetails";
import data from "../../public/data.json";
export default function DocumentDetailsPage({ params: { docId }}){
    const document = data.find((el) => el.id == docId);
return(
    <DocDetails document={document}/>
)
}