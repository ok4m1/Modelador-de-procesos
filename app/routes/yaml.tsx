import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";
import yaml from "js-yaml";

export const meta: MetaFunction = () => {
  return [
    { title: "Editor YAML" },
    { name: "description", content: "Editor para archivos YAML" },
  ];
};

export default function YAML() {
  const [yamlContent, setYamlContent] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleYamlChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const content = event.target.value;
    setYamlContent(content);

    try {
      yaml.load(content); // Intenta cargar el YAML para validar
      setError(null); // Si no hay errores, limpia el estado de error
    } catch (e) {
      setError((e as Error).message); // Captura y muestra el error
    }
  };

  return (
    <div className="flex flex-col h-screen items-center justify-center p-4">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
        Editor YAML
      </h1>
      <textarea
        className="w-full h-64 p-2 border rounded-md dark:bg-gray-800 dark:text-gray-100"
        placeholder="Escribe o pega tu contenido YAML aquí..."
        value={yamlContent}
        onChange={handleYamlChange}
      />
      {error ? (
        <p className="text-red-500 mt-2">Error: {error}</p>
      ) : (
        <p className="text-green-500 mt-2">YAML válido</p>
      )}
    </div>
  );
}
