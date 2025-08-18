import { compileData, Data, DataConstructor } from "@/lib/dataUtils";

const classesDataRaw: DataConstructor = {};

const classesData: Data = compileData(classesDataRaw);
export default classesData;
