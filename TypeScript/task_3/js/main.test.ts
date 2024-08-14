import { insertRow, deleteRow, updateRow } from "./crud";
import { RowElement, RowID } from "./interface";

describe("CRUD operations", () => {
  test("should insert, update, and delete a row correctly", () => {
    const row: RowElement = { firstName: "Guillaume", lastName: "Salva" };
    const newRowID: RowID = insertRow(row);

    expect(typeof newRowID).toBe("number");

    const updatedRow: RowElement = {
      firstName: "Guillaume",
      lastName: "Salva",
      age: 23,
    };
    updateRow(newRowID, updatedRow);

    expect(updateRow(newRowID, updatedRow)).toBe(newRowID);

    deleteRow(newRowID);

    expect(() => deleteRow(newRowID)).not.toThrow();
  });
});
