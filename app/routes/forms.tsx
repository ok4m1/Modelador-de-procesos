import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Formularios" },
    { name: "description", content: "Gestión de formularios dinámicos" },
  ];
};

export default function Forms() {
  return (
    <div className="flex h-screen items-center justify-center">
      <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
        Bienvenido a la Gestión de Formularios
      </h1>
    </div>
  );
}
