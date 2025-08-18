import { compileData, Data, DataConstructor } from "@/lib/dataUtils";

const docsDataRaw: DataConstructor = {};

const docsData: Data = compileData(docsDataRaw);
export default docsData;
