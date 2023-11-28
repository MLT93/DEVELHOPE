import * as fs from "node:fs";

/* Función para leer un archivo */
export const readData = async (archivoDeLectura: string) => {
  try {
    // Lectura del archivo
    const contenidoDelArchivo = await fs.promises.readFile(
      archivoDeLectura,
      "utf-8",
    );

    // Fix del buffer
    const fixedBuffer = contenidoDelArchivo.toString();

    // Convertir el JSON en un objeto JavaScript
    const parsedData = JSON.parse(fixedBuffer);

    console.log(parsedData);
    return parsedData;
  } catch (err) {
    if (err instanceof Error) {
      console.error(`Algo salió mal leyendo el archivo: ${err.message}`);
      throw err;
    }
  } finally {
    console.log("El proceso de lectura ha finalizado");
  }
};

/* Función para escribir en el archivo */
export const writeData = async (
  rutaDelArchivo: string,
  datosAEscribir: unknown,
) => {
  try {
    // Convertir los datos a formato JSON
    const stringifyData = JSON.stringify(datosAEscribir, null, 2);

    // Escribir en el archivo de manera asíncrona
    await fs.promises.writeFile(rutaDelArchivo, stringifyData, "utf-8");

    console.log(`Datos escritos en: ${rutaDelArchivo}`);
  } catch (err) {
    if (err instanceof Error)
      console.error(`Algo salió mal escribiendo el archivo: ${err.message}`);
    throw err;
  } finally {
    console.log("El proceso de escritura ha finalizado");
  }
};
