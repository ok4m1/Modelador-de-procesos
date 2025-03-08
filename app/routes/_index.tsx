import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Modelador de Procesos Integrado" },
    { name: "description", content: "Bienvenido al Modelador de Procesos Integrado" },
  ];
};

export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-16">
        <header className="flex flex-col items-center gap-9">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
            Modelador de Procesos Integrado
          </h1>
        </header>
        <nav className="flex flex-col items-center justify-center gap-4 rounded-3xl border border-gray-200 p-6 dark:border-gray-700">
          <p className="leading-6 text-gray-700 dark:text-gray-200">
            Selecciona una opción para comenzar:
          </p>
          <ul className="flex flex-col gap-4">
            <li>
              <Link
                to="/bpmn"
                className="block rounded-lg bg-blue-600 px-4 py-2 text-center text-white hover:bg-blue-700"
              >
                Modelador BPMN
              </Link>
            </li>
            <li>
              <Link
                to="/yaml"
                className="block rounded-lg bg-green-600 px-4 py-2 text-center text-white hover:bg-green-700"
              >
                Editor YAML
              </Link>
            </li>
            <li>
              <Link
                to="/forms"
                className="block rounded-lg bg-purple-600 px-4 py-2 text-center text-white hover:bg-purple-700"
              >
                Formularios
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
